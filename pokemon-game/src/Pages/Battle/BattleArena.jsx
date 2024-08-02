import { useEffect, useState } from "react";
import Character from "../../Components/Character/Character";
import "./battleArena.css";
import Loading from "../../Components/Loading/Loading";
import Ending from "../Ending.jsx/Ending";

async function fetchEnemyPokemon(url) {
  const response = await fetch(url);
  return await response.json();
}

function BattleArena({ playerPokemon, randomArea, onHandlePageState, onHandleAddPokemonToList }) {
  const [enemyPokemon, setEnemyPokemon] = useState(null);
  const [isPlayerTurn, setIsPlayerTurn] = useState(false);
  const [enemyPokemonHp, setEnemyPokemonHp] = useState(null);
  const [playerPokemonHp, setPlayerPokemonHp] = useState(playerPokemon?.stats[0]?.base_stat ?? 0);
  const [loading, setLoading] = useState(true);
  const [matchStarted, setMatchStarted] = useState(false);
  const [winner, setWinner] = useState(null);


  useEffect(() => {
    async function getRandomEnemyPokemon() {
      const url = await getRandomEnemyPokemonIndexNumber();
      const enemy = await fetchEnemyPokemon(url);
      setEnemyPokemon(enemy);
      setEnemyPokemonHp(enemy?.stats[0]?.base_stat);

      setTimeout(() => {
        setLoading(false);
      }, 1000)
    }

    function getRandomEnemyPokemonIndexNumber() {
      const enemyPokemons = randomArea?.pokemon_encounters;
      const randomEnemyIndexNumber = Math.floor(Math.random() * enemyPokemons.length);
      return enemyPokemons[randomEnemyIndexNumber].pokemon.url;
    }

    getRandomEnemyPokemon();
  }, [randomArea]);


  function calculateAttackDamage(attacker, defender) {
    const B = attacker.stats[1]["base_stat"];
    const D = defender.stats[2]["base_stat"];
    const Z = Math.floor(Math.random() * 255) + 217;

    return Math.floor(((((2 / 5 + 2) * B * 60 / D) / 50) + 2) * Z / 255);
  }



  function setnewHpAfterAttack(prevHp, damage, winner) {
    const newHp = prevHp - damage;
    if (newHp <= 0) {
      setMatchStarted(false);
      setWinner(winner);
    }
    return newHp;
  }

  useEffect(() => {
    if (matchStarted) {
      const battleInterval = setInterval(() => {
        function handleAttack() {
          if (isPlayerTurn) {
            const damage = calculateAttackDamage(playerPokemon, enemyPokemon);
            setEnemyPokemonHp(prevHp => setnewHpAfterAttack(prevHp, damage, "player"));
          } else {
            const damage = calculateAttackDamage(enemyPokemon, playerPokemon);
            setPlayerPokemonHp(prevHp => setnewHpAfterAttack(prevHp, damage, "enemy"));
          }
          setIsPlayerTurn(!isPlayerTurn);
        }
        handleAttack();
      }, 1000);

      return () => clearInterval(battleInterval);
    }
  }, [matchStarted, isPlayerTurn, playerPokemon, enemyPokemon]);


  if (loading) {
    return <Loading />
  }

  return <>
    {winner !== null ? (
      <Ending winner={winner} onHandlePageState={onHandlePageState} enemyPokemon={enemyPokemon} onHandleAddPokemonToList={onHandleAddPokemonToList} />
    ) : (
      <div className="battle-arena">
        <button onClick={() => setMatchStarted(true)}>Start The Fight</button>
        <Character characterType={"enemy"} pokemon={enemyPokemon} pokemonHp={enemyPokemonHp} />
        <Character characterType={"player"} pokemon={playerPokemon} pokemonHp={playerPokemonHp} />
      </div>
    )
    }
  </>
}

export default BattleArena;