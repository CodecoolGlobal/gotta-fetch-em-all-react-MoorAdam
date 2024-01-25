function EncounterPokemon(props) {
    const encounterPokemon = props.encounterPokemon;

    function prepareName(name) {
        if (name) {
            name = name.substring(0, 1).toUpperCase() + name.substring(1);
        }
        return name;
    }

    return (
        <div className="pokemonBackground">
            <div className="grid-parent enemy-pokemon">
                {encounterPokemon && encounterPokemon.name && encounterPokemon["sprites"]["front_default"] &&
                    (
                        <div>
                            <img className="pokemonImage" src={encounterPokemon["sprites"]["other"]['showdown']['front_default']} alt="EncounterPokemonImg"></img>
                            <h2>{prepareName(encounterPokemon.name)}</h2>
                        </div>
                    )}
            </div>
        </div>)
}
export default EncounterPokemon;