function NoLocation(props) {
    const handleBackToMapSelection = props.handleBackToMapSelection;
    return <div className='no-location'>
        <h1>This location doesn't seem to have any pokémon.</h1>
        <iframe src="https://giphy.com/embed/26gJzump2Q03pbOmc" title="pokemon"></iframe>
        <button onClick={handleBackToMapSelection}>Select a New Map</button>
    </div>
}

export default NoLocation;