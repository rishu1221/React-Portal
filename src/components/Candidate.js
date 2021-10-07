import React, {Container, CardTitle, Card, CardText, Button} from 'reactstrap';
import axios from 'axios';
import base_url from '../api/springbootapi';
import {toast} from 'react-toastify'

const Candidate = ( {singleCandidate} ) => {
    
    

    

    

    return (
        <div>
            <Container>
                <Card body style={{ backgroundColor: '#2f4f4f', borderColor: '#ffffff'}}>
                    <CardTitle className="text-white" tag="h5">{singleCandidate.company}</CardTitle>
                    <CardText className="text-white">Role : {singleCandidate.role}</CardText>
                    <CardText className="text-white">Skills Required : {singleCandidate.salary}</CardText>
                    <CardText className="text-white">Job Description : {singleCandidate.description}</CardText>
                    <CardText className="text-white">Level : {singleCandidate.level}</CardText>
                    <CardText className="text-white">Expiry : {singleCandidate.expiry}</CardText>
                    <CardText className="text-white">Skills : {singleCandidate.skills}</CardText>
                </Card>
                <br/><br/>
            </Container>
        </div>

    );
};

export default Candidate;