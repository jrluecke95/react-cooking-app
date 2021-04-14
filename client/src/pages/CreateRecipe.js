import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const CreateRecipes = () => {
  const [ form, setForm ] = useState({
    title: '',
    recipe: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/v1/recipes/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: form.title,
        recipe: form.recipe,
      }),
    })
    .then((res) => res.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        alert('recipe posted!');
      }
    })
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Recipe Title</Form.Label>
          <Form.Control name='title' type="text" placeholder="MA MEATLOAF" onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control onChange={handleChange} as="textarea" rows={3} name='recipe' />
        </Form.Group>
        <Button type="submit">Post Recipe</Button>
      </Form>
    </Container>
  );
};

export default CreateRecipes;
