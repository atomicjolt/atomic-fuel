"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Loader = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("../../libs/styles"));

var _settings = require("../settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function renderStyles() {
  var logoColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#444';
  var backgroundColor1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#FFEA00';
  var backgroundColor2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#FFFF56';
  (0, _styles["default"])(".aj-loader{\n    position: relative;\n    padding: 48px 0;\n  }");
  (0, _styles["default"])(".atomicjolt-loading-animation {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    margin: 0 auto;\n    width: 72px;\n    height: 72px;\n    border-radius: 50%;\n    background-image: linear-gradient(to top right, ".concat(backgroundColor1, ", ").concat(backgroundColor2, ");\n    box-shadow: -2px 3px 6px rgba(0,0,0,0.25);\n  }"));
  (0, _styles["default"])(".atomicjolt-loading-animation svg {\n    width: 38px;\n    position: relative;\n    left: -2px;\n    top: -1px;\n  }");
  (0, _styles["default"])(".atomicjolt-loading-animation svg polygon, .atomicjolt-loading-animation svg polyline {\n    fill: none;\n    stroke: ".concat(logoColor, ";\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-width: 8px;\n  }"));
  (0, _styles["default"])(".atomicjolt-loading-animation svg .cls-1 {\n    stroke-dasharray: 0 250;\n    animation: line1 1.5s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);\n  }");
  (0, _styles["default"])(".atomicjolt-loading-animation svg .cls-2 {\n    stroke-dasharray: 0 270;\n    animation: line2 1.5s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);\n  }");
  (0, _styles["default"])("@keyframes line1 {\n    0% {\n      stroke-dasharray: 0 250;\n   }\n    40% {\n      stroke-dasharray: 250 250;\n   }\n    60% {\n      stroke-dasharray: 250 250;\n   }\n    100% {\n      stroke-dasharray: 0 250;\n   }\n  }");
  (0, _styles["default"])("@keyframes line2 {\n    0% {\n      stroke-dasharray: 0 270;\n   }\n    40% {\n      stroke-dasharray: 270 270;\n   }\n    60% {\n      stroke-dasharray: 270 270;\n   }\n    100% {\n      stroke-dasharray: 0 270;\n   }\n  }");
  (0, _styles["default"])(".loader-text{\n    font-size: 24px;\n    font-family: 'Lato', Arial, Helvetica, sans-serif;\n    font-weight: 500;\n    color: #222;\n    text-align: center;\n    padding-top: 48px;\n    margin: 0;\n  }");
}

var Loader = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Loader, _React$PureComponent);

  var _super = _createSuper(Loader);

  function Loader() {
    _classCallCheck(this, Loader);

    return _super.apply(this, arguments);
  }

  _createClass(Loader, [{
    key: "render",
    value: function render() {
      var ajLoader = 'aj_loader' in this.props.settings ? this.props.settings.aj_loader : null;
      var logoColor = ajLoader || this.props.logoColor || '#444';
      var backgroundColor1 = ajLoader && ajLoader.backgroundColor1 || this.props.backgroundColor1 || '#FFEA00';
      var backgroundColor2 = ajLoader && ajLoader.backgroundColor2 || this.props.backgroundColor2 || '#FFFF56';
      renderStyles(logoColor, backgroundColor1, backgroundColor2);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "aj-loader"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "atomicjolt-loading-animation"
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 91.87 114.09",
        role: "img",
        "aria-label": "loading"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        "data-name": "Layer 2"
      }, /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "cls-1",
        points: "40.45 111.32 89.11 99.26 71.35 19.9 21.1 89.71 40.45 111.32"
      }), /*#__PURE__*/_react["default"].createElement("polyline", {
        className: "cls-2",
        points: "50.67 2.77 2.77 69.96 25.47 94.65 66.36 84.13 50.67 2.77 71.35 19.9"
      })))), /*#__PURE__*/_react["default"].createElement("p", {
        className: "loader-text"
      }, this.props.message));
    }
  }]);

  return Loader;
}(_react["default"].PureComponent);

exports.Loader = Loader;

