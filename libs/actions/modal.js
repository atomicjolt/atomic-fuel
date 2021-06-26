"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeModal = exports.openModal = exports.Constants = void 0;

var _wrapper = _interopRequireDefault(require("../constants/wrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Local actions
var actions = ['OPEN_MODAL', 'CLOSE_MODAL'];
var Constants = (0, _wrapper["default"])(actions, []);
exports.Constants = Constants;

var openModal = function openModal(modalName) {
  return {
    type: Constants.OPEN_MODAL,
    modalName: modalName
  };
};

exports.openModal = openModal;

var closeModal = function closeModal() {
  return {
    type: Constants.CLOSE_MODAL
  };
};

exports.closeModal = closeModal;