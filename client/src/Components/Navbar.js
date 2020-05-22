import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';

class Navbars extends Component{
    render(){
        return(
            <div className="flex-grow-1">
                <Navbar expand="md" className="Navbar d-flex">
                    <Navbar.Brand className="BrandName d-none">Gurshaye</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav className="mx-auto">
                            <Nav.Link className="Link">Home</Nav.Link>
                            <Nav.Link className="Link">About Us</Nav.Link>
                            <Nav.Link className="Link">Conatct</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navbars;