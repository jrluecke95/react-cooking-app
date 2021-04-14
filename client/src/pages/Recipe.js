import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router'

const Recipe = () => {
  const { id } = useParams();
  const [ recipe, setRecipe ] = useState([]);
  const [ user, setUser ] = useState([]);

  // gets recipe data from backend
  useEffect(() => {
    fetch(`/api/v1/recipes/${id}`)
    .then(res => res.json())
    .then(data => {
      setRecipe(data)
    })
  }, [])
  
// gets user infomation using userid attached to recipe
  useEffect(() => {
    fetch(`/api/v1/users/${recipe.UserId}`)
    .then(res => res.json())
    .then(data => {
      setUser(data)
    })
  }, [recipe])

  return (
    <Container>
      {recipe.title}
      {recipe.recipe}
      created by {user.username}
    </Container>
  )
}

export default Recipe
