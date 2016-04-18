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
