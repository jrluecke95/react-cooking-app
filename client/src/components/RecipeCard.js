import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

// TODO update this with props and refactor pages where card is at

const RecipeCard = (props) => {
  return (
      <Col xs={12} sm={6} md={4} lg={3} xl={3} key={props.id}>
        <Card >
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              written by {props.username}
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
