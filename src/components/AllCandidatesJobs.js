import "bootstrap/dist/css/bootstrap.min.css";
import SmartTable from "react-next-table";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import { Button } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";

  const  AllCandidateJobs=(props)=> {
    
    const [cjobs,setcjobs]=useState([])
    const [companies,setCompanies]=useState({})
    const [button,setbutton]=useState(false)
    const location = useLocation();
    

    useEffect(() => {
      getAllCandidates();
  }, []);

  //Function to call the server (Here spring boot back-end server).
  const getAllCandidates = () => {
    setbutton(false)
      axios.get('http://localhost:8090/all').then(
          (serverData) => {
              console.log(serverData.data);
              setcjobs(serverData.data);
              serverData.data.map((d)=>{
                fetchCompanies(d.id)
              })
              setbutton(true)
          },
          (error) => {
              console.log(error);
              toast.error("Something went wrong");
          }
      )
  };

  const getValue=(userId)=>
  {
    console.log(companies[userId])
    return companies[userId]
  }

  const fetchCompanies=(userId)=>{
    axios.get('http://localhost:8090/fetchApplied/'+userId).then(
      (serverData)=>{
        const str= Array.prototype.map.call(serverData.data, s => s.company).toString();
        const newMap=companies;
        newMap[userId]=str
        console.log(newMap[userId])
        setCompanies(newMap)
      }
    )
  }

  


    return (
      <div>
         <table>
      {cjobs.map(row => (
        <tr key={row.id}>
          <td>{row.username}</td>
          {/* <td><Button onClick={()=>fetchCompanies(row.id)}>See Companies</Button></td> */}
          <td>{getValue(row.id)}</td>
        </tr>
      ))}
      </table>
        </div>
    );
  }

  export default AllCandidateJobs