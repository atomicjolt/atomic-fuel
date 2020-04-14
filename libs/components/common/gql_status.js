"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GqlStatus;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _atomicjolt_loader = _interopRequireDefault(require("./atomicjolt_loader"));

var _inline_error = _interopRequireDefault(require("./errors/inline_error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function GqlStatus(props) {
  if (props.loading) {
    return _react["default"].createElement(_atomicjolt_loader["default"], {
      message: props.loadMessage
    });
  }

  if (props.error) {
    return _react["default"].createElement(_inline_error["default"], {
      error: props.error.message
    });
  }

  return null;
}

GqlStatus.propTypes = {
  loading: _propTypes["default"].bool,
  error: _propTypes["default"].shape({
    message: _propTypes["default"].string
  }),
  loadMessage: _propTypes["default"].string
};