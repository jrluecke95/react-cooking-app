import React, { useEffect, useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const RecipeCard = (props) => {
  const [ rating, setRating ] = useState('');

  useEffect(() => {
    fetch(`/api/v1/recipes/${props.id}/getrating`)
    .then(res => res.json())
    .then(data => {
      setRating(data)
    })
  }, [])

  return (
      <Col xs={12} sm={6} md={4} lg={3} xl={3} key={props.id}>
        <Card >
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              written by {props.username}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              {isNaN(rating) ? 'no reviews yet' : `${rating} out of 5 rating`}
            </Card.Subtitle>
            <Card.Text>
              {props.snippet}
            </Card.Text>
            <LinkContainer to={props.link} >
                <Card.Link>link to recipe</Card.Link>
            </LinkContainer>
          </Card.Body>
        </Card>
      </Col>
  )
}

export default RecipeCard
