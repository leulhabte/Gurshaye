import React, {Component} from 'react';
import {Form, Container, Col, Row, Button} from 'react-bootstrap';

class FormFill extends Component{
    render() {
        return (
            <div>
              <Form className="mt-5 Form">
                <Container fluid>
                    <Row>
                        <Col md={5}>
                            <Form.Group>
                                <Form.Label>League</Form.Label>
                                <Form.Control type="text" size="lg"/>
                            </Form.Group>
                        </Col>
                        <Col md={5}>
                            <Form.Group>
                                <Form.Label>Tips</Form.Label>
                                <Form.Control as="select" size="lg">
                                    <option>1</option>
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
                                <Form.Control type="text" size="lg"/>
                            </Form.Group>
                        </Col>
                        <Col md={5}>
                            <Form.Group>
                                <Form.Label>Team 2</Form.Label>
                                <Form.Control type="text" size="lg"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={5}>
                            <Form.Group>
                                <Form.Label>Time</Form.Label>
                                <Form.Control type="text" size="lg"/>
                            </Form.Group>
                        </Col>
                        <Col md={5}>
                            <Form.Group>
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="text" size="lg"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={10}>
                            <Button className="btn btn-block" size="lg">Add Tip</Button>
                        </Col>
                    </Row>
                </Container>



              </Form>  
            </div>
        );
    }
}

export default FormFill;