import './App.css';
import LocationList from './Components/Locations/LocationList';

function App() {
  function onClick() {
    console.log('clicked!');
  }

  return (
    <div className="App">
      <LocationList onClick={onClick}></LocationList>
    </div>
  );
}

export default App;
