import { Col, Container, Row} from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import Home from "./Home";
import Menu from "./Menu";
import { useLocation } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { useEffect } from 'react';
const HomePage=()=> {
  
    
    // const {role}=(props.location && props.location.state)||{};



  return (
    
    <div className="App" style={{backgroundColor: "black"}}>
      <Router>
        <Container>
          <Home/>
          <Row>
            <Col md={2}>
              <Menu/>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Router>
    </div>
  );
}


export default HomePage;