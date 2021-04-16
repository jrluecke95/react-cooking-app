import React from 'react'
import { Button, Jumbotron } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Forbidden = () => {
  return (
    <Jumbotron>
        <h1>Ruh Roh</h1>
        <p>
          It looks like you aren't logged in and are trying to access a page that requires an account to view. Please click the button below to be taken to our registration page!
        </p>
        <p>
          <LinkContainer to='/register'>
            <Button variant="primary">Register</Button>
          </LinkContainer>
          
        </p>
      </Jumbotron>
  )
}

export default Forbidden
