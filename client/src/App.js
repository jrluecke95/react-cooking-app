import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserRecipes from "./pages/UserRecipes";
import Recipe from "./pages/Recipe";

//import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
      <Router>
          <Navigation />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/recipes' exact>
            <UserRecipes />
          </Route>
          <Route path='/recipes/:id'>
            <Recipe />
          </Route>
        </Switch>
      </Router>
    
  );
}

export default App;
