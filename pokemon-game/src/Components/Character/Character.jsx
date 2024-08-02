import HealthBar from "./HealthBar/HealthBar";
import "./character.css";

function Character({ characterType, pokemon, pokemonHp }) {
  function prepareName(name) {
    return name.substring(0, 1).toUpperCase() + name.substring(1);
  }

  return <div className={characterType + "-pokemon"}>
    <h3>{prepareName(pokemon.name)}</h3>
    <HealthBar currentHealth={pokemonHp} maxHealth={pokemon.stats[0].base_stat} />
    <img className="pokemon-image" src={characterType === "player" ? pokemon.sprites.other.showdown.back_default : pokemon.sprites.other.showdown.front_default} alt="pokemonImage"></img>
  </div>
}

export default Character;