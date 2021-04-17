import { Alert } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'

const Comment = (props) => {
  const [ user, setUser ] = useState('');
  
  useEffect(() => {
    fetch(`/api/v1/users/${props.userId}`)
    .then(res => res.json())
    .then(data => {
      setUser(data)
    })
  }, [])
  
  return (
    <Alert className="mt-3" key={props.id} variant="info">
      <p>{props.text}</p>
      <p>posted by {user.username}</p>
    </Alert>
  )
}

export default Comment
