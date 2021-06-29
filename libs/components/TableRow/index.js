"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableRow = TableRow;

var _react = _interopRequireDefault(require("react"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function TableRow(_ref) {
  var data = _ref.data,
      columns = _ref.columns,
      renderData = _ref.renderData;
  return /*#__PURE__*/_react["default"].createElement("tr", {
    className: "aj-table__row"
  }, columns.map(function (columns) {
    return /*#__PURE__*/_react["default"].createElement("td", {
      className: "aj-table__row-data"
    }, renderData(data, columns));
  }));
}