import React, { useEffect, useState } from "react";
import { Container, Jumbotron, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import RecipeCard from "../components/RecipeCard";

const UserRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    fetch("/api/v1/recipes/userrecipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      });
  }, []);

  return (
    <Container>
      <Jumbotron fluid>
        <Container>
          <h1>Your Recipes</h1>
          <p>
            This page is a collection of your recipes that you've submitted - thanks for contributing!
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
            <RecipeCard
              title={recipe.title}
              snippet={snippet}
              username={user.username}
              id={recipe.id}
              link={`/recipes/${recipe.id}`
              }
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default UserRecipes;
