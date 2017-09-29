'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (dispatch, currentUserId) {
  var refresh = 1000 * 60 * 20; // every 20 minutes
  setInterval(function () {
    dispatch((0, _jwt.refreshJwt)(currentUserId));
  }, refresh);
};

var _jwt = require('../actions/jwt');