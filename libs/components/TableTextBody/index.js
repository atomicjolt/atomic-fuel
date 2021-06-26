"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Used to wrap string (or other content) in a tbody tags
// For displaying it within a table
// Specify colums to the number of columns of the table
// so it can span the entire content
var TableTextBody = function TableTextBody(_ref) {
  var className = _ref.className,
      columns = _ref.columns,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("tbody", {
    className: className
  }, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
    colSpan: columns
  }, children)));
};

TableTextBody.propTypes = {
  className: _propTypes["default"].string,
  columns: _propTypes["default"].number,
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node])
};
var _default = TableTextBody;
exports["default"] = _default;