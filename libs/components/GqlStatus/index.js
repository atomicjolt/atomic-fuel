"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GqlStatus;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _atomicjolt_loader = _interopRequireDefault(require("../common/atomicjolt_loader"));

var _inline_error = _interopRequireDefault(require("../common/errors/inline_error"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dxbFN0YXR1cy9pbmRleC5qc3giXSwibmFtZXMiOlsiR3FsU3RhdHVzIiwicHJvcHMiLCJsb2FkaW5nIiwibG9hZE1lc3NhZ2UiLCJlcnJvciIsIm1lc3NhZ2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic2hhcGUiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVlLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQ3ZDLE1BQUlBLEtBQUssQ0FBQ0MsT0FBVixFQUFtQjtBQUNqQix3QkFDRSxnQ0FBQyw2QkFBRDtBQUFrQixNQUFBLE9BQU8sRUFBRUQsS0FBSyxDQUFDRTtBQUFqQyxNQURGO0FBR0Q7O0FBRUQsTUFBSUYsS0FBSyxDQUFDRyxLQUFWLEVBQWlCO0FBQ2Ysd0JBQU8sZ0NBQUMsd0JBQUQ7QUFBYSxNQUFBLEtBQUssRUFBRUgsS0FBSyxDQUFDRyxLQUFOLENBQVlDO0FBQWhDLE1BQVA7QUFDRDs7QUFFRCxTQUFPLElBQVA7QUFDRDs7QUFFREwsU0FBUyxDQUFDTSxTQUFWLEdBQXNCO0FBQ3BCSixFQUFBQSxPQUFPLEVBQUVLLHNCQUFVQyxJQURDO0FBRXBCSixFQUFBQSxLQUFLLEVBQUVHLHNCQUFVRSxLQUFWLENBQWdCO0FBQUVKLElBQUFBLE9BQU8sRUFBRUUsc0JBQVVHO0FBQXJCLEdBQWhCLENBRmE7QUFHcEJQLEVBQUFBLFdBQVcsRUFBRUksc0JBQVVHO0FBSEgsQ0FBdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBBdG9taWNKb2x0TG9hZGVyIGZyb20gJy4uL2NvbW1vbi9hdG9taWNqb2x0X2xvYWRlcic7XG5pbXBvcnQgSW5saW5lRXJyb3IgZnJvbSAnLi4vY29tbW9uL2Vycm9ycy9pbmxpbmVfZXJyb3InO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHcWxTdGF0dXMocHJvcHMpIHtcbiAgaWYgKHByb3BzLmxvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEF0b21pY0pvbHRMb2FkZXIgbWVzc2FnZT17cHJvcHMubG9hZE1lc3NhZ2V9IC8+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChwcm9wcy5lcnJvcikge1xuICAgIHJldHVybiA8SW5saW5lRXJyb3IgZXJyb3I9e3Byb3BzLmVycm9yLm1lc3NhZ2V9IC8+O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbkdxbFN0YXR1cy5wcm9wVHlwZXMgPSB7XG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogUHJvcFR5cGVzLnNoYXBlKHsgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyB9KSxcbiAgbG9hZE1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG59OyJdfQ==