'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DONE = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (actionTypes, asyncActionTypes) {

  var types = _lodash2.default.reduce(actionTypes, function (result, key) {
    return _extends({}, result, _defineProperty({}, key, key));
  }, {});

  types = _lodash2.default.reduce(asyncActionTypes, function (result, key) {
    var _extends3;

    return _extends({}, result, (_extends3 = {}, _defineProperty(_extends3, key, key), _defineProperty(_extends3, '' + key + DONE, '' + key + DONE), _extends3));
  }, types);

  types.DONE = DONE;

  return types;
};

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DONE = exports.DONE = '_DONE';