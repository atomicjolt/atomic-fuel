"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Card;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Card(props) {
  var classOverride = props.classOverride,
      classes = props.classes,
      title = props.title,
      subtitle = props.subtitle,
      blank = props.blank,
      children = props.children;
  var baseClass = classOverride || 'aj-card';
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(baseClass, classes)
  }, !blank && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(baseClass, "__heading")
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "".concat(baseClass, "__heading-title")
  }, title), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "".concat(baseClass, "__heading-subtitle")
  }, subtitle)), /*#__PURE__*/_react["default"].createElement("section", {
    className: "".concat(baseClass, "__content")
  }, children)), blank && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children));
}