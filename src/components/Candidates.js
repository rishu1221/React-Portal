import React, {useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Job from "./Job";
import { useLocation } from 'react-router';
import axios from "axios";
import PostJob from './PostJob';
import Candidate from './Candidate';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactTable from "react-table";  


    const DisplayCandidateJobs = props => {

        const [candidates, setCandidates] = useState([]);
        const [userId,setUserId]=useState('')
        const location = useLocation();

        useEffect(() => {
            document.title="Job Openings | Job Portal";
            console.log(location.state.role+"role")
            console.log(location.state.userId)
            setUserId(location.state.userId)
            getCandidatesFromServer(location.state.userId);
        }, []);
    
        //Function to call the server (Here spring boot back-end server).
        const getCandidatesFromServer = (userId) => {
            console.log(userId)
            const body={
                'userId':userId
            }
            axios.get('http://localhost:8090/getCandidateJob/'+userId).then(
                (serverData) => {
                    console.log(serverData.data);
                    setCandidates(serverData.data);
                    console.log(candidates)
                },
                (error) => {
                    console.log(error);
                    toast.error("Something went wrong");
                }
            )
        };
        const columns = [{  
            Header: 'Role',  
            accessor: 'role'  
           },{  
           Header: 'Company',  
           accessor: 'company'  
           },
           {  
            Header: 'Salary',  
            accessor: 'salary'  
            },
            {  
                Header: 'Description',  
                accessor: 'description'  
                }
        ]  
    return (
        <div>
         <table>
      {candidates.map(row => (
        <tr key={row.id}>
          <td>{row.role}</td>
          <td>{row.company}</td>
        </tr>
      ))}
      </table>
        </div>
    );
  };


  export default DisplayCandidateJobs;