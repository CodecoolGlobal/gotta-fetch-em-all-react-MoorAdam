
import BattlePokemon from "./BattlePokemon.js";
import { useState } from "react";
import PokemonList from "./PokemonList.js";

function EncounterPokemon(props) {
    const encounterPokemon = props.encounterPokemon;
    const [choosenPokemon, setChoosenPokemon] = useState('');

    function handleChoosePokemon(p) {
        setChoosenPokemon(p);
    }

    return (
        <div className="container">
            {encounterPokemon && encounterPokemon.name && encounterPokemon["sprites"]["front_default"] &&
                (
                    choosenPokemon ? (
                        <div className="pokemonBackground">
                            <BattlePokemon type={"enemy"} pokemon={encounterPokemon}></BattlePokemon>
                            <BattlePokemon type={"player"} pokemon={choosenPokemon}></BattlePokemon>
                        </div>
                    ) : (
                        <div className="grid-pokemon-list">
                            <PokemonList pokemonList={props.pokemonList} onClick={handleChoosePokemon}></PokemonList>
                        </div>
                    )
                )}
        </div >)
}

/*
<div>
                            <BattlePokemon type={"enemy"} pokemon={encounterPokemon}></BattlePokemon>
                            <BattlePokemon type={"player"} pokemon={encounterPokemon}></BattlePokemon>
                        </div>
*/

//<img className="pokemonEncounter" src={encounterPokemon["sprites"]["other"]['showdown']['front_default']} alt="EncounterPokemonImg"></img>

export default EncounterPokemon;