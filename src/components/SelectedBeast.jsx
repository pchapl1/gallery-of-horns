import React from "react";
import Modal from 'react-bootstrap/Modal';
import "./SelectedBeast.css";


class SelectedBeast extends React.Component {

    render() {


        const show = this.props.show

        const handleClose = this.props.handleClose

        return (

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.image.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={this.props.image.imageUrl} alt={this.props.image.title} />
            </Modal.Body>
            <Modal.Footer>
                <p>{this.props.image.description}</p>
            </Modal.Footer>
          </Modal>
        )
    }
};

export default SelectedBeast;