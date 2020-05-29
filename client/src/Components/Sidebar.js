import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Sidebar extends Component{
    render(){
        return(
            <div className="Sidebar">
               <div className="Brand">
                    <h3>Gurshaye</h3>
                </div> 
                <div className="Navigations">
                    {this.props.logged_status ?
                    <Nav className="Navs">
                        <Nav.Item className="Items">
                            <Link className="Links" to="/add"><span>Add Tips</span></Link>
                        </Nav.Item>
                        <Nav.Item className="Items">
                            <Link className="Links" to="/view"><span>View Tips</span></Link>
                        </Nav.Item>
                        <Nav.Item className="Items">
                            <Link className="Links" to="/manage"><span>Manage Tips</span></Link>
                        </Nav.Item>
                        <Nav.Item className="Items">
                            <Nav.Link className="Links" onClick={this.props.handleLogOut}><span>Log out</span></Nav.Link>
                        </Nav.Item>
                        </Nav> :
                        <Nav>
                        <Nav.Item className="Items">
                            <Link className="Links" to="/login"><span>Log In user</span></Link>
                        </Nav.Item>
                        <Nav.Item className="Items">
                            <Link className="Links" to="/signup"><span>Sign up</span></Link>
                        </Nav.Item>
                    </Nav>
                    }
                </div>
            </div>
        );
    }
}

export default Sidebar;