import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { spoonAPI } from '../secrets'

const SpoonSearch = () => {
  const [query, setQuery] = useState("");
  const [ results, setResults ] = useState([]);
  const [ renderResults, setRenderResults ] = useState([]);

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonAPI}&query=${query}&number=2&addRecipeInformation=true`)
    .then((res) => res.json())
    .then((data) => {
      setRenderResults(data.results);
      console.log(renderResults)
    });
  }, [results])

  const handleSubmit = (e) => {
    e.preventDefault();
    setResults(query)
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>What are you in the mood for?</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            placeholder="name@example.com"
            name="search"
          />
        </Form.Group>
        <Button type="submit">Search</Button>
      </Form>
      <Row>
        {renderResults.map(result => {
          const content = result.summary.split('');
          const snippet = content.slice(0, 30).join('');
          return (
            <Col xs={12} sm={6} md={4} lg={3} xl={3} key={result.id}>
              <Card>
                <Card.Img variant="top" src={result.image} />
                <Card.Body>
                  <Card.Title>{result.title}</Card.Title>
                  <Card.Text>
                    {snippet}
                  </Card.Text>
                  <LinkContainer to={`/recipes/${result.sourceUrl}`} >
                      <Card.Link>link to recipe</Card.Link>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  );
};

export default SpoonSearch;
