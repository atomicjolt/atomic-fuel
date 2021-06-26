"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OutLink = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var OutLink = function OutLink() {
  return /*#__PURE__*/_react["default"].createElement("a", {
    className: "qualtrics-link qualtrics-link__",
    href: "",
    target: "_blank",
    rel: "noopener noreferrer"
  }, props.children);
};

exports.OutLink = OutLink;