_defineProperty(Loader, "propTypes", {
  message: _propTypes["default"].string,
  logoColor: _propTypes["default"].string,
  backgroundColor1: _propTypes["default"].string,
  backgroundColor2: _propTypes["default"].string,
  aj_loader: _propTypes["default"].shape({
    logoColor: _propTypes["default"].string,
    backgroundColor1: _propTypes["default"].string,
    backgroundColor2: _propTypes["default"].string
  })
});

var _default = (0, _settings.withSettings)(Loader);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9hdG9taWNqb2x0X2xvYWRlci5qc3giXSwibmFtZXMiOlsicmVuZGVyU3R5bGVzIiwibG9nb0NvbG9yIiwiYmFja2dyb3VuZENvbG9yMSIsImJhY2tncm91bmRDb2xvcjIiLCJMb2FkZXIiLCJhakxvYWRlciIsInByb3BzIiwic2V0dGluZ3MiLCJhal9sb2FkZXIiLCJtZXNzYWdlIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwic2hhcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLFlBQVQsR0FBc0c7QUFBQSxNQUFoRkMsU0FBZ0YsdUVBQXBFLE1BQW9FO0FBQUEsTUFBNURDLGdCQUE0RCx1RUFBekMsU0FBeUM7QUFBQSxNQUE5QkMsZ0JBQThCLHVFQUFYLFNBQVc7QUFDcEc7QUFJQSxxVEFTb0RELGdCQVRwRCxlQVN5RUMsZ0JBVHpFO0FBWUE7QUFNQSwwSkFFWUYsU0FGWjtBQU9BO0FBSUE7QUFJQTtBQWNBO0FBY0E7QUFTRDs7SUFFWUcsTTs7Ozs7Ozs7Ozs7OztXQWNYLGtCQUFTO0FBQ1AsVUFBTUMsUUFBUSxHQUFHLGVBQWUsS0FBS0MsS0FBTCxDQUFXQyxRQUExQixHQUFxQyxLQUFLRCxLQUFMLENBQVdDLFFBQVgsQ0FBb0JDLFNBQXpELEdBQXFFLElBQXRGO0FBQ0EsVUFBTVAsU0FBUyxHQUFHSSxRQUFRLElBQUksS0FBS0MsS0FBTCxDQUFXTCxTQUF2QixJQUFvQyxNQUF0RDtBQUNBLFVBQU1DLGdCQUFnQixHQUFHRyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0gsZ0JBQXJCLElBQXlDLEtBQUtJLEtBQUwsQ0FBV0osZ0JBQXBELElBQXdFLFNBQWpHO0FBQ0EsVUFBTUMsZ0JBQWdCLEdBQUdFLFFBQVEsSUFBSUEsUUFBUSxDQUFDRixnQkFBckIsSUFBeUMsS0FBS0csS0FBTCxDQUFXSCxnQkFBcEQsSUFBd0UsU0FBakc7QUFFQUgsTUFBQUEsWUFBWSxDQUFDQyxTQUFELEVBQVlDLGdCQUFaLEVBQThCQyxnQkFBOUIsQ0FBWjtBQUVBLDBCQUNFO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsc0JBQ0U7QUFBSyxRQUFBLEtBQUssRUFBQyw0QkFBWDtBQUF3QyxRQUFBLE9BQU8sRUFBQyxrQkFBaEQ7QUFBbUUsUUFBQSxJQUFJLEVBQUMsS0FBeEU7QUFBOEUsc0JBQVc7QUFBekYsc0JBQ0U7QUFBRyxxQkFBVTtBQUFiLHNCQUNFO0FBQVMsUUFBQSxTQUFTLEVBQUMsT0FBbkI7QUFBMkIsUUFBQSxNQUFNLEVBQUM7QUFBbEMsUUFERixlQUVFO0FBQVUsUUFBQSxTQUFTLEVBQUMsT0FBcEI7QUFBNEIsUUFBQSxNQUFNLEVBQUM7QUFBbkMsUUFGRixDQURGLENBREYsQ0FERixlQVNFO0FBQUcsUUFBQSxTQUFTLEVBQUM7QUFBYixTQUE2QixLQUFLRyxLQUFMLENBQVdHLE9BQXhDLENBVEYsQ0FERjtBQWFEOzs7O0VBbkN5QkMsa0JBQU1DLGE7Ozs7Z0JBQXJCUCxNLGVBRVE7QUFDakJLLEVBQUFBLE9BQU8sRUFBRUcsc0JBQVVDLE1BREY7QUFFakJaLEVBQUFBLFNBQVMsRUFBRVcsc0JBQVVDLE1BRko7QUFHakJYLEVBQUFBLGdCQUFnQixFQUFFVSxzQkFBVUMsTUFIWDtBQUlqQlYsRUFBQUEsZ0JBQWdCLEVBQUVTLHNCQUFVQyxNQUpYO0FBS2pCTCxFQUFBQSxTQUFTLEVBQUVJLHNCQUFVRSxLQUFWLENBQWdCO0FBQ3pCYixJQUFBQSxTQUFTLEVBQUVXLHNCQUFVQyxNQURJO0FBRXpCWCxJQUFBQSxnQkFBZ0IsRUFBRVUsc0JBQVVDLE1BRkg7QUFHekJWLElBQUFBLGdCQUFnQixFQUFFUyxzQkFBVUM7QUFISCxHQUFoQjtBQUxNLEM7O2VBb0NOLDRCQUFhVCxNQUFiLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBhZGRTdHlsZXMgZnJvbSAnLi4vLi4vbGlicy9zdHlsZXMnO1xuXG5pbXBvcnQgeyB3aXRoU2V0dGluZ3MgfSBmcm9tICcuLi9zZXR0aW5ncyc7XG5cbmZ1bmN0aW9uIHJlbmRlclN0eWxlcyhsb2dvQ29sb3IgPSAnIzQ0NCcsIGJhY2tncm91bmRDb2xvcjEgPSAnI0ZGRUEwMCcsIGJhY2tncm91bmRDb2xvcjIgPSAnI0ZGRkY1NicpIHtcbiAgYWRkU3R5bGVzKGAuYWotbG9hZGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiA0OHB4IDA7XG4gIH1gKTtcbiAgYWRkU3R5bGVzKGAuYXRvbWljam9sdC1sb2FkaW5nLWFuaW1hdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDcycHg7XG4gICAgaGVpZ2h0OiA3MnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAke2JhY2tncm91bmRDb2xvcjF9LCAke2JhY2tncm91bmRDb2xvcjJ9KTtcbiAgICBib3gtc2hhZG93OiAtMnB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjI1KTtcbiAgfWApO1xuICBhZGRTdHlsZXMoYC5hdG9taWNqb2x0LWxvYWRpbmctYW5pbWF0aW9uIHN2ZyB7XG4gICAgd2lkdGg6IDM4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0ycHg7XG4gICAgdG9wOiAtMXB4O1xuICB9YCk7XG4gIGFkZFN0eWxlcyhgLmF0b21pY2pvbHQtbG9hZGluZy1hbmltYXRpb24gc3ZnIHBvbHlnb24sIC5hdG9taWNqb2x0LWxvYWRpbmctYW5pbWF0aW9uIHN2ZyBwb2x5bGluZSB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2U6ICR7bG9nb0NvbG9yfTtcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgICBzdHJva2Utd2lkdGg6IDhweDtcbiAgfWApO1xuICBhZGRTdHlsZXMoYC5hdG9taWNqb2x0LWxvYWRpbmctYW5pbWF0aW9uIHN2ZyAuY2xzLTEge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDAgMjUwO1xuICAgIGFuaW1hdGlvbjogbGluZTEgMS41cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMsIDAuNTE1LCAwLjk1NSk7XG4gIH1gKTtcbiAgYWRkU3R5bGVzKGAuYXRvbWljam9sdC1sb2FkaW5nLWFuaW1hdGlvbiBzdmcgLmNscy0yIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwIDI3MDtcbiAgICBhbmltYXRpb246IGxpbmUyIDEuNXMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNDU1LCAwLjAzLCAwLjUxNSwgMC45NTUpO1xuICB9YCk7XG4gIGFkZFN0eWxlcyhgQGtleWZyYW1lcyBsaW5lMSB7XG4gICAgMCUge1xuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMCAyNTA7XG4gICB9XG4gICAgNDAlIHtcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDI1MCAyNTA7XG4gICB9XG4gICAgNjAlIHtcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDI1MCAyNTA7XG4gICB9XG4gICAgMTAwJSB7XG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAwIDI1MDtcbiAgIH1cbiAgfWApO1xuICBhZGRTdHlsZXMoYEBrZXlmcmFtZXMgbGluZTIge1xuICAgIDAlIHtcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDAgMjcwO1xuICAgfVxuICAgIDQwJSB7XG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAyNzAgMjcwO1xuICAgfVxuICAgIDYwJSB7XG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAyNzAgMjcwO1xuICAgfVxuICAgIDEwMCUge1xuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMCAyNzA7XG4gICB9XG4gIH1gKTtcbiAgYWRkU3R5bGVzKGAubG9hZGVyLXRleHR7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzIyMjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDQ4cHg7XG4gICAgbWFyZ2luOiAwO1xuICB9YCk7XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbG9nb0NvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJhY2tncm91bmRDb2xvcjE6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYmFja2dyb3VuZENvbG9yMjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhal9sb2FkZXI6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBsb2dvQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3IxOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgYmFja2dyb3VuZENvbG9yMjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KSxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYWpMb2FkZXIgPSAnYWpfbG9hZGVyJyBpbiB0aGlzLnByb3BzLnNldHRpbmdzID8gdGhpcy5wcm9wcy5zZXR0aW5ncy5hal9sb2FkZXIgOiBudWxsO1xuICAgIGNvbnN0IGxvZ29Db2xvciA9IGFqTG9hZGVyIHx8IHRoaXMucHJvcHMubG9nb0NvbG9yIHx8ICcjNDQ0JztcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IxID0gYWpMb2FkZXIgJiYgYWpMb2FkZXIuYmFja2dyb3VuZENvbG9yMSB8fCB0aGlzLnByb3BzLmJhY2tncm91bmRDb2xvcjEgfHwgJyNGRkVBMDAnO1xuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvcjIgPSBhakxvYWRlciAmJiBhakxvYWRlci5iYWNrZ3JvdW5kQ29sb3IyIHx8IHRoaXMucHJvcHMuYmFja2dyb3VuZENvbG9yMiB8fCAnI0ZGRkY1Nic7XG5cbiAgICByZW5kZXJTdHlsZXMobG9nb0NvbG9yLCBiYWNrZ3JvdW5kQ29sb3IxLCBiYWNrZ3JvdW5kQ29sb3IyKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFqLWxvYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0b21pY2pvbHQtbG9hZGluZy1hbmltYXRpb25cIj5cbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDkxLjg3IDExNC4wOVwiIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgPGcgZGF0YS1uYW1lPVwiTGF5ZXIgMlwiPlxuICAgICAgICAgICAgICA8cG9seWdvbiBjbGFzc05hbWU9XCJjbHMtMVwiIHBvaW50cz1cIjQwLjQ1IDExMS4zMiA4OS4xMSA5OS4yNiA3MS4zNSAxOS45IDIxLjEgODkuNzEgNDAuNDUgMTExLjMyXCIgLz5cbiAgICAgICAgICAgICAgPHBvbHlsaW5lIGNsYXNzTmFtZT1cImNscy0yXCIgcG9pbnRzPVwiNTAuNjcgMi43NyAyLjc3IDY5Ljk2IDI1LjQ3IDk0LjY1IDY2LjM2IDg0LjEzIDUwLjY3IDIuNzcgNzEuMzUgMTkuOVwiIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2FkZXItdGV4dFwiPnsgdGhpcy5wcm9wcy5tZXNzYWdlIH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTZXR0aW5ncyhMb2FkZXIpO1xuIl19