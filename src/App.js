import './App.css';

import { Button, Col, Container, Row} from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import Home from "./components/Home";
import DisplayJobOpening from "./components/DisplayJobOpening";
import PostJob from "./components/PostJob";
import Menu from "./components/Menu";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Logo from './components/Logo';
import { Login } from './components/Login';
import { Register } from './components/Registration';
import { useState } from 'react';
import DisplayCandidateJobs from './components/Candidates';
import AllCandidateJobs from './components/AllCandidatesJobs';
import PasswordChange from './components/updatePassword';
import ResumeUpload from './components/uploadResume';
import DisplayJobBlocked from './components/DisplayBlockedJobs';
function App() {
  const [islogin,setFlag]=useState(true)
  const [userId,setuserid]=useState('');
  const [role,setRole]=useState('')


  const handleLoginData=(data)=>{
   setRole(data.role)
   setuserid(data.id)
   console.log(data.id)
   setFlag(false)
  }

  
  return (
    <div className="App" style={{backgroundColor: "black"}}>
      <Router>
        <Container>
          <Home/>
          <Row>
            <Col md={2}>
              {!islogin&&<Menu role={role} userId={userId}/>}
            </Col>
            
            <Col md={10}>
            {islogin&&<Login loginCallback={handleLoginData}/>}
              <Route path='/login' component={Login} exact/>
              <Route path='/register' component={Register} exact/>
              <Route path="/job-openings" component={DisplayJobOpening} exact />
              <Route path="/post-job" component={PostJob} exact />
              <Route path='/logout' component={Login} exact/>
              <Route path='/candidate' component={DisplayCandidateJobs} exact/>
              <Route path='/allcandi' component={AllCandidateJobs} exact/>
              <Route path='/updatepass' component={PasswordChange} exact/>
              <Route path='/resume' component={ResumeUpload} exact/>
              <Route path='/blocked' component={DisplayJobBlocked} exact/>
            </Col>
            
            
            
            {/* <Col><Button onClick={()=>setFlag(false)}>Register</Button>
            <Button onClick={()=>setFlag(true)}>Login</Button>
            </Col> */}
          </Row>
        </Container>
        <ToastContainer />
      </Router>
    </div>
  );
}


export default App;