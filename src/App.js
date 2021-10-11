import HomePage from './components/HomePage';
import Clients from './components/Clients';
import Quotes from './components/Quotes';
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
