import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom'
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const Login=(props)=> {
 
 
  const history = useHistory();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 const onLogin=()=> {

  
    
   
    axios({
      method: "post",
      url: "http://localhost:8090/login",
      data: {
        username:username,
        password:password
      }
    })
      .then(function (response) {
        //handle success
        console.log(response.data.username+"   "+username)
        if(response.data.username==username)
        {
          console.log(response.data.id)
          props.loginCallback({ role: response.data.role,id:response.data.id }) 
          history.push({
            pathname: '/job-openings',
            state: { role: response.data.role,id:response.data.id }
        });}
        else
           history.push('/register')
          
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    
  }

  
    return (
      <div className="base-container">
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            {/* <img src={loginImg} /> */}
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={(event)=>setUsername(event.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={(event)=>setPassword(event.target.value)} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={onLogin}>
            Login
          </button>
          <div>OR</div>
          <Link className="list-group-item list-group-item-action text-white" tag="a" to="/register" style={{ backgroundColor: '#2f4f4f', borderColor: '#ffffff'}} action>Register</Link>
        </div>

      </div>
    );

}

