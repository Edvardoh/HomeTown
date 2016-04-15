import { combineReducers } from 'redux';
import pois from './pois';
import user from './user';

export default combineReducers({
	pois,
	user
});