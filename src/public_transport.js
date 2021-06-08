import React from 'react';
import "./App.css";
import { walkData } from "./components/murnos";


function WalksByPulicTransport() {
    const walkingData = walkData;


    return (
      <div className="App">
          <h3>Public Transport</h3>
  
        {walkData.filter(publicTransport => !publicTransport.public_transport.includes('No')).map(filteredName => (
          <div key={walkingData.id} style={{ margin: '30px' }} >
              
            <div>{`Walk: ${filteredName.name}`}</div>
            <div>{`Height: ${filteredName.height}m`}</div>
            <div>{`Region: ${filteredName.region}`}</div>
            <div>{`Public Transport: ${filteredName.public_transport}`}</div>
            <div>{`Grade: ${filteredName.grade}`}</div>
          </div>
        ))}
      </div>
    );
  }

export default WalksByPulicTransport