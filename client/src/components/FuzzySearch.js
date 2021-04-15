import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import { Container, Form, Jumbotron, Row } from "react-bootstrap";
import RecipeCard from "./RecipeCard";

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
    // Search in 'title' tags in array
    keys: ["title"],
  };

  const fuse = new Fuse(recipes, options);

  const results = fuse.search(searchResults);

  return (
    <Container>
      <Jumbotron fluid>
        <Container>
          <Form>
            <Form.Group>
              <Form.Label><h2>What are you in the mood for?</h2></Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                placeholder="name@example.com"
                name="search"
              />
            </Form.Group>
          </Form>
        </Container>
      </Jumbotron>
      
      <Row>
        {results.map((result) => {
          const content = result.item.recipe.split("");
          const snippet = content.slice(0, 40);
          snippet[40] = "...";
          snippet.join("");
          return (
            <RecipeCard
              title={result.item.title}
              username={result.item.User.username}
              snippet={snippet}
              id={result.item.id}
              link={`/recipes/${result.item.id}`}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default FuzzySearch;
