"use strict";

var _errors = require("../actions/errors");

var _errors2 = _interopRequireDefault(require("./errors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('error reducer', function () {
  describe('initial state', function () {
    it('has no errors', function () {
      var initialState = [];
      var state = (0, _errors2["default"])(initialState, {
        type: 'initializeme'
      });
      expect(state).toEqual([]);
    });
  });
  describe('error update', function () {
    it('has a error token', function () {
      var action = {
        type: 'AnythingisDone',
        error: new Error('something terrible')
      };
      var newState = (0, _errors2["default"])([], action);
      expect(newState[0]).toEqual({
        error: action.error,
        message: action.error.message,
        context: action
      });
    });
  });
  describe('clear errors', function () {
    it('clear out the errors', function () {
      var action = {
        type: 'AnythingisDone',
        error: new Error('something terrible')
      };
      var state = (0, _errors2["default"])([], action);
      expect(state[0]).toEqual({
        error: action.error,
        message: action.error.message,
        context: action
      });
      var clearAction = {
        type: _errors.Constants.CLEAR_ERRORS
      };
      var cleanState = (0, _errors2["default"])(state, clearAction);
      expect(cleanState).toEqual([]);
    });
  });
  describe('add error', function () {
    it('adds a new errors', function () {
      var initialState = [];
      var state = (0, _errors2["default"])(initialState, {
        type: 'initializeme'
      });
      expect(state).toEqual([]);
      var action = {
        type: _errors.Constants.ADD_ERROR,
        payload: {
          error: new Error('something terrible')
        }
      };
      var errorState = (0, _errors2["default"])(state, action);
      expect(errorState[0]).toEqual(action.payload, _errors2["default"]);
    });
  });
});