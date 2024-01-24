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
  const [pokemonList, setPokemonList] = useState([])
  const [pageState, setPageState] = useState("pokemonList");

  useEffect(()=>{
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
  })


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
    <div className="App" >
      
      {
        pageState === "locations" ? (
          <LocationList onClick={onClick} locations={locations}></LocationList>
        ) : pageState === "pokemonList" ? (<PokemonList pokemonList={pokemonList}></PokemonList>) : ('battle PLACEHOLDER')
      }
    </div>
  );
}

//<button onClick={() => (getPokemons())}>Pokemon</button>

export default App;
