import React, { useEffect, useState } from "react";
import { Card, Carousel, Button } from "react-bootstrap";
import imageAPI from '../secrets'

const Test = () => {
  const [images, setImages] = useState("");
  const title = 'bacon and eggs';
  const encodedTitle = encodeURIComponent(title)

  // useEffect(() => {
  //   fetch(
  //     `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${encodedTitle}&pageNumber=1&pageSize=10&autoCorrect=true`,
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
  // }, [images]);

  return (

      <Card style={{ width: '18rem' }}>
        <Card.Img />
          <Carousel>
            {/* {images.map((image, index) => {
              return (
                <Carousel.Item>
                <img height="200" width="200"
                  className="d-block w-100"
                  src={image.thumbnail}
                  alt="First slide"
                />
              </Carousel.Item>
              )
            })
          } */}
            
          </Carousel>
        <Card.Body> 
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>


  
    
  );
};

export default Test;


    