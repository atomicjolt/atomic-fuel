"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableHead = TableHead;

var _react = _interopRequireDefault(require("react"));

var _SortableHeader = _interopRequireDefault(require("../SortableHeader"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function TableHead(_ref) {
  var columns = _ref.columns,
      searchColumn = _ref.searchColumn,
      sortColumn = _ref.sortColumn,
      sortDirection = _ref.sortDirection,
      searchTerm = _ref.searchTerm,
      classes = _ref.classes,
      onSearch = _ref.onSearch,
      onSort = _ref.onSort;
  return /*#__PURE__*/_react["default"].createElement("thead", {
    className: (0, _classnames["default"])('aj-table__head', classes)
  }, /*#__PURE__*/_react["default"].createElement("tr", {
    className: (0, _classnames["default"])('aj-table__head-row')
  }, columns.map(function (column, index) {
    if (column.hidden) {
      return /*#__PURE__*/_react["default"].createElement("th", {
        scope: "col",
        "aria-label": column.displayName,
        key: column.dataName
      });
    }

    return /*#__PURE__*/_react["default"].createElement(_SortableHeader["default"], {
      key: column.dataName,
      ariaName: column.displayName,
      sortPath: column.dataName,
      onSort: onSort,
      currentDirection: sortDirection,
      currentPath: sortColumn,
      searchTerm: searchTerm,
      searchable: searchColumn === column.dataName,
      searchTitle: column.displayName,
      searchResultCount: 0,
      onSearch: onSearch
    }, column.displayName);
  })));
}