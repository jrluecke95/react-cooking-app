# <p align="center"> Reactive Recipes </p>
<br>
<br>

## About this project 📝
<hr>
Reactive Recipes is a full-stack application created to allow users to login and create, rate, and comment on recipes. It was built primarily with React and Node.js along with other modern frameworks. It uses both internal and external REST API's to fetch and render data onto the page. It is designed with responsivness and ease of use in mind. Users can easily interact with the content on each page and have a fluid and intuitive experience.
<br>
<br>
<br>
<br>

## languages Used and technology 💻
<hr>
<br>
<img alt="React" src="https://img.icons8.com/officel/48/000000/react.png"/>
<img alt="Redux" src="https://img.icons8.com/color/48/000000/redux.png"/>
<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
<img alt="NodeJs" src="https://camo.githubusercontent.com/cc96d7d28a6ca21ddbb1f2521d751d375230ed840271e6a4c8694cf87cc60c14/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732532302d2532333433383533442e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465">
<img alt="PostgreSQL" src="https://img.icons8.com/color/48/000000/postgreesql.png" />
<img alt="Heroku" src="https://camo.githubusercontent.com/865b9493c6eccbcaedacf295b96adb9acd97e7088bdc982d8d225f3581bb4582/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6865726f6b752532302d2532333433303039382e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d6865726f6b75266c6f676f436f6c6f723d7768697465">


<br>
<br>

## Frameworks Used
<hr>
<br>

<img alt="Express" src="https://camo.githubusercontent.com/87d8d88ac087f77c5b56509373a2dd49e5439722d7ad59c3f39a577907053152/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732532302d2532333430346435392e7376673f267374796c653d666f722d7468652d6261646765">
<img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/>

<br>
<br>
<br>

## Code snipets
<hr>


<p> This is a recipe card that was used throughout the site to display a recipe and some of the information that it contained.
<br>

```jsx
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

```

<br>
<br>

## Challenges Faced
<hr>
One of the more difficult parts of this projects was figuring out how to get images to display for each recipe. Allowing users to upload their own imges seemed like one solution, but not everyone can take professional photos of their food. My solution was to use the Unsplash API to search the recipe title and grab the first 3 images that came back and use those on the image carousel for each recipe card. This worked great and only had some unintended consequences, such as "wings" being the recipe title returning a picture of birds. This wasn't a perfect solution in all cases, but I am very proud of the ingenuity and technical skill I was able to leverage to solve this problem.
<br>
<br>
<br>
<br>


## List of API's used
<hr>
<br>

* [Spoonacular API](https://spoonacular.com/food-api)
* [Unsplash API](https://unsplash.com/developers)

<br>
<br>


## Author
<hr>
 
* [Jake Luecke](https://github.com/jrluecke95)

<br>
<br>

## License
<hr>


* [MIT](https://opensource.org/licenses/MIT)