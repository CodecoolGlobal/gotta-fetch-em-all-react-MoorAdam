import './App.css';
import LocationList from './Components/Locations/LocationList';
import { useEffect, useState } from "react";

function App() {
  const [locations, setLocations] = useState([]);
  const [encounterPokemon, setEncounterPokemon] = useState([]);
  const [pageState, setPageState] = useState("locations");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://pokeapi.co/api/v2/location');
      const data = await response.json();
      setLocations(data);
    }
    fetchData();
  }, []);


  async function onClickVisitMap(locationName) {
    setPageState("pokemonList");
    setLocations([]);

    const locationResponse = await fetch(`https://pokeapi.co/api/v2/location/${locationName}`);
    const selectedLocationJSON = await locationResponse.json();

    const randomAreaURL = getRandomArea(selectedLocationJSON);
    const randomAreaResponse = await fetch(randomAreaURL);
    const SelectedAreaJSON = await randomAreaResponse.json();
    setEncounterPokemon(SelectedAreaJSON.pokemon_encounters);
    console.log(SelectedAreaJSON.pokemon_encounters);
  }

  function getRandomArea(data) {
    const randomAreaNumber = Math.floor(Math.random() * data.areas.length);
    const randomAreaURL = data.areas[randomAreaNumber].url;
    return randomAreaURL;
  }

  return (
    <div className="App" >
      {
        pageState === "locations" ? (
          <LocationList onClick={onClickVisitMap} locations={locations}></LocationList>
        ) : pageState === "pokemonList" ? (<div className='pokemonBackground'>Pokemonlist PLACEHOLDER</div>) : ('battle PLACEHOLDER')
      }
    </div>
  );
}

export default App;
