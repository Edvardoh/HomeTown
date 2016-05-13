import { 
  LOAD_POIS_REQUEST, LOAD_POIS_SUCCESS, LOAD_POIS_FAILURE,
  ADD_POI_REQUEST, ADD_POI_SUCCESS, ADD_POI_FAILURE,
  DELETE_POI_REQUEST, DELETE_POI_SUCCESS, DELETE_POI_FAILURE, 
  EDIT_POI_REQUEST, EDIT_POI_SUCCESS, EDIT_POI_FAILURE,
  SET_USER_ID
} from '../constants/ActionTypes';

const initialState = {
  isWorking: false,
  userId: null,
  error: null,
  pois: []
};

export default function pois(state = initialState, action) {
  switch (action.type) {
    case SET_USER_ID:
      return Object.assign({}, state, {
        userId: action.userId
      });
    case ADD_POI_REQUEST:
      return Object.assign({}, state, {
        isWorking: true,
        error: null
      });

    case ADD_POI_SUCCESS:
      let pois = state.pois;
      if (pois.findIndex(poi => poi.id === action.poi.id) === -1) {
        pois = [action.poi, ...state.pois];
      }
      return Object.assign({}, state, {
        isWorking: false,
        error: null,
        pois: pois
      });

    case DELETE_POI_REQUEST:
      return Object.assign({}, state, {
        isWorking: true,
        error: null
      });

    case DELETE_POI_SUCCESS:
      return Object.assign({}, state, {
        isWorking: false,
        error: null,
        pois: state.pois.filter(poi =>
        poi.id !== action.poi.id)
      });

    case EDIT_POI_REQUEST:
      return Object.assign({}, state, {
        isWorking: true,
        error: null
      });

    case EDIT_POI_SUCCESS:
      return Object.assign({}, state, {
        isWorking: false,
        error: null,
        pois: state.pois.map(poi =>
          poi.id === action.poi.id ?
            action.poi :
            poi
        )
      });

    case ADD_POI_FAILURE: 
    case DELETE_POI_FAILURE: 
    case EDIT_POI_FAILURE:
      return Object.assign({}, state, {
        isWorking: false,
        error: action.error,
      }); 

    default:
      return state;
  }
}
