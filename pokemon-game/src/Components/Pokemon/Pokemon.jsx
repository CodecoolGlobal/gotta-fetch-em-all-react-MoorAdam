import "./pokemon.css";
import "../callingCard.css";

function Pokemon({ pokemon, onHandlePageState, onHandleSelectedPlayerPokemon }) {

  function prepareName(name) {
    name = name.substring(0, 1).toUpperCase() + name.substring(1);
    return name;
  }

  function handleSelectedPokemonClick() {
    onHandlePageState("battleArena");
    onHandleSelectedPlayerPokemon(pokemon);
  }

  return <div className="pokemon calling-card">
    <img className="pokemon-image" src={pokemon.sprites.front_default} alt="PokemonImage"></img>
    <h3>{prepareName(pokemon.name)}</h3>
    <button onClick={handleSelectedPokemonClick}>Select</button>
  </div>
}

export default Pokemon;