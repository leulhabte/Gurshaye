import React, {Component} from 'react';
import {Jumbotron, Button} from 'react-bootstrap';

class Home extends Component{
    render() {
        return (
            <Jumbotron>
                <h2>Welcome to Gurshaye Betting Tips</h2>
                <Button variant="outline-warning" onClick={this.props.handleSession}>Get started</Button>
            </Jumbotron>
        );
    }
}

export default Home;