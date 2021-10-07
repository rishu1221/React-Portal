import React, {useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Job from "./Job";
import { useLocation } from 'react-router';
import axios from "axios";
import PostJob from './PostJob';

    const DisplayJobOpening = props => {

        const [allJobs, setJobs] = useState([]);
        const location = useLocation();

        const removeDeletedJob = (jobIdToDelete) => {
            setJobs(allJobs.filter((oneJob) => oneJob.id !== jobIdToDelete));
        };

        useEffect(() => {
            document.title="Job Openings | Job Portal";
            console.log(location.state.role+"role")
            getAllJobOpeningsFromServer();
        }, []);
    
        //Function to call the server (Here spring boot back-end server).
        const getAllJobOpeningsFromServer = () => {
            axios.get('http://localhost:8090/getjobs').then(
                (serverData) => {
                    console.log(serverData.data);
                    setJobs(serverData.data);
                },
                (error) => {
                    console.log(error);
                    toast.error("Something went wrong");
                }
            )
        };

    return (
        <div>
            {location.state.role=='poster'?<PostJob/>: <div><h2 className="text-white">Companies hiring right now</h2>
            <br/>
            {allJobs.length > 0 ? allJobs.map((item)  =>  <Job userId={location.state.id} singleJob={item} updateArray={removeDeletedJob} />) : <div className="text-white">No Job Openings</div>}
            <ToastContainer/></div>}
        </div>
    );
  };

  export default DisplayJobOpening;