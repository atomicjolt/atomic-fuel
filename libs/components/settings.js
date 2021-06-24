"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSettings = withSettings;
exports.SettingsContext = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var updateGlobalSetting = function updateGlobalSetting() {};

var SettingsContext = /*#__PURE__*/_react["default"].createContext(_objectSpread(_objectSpread({}, window.DEFAULT_SETTINGS), {}, {
  updateGlobalSetting: updateGlobalSetting
}));

exports.SettingsContext = SettingsContext;

function withSettings(Component) {
  return function SettingsComponent(props) {
    return /*#__PURE__*/_react["default"].createElement(SettingsContext.Consumer, null, function (settings) {
      return /*#__PURE__*/_react["default"].createElement(Component, _extends({}, props, {
        settings: settings
      }));
    });
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3NldHRpbmdzLmpzeCJdLCJuYW1lcyI6WyJ1cGRhdGVHbG9iYWxTZXR0aW5nIiwiU2V0dGluZ3NDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0Iiwid2luZG93IiwiREVGQVVMVF9TRVRUSU5HUyIsIndpdGhTZXR0aW5ncyIsIkNvbXBvbmVudCIsIlNldHRpbmdzQ29tcG9uZW50IiwicHJvcHMiLCJzZXR0aW5ncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNLENBQUUsQ0FBcEM7O0FBQ08sSUFBTUMsZUFBZSxnQkFBR0Msa0JBQU1DLGFBQU4saUNBQzFCQyxNQUFNLENBQUNDLGdCQURtQjtBQUU3QkwsRUFBQUEsbUJBQW1CLEVBQW5CQTtBQUY2QixHQUF4Qjs7OztBQUlBLFNBQVNNLFlBQVQsQ0FBc0JDLFNBQXRCLEVBQWlDO0FBQ3RDLFNBQU8sU0FBU0MsaUJBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDO0FBQ3ZDLHdCQUNFLGdDQUFDLGVBQUQsQ0FBaUIsUUFBakIsUUFDRyxVQUFDQyxRQUFEO0FBQUEsMEJBQWMsZ0NBQUMsU0FBRCxlQUFlRCxLQUFmO0FBQXNCLFFBQUEsUUFBUSxFQUFFQztBQUFoQyxTQUFkO0FBQUEsS0FESCxDQURGO0FBS0QsR0FORDtBQU9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IHVwZGF0ZUdsb2JhbFNldHRpbmcgPSAoKSA9PiB7fTtcbmV4cG9ydCBjb25zdCBTZXR0aW5nc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgLi4ud2luZG93LkRFRkFVTFRfU0VUVElOR1MsXG4gIHVwZGF0ZUdsb2JhbFNldHRpbmdcbn0pO1xuZXhwb3J0IGZ1bmN0aW9uIHdpdGhTZXR0aW5ncyhDb21wb25lbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIFNldHRpbmdzQ29tcG9uZW50KHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZXR0aW5nc0NvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIHsoc2V0dGluZ3MpID0+IDxDb21wb25lbnQgey4uLnByb3BzfSBzZXR0aW5ncz17c2V0dGluZ3N9IC8+fVxuICAgICAgPC9TZXR0aW5nc0NvbnRleHQuQ29uc3VtZXI+XG4gICAgKTtcbiAgfTtcbn0iXX0=