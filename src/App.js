import HomePage from './components/HomePage';
import Clients from './components/Clients';
import Quotes from './components/Quotes';
import Projects from './components/Projects';
import Sdot from './components/Sdot';
import DataScience from './components/DataScience';
import Offers from './components/Offers';
import Cards from './components/Cards';
import Grids from './components/Grids';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/clients">
            <Clients />
          </Route>
          <Route exact path="/quotes">
            <Quotes />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/sdot">
            <Sdot />
          </Route>
          <Route exact path="/datascience">
            <DataScience />
          </Route>
          <Route exact path="/offers">
            <Offers />
          </Route>
          <Route exact path="/cards">
            <Cards />
          </Route>
          <Route exact path="/grids">
            <Grids />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
