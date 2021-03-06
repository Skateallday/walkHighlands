import React from 'react';
import './App.css';
import  Walks from './Walks';
import WalksByPulicTransport from './public_transport';
import RandomWalkGenerator from './random';
import Footer from './footer';
import {
  MemoryRouter,
  Switch,
  Route,
} from "react-router-dom";

import logo from './SVG/logo.svg';

import { Jumbotron } from 'react-bootstrap';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


function App() {
  return (

    
    <MemoryRouter className="background">
      <Container className="p-3">

        <Jumbotron>
          <Row>
            <Col  sm={7}>          <h1>Welcome to React-Highlands</h1>
            <h2>Search the Walk Highlands Website with more options</h2>

</Col>
            <Col  sm={5}>          <img src={logo} alt="Logo" />
</Col>
            </Row>
            


          <ButtonToolbar className="custom-btn-toolbar">

              <LinkContainer to="/">
                <Button className="NavButton">Home</Button>
                </LinkContainer>
            
              <LinkContainer to="/walks">
                <Button className="NavButton">Walks by Numbers</Button>
                </LinkContainer>
            
              <LinkContainer to="/public-transport">
                <Button className="NavButton">Walks by Public Transport</Button>
                </LinkContainer>

                <LinkContainer to="/random">
                <Button className="NavButton">Random Walk</Button>
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
          <Route path='/random'>
            <RandomWalkGenerator />
          </Route>
          
        </Switch>
      <Footer />

      </Container>

    </MemoryRouter>


  );
}


export default App;
