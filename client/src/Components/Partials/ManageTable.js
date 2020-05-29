import React, {Component} from 'react';
import EditTips from './EditTips';
import Loadings from './Loading';
import axios from 'axios';
import Alert from './Alert';
import {Card, Table, Button, ButtonToolbar, Container, Row, Col} from 'react-bootstrap';

class ManageTable extends Component{

    constructor(props){
        super(props);
        this.state = {apiData:[], loading: false, modal: false, alertModal: false, dataId:'', data:''};
    }

    callApi(){
        axios.get('http://localhost:8000/posts')
        .then(res=>{
            this.setState({apiData: res.data.data},()=>{console.log(res)});
            this.setState({loading: true});
        });
    }

    componentDidMount(){
        this.callApi();
    }    

    render() {
        let hideModal = ()=>{this.setState({modal: false})};
        let hideAlertModal = ()=>{this.setState({alertModal: false})};
        return (
            <div className="mt-5">
                {
                    this.state.loading ? <Card>
                    <Card.Header>
                        <div className="d-flex justify-content-center">Datas</div>
                    </Card.Header>
                    <Card.Body>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Date</th>
                                    <th>League</th>
                                    <th>Match</th>
                                    <th>Tip</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {
                                        this.state.apiData.map(data=>
                                            <tr key={data._id}>
                                            <td>{data.time}</td>
                                            <td>{data.date}</td>
                                            <td>{data.league}</td>
                                            <td>{data.team1} vs {data.team2}</td>
                                            <td>{data.tip}</td>
                                            <td>
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <ButtonToolbar>
                                                            <Button className="btn btn-block" onClick={()=>{this.setState({modal: true, data: data})}}>Edit</Button>
                                                            <EditTips show={this.state.modal} onHide={hideModal} data={this.state.data}/>
                                                        </ButtonToolbar>
                                                    </Col>
                                                
                                                    <Col>
                                                    <Button className="btn btn-block" variant="outline-danger" onClick={()=>{this.setState({alertModal: true, dataId: data._id})}}>Remove</Button>
                                                    <Alert show={this.state.alertModal} onHide={hideAlertModal} id={this.state.dataId} title="Alert" message="Do you want to remove this Tip?"/>
                                                    </Col>
                                                </Row>
                                            </Container>                                        
                                            </td>
                                            </tr>
                                        ) 
                                    }
                            </tbody>
                        </Table>
                    </Card.Body>
                    <Card.Footer>
                        <p className="mx-auto">Provided to you by Gurshaye</p>
                    </Card.Footer>
                </Card> : <Loadings/>
                }
                
            </div>
        );
    }
}

export default ManageTable;