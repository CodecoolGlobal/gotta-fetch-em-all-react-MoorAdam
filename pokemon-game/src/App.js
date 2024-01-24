import './App.css';
import LocationList from './Components/Locations/LocationList';
import { useEffect, useState } from "react";

function App() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://pokeapi.co/api/v2/location');
      const data = await response.json();
      setLocations(data);
    }
    fetchData();
  }, []);

  function onClick() {
    console.log('clicked!');
    setLocations([]);
  }

  return (
    <div className="App">
      <LocationList onClick={onClick} locations={locations}></LocationList>
    </div>
  );
}

export default App;
