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
    return /*#__PURE__*/_react["default"].createElement(_atomicjolt_loader["default"], {
      message: props.loadMessage
    });
  }

  if (props.error) {
    return /*#__PURE__*/_react["default"].createElement(_inline_error["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9ncWxfc3RhdHVzLmpzeCJdLCJuYW1lcyI6WyJHcWxTdGF0dXMiLCJwcm9wcyIsImxvYWRpbmciLCJsb2FkTWVzc2FnZSIsImVycm9yIiwibWVzc2FnZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJzaGFwZSIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRWUsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFDdkMsTUFBSUEsS0FBSyxDQUFDQyxPQUFWLEVBQW1CO0FBQ2pCLHdCQUNFLGdDQUFDLDZCQUFEO0FBQWtCLE1BQUEsT0FBTyxFQUFFRCxLQUFLLENBQUNFO0FBQWpDLE1BREY7QUFHRDs7QUFFRCxNQUFJRixLQUFLLENBQUNHLEtBQVYsRUFBaUI7QUFDZix3QkFBTyxnQ0FBQyx3QkFBRDtBQUFhLE1BQUEsS0FBSyxFQUFFSCxLQUFLLENBQUNHLEtBQU4sQ0FBWUM7QUFBaEMsTUFBUDtBQUNEOztBQUVELFNBQU8sSUFBUDtBQUNEOztBQUVETCxTQUFTLENBQUNNLFNBQVYsR0FBc0I7QUFDcEJKLEVBQUFBLE9BQU8sRUFBRUssc0JBQVVDLElBREM7QUFFcEJKLEVBQUFBLEtBQUssRUFBRUcsc0JBQVVFLEtBQVYsQ0FBZ0I7QUFBRUosSUFBQUEsT0FBTyxFQUFFRSxzQkFBVUc7QUFBckIsR0FBaEIsQ0FGYTtBQUdwQlAsRUFBQUEsV0FBVyxFQUFFSSxzQkFBVUc7QUFISCxDQUF0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEF0b21pY0pvbHRMb2FkZXIgZnJvbSAnLi9hdG9taWNqb2x0X2xvYWRlcic7XG5pbXBvcnQgSW5saW5lRXJyb3IgZnJvbSAnLi9lcnJvcnMvaW5saW5lX2Vycm9yJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3FsU3RhdHVzKHByb3BzKSB7XG4gIGlmIChwcm9wcy5sb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBdG9taWNKb2x0TG9hZGVyIG1lc3NhZ2U9e3Byb3BzLmxvYWRNZXNzYWdlfSAvPlxuICAgICk7XG4gIH1cblxuICBpZiAocHJvcHMuZXJyb3IpIHtcbiAgICByZXR1cm4gPElubGluZUVycm9yIGVycm9yPXtwcm9wcy5lcnJvci5tZXNzYWdlfSAvPjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5HcWxTdGF0dXMucHJvcFR5cGVzID0ge1xuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IFByb3BUeXBlcy5zaGFwZSh7IG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcgfSksXG4gIGxvYWRNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbiJdfQ==