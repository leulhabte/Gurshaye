import React, {Component} from 'react';
import {Card, Table} from 'react-bootstrap';
import Loadings from './Loading';
import axios from 'axios';

class TipTable extends Component{

    constructor(props){
        super(props);
        this.state = {apiData:[], loading: false};
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
        return (
            <div className="mt-5">
                {
                    this.state.loading ? 
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
                                {
                                    this.state.apiData.map(data=>
                                        <tr key={data._id}>
                                            <td>{data.time}</td>
                                            <td>{data.league}</td>
                                            <td>{data.team1} vs {data.team2}</td>
                                            <td>{data.tip}</td>
                                        </tr>
                                        )
                                }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card> : <Loadings/>
                }
            </div>
        );
    }
}

export default TipTable;