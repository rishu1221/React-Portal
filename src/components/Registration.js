import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useState } from "react";
import axios from "axios";
export const Register=()=> {
  
  const history = useHistory();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role,setRole]=useState('poster');
 const onRegister=()=> {

  
    
   
    axios({
      method: "post",
      url: "http://localhost:8090/register",
      data: {
        username:username,
        password:password,
        role:role
      }
    })
      .then(function (response) {
        //handle success
        console.log(response.data.username+"   "+username)
        if(response.data.result=='user created')
           history.push(`/`);
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
        <div className="header">Register</div>
        <div className="content">
         
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="email" placeholder="email" value={username} onChange={(event)=>setUsername(event.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" value={password} onChange={(event)=>setPassword(event.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <input type="text" name="role" placeholder="role" value={role} onChange={(event)=>setRole(event.target.value)} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={onRegister}>
            Register
          </button>
          <div>OR</div>
          <Link className="list-group-item list-group-item-action text-white" tag="a" to="/" style={{ backgroundColor: '#2f4f4f', borderColor: '#ffffff'}} action>Login</Link>
        </div>
      </div>
    );
  
}