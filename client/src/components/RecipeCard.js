import React, { useEffect, useState } from "react";
import { Card, Carousel, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const RecipeCard = (props) => {
  const [rating, setRating] = useState("");
  const [ search, setSearch ] = useState('')
  const [images, setImages] = useState("");

  useEffect(() => {
    fetch(`/api/v1/recipes/${props.id}/getrating`)
      .then((res) => res.json())
      .then((data) => {
        setRating(data);
      });
  }, []);

    // useEffect(() => {
  //   fetch(
  //     `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${encodedTitle}&pageNumber=1&pageSize=3&autoCorrect=true`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-key":
  //           "5ddd6bfef5msh53bd5d1fb439619p1f085fjsnb25672419bb1",
  //         "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setImages(data.value);
  //     });
  // }, [search]);

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
            {images.map((image, index) => {
              const encodeSearch = encodeURIComponent(props.title)
              setSearch(encodeSearch)
              return (
                <Carousel.Item>
                <img height="200" width="200"
                  className="d-block w-100"
                  src={image.thumbnail}
                  alt={index.slide}
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
