import { useEffect, useState } from 'react';
import './App.css';
import LocationList from './Pages/Locations/LocationList';
import NoAreaFound from './Pages/Locations/Area/NoAreaFound';
import PokemonList from './Pages/Pokemons/PokemonList';
import BattleArena from './Pages/Battle/BattleArena';

async function fetchPokemon(pokemonURL) {
  const response = await fetch(pokemonURL);
  return await response.json();
}

function App() {
  const [pageState, setPageState] = useState("locationList");
  const [playerPokemon, setPlayerPokemon] = useState(null);
  const [randomArea, setRandomArea] = useState(null);
  const [pokemons, setPokemons] = useState([]);


  useEffect(() => {
    const defaultPokemonsURL = [
      "https://pokeapi.co/api/v2/pokemon/bulbasaur",
      "https://pokeapi.co/api/v2/pokemon/charizard",
      "https://pokeapi.co/api/v2/pokemon/poliwhirl"
    ];

    async function getPokemons() {
      const allDefaultPokemonPromise = defaultPokemonsURL.map(fetchPokemon);
      const pokemons = await Promise.all(allDefaultPokemonPromise);
      setPokemons(pokemons);
    }
    getPokemons();
  }, [])

  function handleSetPageState(pageState) {
    setPageState(pageState);
  }

  function handleSetPlayerPokemon(selectedPlayerPokemon) {
    setPlayerPokemon(selectedPlayerPokemon);
  }

  function handleSetRandomArea(randomArea) {
    setRandomArea(randomArea);
  }


  function handleAddPokemonToList(pokemon) {
    if (!pokemons.some(p => p.name === pokemon.name)) {
      setPokemons((prevList) => [...prevList, pokemon]);
      console.log(pokemons);
    }
  }

  return (
    <div className="App">
      {
        pageState === "noAreaFound" ? (
          <NoAreaFound onHandlePageState={handleSetPageState} />
        ) : pageState === "characterSelection" ? (
          <PokemonList onHandlePageState={handleSetPageState}
            onHandleSelectedPlayerPokemon={handleSetPlayerPokemon}
            pokemons={pokemons} />
        ) : pageState === "locationList" ? (
          <LocationList onHandlePageState={handleSetPageState}
            onHandleRandomArea={handleSetRandomArea} />
        ) : pageState === "battleArena" ? (
          <BattleArena playerPokemon={playerPokemon}
            randomArea={randomArea}
            onHandlePageState={handleSetPageState}
            onHandleAddPokemonToList={handleAddPokemonToList} />
        ) : (
          <h1>Something went wrong!</h1>
        )
      }
    </div >
  );
}

export default App;
