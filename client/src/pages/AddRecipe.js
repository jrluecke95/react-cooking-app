import React, { useState } from "react";
import { Button, Container, Form, Jumbotron } from "react-bootstrap";
import { useSelector } from "react-redux";
import Forbidden from "../components/Forbidden";

const AddRecipe = () => {
  const [form, setForm] = useState({
    title: "",
    recipe: "",
  });
  const loggedIn = useSelector((state) => state.user)

  const handleSubmit = (e) => {
    console.log(form);
    e.preventDefault();
    fetch(`/api/v1/recipes/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: form.title,
        recipe: form.recipe,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert("recipe posted");
        }
      });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      {!loggedIn ? (
        <Forbidden />
      ) : (
        <>
          <Jumbotron fluid>
            <Container>
              <h1>Add Recipe</h1>
              <p>
                This page is for adding a recipe to our collection so that other users can find it and use it!
              </p>
            </Container>
          </Jumbotron>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Recipe Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter title"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">Make it original!</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Recipe</Form.Label>
              <Form.Control
                as="textarea"
                name="recipe"
                rows={5}
                onChange={handleChange}
              />
            </Form.Group>
            <Button type="submit">Submit Recipe</Button>
          </Form>
        </>
      )}
    </Container>
  );
};

export default AddRecipe;
