import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import TeamDetails from './components/TeamDetails/TeamDetails';

function App() {
  return (
    <Router>
      <ul className="sticky-top">
        <li>
          <Link className="navbar-brand home-icon" to="/">Home</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/team/:id">
          <TeamDetails></TeamDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
