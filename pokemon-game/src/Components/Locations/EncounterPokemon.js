
import BattlePokemon from "./BattlePokemon.js";
import { useState, useEffect } from "react";
import PokemonList from "./PokemonList.js";

function EncounterPokemon(props) {
	const encounterPokemon = props.encounterPokemon;

	const [choosenPokemon, setChoosenPokemon] = useState();

	const [choosenPokemonHp, setChoosenPokemonHp] = useState();
	const [encounterPokemonHp, setEncounterPokemonHp] = useState();

	const [gameState, setGameState] = useState('attack');

	useEffect(() => {

		if (choosenPokemon && encounterPokemon) {
			setChoosenPokemonHp(choosenPokemon.stats[0]["base_stat"]);
			setEncounterPokemonHp(encounterPokemon.stats[0]["base_stat"]);
			console.log("trying to set hps (async)")
		}


	}, [choosenPokemon, encounterPokemon])

	function handleChoosePokemon(p) {
		setChoosenPokemon(p);
		setChoosenPokemonHp(p.stats[0].base_stat);
	}

	function attack(attacker, defender, defenderHp, defenderHpSetter) {

		const B = attacker.stats[1]["base_stat"];           //attackers attack power
		const D = defender.stats[2]["base_stat"];           //defenders defence power
		const Z = Math.floor(Math.random() * 255) + 217;    //random number between 217 and 255

		const result = Math.floor(((((2 / 5 + 2) * B * 60 / D) / 50) + 2) * Z / 255);
		console.log(defenderHp - result);
		defenderHpSetter(prevHp => prevHp - result);
	}

	function putEncounterPokemonIntoTeam(p) {
		console.log('putting pokemon into team');
		const updateTeam = props.updateTeam;
		updateTeam(p);
		//props.back();
	}

	return (
		<>
			{encounterPokemon && encounterPokemon.name && encounterPokemon["sprites"]["front_default"] &&
				(
					choosenPokemonHp && encounterPokemonHp ? (
						choosenPokemonHp <= 0 ? (
							<div>
								<p>fainted</p>
							</div>
						) : encounterPokemonHp <= 0 ? (
							<div>
								win
							</div>
						) : (
							<div className="pokemonBackground">
								<BattlePokemon type={"enemy"} hp={encounterPokemonHp} pokemon={encounterPokemon}></BattlePokemon>
								<BattlePokemon type={"player"} hp={choosenPokemonHp} pokemon={choosenPokemon}></BattlePokemon>
								<button onClick={() => (putEncounterPokemonIntoTeam(encounterPokemon))}>Win</button>
								<button onClick={() => (attack(encounterPokemon, choosenPokemon, choosenPokemonHp, setChoosenPokemonHp))}>Defend</button>
								<button onClick={() => (attack(choosenPokemon, encounterPokemon, encounterPokemonHp, setEncounterPokemonHp))}>attack</button>
							</div>
						)
					) : (
						<div className="grid-pokemon-list">
							<PokemonList pokemonList={props.pokemonList} onClick={handleChoosePokemon}></PokemonList>
						</div>

					)
				)}
		</>
	)
}

export default EncounterPokemon;