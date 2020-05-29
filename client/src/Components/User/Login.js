import React from 'react';
import Heading from '../Partials/Heading';
import axios from 'axios';
import {Form, Col, Row, Container, Button} from 'react-bootstrap';

const LogIn = props =>{

    const handleLog = event =>{
        event.preventDefault();
        const user = {
            name: event.target.Name.value,
            password: event.target.Pwd.value
        }

        axios.post('http://localhost:8000/login',user)
        .then(res=>{
            if(res.data.type === 0){
                alert(res.data.message);
            }else if(res.data.type === 1){
                props.handleLogin(res.data);
            }
        });
    }
        return (
            <div className="Main">
                <Heading title="LogIn"/>
                <Form className="mt-5" onSubmit={handleLog}>
                    <Container>
                        <Row>
                            <Col xs={6}>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="Name" type="text"></Form.Control>
                            </Form.Group>                               
                            </Col>
                        </Row>
                        <Row>
                        <Col xs={6}>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="Pwd" type="password"></Form.Control>
                        </Form.Group>
                        <Button type="submit" className="btn btn-block mt-4">Log in</Button>                                
                        </Col>
                        </Row>
                    </Container>
                </Form>
            </div>
        );

}

export default LogIn;