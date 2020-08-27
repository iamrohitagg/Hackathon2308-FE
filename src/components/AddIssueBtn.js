import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const AddIssueBtn = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add issue
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new issue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Issue title" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Add description" />
            </Form.Group>

            <Form.Group>
              <Form.Label>URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="Add the url for the issue"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Labels</Form.Label>
              <Form.Control type="text" placeholder="Add labels" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddIssueBtn;
