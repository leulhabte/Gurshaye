import React, {Component} from 'react';
import {Card, Table, Button, Container, Row, Col} from 'react-bootstrap';

class ManageTable extends Component{
    render() {
        return (
            <div className="mt-5">
                <Card>
                    <Card.Header>
                        <div className="d-flex justify-content-center">Date</div>
                    </Card.Header>
                    <Card.Body>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>League</th>
                                    <th>Match</th>
                                    <th>Tip</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>19:30</td>
                                    <td>GER</td>
                                    <td>arsenal vs manchester united</td>
                                    <td>BTTS</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                    <Card.Footer>
                        <Container fluid>
                            <Row>
                                <Col><Button className="btn btn-block">Edit</Button></Col>
                                <Col><Button className="btn btn-block">Remove</Button></Col>
                            </Row>
                        </Container>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}

export default ManageTable;