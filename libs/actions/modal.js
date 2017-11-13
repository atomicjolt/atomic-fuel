'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeModal = exports.openModal = exports.Constants = undefined;

var _wrapper = require('../constants/wrapper');

var _wrapper2 = _interopRequireDefault(_wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Local actions
var actions = ['OPEN_MODAL', 'CLOSE_MODAL'];

var Constants = exports.Constants = (0, _wrapper2.default)(actions, []);

var openModal = exports.openModal = function openModal(modalName) {
  return { type: Constants.OPEN_MODAL, modalName: modalName };
};

var closeModal = exports.closeModal = function closeModal() {
  return { type: Constants.CLOSE_MODAL };
};