/* global describe */
/* global it */
/* global afterEach */

import sinon from 'sinon';
import chai from 'chai';

var expect = chai.expect;

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { setUserId, loadPois, __RewireAPI__ as actions } from '../universal/actions/HomeTownActions.js';
import * as types from '../universal/constants/ActionTypes';

describe('Actions', () => {
  afterEach(function() {
    actions.__ResetDependency__('request');
  });

  /**
   * Example of writing a test on a syncronous action creator
   */
  describe('setUserId', () => {
    it('should return action with type SET_USER_ID and userId equal to 200', () => {
      let action = setUserId(200);
      expect(action.type).to.equal(types.SET_USER_ID);
      expect(action.userId).to.equal(200);
    });

    it('should return action with type SET_USER_ID and userId equal to 6700102', () => {
      let action = setUserId(6700102);
      expect(action.type).to.equal(types.SET_USER_ID);
      expect(action.userId).to.equal(6700102);
    });
  });

  /**
   * Example of writing a test on an asyncronous action creator
   */
  describe('loadPois', () => {
    const mockStore = configureStore([thunk]);
    it('should trigger a LOAD_POIS_REQUEST and LOAD_POIS_SUCCESS action when succesful', (done) => {
      let requestMock = {
        get: () => ({
          set: () => ({
            end: (x) => x(null, {
              body: [ { name: 'Awesome', value: 54 } ]
            })
          })
        })
      };

      actions.__Rewire__('request', requestMock);

      let expectedActions = [
        { type: 'LOAD_POIS_REQUEST' },
        { type: 'LOAD_POIS_SUCCESS', pois: [ { name: 'Awesome', value: 54 } ] }
      ];
      
      let initialState = {homeTownApp: { pois: [], userId: 'baseUser'} };
      let store = mockStore(initialState, expectedActions, done);

      store.dispatch(loadPois());
    });

    it('should trigger a LOAD_POIS_REQUEST and LOAD_POIS_FAILURE action when unsuccessful', (done) => {
      let error = 'An Error Occurred!';
      let requestMock = {
        get: () => ({
          set: () => ({
            end: (x) => x(error)
          })
        })
      };

      actions.__Rewire__('request', requestMock);

      let expectedActions = [
        { type: 'LOAD_POIS_REQUEST' },
        { type: 'LOAD_POIS_FAILURE', error: error }
      ];
      
      let initialState = {homeTownApp: { pois: [], userId: 'baseUser'} };
      let store = mockStore(initialState, expectedActions, done);

      store.dispatch(loadPois());
    });
  });
});
