import './App.css';
import LocationList from './Components/Locations/LocationList';
import { useEffect, useState } from "react";
import EncounterPokemon from './Components/Locations/EncounterPokemon';
import NoLocation from './Components/Locations/NoLocation';

function App() {

  const usersPokemon = [
    "https://pokeapi.co/api/v2/pokemon/bulbasaur",
    "https://pokeapi.co/api/v2/pokemon/charizard",
    "https://pokeapi.co/api/v2/pokemon/poliwhirl"
  ]


  const [locations, setLocations] = useState([]);
  const [encounterPokemon, setEncounterPokemon] = useState([]);
  const [pageState, setPageState] = useState("locations");
  const [pokemonList, setPokemonList] = useState([])


  useEffect(() => {
    async function getPokemons() {
      console.log('fetching pokemon');
      const pokePromisses = usersPokemon.map(p => {
        const promis = fetch(p)
          .then((promis) => promis.json())
        return promis
      })
      Promise.all(pokePromisses)
        .then((nextPromis) => {
          setPokemonList(nextPromis)
          //console.log(nextPromis);
        })

    }
    getPokemons();
  }, [!pokemonList])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://pokeapi.co/api/v2/location');
      const data = await response.json();
      setLocations(data);
    }
    fetchData();
  }, []);

  async function fetchData(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  }

  async function handleClickVisitMap(encounterPokemon) {
    setPageState("pokemonList");
    setEncounterPokemon(encounterPokemon);
    setLocations([]);
  }


  function updateTeam(p){
    console.log('updating team with '+p);
    setPokemonList((prevList) => [...prevList, p]);
    console.log(pokemonList);
  }

  async function handleBackToMapSelection() {
    setPageState("locations");
  
    try {
      const response = await fetch('https://pokeapi.co/api/v2/location');
      const data = await response.json();
      setLocations(data);
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  }

  return (
    <div className="App">
      {pageState === "locations" ? (
        <LocationList onClick={handleClickVisitMap} locations={locations}></LocationList>
      ) : pageState === "pokemonList" ? (
        <EncounterPokemon back={handleBackToMapSelection} updateTeam={updateTeam} pokemonList={pokemonList} encounterPokemon={encounterPokemon}></EncounterPokemon>
      ) : pageState === "noEncounterPokemon" ? (
        <NoLocation handleBackToMapSelection={handleBackToMapSelection}></NoLocation>
      ) : (
        <h1>Something went wrong!</h1>
      )}
    </div>
  );
}

export default App;
