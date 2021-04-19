import React, { useEffect, useState } from 'react'
import { Button, Container, Jumbotron, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Forbidden from '../components/Forbidden';

const EditRecipes = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const history = useHistory();
  const [ form, setForm ] = useState({
    title: recipe.title,
    recipe: recipe.recipe
  })
  const [user, setUser] = useState([]);
  const loggedIn = useSelector((state) => state.user)

  // gets recipe data from backend
  useEffect(() => {
    fetch(`/api/v1/recipes/getrecipe/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
        setForm(data)
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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/v1/recipes/${recipe.id}/editrecipe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
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
        alert('recipe updated!');
        history.push('/')
      }
    })
  }

  // const deleteRecipe = () => {
  //   fetch(`/api/v1/recipes/${recipe.id}/deleterecipe`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     alert(data)
  //   })
  // }

  return (
    <Container>
      {!loggedIn ? (
        <Forbidden />
      ) : (
        <Jumbotron>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control type="title" value={form.title} name="title" onChange={handleChange}/>
              <Form.Text className="text-muted">
                Edit this to change your title
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Recipe Text</Form.Label>
              <Form.Control as="textarea" rows={10} value={form.recipe} name="recipe" onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button> {' '}
            {/* <Button onClick={deleteRecipe} variant="danger">
              Delete
            </Button> */}
          </Form>
      </Jumbotron>
      )}
      
    </Container>
  )
}

export default EditRecipes
