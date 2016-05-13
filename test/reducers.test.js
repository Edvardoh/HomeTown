/* global describe */
/* global it */
/* global afterEach */

import 'babel-polyfill'; // For use of Object.assign

import sinon from 'sinon';
import chai from 'chai';

var expect = chai.expect;

import reducer from '../universal/reducers';
import * as actions from '../universal/actions/HomeTownActions.js';

describe('Reducers', () => {

  /**
   * Example of writing a test on a reducing functiom
   */
  describe('setUserId', () => {
    it('should set user id', () => {
      let initialStateForTest = { userId: null };
      let userId = 234;
      let action = actions.setUserId(userId);

      expect(initialStateForTest.userId).to.be.null;

      let state = reducer(initialStateForTest, action);
      expect(state.userId).to.equal(userId);
    });
  });

  describe('addPoi', () => {
    describe('request', () => {
      it('should set isWorking to true', () => {
        let initialStateForTest = { isWorking: false };
        let action = actions.addPoiRequest();

        expect(initialStateForTest.isWorking).to.be.false;

        let state = reducer(initialStateForTest, action);
        expect(state.isWorking).to.be.true;
      });
    });

    describe('success', () => {
      it('should set isWorking to false and add poi to pois', () => {
        let pois = [
          { id: 22, name: 'Entry' }
        ];
        let initialStateForTest = { isWorking: true, pois: pois };
        let poi = { id: 25, name: 'Another Entry' };

        let action = actions.addPoiSuccess(poi);

        expect(initialStateForTest.isWorking).to.be.true;
        expect(initialStateForTest.pois.length).to.equal(pois.length);


        let state = reducer(initialStateForTest, action);
        expect(state.isWorking).to.be.false;
        expect(state.pois.length).to.equal(pois.length + 1);
      });
    });

    describe('failure', () => {
      it('should set isWorking to false and error and not change pois', () => {
        let pois = [
          { id: 22, name: 'Entry' }
        ];
        let initialStateForTest = { isWorking: true, pois: pois, error: null };
        let error = 'some error';

        let action = actions.addPoiFailure(error);

        expect(initialStateForTest.isWorking).to.be.true;
        expect(initialStateForTest.error).to.be.null;
        expect(initialStateForTest.pois.length).to.equal(pois.length);


        let state = reducer(initialStateForTest, action);
        expect(state.isWorking).to.be.false;
        expect(state.error).to.equal(error);
        expect(state.pois.length).to.equal(pois.length);
      });
    });
  });
});
