function BattlePokemon(props) {
    const pokemon = props.pokemon;

    function prepareName(name) {
        if (name) {
            name = name.substring(0, 1).toUpperCase() + name.substring(1);
        }
        return name;
    }

    return (
        <>
            {props.type === "enemy" ?

                <div className="enemy-pokemon">
                    <h3>{prepareName(pokemon.name)}</h3>
                    <h3>hp: {props.hp}</h3>
                    <img className="pokemonImage" src={pokemon.sprites.other.showdown.front_default} alt="pokemonImage"></img>
                </div> :
                <div className="player-pokemon">
                    <h3>{prepareName(pokemon.name)}</h3>
                    <h3>hp: {props.hp}</h3>
                    <img className="pokemonImage" src={pokemon.sprites.other.showdown.back_default} alt="pokemonImage"></img>
                </div >
            }
        </>
    );

    //this component displays the pokemon in their battle pose.
    //it displays a provided pokemon's gif, stats, hp, etc. 
    //If its a props.type = player, i displays the back of the pokemon with attack button, if enemy, its front snd no buttons

}

export default BattlePokemon;