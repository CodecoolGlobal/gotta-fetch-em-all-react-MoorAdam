
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function LocationList(props) {
    const locations = props.locations;


    const handleOnClick = async (locationName) => {
        const selectedLocation = await fetchData(`https://pokeapi.co/api/v2/location/${locationName}`);

        if (selectedLocation.areas.length === 0) {
            setPageState("noEncounterPokemon");
            return;
        }

        const randomAreaURL = getRandomElement(selectedLocation.areas).url;
        const selectedArea = await fetchData(randomAreaURL);

        console.log(selectedArea);
        const randomEncounterPokemon = getRandomElement(selectedArea.pokemon_encounters).pokemon.url;
        const encounterPokemon = await fetchData(randomEncounterPokemon);
        props.onClick(encounterPokemon);
    };
    function prepareName(name) {
        name = name.substring(0, 1).toUpperCase() + name.substring(1);
        name = name.replaceAll('-', ' ');
        return name;
    }

    return (<div className="grid-parent">

        {locations.results && locations.results.map(
            location =>
                <div className="glass" key={location.name}>
                    <img className={'locationImg'} alt={location.name + ".jpg"} src={"./Assets/" + location.name + ".jpg"} />
                    {prepareName(location.name)}
                    <button onClick={() => { handleOnClick(location.name) }}>Visit</button>
                </div>)}
    </div>)

}

export default LocationList;