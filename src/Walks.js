import React, { useState, useEffect } from 'react';
import "./App.css";
import { walkData } from "./components/murnos";
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'



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
      <div className="Table">


        <Form.Group onChange={(e) => setSortType(e.target.value)} controlId="exampleForm.ControlSelect1">
          <Form.Label>Height or Grade</Form.Label>
            <Form.Control as="select">
                  <option value="height">Height</option>
                  <option value="grade">Grade</option>
            </Form.Control>
        </Form.Group>
 
  
          <Table striped bordered hover >
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
                {data.map((walkData, index) => (

            <tr key={index}>
              <td key={walkData.name}>{walkData.name}</td>
              <td key={walkData.height}>{walkData.height}m</td>
              <td key={walkData.region}>{walkData.region}</td>
              <td key={walkData.public_transport}>{walkData.public_transport}</td>
              <td key={walkData.grade}>{walkData.grade}</td>
            </tr>
                    ))}

            </tbody>
          </Table>
      </div>
    );
  }

export default Walks;