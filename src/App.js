import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';


import Home from './pages/Home';
import Admin from './pages/Admin';

/**
 * / => Customer facing homepage with header
 * /login => Customer facing homepage with header
 * /signup => Customer facing homepage with header
 * /admin => Different header & sidebar
 * /admin/* => Use Admin header & sidebar with respective page
 * /support => FAQ page with no header & sidebar
 */

function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Switch>
              <Route path="/admin">
                <Admin />
              </Route>
              <Route path="/">
                <Home />
              </Route>

            </Switch>
          </>
      </BrowserRouter>
    </>
  );
}

export default App;
