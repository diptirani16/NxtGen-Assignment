import HomePage from './components/HomePage';
import Clients from './components/Clients';
import Quotes from './components/Quotes';
import Projects from './components/Projects';
import Sdot from './components/Sdot';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
