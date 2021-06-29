"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = StoryWrapper;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function StoryWrapper(props) {
  var children = props.children;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com"
  }), /*#__PURE__*/_react["default"].createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap",
    rel: "stylesheet"
  }), /*#__PURE__*/_react["default"].createElement("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    rel: "stylesheet"
  }), /*#__PURE__*/_react["default"].createElement("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined",
    rel: "stylesheet"
  })), /*#__PURE__*/_react["default"].createElement("div", null, children));
}