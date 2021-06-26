"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _LoadingSkeleton = _interopRequireDefault(require("../LoadingSkeleton"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function SurveyItemLoading() {
  return /*#__PURE__*/_react["default"].createElement("tr", {
    className: "assignment-items"
  }, /*#__PURE__*/_react["default"].createElement("td", {
    className: "loadingSkeleton__name"
  }, /*#__PURE__*/_react["default"].createElement(_LoadingSkeleton["default"], {
    width: 50
  })), /*#__PURE__*/_react["default"].createElement("td", {
    className: "loadingSkeleton__due"
  }, /*#__PURE__*/_react["default"].createElement(_LoadingSkeleton["default"], {
    width: 50
  })), /*#__PURE__*/_react["default"].createElement("td", {
    className: "loadingSkeleton__date"
  }, /*#__PURE__*/_react["default"].createElement(_LoadingSkeleton["default"], {
    width: 70
  })), /*#__PURE__*/_react["default"].createElement("td", {
    className: "loadingSkeleton__date"
  }, /*#__PURE__*/_react["default"].createElement(_LoadingSkeleton["default"], {
    width: 100
  })));
}

var _default = SurveyItemLoading;
exports["default"] = _default;