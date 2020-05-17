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
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal;