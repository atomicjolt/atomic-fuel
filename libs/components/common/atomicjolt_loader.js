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

require('./_atomicjolt-loader.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    'div',
    { className: 'loading' },
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
      return _ref;
    }
  }]);
  return Loader;
}(_react2.default.PureComponent);

exports.default = Loader;