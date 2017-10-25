'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.getInitialSettings = getInitialSettings;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Just return state. Don't let settings from the server mutate.
exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return state;
};

function getInitialSettings() {
  // Add default settings that can be overridden by values in serverSettings
  var settings = {};

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  _lodash2.default.forEach(args, function (arg) {
    return settings = (0, _extends3.default)({}, settings, arg);
  });
  return settings;
}