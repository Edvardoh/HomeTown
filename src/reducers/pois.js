const pois = (state = [], action) => {
	switch(action.type) {
		case 'ADD_POI':
			var newState = state.slice(0);
			newState.push(action.poi);
			return newState;
		case 'REMOVE_POI':
			return state;
		default:
			return state;
	}
}

export default pois;