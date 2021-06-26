"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _modal = require("../actions/modal");

var initialState = {
  currentOpenModal: ''
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _modal.Constants.OPEN_MODAL:
      {
        return {
          currentOpenModal: action.modalName
        };
      }

    case _modal.Constants.CLOSE_MODAL:
      {
        return {
          currentOpenModal: ''
        };
      }

    default:
      return state;
  }
};

exports["default"] = _default;