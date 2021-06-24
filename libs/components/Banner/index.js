"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Banner = Banner;
exports.BannerTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BannerTypes = Object.freeze({
  ERROR: 'error',
  RELIEF: 'relief',
  WARNING: 'warning'
});
exports.BannerTypes = BannerTypes;

function Banner(props) {
  var heading = props.heading,
      message = props.message,
      type = props.type,
      icon = props.icon,
      overrideClass = props.overrideClass;
  var baseClass = Boolean(overrideClass) ? overrideClass : 'Banner';
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])("".concat(baseClass), _defineProperty({}, "".concat(baseClass, "--").concat(type), Boolean(type)))
  }, !!icon && /*#__PURE__*/_react["default"].createElement("i", {
    className: "material-icons"
  }, icon), !!heading && /*#__PURE__*/_react["default"].createElement("h3", null, heading), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(baseClass, "__content"),
    "data-testid": "msg"
  }, message));
}

Banner.propTypes = {
  heading: _propTypes["default"].string,
  message: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  overrideClass: _propTypes["default"].string
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Jhbm5lci9pbmRleC5qc3giXSwibmFtZXMiOlsiQmFubmVyVHlwZXMiLCJPYmplY3QiLCJmcmVlemUiLCJFUlJPUiIsIlJFTElFRiIsIldBUk5JTkciLCJCYW5uZXIiLCJwcm9wcyIsImhlYWRpbmciLCJtZXNzYWdlIiwidHlwZSIsImljb24iLCJvdmVycmlkZUNsYXNzIiwiYmFzZUNsYXNzIiwiQm9vbGVhbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7OztBQUVPLElBQU1BLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDdkNDLEVBQUFBLEtBQUssRUFBRSxPQURnQztBQUV2Q0MsRUFBQUEsTUFBTSxFQUFFLFFBRitCO0FBR3ZDQyxFQUFBQSxPQUFPLEVBQUU7QUFIOEIsQ0FBZCxDQUFwQjs7O0FBTUEsU0FBU0MsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDNUIsTUFBUUMsT0FBUixHQUF3REQsS0FBeEQsQ0FBUUMsT0FBUjtBQUFBLE1BQWlCQyxPQUFqQixHQUF3REYsS0FBeEQsQ0FBaUJFLE9BQWpCO0FBQUEsTUFBMEJDLElBQTFCLEdBQXdESCxLQUF4RCxDQUEwQkcsSUFBMUI7QUFBQSxNQUFnQ0MsSUFBaEMsR0FBd0RKLEtBQXhELENBQWdDSSxJQUFoQztBQUFBLE1BQXNDQyxhQUF0QyxHQUF3REwsS0FBeEQsQ0FBc0NLLGFBQXRDO0FBQ0EsTUFBTUMsU0FBUyxHQUFHQyxPQUFPLENBQUNGLGFBQUQsQ0FBUCxHQUF5QkEsYUFBekIsR0FBeUMsUUFBM0Q7QUFFQSxzQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFFLHNDQUNYQyxTQURXLGlDQUVYQSxTQUZXLGVBRUdILElBRkgsR0FFWUksT0FBTyxDQUFDSixJQUFELENBRm5CO0FBQWhCLEtBSUksQ0FBQyxDQUFDQyxJQUFGLGlCQUFVO0FBQUcsSUFBQSxTQUFTLEVBQUM7QUFBYixLQUErQkEsSUFBL0IsQ0FKZCxFQUtJLENBQUMsQ0FBQ0gsT0FBRixpQkFBYSw0Q0FBS0EsT0FBTCxDQUxqQixlQU1FO0FBQUssSUFBQSxTQUFTLFlBQUtLLFNBQUwsY0FBZDtBQUF5QyxtQkFBWTtBQUFyRCxLQUNHSixPQURILENBTkYsQ0FERjtBQVlEOztBQUVESCxNQUFNLENBQUNTLFNBQVAsR0FBbUI7QUFDakJQLEVBQUFBLE9BQU8sRUFBRVEsc0JBQVVDLE1BREY7QUFFakJSLEVBQUFBLE9BQU8sRUFBRU8sc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRlQ7QUFHakJSLEVBQUFBLElBQUksRUFBRU0sc0JBQVVDLE1BSEM7QUFJakJOLEVBQUFBLElBQUksRUFBRUssc0JBQVVDLE1BSkM7QUFLakJMLEVBQUFBLGFBQWEsRUFBRUksc0JBQVVDO0FBTFIsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5leHBvcnQgY29uc3QgQmFubmVyVHlwZXMgPSBPYmplY3QuZnJlZXplKHtcbiAgRVJST1I6ICdlcnJvcicsXG4gIFJFTElFRjogJ3JlbGllZicsXG4gIFdBUk5JTkc6ICd3YXJuaW5nJyxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gQmFubmVyKHByb3BzKSB7XG4gIGNvbnN0IHsgaGVhZGluZywgbWVzc2FnZSwgdHlwZSwgaWNvbiwgb3ZlcnJpZGVDbGFzcyB9ID0gcHJvcHM7XG4gIGNvbnN0IGJhc2VDbGFzcyA9IEJvb2xlYW4ob3ZlcnJpZGVDbGFzcykgPyBvdmVycmlkZUNsYXNzIDogJ0Jhbm5lcic7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y24oXG4gICAgICBgJHtiYXNlQ2xhc3N9YCxcbiAgICB7W2Ake2Jhc2VDbGFzc30tLSR7dHlwZX1gXTogQm9vbGVhbih0eXBlKSB9LFxuICAgICl9PlxuICAgICAgeyAhIWljb24gJiYgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57aWNvbn08L2k+IH1cbiAgICAgIHsgISFoZWFkaW5nICYmIDxoMz57aGVhZGluZ308L2gzPiB9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fY29udGVudGB9IGRhdGEtdGVzdGlkPVwibXNnXCI+XG4gICAgICAgIHttZXNzYWdlfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkJhbm5lci5wcm9wVHlwZXMgPSB7XG4gIGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgb3ZlcnJpZGVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbn07XG4iXX0=