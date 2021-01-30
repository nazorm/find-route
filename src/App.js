import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Alert, Button, Form } from "react-bootstrap";
import Direction from './components/Direction'

function App() {
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [loading, setLoading] = useState(false);
  const[directions, setDirections] = useState([]);

  const handleLocationChange = (e) => {
    const { value } = e.target;
    setLocation(value);
  };
  const handleDestinationChange = (e) => {
    const { value } = e.target;
    setDestination(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location || !destination) {
      alert("enter location or destination");
    } else {
      const getDirections = async () =>{
        setLoading(true)
        const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin=${location}&destination=${destination}&key=${process.env.REACT_APP_API_KEY}`)
        setDirections(res.data.routes)
        console.log(res.data.routes)
      }
      getDirections()
      setLoading(false)
    }
  };


  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId={location}>
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            onChange={handleLocationChange}
            placeholder="From State,Country"
          />
          <Form.Text className="text-muted">
            We'll never share your location without your permission.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId={destination}>
          <Form.Label>Destination</Form.Label>
          <Form.Control
            type="text"
            onChange={handleDestinationChange}
            placeholder="To State,Country"
          />
          <Form.Text className="text-muted">
            We'll never share your destination without your permission.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Enter
        </Button>
      </Form>
      {loading? <p>Loading...</p>: <Direction
      directionStats = {directions}
      />}
      
    </Container>
  );
}

export default App;
