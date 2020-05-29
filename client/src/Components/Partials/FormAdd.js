import React, {Component} from 'react';
import axios from 'axios';
import {Form, Container, Col, Row, Button, InputGroup} from 'react-bootstrap';

class FormFill extends Component{

    constructor(prop){
        super();
        this.state= {
            league: "",
            team1: "",
            team2: "",
            time: "",
            date: "",
            tip: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = event=>{
        event.preventDefault();
        let tipData = {
            league: event.target.League.value,
            team1: event.target.Team1.value,
            team2: event.target.Team2.value,
            time: event.target.Time.value,
            date: event.target.Date.value,
            tip: event.target.Tips.value
        }
        axios.post('http://localhost:8000/save', tipData)
        .then(res=>{
            console.log(res);
        });
        alert(tipData);
        console.log(tipData);
    }

    render() {
        return (
            <div>
              <Form className="mt-5 Form" onSubmit={this.handleSubmit}>
                <Container fluid>
                    <Row>
                        <Col md={5}>
                            <Form.Group>
                                <Form.Label>League</Form.Label>
                                <Form.Control type="text" size="lg" name="League"/>
                            </Form.Group>
                        </Col>
                        <Col md={5}>
                            <Form.Group>
                                <Form.Label>Tips</Form.Label>
                                <Form.Control as="select" size="lg" name="Tips">
                                    <option defaultValue>1</option>
                                    <option>1x</option>
                                    <option>2</option>
                                    <option>2x</option>
                                    <option>Under 2.5</option>
                                    <option>Above 2.5</option>
                                    <option>BTTS</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={5}>
                            <Form.Group>
                                <Form.Label>Team 1</Form.Label>
                                <Form.Control type="text" size="lg" name="Team1"/>
                            </Form.Group>
                        </Col>
                        <Col md={5}>
                            <Form.Group>
                                <Form.Label>Team 2</Form.Label>
                                <Form.Control type="text" size="lg" name="Team2"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={5}>
                            <Form.Group>
                                <Form.Label>Time</Form.Label>
                                <Form.Control type="time" size="lg" name="Time"/>
                            </Form.Group>
                        </Col>
                        <Col md={5}>
                            <Form.Group>
                                <Form.Label>Date</Form.Label>
                                <InputGroup>
                                    <InputGroup.Append>
                                        <InputGroup.Text><span className="glyphicon glyphicon-calendar"></span></InputGroup.Text>
                                    </InputGroup.Append>
                                    <Form.Control type="date" size="lg" id="datetimepicker1" name="Date"/>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={10}>
                            <Button className="btn btn-block" size="lg" type="submit">Add Tip</Button>
                        </Col>
                    </Row>
                </Container>
              </Form>  
            </div>
        );
    }
}

export default FormFill;