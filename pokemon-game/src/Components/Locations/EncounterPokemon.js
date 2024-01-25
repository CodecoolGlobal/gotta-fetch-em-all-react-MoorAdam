function EncounterPokemon(props) {
    const encounterPokemon = props.encounterPokemon;

    return (
        <div className="pokemonBackground">
            <div className="grid-parent">
                {encounterPokemon && encounterPokemon.name && encounterPokemon["sprites"]["front_default"] &&
                    (
                        <div>
                            <img className="pokemonImage" src={encounterPokemon["sprites"]["other"]['showdown']['front_default']} alt="EncounterPokemonImg"></img>
                        </div>
                    )}
            </div>
        </div>)
}
export default EncounterPokemon;