import React, {useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Job from "./Job";
import { useLocation } from 'react-router';
import axios from "axios";
import PostJob from './PostJob';

    const DisplayJobBlocked = props => {

        const [blockedJobs, setJobs] = useState([]);
        const location = useLocation();

      

        useEffect(() => {
            document.title="Job Openings | Job Portal";
            console.log(location.state.role+"role")
            getAllJobBlockedFromServer();
        }, []);
    
        //Function to call the server (Here spring boot back-end server).
        const getAllJobBlockedFromServer = () => {
            axios.get('http://localhost:8090/getBlocked/'+location.state.userId).then(
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
           <div><h2 className="text-white">Blocked Jobs</h2>
            <br/>
            {blockedJobs.length > 0 ? blockedJobs.map((item)  =>  <Job userId={location.state.userId} singleJob={item} />) : <div className="text-white">No Blocked Jobs Openings</div>}
            <ToastContainer/></div>
        </div>
    );
  };

  export default DisplayJobBlocked;