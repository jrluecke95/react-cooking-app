import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/api/v1/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      });
  }, []);
  return (
    <Container>
      <Row>
        {recipes.map((recipe) => {
          const content = recipe.recipe.split('');
          const snippet = content.slice(0, 20).join('');
          return (
            <Col xs={12} sm={6} md={4} lg={3} xl={3} key={recipe.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{recipe.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    rating goes here
                  </Card.Subtitle>
                  <Card.Text>
                    {snippet}
                  </Card.Text>
                  <LinkContainer to={`/recipes/${recipe.id}`} >
                      <Card.Link>link to recipe</Card.Link>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      
    </Container>
  );
};

export default Home;
