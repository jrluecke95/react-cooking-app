import React, { useState } from "react";
import { Form, Button, Container, Jumbotron, Alert } from "react-bootstrap";
import { useHistory } from "react-router";
import { LinkContainer } from "react-router-bootstrap";

const Register = () => {
  const [ form, setForm ] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/v1/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: form.username,
        password: form.password,
      }),
    })
    .then((res) => res.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        alert('user registered!');
        history.push('/login')
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
      <Jumbotron fluid>
        <Container>
          <h1>Register</h1>
          <p>
            Please fill out the form below to be able to create your own recipes and post them here as well as comment and rate our existing recipes!
          </p>
          <p>Click below if you just want to browse our recipes without an account</p>
          <LinkContainer to="/">
            <Button>Click me!</Button>
          </LinkContainer>
        </Container>
      </Jumbotron>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter email" name='username' onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handleChange} name='password' />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" onChange={handleChange} name='confirmPassword' />
        </Form.Group>
        {form.password !== form.confirmPassword || form.password === '' ? (
          <>
            {form.password.length > 0 && form.confirmPassword.length > 0 && <Alert variant='danger' className='mb-3'>
              Passwords must match before submitting!
            </Alert>}
            
            <Button disabled variant="primary" type="submit">
              Submit
            </Button>
          </>
        ) : (
          <Button variant="primary" type="submit">
          Submit
        </Button>
        )}
      </Form>
    </Container>
  );
};

export default Register;
