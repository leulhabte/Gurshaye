import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {Modal, Button, Container, Row, Col} from 'react-bootstrap';

class Alert extends Component{
    render() {

        let rediretPage = ()=>{
            // this.props.history.push("/view");
            window.location.reload(false);
        }

       let handleClick = ()=> {
           axios.delete(`http://localhost:8000/remove/${this.props.id}`)
           .then(res=>{
              rediretPage(); 
           })
        }

        return (
            <Modal centered show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.message}
                </Modal.Body>
                <Modal.Footer>
                    <Container>
                        <Row>
                            <Col><Button variant="danger" className="btn-block" onClick={handleClick}>Yes</Button></Col>
                            <Col><Button variant="primary" className="btn-block" onClick={this.props.onHide}>No</Button></Col>
                        </Row>
                    </Container>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default withRouter(Alert);