import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap';
import EditForm from './EditForm';

class EditTips extends Component{
    render() {
        return (
                <Modal size="lg" centered show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Header>
                        <Modal.Title>Edit Tip</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditForm data={this.props.data}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onHide}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
        );
    }
}

export default EditTips;