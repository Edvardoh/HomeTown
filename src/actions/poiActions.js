export function addPoi(poi) {
	return {
		type: 'ADD_POI',
    poi
	}
}

export function removePoi(id) {
  return {
    type: 'REMOVE_POI',
    id
  }
}

export function fetchPois() {
  return dispatch => {
    fetch('/api/pois')
      .then(resp => resp.json())
      .then(json => dispatch({
        type: 'RECEIVED_POIS',
        pois: json
    }));
  }
}
