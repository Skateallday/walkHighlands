import React from 'react';
import "./App.css";
import { walkData } from "./components/murnos";
import Table from 'react-bootstrap/Table'
import { Button, Container, Row, Col } from 'react-bootstrap';

class RandomWalkGenerator extends React.Component{

    constructor(props){
        super(props);
        this.newNumber = this.newNumber.bind(this);
        this.state = { random : 0};
    }

    newNumber(){
        const randomNumber = Math.floor(Math.random() * 5) + 1;
        this.setState({ random: 0 + randomNumber})
        console.log(this.state.random)

    }
render(){

    return (
      <div className="App">

        <Container>
        <Row>
            <Col>
                <h3>Random Walk</h3>
            </Col>
            
            <Col>      
                <Button className="float-right"  onClick={this.newNumber.bind(this)}> Generate New Walk</Button>
            </Col>
        </Row>
        </Container>

          <hr />

            <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Region</th>
                    <th>Public Transport</th>
                    <th>Grade</th>
                  </tr>
                </thead>

                <tbody>

                {walkData.filter(walk => walk.id === this.state.random).map((filteredId, id) => (

                <tr key={id} >

                      <td>{filteredId.name}</td>
                      <td>{filteredId.height}m</td>
                      <td>{filteredId.region}</td>
                      <td>{filteredId.public_transport}</td>
                      <td>{filteredId.grade}</td>

                </tr>   

                ))}
             
                </tbody>
              </Table> 
        </div>


    );
  }

}
export default RandomWalkGenerator;