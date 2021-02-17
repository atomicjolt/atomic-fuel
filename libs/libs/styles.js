"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function getAddStyles() {
  var selectorTextRegex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /[^{]*/;
  var memo = {};
  var id = 'atomic-fuel-styles';
  var styleEl = document.getElementById(id);
  return function (styles) {
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = id;
      document.head.appendChild(styleEl);
    }
    /*
     * The RegEx below extracts the selectorText from the styles
     * string. For example running this regex on the styles string
     * ".myClass > h1 .myclassTwo {...}" would yield ".myClass > h1 .myclassTwo"
     */


    var classes = styles.match(selectorTextRegex)[0].trim();

    if (memo[classes] === undefined) {
      var styleSheet = styleEl.sheet;
      styleSheet.insertRule(styles, styleSheet.cssRules.length);
      memo[classes] = 1;
    }
  };
}

var _default = getAddStyles();

exports["default"] = _default;