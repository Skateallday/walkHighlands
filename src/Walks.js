import React, { useState, useEffect } from 'react';
import "./App.css";
import { walkData } from "./components/murnos";



function Walks() {
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('height');
  
    useEffect(() => {
      const sortArray = type => {
        const types = {
          name: 'name',
          height: 'height',
          region: 'region',
          public_transport: 'public_transport',
          grade: 'grade'
        };
        const sortProperty = types[type];
        const numberSorted = [...walkData].sort((a, b) => a[sortProperty] - b[sortProperty] );

        console.log(numberSorted);
        setData(numberSorted);
      };
  
      sortArray(sortType);
    }, [sortType]); 

    
  
    return (
      <div className="App">
        <select onChange={(e) => setSortType(e.target.value)}> 
        <option value="name">Name</option>
          <option value="height">Height</option>
          <option value="grade">Grade</option>
          <option value="region">Region</option>
          <option value="public_transport">Public Transport</option>
        </select>

  
        {data.map(walkData => (
          <div key={walkData.id} style={{ margin: '30px' }}>
            <div>{`Walk: ${walkData.name}`}</div>
            <div>{`Height: ${walkData.height}m`}</div>
            <div>{`Region: ${walkData.region}`}</div>
            <div>{`Public Transport: ${walkData.public_transport}`}</div>
            <div>{`Grade: ${walkData.grade}`}</div>
          </div>
        ))}
      </div>
    );
  }

export default Walks;