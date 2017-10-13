'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  findTextField: function findTextField(textFields, labelText) {
    return _lodash2.default.find(textFields, function (field) {
      var label = _testUtils2.default.findRenderedDOMComponentWithTag(field, 'label');
      return label.getDOMNode().textContent.toLowerCase() === labelText;
    });
  }
};