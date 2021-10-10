import React, {useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Job from "./Job";
import { useLocation } from 'react-router';
import axios from "axios";
import PostJob from './PostJob';
import Candidate from './Candidate';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactTable from "react-table";  
const AWS = require("aws-sdk");




    const ResumeUpload = props => {

        const [resume,setResume]=useState('')
        const [userId,setUserId]=useState('')
        const [file,setFile]=useState(null)
        const location = useLocation();



        const s3 = new AWS.S3({
            accessKeyId: 'AKIA3CSDG2AGT4PHNUVF',
            secretAccessKey: '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',
          });

        useEffect(() => {
            console.log(location.state.userId)
            setUserId(location.state.userId)
        }, []);
    

      const headers={
        'allowedHeaders': ['Content-Type'], // headers that React is sending to the API
        'exposedHeaders': ['Content-Type'], // headers that you are sending back to React
        'origin': '*',
        'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
        'preflightContinue': false
      }
     const uploadResume=()=>{
         console.log(file)
         var base64data = new Buffer(file.arrayBuffer, 'binary');
        var params = {
            Bucket: "resumes-lti",
            Key:
              "resumesUpload/" +
              Math.random().toString(36).substring(7) +
              file.name,
            Body: base64data,
            ACL: "public-read",
          };
          s3.upload(params, function (perr, pres) {
            if (perr) {
              console.log("Error uploading data: ", perr);
            } else {
                axios.post('http://localhost:8090/uploadresume',{
                    userId:userId,
                    resume:pres.location
                } )
                .then(response => {
                    if(response.data==='Resume Uploaded')
                       toast.success("Resume Uploaded Successfully")
                });
            }
          });
     }


    return (
        <div>
     <input type='file' id="uploadInput" onChange={(event)=>setFile(event.target.files[0])}/>
     <button onClick={()=>uploadResume()}>Upload Resume</button>
        </div>
    );
  };


  export default ResumeUpload;