import React, {Component} from 'react';
import {Card, Table} from 'react-bootstrap';

class TipTable extends Component{
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
                </Card>
            </div>
        );
    }
}

export default TipTable;