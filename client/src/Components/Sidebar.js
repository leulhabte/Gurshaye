import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'

class Sidebar extends Component{
    render(){
        return(
            <div className="Sidebar">
               <div className="Brand">
                    <h3>Gurshaye</h3>
                </div> 
                <div className="Navigations">
                    <Nav>
                        <Nav.Item className="Items">
                            <Nav.Link><Link className="Links" to="/add"><span>Add Tips</span></Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="Items">
                            <Nav.Link><Link className="Links" to="/view"><span>View Tips</span></Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="Items">
                            <Nav.Link><Link className="Links" to="/manage"><span>Manage</span></Link></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
        );
    }
}

export default Sidebar;