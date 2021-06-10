import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Contact from './components/Contact';
import Header from './components/Header';
import Home from './pages/Home';
import SpecialOffers from './components/SpecialOffers';

/**
 * / => Customer facing homepage with header
 * /admin => Different header & sidebar
 * /admin/* => Use Admin header & sidebar with respective page
 * /support => FAQ page with no header & sidebar
 */

function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Header />
          <Switch>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/demo">
                <h1>Yoohoo Demo!</h1>
              </Route>
              <Route path="/login">
                <h1>Login</h1>
              </Route>
              <Route path="/register">
                <h1>Register</h1>
              </Route>
              <Route path="/:id">
                <h1>Product</h1>
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
