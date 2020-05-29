import React, {Component} from 'react';
import axios from 'axios';
import {Form, Container, Col, Row, Button} from 'react-bootstrap';

class EditForm extends Component{


    render() {

        let rediretPage = ()=>{
            window.location.reload(false);
        }

        let handlePost = event =>{
            event.preventDefault();

            let tipData = {
                league: event.target.League.value,
                team1: event.target.Team1.value,
                team2: event.target.Team2.value,
                time: event.target.Time.value,
                date: event.target.Date.value,
                tip: event.target.Tips.value
            }            
            
            axios.put(`http://localhost:8000/edit/${this.props.data._id}`, tipData)
            .then(res=>{
                rediretPage();
                console.log(res);
            })
        }

        return (
            <div>
              <Form className="mt-5 Form" onSubmit={handlePost}>
                <Container fluid>
                    <Row>
                        <Col md={5}>
                            <Form.Group>
                                <Form.Label>League</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.data.league} name="League"/>
                            </Form.Group>
                        </Col>
                        <Col md={5}>
                            <Form.Group>
                                <Form.Label>Tips</Form.Label>
                                <Form.Control as="select" name="Tips">
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
                                <Form.Control type="text"  defaultValue={this.props.data.team1} name="Team1"/>
                            </Form.Group>
                        </Col>
                        <Col md={5}>
                            <Form.Group>
                                <Form.Label>Team 2</Form.Label>
                                <Form.Control type="text"  defaultValue={this.props.data.team2} name="Team2"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={5}>
                            <Form.Group>
                                <Form.Label>Time</Form.Label>
                                <Form.Control type="time"  defaultValue={this.props.data.time} name="Time"/>
                            </Form.Group>
                        </Col>
                        <Col md={5}>
                            <Form.Group>
                                <Form.Label>Date</Form.Label>
                                    <Form.Control type="date"  defaultValue={this.props.data.date} name="Date"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={10}>
                            <Button className="btn btn-block" type="submit">Update data</Button>
                        </Col>
                    </Row>
                </Container>
              </Form>  
            </div>
        );
    }
}

export default EditForm;