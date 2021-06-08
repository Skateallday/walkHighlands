import React, { Component } from 'react';
import './App.css';
import  Walks from './Walks';
import WalksByPulicTransport from './public_transport';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/walks">Walks by Numbers</Link>
            </li>
            <li>
              <Link to="/public-transport">Walks by Public Transport</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/walks">
            <Walks />
          </Route>
          <Route path='/public-transport'>
            <WalksByPulicTransport />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}


export default App;
