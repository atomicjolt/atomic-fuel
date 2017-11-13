'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = require('../actions/modal');

var initialState = {
  currentOpenModal: ''
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  switch (action.type) {
    case _modal.Constants.OPEN_MODAL:
      {
        return { currentOpenModal: action.modalName };
      }
    case _modal.Constants.CLOSE_MODAL:
      {
        return { currentOpenModal: '' };
      }
    default:
      return state;
  }
};