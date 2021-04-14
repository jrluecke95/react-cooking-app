import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useParams } from "react-router";

const AddReview = () => {
  const { id } = useParams();
  const [rating, setRating] = useState("");

  const handleChange = (e) => {
    setRating(e.target.value);
  };

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
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Example select</Form.Label>
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
  );
};

export default AddReview;
