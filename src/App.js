import logo from './logo.svg';
import './App.css';
import React,{ useState, useEffect} from 'react';

function App() {
const [location, setLocation]= useState('')
const [destination, setDestination] = useState('')

  const handleLocationChange=(e)=>{
const {value} = e.target
setLocation(value)

  }
  const handleDestinationChange=(e)=>{
    const {value} = e.target
    setDestination(value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!location || !destination){
      alert('enter location or destination')
    }else{
      alert(`${location} to ${destination}`)
    }
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <input
      name='location'
      onChange={handleLocationChange}
      value={location}
      placeholder='enter location'
      />
      <br/>
      <input
      name='destination'
      onChange={handleDestinationChange}
      value={destination}
      placeholder='enter destination'
      />
      <br/>
      
      <button>Enter</button>
      </form>
     
      
    </div>
  );
}

export default App;
