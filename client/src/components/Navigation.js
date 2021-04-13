import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav,
  Container
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setUser } from "../redux/actions";
import {LinkContainer} from 'react-router-bootstrap'

const Navigation = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [ userStatus, setUserStatus ] = useState('LOADING');

  // logout function using api
  const logout = () => {
    fetch('/api/v1/users/logout')
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        alert(data.success);
        dispatch(setUser(null));
        history.push('/login')
      }
    })
  }

  // checking to see if user logged in - if so, set up redux with user data so that page refreshes dont reset login status
  useEffect(() => {
    fetch('/api/v1/users/current')
    .then(res => res.json())
    .then(data => {
      if (!data.error) {
        dispatch(setUser(data))
      }
      setUserStatus('CHECKED')
    })
  }, [])
  
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Reactive Recipes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {user ? (
              <>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/users/recipes">
                <Nav.Link>Your Recipes</Nav.Link>
              </LinkContainer>
              <Button onClick={logout}>Logout</Button>
              </>
            ) : (
              <>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/register">
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>
              </>
            )}
            
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Navigation;
