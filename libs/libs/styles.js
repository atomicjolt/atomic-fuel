'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addStyles;
function addStyles(styles) {
  var id = 'atomic-fuel-styles';
  var styleEl = document.getElementById(id);
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = id;
    document.head.appendChild(styleEl);
  }
  var styleSheet = styleEl.sheet;
  styleSheet.insertRule(styles, styleSheet.cssRules.length);
}