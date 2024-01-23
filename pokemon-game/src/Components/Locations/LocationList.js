import { useEffect, useState } from "react";

function LocationList() {
    const [locations, setLocations] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://pokeapi.co/api/v2/location');
            const data = await response.json();
            setLocations(data);
        }
        fetchData();
    }, []);

    return (<div className="locationList">
        {locations.results && locations.results.map(location => <div className="location" key={location.name}>{location.name}</div>)}
    </div>)

}

export default LocationList;