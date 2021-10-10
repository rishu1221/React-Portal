import React, {useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Job from "./Job";
import { useLocation } from 'react-router';
import axios from "axios";
import PostJob from './PostJob';

    const DisplayJobOpening = props => {

        const [allJobs, setJobs] = useState([]);
        const location = useLocation();
        const [search, setsearch] = useState();
        const [tag, settag] = useState();

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
            axios.get('http://localhost:8090/getjobs/'+location.state.id).then(
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
        async function searchreq(e) { //search box
            e.preventDefault();
            try {
              const data = (
                await axios.get(`http://localhost:8090/job/search/${tag}/${search}`)
              ).data;
        
              setJobs(data);
              console.log(data);
            } catch (err) {}
          }

    return (
        <div>
            {location.state.role=='poster'?<PostJob/>: <div><input
            type="text"
            placeholder="Search by Job Role"
            style={{ position: "relative", top: "2px" }}
            onChange={(e) => setsearch(e.target.value)}
          />

          {search && (
            <>
              <select
                name="tag"
                id="tag"
                onChange={(e) => settag(e.target.value)}
              >
                <option value="company">By Company name</option>
                <option value="skills">By Skills</option>
                <option value="role">Role</option>
              </select>
              {tag && (
                <button
                  type="submit"
                  className="secondary_blue dlevel1"
                  onClick={(e) => searchreq(e)}
                >
                  Go
                </button>
              )}
            </>
          )}<h2 className="text-white">Companies hiring right now</h2>
            <br/>
            {allJobs.length > 0 ? allJobs.map((item)  =>  <Job userId={location.state.id} singleJob={item} updateArray={getAllJobOpeningsFromServer} />) : <div className="text-white">No Job Openings</div>}
            <ToastContainer/></div>}
        </div>
    );
  };

  export default DisplayJobOpening;