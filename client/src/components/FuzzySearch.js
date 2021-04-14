import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

const FuzzySearch = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch("/api/v1/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      });
  }, []);

  const handleChange = (e) => {
    setSearchResults(e.target.value);
  };

  const options = {
    includeScore: true,
    // Search in `author` and in `tags` array
    keys: ["title"],
  };

  const fuse = new Fuse(recipes, options);

  const results = fuse.search(searchResults);

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>What are you in the mood for?</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            placeholder="name@example.com"
            name="search"
          />
        </Form.Group>
      </Form>
      <Row>
        {results.map(result => {
          const content = result.item.recipe.split('');
          const snippet = content.slice(0, 20).join('');
          return (
            <Col xs={12} sm={6} md={4} lg={3} xl={3} key={result.item.id}>
              <Card >
                <Card.Body>
                  <Card.Title>{result.item.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    written by {result.item.User.username}
                  </Card.Subtitle>
                  <Card.Text>
                    {snippet}
                  </Card.Text>
                  <LinkContainer to={`/recipes/${result.item.id}`} >
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

export default FuzzySearch;
