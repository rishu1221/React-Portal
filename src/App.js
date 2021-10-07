import './App.css';

import { Col, Container, Row} from 'reactstrap';
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
function App() {

  return (
    <div className="App" style={{backgroundColor: "black"}}>
      <Router>
        <Container>
          <Home/>
          <Row>
            <Col md={2}>
              <Menu/>
            </Col>

            <Col md={10}>
              <Route path="/" component={Login} exact />
              <Route path='/register' component={Register} exact/>
              <Route path="/job-openings" component={DisplayJobOpening} exact />
              <Route path="/post-job" component={PostJob} exact />
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Router>
    </div>
  );
}


export default App;