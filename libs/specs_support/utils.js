"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _testUtils = _interopRequireDefault(require("react-dom/test-utils"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  findTextField: function findTextField(textFields, labelText) {
    return _lodash["default"].find(textFields, function (field) {
      var label = _testUtils["default"].findRenderedDOMComponentWithTag(field, 'label');

      return label.getDOMNode().textContent.toLowerCase() === labelText;
    });
  }
};
exports["default"] = _default;