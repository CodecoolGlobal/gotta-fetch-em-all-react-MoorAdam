import "./ending.css";

function Ending({ winner, onHandlePageState, enemyPokemon, onHandleAddPokemonToList }) {

  function handleBackToMainPage() {
    onHandlePageState("locationList");
  }

  function addEnemyPokemonToTheCollection() {
    console.log(enemyPokemon);
    onHandleAddPokemonToList(enemyPokemon);
    handleBackToMainPage();
  }


  return <div className="ending">
    {winner === "player" ? (
      <div className="won-page">
        <h3>You won the game!</h3>
        <iframe src="https://giphy.com/embed/1dMNqVx9Kb12EBjFrc" title='won-gif'></iframe>
        <h3>The pokemon has enterd to your collection!</h3>
        <button onClick={addEnemyPokemonToTheCollection}>Back To The Home Page</button>
      </div>
    ) : winner === "enemy" ? (
      <div className="lost-page">
        <h3>You lost the game!</h3>
        <iframe src="https://giphy.com/embed/5ElYrjwcesoeY" title='lost-gif'></iframe>
        <button onClick={handleBackToMainPage}>Back To The Home Page</button>
      </div>
    ) : (
      <h1>something went wrong.</h1>
    )}
  </div>
}

export default Ending;