import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserRecipes from "./pages/UserRecipes";
import Recipe from "./pages/Recipe";
import AddRecipe from "./pages/AddRecipe";
import FuzzySearch from "./components/FuzzySearch";
import SpoonSearch from "./components/SpoonSearch";
import EditRecipes from "./pages/EditRecipes";

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
          <Route path='/addrecipe'>
            <AddRecipe />
          </Route>
          <Route path='/fuzzysearch'>
            <FuzzySearch />
          </Route>
          <Route path='/spoonsearch'>
            <SpoonSearch />
          </Route>
          <Route path='/:id/editrecipe'>
              <EditRecipes />
          </Route>
        </Switch>
      </Router>
    
  );
}

export default App;