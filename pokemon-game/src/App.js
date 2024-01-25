import './App.css';
import LocationList from './Components/Locations/LocationList';
import { useEffect, useState } from "react";
import PokemonList from './Components/Locations/PokemonList';
import EncounterPokemon from './Components/Locations/EncounterPokemon';


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
    const responseJSON = await response.json();
    return responseJSON;
  }

  async function onClickVisitMap(locationName) {
    setPageState("pokemonList");

    const selectedLocationJSON = await fetchData(`https://pokeapi.co/api/v2/location/${locationName}`);

    if (selectedLocationJSON.areas.length === 0) {
      setPageState("noEncounterPokemon");
      return;
    }

    const randomAreaURL = getRandomArea(selectedLocationJSON);
    const selectedAreaJSON = await fetchData(randomAreaURL);

    console.log(selectedAreaJSON);
    const randomEncounterPokemon = getRandomEncounterPokemon(selectedAreaJSON);
    const encounterPokemonJSON = await fetchData(randomEncounterPokemon);
    setEncounterPokemon(encounterPokemonJSON);
    setLocations([]);
  }

  function getRandomArea(data) {
    const randomAreaNumber = Math.floor(Math.random() * data.areas.length);
    return data.areas[randomAreaNumber].url;
  }

  function getRandomEncounterPokemon(data) {
    const randomEncounterIndexNumber = Math.floor(Math.random() * data.pokemon_encounters.length);
    return data.pokemon_encounters[randomEncounterIndexNumber].pokemon.url;
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
        <LocationList onClick={onClickVisitMap} locations={locations}></LocationList>
      ) : pageState === "pokemonList" ? (
        <EncounterPokemon back={handleBackToMapSelection} updateTeam={updateTeam} pokemonList={pokemonList} encounterPokemon={encounterPokemon}></EncounterPokemon>
      ) : pageState === "noEncounterPokemon" ? (
        <div className='no-location'>
          <h1>This location doesn't seem to have any pokémon.</h1>
          <iframe src="https://giphy.com/embed/26gJzump2Q03pbOmc" title="pokemon"></iframe>
          <button onClick={handleBackToMapSelection}>Select a New Map</button>
        </div>
      ) : (
        <PokemonList pokemonList={pokemonList}></PokemonList>
      )}
    </div>
  );
}

export default App;
