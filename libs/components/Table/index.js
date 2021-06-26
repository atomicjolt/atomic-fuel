"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = exports.SortDirection = exports.TableFilter = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TableHead = require("../TableHead");

require("./styles.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TableFilter;
exports.TableFilter = TableFilter;

(function (TableFilter) {
  TableFilter["createdAt"] = "CREATED_AT";
  TableFilter["dueAt"] = "DUE_AT";
  TableFilter["name"] = "NAME";
  TableFilter["completed"] = "COMPLETED";
})(TableFilter || (exports.TableFilter = TableFilter = {}));

var SortDirection;
exports.SortDirection = SortDirection;

(function (SortDirection) {
  SortDirection["asc"] = "ASC";
  SortDirection["desc"] = "DESC";
})(SortDirection || (exports.SortDirection = SortDirection = {}));

var Table = function Table(_ref) {
  var columns = _ref.columns,
      searchTerm = _ref.searchTerm,
      searchColumn = _ref.searchColumn,
      headClasses = _ref.headClasses,
      onSearch = _ref.onSearch,
      renderTableContent = _ref.renderTableContent;

  var _useState = (0, _react.useState)(TableFilter.createdAt),
      _useState2 = _slicedToArray(_useState, 2),
      sortColumn = _useState2[0],
      setSortColumn = _useState2[1];

  var _useState3 = (0, _react.useState)(SortDirection.asc),
      _useState4 = _slicedToArray(_useState3, 2),
      sortDirection = _useState4[0],
      setSortDirection = _useState4[1];

  return /*#__PURE__*/_react["default"].createElement("table", {
    className: "aj-table"
  }, /*#__PURE__*/_react["default"].createElement(_TableHead.TableHead, {
    columns: columns,
    classes: headClasses,
    searchColumn: searchColumn,
    sortColumn: sortColumn,
    sortDirection: sortDirection,
    searchTerm: searchTerm,
    onSearch: onSearch,
    onSort: function onSort(newSortDirection, newSortColumn) {
      setSortDirection(newSortDirection);
      setSortColumn(newSortColumn);
    }
  }), renderTableContent());
};

exports.Table = Table;