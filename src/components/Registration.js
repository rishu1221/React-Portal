import React from "react";
import { Link } from "react-router-dom";
export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
         
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
          <div>OR</div>
          <Link className="list-group-item list-group-item-action text-white" tag="a" to="/" style={{ backgroundColor: '#2f4f4f', borderColor: '#ffffff'}} action>Login</Link>
        </div>
      </div>
    );
  }
}