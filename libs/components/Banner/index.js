"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Banner;
exports.types = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var types = Object.freeze({
  ERROR: 'error',
  RELIEF: 'relief',
  WARNING: 'warning'
});
exports.types = types;

function Banner(props) {
  var heading = props.heading,
      message = props.message,
      type = props.type,
      icon = props.icon,
      overrideClass = props.overrideClass;
  var baseClass = Boolean(overrideClass) ? overrideClass : 'Banner';
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])("".concat(baseClass), _defineProperty({}, "".concat(baseClass, "--").concat(type), Boolean(type)))
  }, !!icon && /*#__PURE__*/_react["default"].createElement("i", {
    className: "material-icons"
  }, icon), !!heading && /*#__PURE__*/_react["default"].createElement("h3", null, heading), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(baseClass, "__content"),
    "data-testid": "msg"
  }, message));
}

Banner.propTypes = {
  heading: _propTypes["default"].string,
  message: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  overrideClass: _propTypes["default"].string
};