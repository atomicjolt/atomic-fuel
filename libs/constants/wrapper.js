'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DONE = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

exports.default = function (actionTypes, asyncActionTypes) {

  var types = _lodash2.default.reduce(actionTypes, function (result, key) {
    return (0, _extends5.default)({}, result, (0, _defineProperty3.default)({}, key, key));
  }, {});

  types = _lodash2.default.reduce(asyncActionTypes, function (result, key) {
    var _extends3;

    return (0, _extends5.default)({}, result, (_extends3 = {}, (0, _defineProperty3.default)(_extends3, key, key), (0, _defineProperty3.default)(_extends3, '' + key + DONE, '' + key + DONE), _extends3));
  }, types);

  types.DONE = DONE;

  return types;
};

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DONE = exports.DONE = '_DONE';