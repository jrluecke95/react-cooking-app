import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import { Card, Col, Container, Form, Row } from "react-bootstrap";

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
  console.log(results);

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
          return (
            <Col xs={12} sm={6} md={4} lg={3} xl={3}>
              <Card >
                <Card.Body>
                  <Card.Title>{result.item.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
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
