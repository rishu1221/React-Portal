import React, {useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Job from "./Job";
import { useLocation } from 'react-router';
import axios from "axios";
import PostJob from './PostJob';
import Candidate from './Candidate';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactTable from "react-table";  


    const PasswordChange = props => {

        const [password1,setPassword1]=useState('')
        const [password2,setPassword2]=useState('')
        const [userId,setUserId]=useState('')
        const location = useLocation();

        useEffect(() => {
            console.log(location.state.userId)
            setUserId(location.state.userId)
        }, []);
    


        const updatePassword = () => {
            console.log(userId)
            console.log(password1)

           if(password1==password2){
            const body={
                'userId':userId,
                'password':password1
            }
            axios.post('http://localhost:8090/updatepass/',body).then(
                (serverData) => {
                    console.log(serverData.data);
                    if(serverData.data==='Update Success')
                       toast.success("Password Updated Successfully")
                },
                (error) => {
                    console.log(error);
                    toast.error("Something went wrong");
                }
            )}
            else
            toast.error("Please enter same password")
        };
    return (
        <div>
<label for="pwd">New Password:</label>
<input value={password1} type="password" id="pwd" name="pwd" onChange={(event)=>{setPassword1(event.target.value)}}></input>
<label for="pwd">Confirm Password:</label>
<input value={password2} type="password" id="pwd" name="pwd" onChange={(event)=>{setPassword2(event.target.value)}}></input>
<button onClick={()=>updatePassword()}>Update</button>
        </div>
    );
  };


  export default PasswordChange;