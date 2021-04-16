import React, { useEffect, useState } from "react";
import { Card, Carousel, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const RecipeCard = (props) => {
  const [ rating, setRating ] = useState("");
  const [ images, setImages ] = useState([]);
  const encodedSearch = encodeURIComponent(props.title)

  useEffect(() => {
    fetch(`/api/v1/recipes/${props.id}/getrating`)
      .then((res) => res.json())
      .then((data) => {
        setRating(data);
      });
  }, []);

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=ACRdZDxayxoVcjMWDDa6Kaf4WW9WbvG_cL0vnb44Jvg&page=1&per_page=3&query=${encodedSearch}`)
    .then(res => res.json())
    .then(data => [
      setImages(data.results),
    ])
  }, [])
  
  

  return (
    <Col
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={3}
      key={props.id}
      mb={1}
      className="d-flex"
    >
      <Card className="mb-4 flex-grow-1">
      <Card.Img />
          <Carousel>
            {images.map(image => {
              return (
                <Carousel.Item>
                <img height="200" width="200"
                  className="d-block w-100"
                  src={image.urls.small}
                  alt={image.alt_description}
                />
              </Carousel.Item>
              )
            })
          }
            
          </Carousel>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            written by {props.username}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            {isNaN(rating) ? "no reviews yet" : `${rating} out of 5 rating`}
          </Card.Subtitle>
          <Card.Text>{props.snippet}</Card.Text>
          <LinkContainer to={props.link}>
            <Card.Link>link to recipe</Card.Link>
          </LinkContainer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RecipeCard;
