const user = (state = {}, action) => {
	switch(action.type) {
		case 'HIDE_POI':
			return Object.assign({}, state, action.data);
		default:
			return state;
	}
}

export default user;