import React, { useEffect, useState } from "react";
import { Alert, Container, Jumbotron } from "react-bootstrap";
import { useParams } from "react-router";
import ModalComment from "../components/ModalComment";
import ModalReiew from "../components/ModalReiew";
import './Recipe.css'

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [user, setUser] = useState([]);
  const [comments, setComments] = useState([]);
  const [ rating, setRating ] = useState('')

  // gets recipe data from backend
  useEffect(() => {
    fetch(`/api/v1/recipes/getrecipe/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
      });
  }, []);

  // gets user infomation using userid attached to recipe
  useEffect(() => {
    fetch(`/api/v1/users/${recipe.UserId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, [recipe]);

  useEffect(() => {
    fetch(`/api/v1/recipes/${id}/getcomments`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
  }, [recipe]);

  useEffect(() => {
    fetch(`/api/v1/recipes/${id}/getrating`)
    .then(res => res.json())
    .then(data => {
      setRating(data)
    })
  }, [recipe])

  return (
    <Container>
      <Jumbotron>
        <h1>{recipe.title}</h1>
        <p>written by {user.username}</p>
        <p>{isNaN(rating) ? 'no reviews yet' : `${rating} out of 5 stars`}</p>
        <p>
          <ModalReiew /> {' '}
          <ModalComment />
        </p>
      </Jumbotron>

      {recipe.recipe}
      {comments.map((comment) => {
        return (
          <Alert key={comment.id} variant="info">
            {comment.text}
          </Alert>
        );
      })}
    </Container>
  );
};

export default Recipe;
