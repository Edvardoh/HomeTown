let nextPoiId = 0;

export function addPoi(poi) {
	return {
		type: 'ADD_POI',
		poi
	}
}