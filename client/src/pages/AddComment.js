import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useParams } from "react-router";

const AddComment = () => {
  const { id } = useParams();
  const [ text, setText ] = useState('')

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
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Comment</Form.Label>
          <Form.Control as="textarea" rows={3} name="text" onChange={handleChange}/>
        </Form.Group>
        <Button type="submit">Submit Comment</Button>
      </Form>
    </Container>
  );
};

export default AddComment;
