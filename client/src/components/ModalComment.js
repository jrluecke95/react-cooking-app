import { Button, Container, Form, Modal } from 'react-bootstrap';
import React, { useState } from 'react'
import { useParams } from 'react-router';

const ModalComment = () => {
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const [ text, setText ] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/v1/recipes/${id}/addcomment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: text
      }),
    })
    .then((res) => res.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        alert('comment posted');
        setText('')
      }
    })
  }

  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Add Comment
    </Button>

    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>Comment</Modal.Title>
      </Modal.Header>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Add Comment</Form.Label>
            <Form.Control as="textarea" rows={3} name="text" onChange={handleChange}/>
          </Form.Group>
          <Button type="submit">Submit Comment</Button>
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

export default ModalComment
