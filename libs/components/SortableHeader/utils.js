"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getID = void 0;

var getID = function getID() {
  return parseInt(String(Math.random() * 1e10), 27).toString();
};

exports.getID = getID;