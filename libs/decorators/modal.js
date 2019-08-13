"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = modalDecorator;

var _reactRedux = require("react-redux");

var ModalActions = _interopRequireWildcard(require("../actions/modal"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

// Dont use with decorator syntax but it is a decorator non the less
function modalDecorator(Component, name) {
  var select = function select(_ref) {
    var modal = _ref.modal;
    return {
      isOpen: modal.currentOpenModal === name
    };
  };

  return (0, _reactRedux.connect)(select, ModalActions)(Component);
}