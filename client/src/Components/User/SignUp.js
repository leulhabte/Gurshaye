import React, {Component} from 'react';
import Heading from '../Partials/Heading';
import axios from 'axios';
import {Form, Col, Row, Container, Button} from 'react-bootstrap';

class SignUp extends Component{

    render() {
        return (
            <div className="Main">
              <Heading title="Sign Up"/> 
              <Page history = {this.props.history}/>
            </div>
        );
    }
}

class Page extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = event =>{
        event.preventDefault();
        const user = {
            name: event.target.Name.value,
            pwd: event.target.Pwd.value,
            rpwd: event.target.Rpwd.value,
        }

        axios.post('http://localhost:8000/signup', user)
        .then(res=>{
            if(res.data.type === 0){
                for(var x in res.data.data){
                    console.log(res.data.data[x]);
                    alert(res.data.data[x]);
                }
            }
            if(res.data.type === 2){
                alert("User already Exsist Operation Canceled");
            }
            if(res.data.type === 1){
                this.props.history.push('/login');
            }
        });
    }

    render() {
        return (
            <div>
                <Form className="mt-5" onSubmit={this.handleSubmit}>
                    <Container fluid>
                        <Row>
                            <Col xs={8}>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="Name" type="text"></Form.Control>
                            </Form.Group>                               
                            </Col>
                        </Row>
                        <Row>
                        <Col xs={8}>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="Pwd" type="password"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Re-Type Password</Form.Label>
                            <Form.Control name="Rpwd" type="password"></Form.Control>
                        </Form.Group>
                        <Button type="submit" className="btn btn-block mt-4">SignUp</Button>                                
                        </Col>
                        </Row>
                    </Container>
                </Form>
            </div>
        );
    }
}

export default SignUp;