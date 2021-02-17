"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAddStyles = getAddStyles;
exports["default"] = void 0;

function getAddStyles() {
  var memo = {};
  var id = 'atomic-fuel-styles';
  var styleEl = document.getElementById(id);
  return function (styles) {
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = id;
      document.head.appendChild(styleEl);
    }

    var classes = styles.match(/.*[^{]/)[0];

    if (memo[classes] === undefined) {
      var styleSheet = styleEl.sheet;
      styleSheet.insertRule(styles, styleSheet.cssRules.length);
      memo[classes] = 1;
    }
  };
}

var _default = getAddStyles();

exports["default"] = _default;