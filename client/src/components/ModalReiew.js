
import React, { useState } from 'react'
import { Container, Form, Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router';

const ModalReiew = () => {
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const [rating, setRating] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setRating(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/v1/recipes/${id}/addrating`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        score: rating,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert("rating posted");
        }
      });
  };

  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Add Review
    </Button>

    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>What'd you think?</Modal.Title>
      </Modal.Header>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select your score 1-5</Form.Label>
            <Form.Control as="select" name="rating" onChange={handleChange}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button type="submit">Submit Review</Button>
        </Form>
      </Container>
      
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default ModalReiew
