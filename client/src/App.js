import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserRecipes from "./pages/UserRecipes";
import Recipe from "./pages/Recipe";
import AddComment from "./pages/AddComment";
import AddRecipe from "./pages/AddRecipe";
import AddReview from "./pages/AddReview";
import FuzzySearch from "./components/FuzzySearch";
import SpoonSearch from "./components/SpoonSearch";

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
          {/* takes user to page with only their recipes */}
          <Route path='/userrecipes' exact>
            <UserRecipes />
          </Route>
          <Route path='/recipes/:id'>
            <Recipe />
          </Route>
          <Route path='/:id/addcomment'>
            <AddComment />
          </Route>
          <Route path='/addrecipe'>
            <AddRecipe />
          </Route>
          <Route path='/:id/addreview'>
            <AddReview />
          </Route>
          <Route path='/fuzzysearch'>
            <FuzzySearch />
          </Route>
          <Route path='/spoonsearch'>
            <SpoonSearch />
          </Route>
        </Switch>
      </Router>
    
  );
}

export default App;