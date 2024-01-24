import './App.css';
import LocationList from './Components/Locations/LocationList';
import { useEffect, useState } from "react";
import PokemonList from './Components/Locations/PokemonList';



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
      const pokePromisses = usersPokemon.map(p => {
        const promis = fetch(p)
          .then((promis) => promis.json())
        return promis
      })
      Promise.all(pokePromisses)
        .then((nextPromis) => {
          setPokemonList(nextPromis)
          console.log(nextPromis);
        })

    }
    getPokemons();
  }, ([]))

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
        ) : pageState === "pokemonList" ?
          (<PokemonList pokemonList={pokemonList}></PokemonList>) :
          ('battle PLACEHOLDER')
      }
    </div>
  );
}

//<button onClick={() => (getPokemons())}>Pokemon</button>

export default App;
