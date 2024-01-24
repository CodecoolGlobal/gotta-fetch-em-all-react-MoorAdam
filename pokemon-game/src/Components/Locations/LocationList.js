function LocationList(props) {
    const locations = props.locations;
    const handleOnClick = props.onClick;
    function prepareName(name) {
        name = name.substring(0, 1).toUpperCase() + name.substring(1);
        name = name.replaceAll('-', ' ');
        return name;
    }

    return (<div className="locationList, grid-parent">

        {locations.results && locations.results.map(
            location =>
                <div className="glass" key={location.name}>
                    <img alt={location.name + ".jpg"} src={"./Assets/" + location.name + ".jpg"} />
                    {prepareName(location.name)}
                    <button onClick={handleOnClick}>Visit</button>
                </div>)}
    </div>)

}

export default LocationList;