import { useState } from "react"

function HpBar() {



    return (
        <div>
            <div class="health-bar" data-total="1000" data-value="1000">
                <div class="bar">
                    <div class="hit"></div>
                </div>
            </div>
            <br />
        </div>
    )
}

function BattlePokemon(props) {

    const [pokemon, setPokemon] = useState(props.pokemon)
    const [hp, setHp] = useState()

    return (
        <div>
            
            {props.type === "enemy" ?
                <div className="enemyPokemon">
                    <h3>{pokemon.name}</h3>
                    <img src={pokemon.sprites.other.showdown.front_default}></img>
                </div> :
                <div className="playerPokemon">
                    <h3>{pokemon.name}</h3>
                    <img src={pokemon.sprites.other.showdown.back_default}></img>
                </div>
            }

        </div>
    );

    //this component displays the pokemon in their battle pose.
    //it displays a provided pokemon's gif, stats, hp, etc. 
    //If its a props.type = player, i displays the back of the pokemon with attack button, if enemy, its front snd no buttons

}

export default BattlePokemon;