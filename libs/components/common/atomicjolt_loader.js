'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = undefined;

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('../../libs/styles');

var _styles2 = _interopRequireDefault(_styles);

var _settings = require('../settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderStyles() {
  var logoColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#444';
  var backgroundColor1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#FFEA00';
  var backgroundColor2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#FFFF56';

  (0, _styles2.default)('.aj-loader{\n    position: relative;\n  }');
  (0, _styles2.default)('.atomicjolt-loading-animation {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    margin: 48px auto;\n    width: 72px;\n    height: 72px;\n    border-radius: 50%;\n    background-image: linear-gradient(to top right, ' + backgroundColor1 + ', ' + backgroundColor2 + ');\n    box-shadow: -2px 3px 6px rgba(0,0,0,0.25);\n  }');
  (0, _styles2.default)('.atomicjolt-loading-animation svg {\n    width: 38px;\n    position: relative;\n    left: -2px;\n    top: -1px;\n  }');
  (0, _styles2.default)('.atomicjolt-loading-animation svg polygon, .atomicjolt-loading-animation svg polyline {\n    fill: none;\n    stroke: ' + logoColor + ';\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-width: 8px;\n  }');
  (0, _styles2.default)('.atomicjolt-loading-animation svg .cls-1 {\n    stroke-dasharray: 0 250;\n    animation: line1 1.5s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);\n  }');
  (0, _styles2.default)('.atomicjolt-loading-animation svg .cls-2 {\n    stroke-dasharray: 0 270;\n    animation: line2 1.5s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);\n  }');
  (0, _styles2.default)('@keyframes line1 {\n    0% {\n      stroke-dasharray: 0 250;\n   }\n    40% {\n      stroke-dasharray: 250 250;\n   }\n    60% {\n      stroke-dasharray: 250 250;\n   }\n    100% {\n      stroke-dasharray: 0 250;\n   }\n  }');
  (0, _styles2.default)('@keyframes line2 {\n    0% {\n      stroke-dasharray: 0 270;\n   }\n    40% {\n      stroke-dasharray: 270 270;\n   }\n    60% {\n      stroke-dasharray: 270 270;\n   }\n    100% {\n      stroke-dasharray: 0 270;\n   }\n  }');
  (0, _styles2.default)('.loader-text{\n    font-size: 24px;\n    font-family: \'Lato\', Arial, Helvetica, sans-serif;\n    font-weight: 500;\n    color: #222;\n    text-align: center;\n    margin: 0 0 48px;\n  }');
}

var _ref = _react2.default.createElement(
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
);

var Loader = exports.Loader = function (_React$PureComponent) {
  (0, _inherits3.default)(Loader, _React$PureComponent);

  function Loader() {
    (0, _classCallCheck3.default)(this, Loader);
    return (0, _possibleConstructorReturn3.default)(this, (Loader.__proto__ || (0, _getPrototypeOf2.default)(Loader)).apply(this, arguments));
  }

  (0, _createClass3.default)(Loader, [{
    key: 'render',
    value: function render() {
      var logoColor = this.props.settings.aj_loader.logoColor || this.props.logoColor || '#444';
      var backgroundColor1 = this.props.settings.aj_loader.backgroundColor1 || this.props.backgroundColor1 || '#FFEA00';
      var backgroundColor2 = this.props.settings.aj_loader.backgroundColor2 || this.props.backgroundColor2 || '#FFFF56';

      renderStyles(logoColor, backgroundColor1, backgroundColor2);

      return _react2.default.createElement(
        'div',
        { className: 'aj-loader' },
        _ref,
        _react2.default.createElement(
          'p',
          { className: 'loader-text' },
          this.props.message
        )
      );
    }
  }]);
  return Loader;
}(_react2.default.PureComponent);

exports.default = (0, _settings2.default)(Loader);