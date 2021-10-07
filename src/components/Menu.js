import React from 'react'
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';
import { useEffect } from 'react';
import { useState } from 'react';
const Menu=(props)=>{

    const [role,setRole]=useState('');
    useEffect(() => {
        console.log(props.role)
        console.log(props.userId)
        setRole(props.role)
      });
    
    return (
        <div>
            <ListGroup>
            <Link className="list-group-item list-group-item-action text-white" tag="a" to="/" style={{ backgroundColor: '#2f4f4f', borderColor: '#ffffff'}} action>Home</Link>
            {role==="poster"&&<Link className="list-group-item list-group-item-action text-white" tag="a" to="/post-job" style={{ backgroundColor: '#2f4f4f', borderColor: '#ffffff'}} action>Post a Job</Link>}
            {role==='candidate'&&<Link className="list-group-item list-group-item-action text-white" tag="a" to="/job-openings" style={{ backgroundColor: '#2f4f4f', borderColor: '#ffffff'}} action>Job openings</Link>}
            {role==='candidate'&&<Link className="list-group-item list-group-item-action text-white" tag="a" to={{
    pathname: "/candidate",
    state: {userId:props.userId} // your data array of objects
  }} style={{ backgroundColor: '#2f4f4f', borderColor: '#ffffff'}} action>Applied Jobs</Link>}
            {role==='poster'&&<Link className="list-group-item list-group-item-action text-white" tag="a" to={{
    pathname: "/allcandi",
    state: {userId:props.userId} // your data array of objects
  }} style={{ backgroundColor: '#2f4f4f', borderColor: '#ffffff'}} action>See Candidates</Link>}
            <Link className="list-group-item list-group-item-action text-white" tag="a" to="/" style={{ backgroundColor: '#2f4f4f', borderColor: '#ffffff'}} action>log out</Link>

            </ListGroup>
        </div>
        
    )
}

export default Menu;