import React from 'react';
import "./App.css";
import { walkData } from "./components/murnos";
import Table from 'react-bootstrap/Table'


function WalksByPulicTransport() {
    const walkingData = walkData;


    return (
      <div className="App">
          <h3>Public Transport</h3>
  
                    
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

                {walkData.filter(publicTransport => !publicTransport.public_transport.includes('No')).map(filteredName => (

                <tr key={walkingData.id} >

                      <td>{filteredName.name}</td>
                      <td>{filteredName.height}m</td>
                      <td>{filteredName.region}</td>
                      <td>{filteredName.public_transport}</td>
                      <td>{filteredName.grade}</td>

                </tr>   

                ))}
             
                </tbody>
              </Table> 
        </div>


    );
  }

export default WalksByPulicTransport