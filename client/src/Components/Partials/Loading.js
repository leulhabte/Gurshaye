import React, {Component} from 'react';
import {Spinner} from 'react-bootstrap';

class Loadings extends Component{
    render() {
        return (
            <div className="Loading">
               <Spinner animation="grow" variant="primary" size="sm"/>
               <Spinner animation="grow" variant="secondary" size="lg" />
               <Spinner animation="grow" variant="success" size="sm" />                
            </div>
        );
    }
}

export default Loadings;