
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
		props.back()
	}

	// 

	return (
		<>
			{encounterPokemon && encounterPokemon.name && encounterPokemon.sprites.front_default && (
				choosenPokemonHp !==undefined && encounterPokemonHp !== undefined ? (
					choosenPokemonHp <= 0 ? (
						<div className="lost-page">
							<h3>You lost the game!</h3>
							<iframe src="https://giphy.com/embed/5ElYrjwcesoeY" title='lost-gif'></iframe>
							<button onClick={() => (props.back())}>Back To The Home Page</button>
						</div>
					) : encounterPokemonHp <= 0 ? (
						<div className="won-page">
							<h3>You won the game!</h3>
							<iframe src="https://giphy.com/embed/1dMNqVx9Kb12EBjFrc" title='won-gif'></iframe>
							<h3>The pokemon has enterd to your collection!</h3>
							<button onClick={() => (putEncounterPokemonIntoTeam(encounterPokemon))}>Back To The Home Page</button>
						</div>
					) : (
						<>
							<div className="pokemonBackground"></div>
							<BattlePokemon type={"enemy"} hp={encounterPokemonHp} pokemon={encounterPokemon}></BattlePokemon>
							<BattlePokemon type={"player"} hp={choosenPokemonHp} pokemon={choosenPokemon}></BattlePokemon>
							<div className="buttons">
								<button onClick={() => (attack(encounterPokemon, choosenPokemon, choosenPokemonHp, setChoosenPokemonHp))}>Defend</button>
								<button onClick={() => (attack(choosenPokemon, encounterPokemon, encounterPokemonHp, setEncounterPokemonHp))}>Attack</button>
							</div>
						</>
					)
				) : (
					<div className="grid-pokemon-list">
						<PokemonList pokemonList={props.pokemonList} onClick={handleChoosePokemon}></PokemonList>
					</div>
				)
			)}
		</>
	);

}

export default EncounterPokemon;