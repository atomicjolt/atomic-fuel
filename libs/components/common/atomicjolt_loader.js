"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Loader;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("../../libs/styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function renderStyles() {
  var logoColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#444';
  var backgroundColor1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#FFEA00';
  var backgroundColor2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#FFFF56';
  (0, _styles["default"])(".aj-loader{\n    position: relative;\n    padding: 48px 0;\n  }");
  (0, _styles["default"])(".atomicjolt-loading-animation {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    margin: 0 auto;\n    width: 72px;\n    height: 72px;\n    border-radius: 50%;\n    background-image: linear-gradient(to top right, ".concat(backgroundColor1, ", ").concat(backgroundColor2, ");\n    box-shadow: -2px 3px 6px rgba(0,0,0,0.25);\n  }"));
  (0, _styles["default"])(".atomicjolt-loading-animation svg {\n    width: 38px;\n    position: relative;\n    left: -2px;\n    top: -1px;\n  }");
  (0, _styles["default"])(".atomicjolt-loading-animation svg polygon, .atomicjolt-loading-animation svg polyline {\n    fill: none;\n    stroke: ".concat(logoColor, ";\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-width: 8px;\n  }"));
  (0, _styles["default"])(".atomicjolt-loading-animation svg .cls-1 {\n    stroke-dasharray: 0 250;\n    animation: line1 1.5s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);\n  }");
  (0, _styles["default"])(".atomicjolt-loading-animation svg .cls-2 {\n    stroke-dasharray: 0 270;\n    animation: line2 1.5s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);\n  }");
  (0, _styles["default"])("@keyframes line1 {\n    0% {\n      stroke-dasharray: 0 250;\n    }\n    40% {\n      stroke-dasharray: 250 250;\n    }\n    60% {\n      stroke-dasharray: 250 250;\n    }\n    100% {\n      stroke-dasharray: 0 250;\n    }\n  }");
  (0, _styles["default"])("@keyframes line2 {\n    0% {\n      stroke-dasharray: 0 270;\n    }\n    40% {\n      stroke-dasharray: 270 270;\n    }\n    60% {\n      stroke-dasharray: 270 270;\n    }\n    100% {\n      stroke-dasharray: 0 270;\n    }\n  }");
  (0, _styles["default"])(".loader-text{\n    font-size: 24px;\n    font-family: 'Lato', Arial, Helvetica, sans-serif;\n    font-weight: 500;\n    color: #222;\n    text-align: center;\n    padding-top: 48px;\n    margin: 0;\n  }");
}

function Loader(props) {
  var _settings$aj_loader, _settings$aj_loader2, _settings$aj_loader3;

  var settings = (0, _reactRedux.useSelector)(function (state) {
    return state.settings;
  });
  var logoColor = (settings === null || settings === void 0 ? void 0 : (_settings$aj_loader = settings.aj_loader) === null || _settings$aj_loader === void 0 ? void 0 : _settings$aj_loader.logoColor) || props.logoColor || '#444';
  var backgroundColor1 = (settings === null || settings === void 0 ? void 0 : (_settings$aj_loader2 = settings.aj_loader) === null || _settings$aj_loader2 === void 0 ? void 0 : _settings$aj_loader2.backgroundColor1) || props.backgroundColor1 || '#FFEA00';
  var backgroundColor2 = (settings === null || settings === void 0 ? void 0 : (_settings$aj_loader3 = settings.aj_loader) === null || _settings$aj_loader3 === void 0 ? void 0 : _settings$aj_loader3.backgroundColor2) || props.backgroundColor2 || '#FFFF56';
  renderStyles(logoColor, backgroundColor1, backgroundColor2);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "aj-loader"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "atomicjolt-loading-animation"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 91.87 114.09",
    role: "img",
    "aria-label": "loading"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    "data-name": "Layer 2"
  }, /*#__PURE__*/_react["default"].createElement("polygon", {
    className: "cls-1",
    points: "40.45 111.32 89.11 99.26 71.35 19.9 21.1 89.71 40.45 111.32"
  }), /*#__PURE__*/_react["default"].createElement("polyline", {
    className: "cls-2",
    points: "50.67 2.77 2.77 69.96 25.47 94.65 66.36 84.13 50.67 2.77 71.35 19.9"
  })))), /*#__PURE__*/_react["default"].createElement("p", {
    className: "loader-text"
  }, props.message));
}

Loader.propTypes = {
  message: _propTypes["default"].string,
  logoColor: _propTypes["default"].string,
  backgroundColor1: _propTypes["default"].string,
  backgroundColor2: _propTypes["default"].string
};