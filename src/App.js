import React from 'react';
import './App.css';
import  Walks from './Walks';
import WalksByPulicTransport from './public_transport';
import {
  MemoryRouter,
  Switch,
  Route,
} from "react-router-dom";

import { Jumbotron } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


function App() {
  return (
    <MemoryRouter>
      <Container className="p-3">
        <Jumbotron>
          <h1>Welcome to React-Highlands</h1>
          <h2>Search the Walk Highlands Website with more options</h2>
          <ButtonToolbar className="custom-btn-toolbar">

              <LinkContainer to="/">
                <Button>Home</Button>
                </LinkContainer>
            
              <LinkContainer to="/walks">
                <Button>Walks by Numbers</Button>
                </LinkContainer>
            
              <LinkContainer to="/public-transport">
                <Button>Walks by Public Transport</Button>
                </LinkContainer>

          </ButtonToolbar>
        </Jumbotron>

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
      </Container>
    </MemoryRouter>
  );
}


export default App;
