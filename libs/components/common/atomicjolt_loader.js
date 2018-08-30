'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../../libs/styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderStyles() {
  (0, _styles2.default)('.atomicjolt-loading-animation {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-align-items: center;\n    align-items: center;\n    flex-direction: column;\n    margin: 10rem;\n  }');
  (0, _styles2.default)('.atomicjolt-loading-animation svg {\n    width: 80px;\n  }');
  (0, _styles2.default)('.atomicjolt-loading-animation svg polygon, .atomicjolt-loading-animation svg polyline {\n    fill: none;\n    stroke: #333;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-width: 6px;\n  }');
  (0, _styles2.default)('.atomicjolt-loading-animation svg .cls-1 {\n    stroke-dasharray: 0 250;\n    animation: line1 1.5s infinite ease;\n  }');
  (0, _styles2.default)('.atomicjolt-loading-animation svg .cls-2 {\n    stroke-dasharray: 0 270;\n    animation: line2 1.5s infinite ease;\n  }');
  (0, _styles2.default)('@keyframes line1 {\n    0% {\n      stroke-dasharray: 0 250;\n   }\n    40% {\n      stroke-dasharray: 250 250;\n   }\n    60% {\n      stroke-dasharray: 250 250;\n   }\n    100% {\n      stroke-dasharray: 0 250;\n   }\n  }');
  (0, _styles2.default)('@keyframes line2 {\n    0% {\n      stroke-dasharray: 0 270;\n   }\n    40% {\n      stroke-dasharray: 270 270;\n   }\n    60% {\n      stroke-dasharray: 270 270;\n   }\n    100% {\n      stroke-dasharray: 0 270;\n   }\n  }');
}

var _ref = _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    'div',
    { className: 'atomicjolt-loading-animation' },
    _react2.default.createElement(
      'svg',
      { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 91.87 114.09', role: 'img', 'aria-label': 'loading' },
      _react2.default.createElement(
        'g',
        { 'data-name': 'Layer 2' },
        _react2.default.createElement('polygon', { className: 'cls-1', points: '40.45 111.32 89.11 99.26 71.35 19.9 21.1 89.71 40.45 111.32' }),
        _react2.default.createElement('polyline', { className: 'cls-2', points: '50.67 2.77 2.77 69.96 25.47 94.65 66.36 84.13 50.67 2.77 71.35 19.9' })
      )
    )
  )
);

var Loader = function (_React$PureComponent) {
  (0, _inherits3.default)(Loader, _React$PureComponent);

  function Loader() {
    (0, _classCallCheck3.default)(this, Loader);
    return (0, _possibleConstructorReturn3.default)(this, (Loader.__proto__ || (0, _getPrototypeOf2.default)(Loader)).apply(this, arguments));
  }

  (0, _createClass3.default)(Loader, [{
    key: 'render',
    value: function render() {
      renderStyles();
      return _ref;
    }
  }]);
  return Loader;
}(_react2.default.PureComponent);

exports.default = Loader;