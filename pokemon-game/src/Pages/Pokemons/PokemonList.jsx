import Pokemon from "../../Components/Pokemon/Pokemon";
import "./pokemonList.css";


function PokemonList({ onHandlePageState, onHandleSelectedPlayerPokemon, pokemons }) {

  return <div className="pokemon-list-wrapper">
    <div className="pokemon-list">
      {pokemons.map(pokemon => (
        <Pokemon key={pokemon.name}
          pokemon={pokemon}
          onHandlePageState={onHandlePageState}
          onHandleSelectedPlayerPokemon={onHandleSelectedPlayerPokemon} />
      ))}
    </div>
  </div>
}

export default PokemonList;