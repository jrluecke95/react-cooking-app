import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const UserRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/api/v1/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      });
  }, []);

  return (
    <div>
      <h1>Recipe Page</h1>
      {recipes.map((recipe) => {
        const content = recipe.recipe.split('');
        const snippet = content.slice(0, 20).join('');
        return (
          <div key={recipe.id}>
            <Card style={{ width: "18rem" }}>
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
          </div>
        );
      })}
    </div>
  );
};

export default UserRecipes;
