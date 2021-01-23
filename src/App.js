import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";

function App() {
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");

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
      <form onSubmit={handleSubmit}>
        <input
          name="location"
          onChange={handleLocationChange}
          value={location}
          placeholder="enter location"
        />
        <br />
        <input
          name="destination"
          onChange={handleDestinationChange}
          value={destination}
          placeholder="enter destination"
        />
        <br />
        <Button>Enter</Button>
      </form>
    </Container>
  );
}

export default App;
