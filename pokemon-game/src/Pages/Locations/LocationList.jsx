import { useEffect, useState } from "react";
import "./locationList.css";
import Location from "../../Components/Location/Location";

async function fetchLocations() {
  const response = await fetch("https://pokeapi.co/api/v2/location");
  return await response.json();
}

function LocationList({ onHandlePageState, onHandleRandomArea }) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function getLocations() {
      const data = await fetchLocations();
      setLocations(data.results);
    }
    getLocations();
  }, [])


  return (
    <div className="location-list container">
      {locations.map(
        location =>
          <Location key={location.name}
            location={location}
            onHandlePageState={onHandlePageState}
            onHandleRandomArea={onHandleRandomArea} />
      )}
    </div>
  )
}

export default LocationList;