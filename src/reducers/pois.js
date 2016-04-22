const pois = (state = [], action) => {
	switch (action.type) {
		case 'ADD_POI':
      return [{
        id: (state.length === 0) ? 0 : state[0].id + 1,
        ...action.poi
      }, ...state];
		case 'REMOVE_POI':
			return state.filter(poi =>
        poi.id !== action.id
      );
    case 'RECEIVED_POIS':
      return action.pois;
		default:
			return state;
	}
}

export default pois;
