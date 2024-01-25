function PokemonList(props) {
    const pokemons = props.pokemonList;

    function prepareName(name) {
        name = name.substring(0, 1).toUpperCase() + name.substring(1);
        return name;
    }

    return (<>
        {
            pokemons.map((p) =>
                <div key={prepareName(p.name)} className="glass">
                    <img className="pokemonImage" src={p["sprites"]["front_default"]} alt="PokemonImage"></img>
                    <h2>{prepareName(p.name)}</h2>
                    {props.onClick && (
                        <button onClick={() => props.onClick(p)}>Choose!</button>
                    )}
                </div>
            )
        }

    </>)
}
export default PokemonList;