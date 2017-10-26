'use strict';

var _configure_store = require('./configure_store');

var _configure_store2 = _interopRequireDefault(_configure_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('configure store', function () {
  it('sets up initial state', function () {
    var settings = {
      csrf: 'csrf_token',
      apiUrl: 'http://www.example.com'
    };
    var initialState = {
      jwt: 'jwt_token',
      settings: settings
    };
    var rootReducer = function rootReducer(state) {
      return state;
    };
    var middleware = [];
    var store = (0, _configure_store2.default)(initialState, rootReducer, middleware);
    expect(store.getState().settings).toBe(settings);
    expect(store.getState().jwt).toBe('jwt_token');
  });
});