"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Loader = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("../../libs/styles"));

var _settings = require("../settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function renderStyles() {
  var logoColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#444';
  var backgroundColor1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#FFEA00';
  var backgroundColor2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#FFFF56';
  (0, _styles["default"])(".aj-loader{\n    position: relative;\n  }");
  (0, _styles["default"])(".atomicjolt-loading-animation {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    margin: 48px auto;\n    width: 72px;\n    height: 72px;\n    border-radius: 50%;\n    background-image: linear-gradient(to top right, ".concat(backgroundColor1, ", ").concat(backgroundColor2, ");\n    box-shadow: -2px 3px 6px rgba(0,0,0,0.25);\n  }"));
  (0, _styles["default"])(".atomicjolt-loading-animation svg {\n    width: 38px;\n    position: relative;\n    left: -2px;\n    top: -1px;\n  }");
  (0, _styles["default"])(".atomicjolt-loading-animation svg polygon, .atomicjolt-loading-animation svg polyline {\n    fill: none;\n    stroke: ".concat(logoColor, ";\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-width: 8px;\n  }"));
  (0, _styles["default"])(".atomicjolt-loading-animation svg .cls-1 {\n    stroke-dasharray: 0 250;\n    animation: line1 1.5s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);\n  }");
  (0, _styles["default"])(".atomicjolt-loading-animation svg .cls-2 {\n    stroke-dasharray: 0 270;\n    animation: line2 1.5s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);\n  }");
  (0, _styles["default"])("@keyframes line1 {\n    0% {\n      stroke-dasharray: 0 250;\n   }\n    40% {\n      stroke-dasharray: 250 250;\n   }\n    60% {\n      stroke-dasharray: 250 250;\n   }\n    100% {\n      stroke-dasharray: 0 250;\n   }\n  }");
  (0, _styles["default"])("@keyframes line2 {\n    0% {\n      stroke-dasharray: 0 270;\n   }\n    40% {\n      stroke-dasharray: 270 270;\n   }\n    60% {\n      stroke-dasharray: 270 270;\n   }\n    100% {\n      stroke-dasharray: 0 270;\n   }\n  }");
  (0, _styles["default"])(".loader-text{\n    font-size: 24px;\n    font-family: 'Lato', Arial, Helvetica, sans-serif;\n    font-weight: 500;\n    color: #222;\n    text-align: center;\n    margin: 0 0 48px;\n  }");
}

var Loader =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Loader, _React$PureComponent);

  function Loader() {
    _classCallCheck(this, Loader);

    return _possibleConstructorReturn(this, _getPrototypeOf(Loader).apply(this, arguments));
  }

  _createClass(Loader, [{
    key: "render",
    value: function render() {
      var logoColor = this.props.settings.aj_loader.logoColor || this.props.logoColor || '#444';
      var backgroundColor1 = this.props.settings.aj_loader.backgroundColor1 || this.props.backgroundColor1 || '#FFEA00';
      var backgroundColor2 = this.props.settings.aj_loader.backgroundColor2 || this.props.backgroundColor2 || '#FFFF56';
      renderStyles(logoColor, backgroundColor1, backgroundColor2);
      return _react["default"].createElement("div", {
        className: "aj-loader"
      }, _react["default"].createElement("div", {
        className: "atomicjolt-loading-animation"
      }, _react["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 91.87 114.09",
        role: "img",
        "aria-label": "loading"
      }, _react["default"].createElement("g", {
        "data-name": "Layer 2"
      }, _react["default"].createElement("polygon", {
        className: "cls-1",
        points: "40.45 111.32 89.11 99.26 71.35 19.9 21.1 89.71 40.45 111.32"
      }), _react["default"].createElement("polyline", {
        className: "cls-2",
        points: "50.67 2.77 2.77 69.96 25.47 94.65 66.36 84.13 50.67 2.77 71.35 19.9"
      })))), _react["default"].createElement("p", {
        className: "loader-text"
      }, this.props.message));
    }
  }]);

  return Loader;
}(_react["default"].PureComponent);

exports.Loader = Loader;

_defineProperty(Loader, "propTypes", {
  message: _propTypes["default"].string,
  logoColor: _propTypes["default"].string,
  backgroundColor1: _propTypes["default"].string,
  backgroundColor2: _propTypes["default"].string,
  aj_loader: {
    logoColor: _propTypes["default"].string,
    backgroundColor1: _propTypes["default"].string,
    backgroundColor2: _propTypes["default"].string
  }
});

var _default = (0, _settings.withSettings)(Loader);

exports["default"] = _default;