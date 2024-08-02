import "./location.css";
import "../callingCard.css";

async function fetchData(url) {
  const response = await fetch(url);
  return await response.json();
}

function Location({ location, onHandlePageState, onHandleRandomArea }) {

  async function onClickVisitMap(locationName) {
    const selectedLocation = await fetchData(`https://pokeapi.co/api/v2/location/${locationName}`);
    const areasList = selectedLocation.areas;
    onHandlePageState("locationList");
    if (areasList.length === 0) {
      onHandlePageState("noAreaFound");
    } else {
      onHandlePageState("characterSelection");
      getRandomArea(areasList);
    }
  }

  async function getRandomArea(areasList) {
    const randomAreaNumber = Math.floor(Math.random() * areasList.length);
    const randomArea = await fetchData(areasList[randomAreaNumber].url);
    onHandleRandomArea(randomArea);
  }


  function prepareName(name) {
    name = name.substring(0, 1).toUpperCase() + name.substring(1);
    name = name.replaceAll('-', ' ');
    return name;
  }

  return (
    <div className="location calling-card">
      <img className="location-img" alt={location.name + ".jpg"} src={"./Assets/" + location.name + ".jpg"}></img>
      <h3>{prepareName(location.name)}</h3>
      <button onClick={() => { onClickVisitMap(location.name) }}>Visit</button>
    </div>
  )
}

export default Location;