import { useEffect, useState } from "react";

function LocationList(props) {
    const [locations, setLocations] = useState([]);
    const handleOnClick = props.onClick;
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://pokeapi.co/api/v2/location');
            const data = await response.json();
            setLocations(data);
        }
        fetchData();
    }, []);

    return (<div className="locationList, grid-parent">
        
        {locations.results && locations.results.map(
            location =>
                <div className="location" key={location.name}>
                    <img alt={location.name + ".jpg"} src={"./Assets/" + location.name + ".jpg"} />
                    {location.name}
                    <button onClick={handleOnClick}>Visit</button>
                </div>)}
    </div>)

}

export default LocationList;