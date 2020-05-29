import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';

class About extends Component{
    render() {
        return (
            <Jumbotron>
                <h2>About Us</h2>
                <p>React and NodeJs Express App Development</p>
            </Jumbotron>
        );
    }
}

export default About;