import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom'

export const Login=()=> {
 
 
  const history = useHistory();
 const onLogin=()=> {
    
    history.push(`/register`);
    
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
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
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

