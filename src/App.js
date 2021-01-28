import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Container, Alert, Button, Form } from "react-bootstrap";

function App() {
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [showAlert, setShowAlert] = useState(false);

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
      alert(`${location} to ${destination}`);
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
            placeholder="Enter Your Location"
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
            placeholder="Enter your Destination"
          />
          <Form.Text className="text-muted">
            We'll never share your destination without your permission.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Enter
        </Button>
      </Form>

      <div className="direction-container"></div>
    </Container>
  );
}

export default App;
