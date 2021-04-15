import React, { useEffect, useState } from "react";
import { Card, Col, Container, Jumbotron, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import RecipeCard from "../components/RecipeCard";

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
      <Jumbotron fluid>
        <Container>
          <h1>Recipes</h1>
          <p>
            This page is a collection of the recipes that our users have posted - please explore and enjoy!
          </p>
        </Container>
      </Jumbotron>
      <Row>
        {recipes.map((recipe) => {
          const content = recipe.recipe.split("");
          const snippet = content.slice(0, 40);
          snippet[40] = "...";
          snippet.join("");
          return (
            <RecipeCard title={recipe.title} username='unknown' snippet={snippet} link={`/recipes/${recipe.id}`} />
          );
        })}
      </Row>
      
    </Container>
  );
};

export default Home;
