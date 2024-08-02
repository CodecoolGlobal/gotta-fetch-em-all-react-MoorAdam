import "./noAreaFound.css";

function NoAreaFound({ onHandlePageState }) {
	return <div className="no-area-found">
		<h1>This location doesn't seem to have any area.</h1>
		<iframe src="https://giphy.com/embed/26gJzump2Q03pbOmc" title="pokemon"></iframe>
		<button onClick={() => onHandlePageState("locationList")}>Select a New Map</button>
	</div>
}

export default NoAreaFound;