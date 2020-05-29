import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Navbars extends Component{
    render(){
        return(
            <div className="flex-grow-1">
                <Navbar expand="md" className="Navbar d-flex">
                    <Navbar.Brand className="BrandName d-none">Gurshaye</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav className="mx-auto">
                            <Link className="Link" to="/">Home</Link>
                            <Link className="Link" to="/about">About Us</Link>
                            <Link className="Link" to="/contact">Conatct</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navbars;