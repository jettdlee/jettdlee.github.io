import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../../styles/Modal.css';

function ProjectModal(props) {
  return (
    <Modal
      dialogClassName="project-modal"
      show={props.show}
      onHide={props.onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {props.itemTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {props.children}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal;
