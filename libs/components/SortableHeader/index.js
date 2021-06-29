"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _i18next = _interopRequireDefault(require("i18next"));

var _Table = require("../Table");

var _Button = require("../Button");

var _tooltip = _interopRequireDefault(require("../common/tooltip"));

var _withLiveMessenger = _interopRequireDefault(require("../common/with-live-messenger"));

var _utils = require("./utils");

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ID = (0, _utils.getID)();

var eatClick = function eatClick(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
};

function SortableHeader(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      searchExpanded = _useState2[0],
      setSearchExpanded = _useState2[1];

  var searchInputRef = (0, _react.useRef)(null);
  var children = props.children,
      rowSpan = props.rowSpan,
      onSort = props.onSort,
      sortPath = props.sortPath,
      ariaName = props.ariaName,
      currentPath = props.currentPath,
      currentDirection = props.currentDirection,
      tooltip = props.tooltip,
      _props$searchable = props.searchable,
      searchable = _props$searchable === void 0 ? false : _props$searchable,
      _props$searchTitle = props.searchTitle,
      searchTitle = _props$searchTitle === void 0 ? '' : _props$searchTitle,
      _props$onSearch = props.onSearch,
      onSearch = _props$onSearch === void 0 ? function () {} : _props$onSearch,
      _props$searchTerm = props.searchTerm,
      searchTerm = _props$searchTerm === void 0 ? '' : _props$searchTerm,
      _props$searchResultCo = props.searchResultCount,
      searchResultCount = _props$searchResultCo === void 0 ? 0 : _props$searchResultCo,
      initializing = props.initializing;
  (0, _react.useEffect)(function () {
    if (searchExpanded) {
      var _searchInputRef$curre;

      (_searchInputRef$curre = searchInputRef.current) === null || _searchInputRef$curre === void 0 ? void 0 : _searchInputRef$curre.focus();
    } else {
      onSearch('');
    }
  }, [searchExpanded]);

  function search() {
    if (!searchable) {
      return null;
    }

    return /*#__PURE__*/_react["default"].createElement("div", {
      id: "container-".concat(ID),
      className: "aj-input aj-input--search".concat(searchExpanded ? ' is-expanded' : '')
    }, /*#__PURE__*/_react["default"].createElement("label", {
      className: "aj-hidden",
      htmlFor: "search-".concat(ID)
    }, _i18next["default"].t('Search {{searchTitle}}', {
      searchTitle: searchTitle
    })), /*#__PURE__*/_react["default"].createElement("input", {
      id: "search-".concat(ID),
      onChange: function onChange(_ref) {
        var value = _ref.target.value;
        return onSearch(value);
      },
      onClick: eatClick,
      value: searchTerm,
      tabIndex: searchExpanded ? 0 : -1,
      "aria-controls": "status-".concat(ID),
      ref: searchInputRef
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "aj-hidden",
      id: "status-".concat(ID),
      role: "status",
      "aria-live": "polite"
    }, _i18next["default"].t('{{searchResultCount}} results returned', {
      searchResultCount: searchResultCount
    })), /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      "aria-controls": "container-".concat(ID),
      "aria-expanded": searchExpanded,
      "aria-label": searchExpanded ? _i18next["default"].t('close search filter') : _i18next["default"].t('open search filter'),
      onClick: function onClick(e) {
        eatClick(e);
        setSearchExpanded(!searchExpanded);
      }
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "material-icons-outlined",
      "aria-hidden": true
    }, searchExpanded ? 'close' : 'search')));
  }

  function isCurrentPath() {
    return sortPath === currentPath;
  }

  function getSortLabel() {
    if (!isCurrentPath) return '';
    return currentDirection === _Table.SortDirection.asc ? 'ascending' : 'descending';
  }

  function getTooltip() {
    if (tooltip) {
      return /*#__PURE__*/_react["default"].createElement(_tooltip["default"], null, tooltip);
    }

    return null;
  }

  function arrowClassName(direction) {
    if (!isCurrentPath()) return '';

    if (direction === currentDirection) {
      return 'sort-direction';
    }

    return '';
  }

  function invertSort() {
    return currentDirection === _Table.SortDirection.asc ? _Table.SortDirection.desc : _Table.SortDirection.asc;
  }

  var sortClick = function sortClick(e) {
    if (!initializing) {
      var announce = props.announceAssertive;
      e.stopPropagation();
      var sortDirection = isCurrentPath() ? invertSort() : _Table.SortDirection.asc;
      announce(_i18next["default"].t('Sorting by {{name}}, {{direction}}', {
        name: ariaName,
        direction: sortDirection === _Table.SortDirection.asc ? 'ascending' : 'descending'
      }));
      onSort(sortDirection, sortPath);
    }
  };

  return /*#__PURE__*/_react["default"].createElement("th", {
    className: "aj-table__head-row",
    rowSpan: rowSpan,
    "aria-label": getSortLabel(),
    scope: "col"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "aj-table__flex-cell",
    onClick: sortClick
  }, /*#__PURE__*/_react["default"].createElement("span", null, children), getTooltip(), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    onClick: sortClick,
    buttonType: _Button.ButtonType.sort,
    "aria-options": {
      "aria-label": "Sort by ".concat(ariaName)
    }
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "material-icons-outlined ".concat(arrowClassName(_Table.SortDirection.asc)),
    "aria-hidden": "true"
  }, "arrow_drop_up"), /*#__PURE__*/_react["default"].createElement("i", {
    className: "material-icons-outlined ".concat(arrowClassName(_Table.SortDirection.desc)),
    "aria-hidden": "true"
  }, "arrow_drop_down")), search()));
}

var _default = (0, _withLiveMessenger["default"])(SortableHeader);

exports["default"] = _default;