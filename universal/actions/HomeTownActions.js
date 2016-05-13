import * as types from '../constants/ActionTypes';
import request from 'superagent';

const serverUrl = '';
const poisUrl = `${serverUrl}/api/0/pois`;

export function setUserId(userId) {
  return {
    type: types.SET_USER_ID,
    userId
  };
}

export function loadPois() {
  return dispatch => {
    dispatch(loadPoisRequest());
    return request
      .get(poisUrl)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          dispatch(loadPoisFailure(err));
        } else {
          dispatch(loadPoisSuccess(res.body));
        }
      });
  };
}

export function loadPoisRequest() {
  return {
    type: types.LOAD_POIS_REQUEST
  };
}

export function loadPoisSuccess(pois) {
  return {
    type: types.LOAD_POIS_SUCCESS,
    pois
  };
}

export function loadPoisFailure(error) {
  return {
    type: types.LOAD_POIS_FAILURE,
    error
  };
}

export function addPoi(poi) {
  console.log('Add poi', poi);
  return dispatch => {
    dispatch(addPoiRequest(poi));

    return request
      .post(poisUrl)
      .send(poi)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          dispatch(addPoiFailure(err, poi));
        } else {
          dispatch(addPoiSuccess(res.body));
        }
      });
  };
}

export function addPoiRequest(poi) {
  return {
    type: types.ADD_POI_REQUEST,
    poi
  };
}

export function addPoiSuccess(poi) {
  return {
    type: types.ADD_POI_SUCCESS,
    poi
  };
}

export function addPoiFailure(error, poi) {
  return {
    type: types.ADD_POI_FAILURE,
    error
  };
}

export function deletePoi(poi) {
  return dispatch => {
    dispatch(deletePoiRequest(poi));

    return request
      .del(poisUrl + '/' + poi.id)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          dispatch(deletePoiFailure(err, poi));
        } else {
          dispatch(deletePoiSuccess(res.body));
        }
      });
  };
}

export function deletePoiRequest(poi) {
  return {
    type: types.DELETE_POI_REQUEST,
    poi
  };
}

export function deletePoiSuccess(poi) {
  return {
    type: types.DELETE_POI_SUCCESS,
    poi
  };
}

export function deletePoiFailure(error, poi) {
  return {
    type: types.DELETE_POI_FAILURE,
    error,
    poi
  };
}

export function editPoi(poi) {
  return dispatch => {
    dispatch(editPoiRequest(poi));

    return request
      .post(poisUrl + '/' + poi.id)
      .send(poi)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          dispatch(editPoiFailure(err, poi));
        } else {
          dispatch(editPoiSuccess(res.body));
        }
      });
  };
}

export function editPoiRequest(poi) {
  return {
    type: types.EDIT_POI_REQUEST,
    poi
  };
}

export function editPoiSuccess(poi) {
  return {
    type: types.EDIT_POI_SUCCESS,
    poi
  };
}

export function editPoiFailure(error, poi) {
  return {
    type: types.EDIT_POI_FAILURE,
    error,
    poi
  };
}
