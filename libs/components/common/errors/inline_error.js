"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("../../../libs/styles"));

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
  (0, _styles["default"])(".error-banner {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-align-items: center;\n    align-items: center;\n    min-height: 4rem;\n    background: #f00;\n    padding: 0.8rem 1.2rem;\n    border-radius: 0.3rem;\n    margin: 20px 0;\n  }");
  (0, _styles["default"])(".error-banner > i {\n    font-size: 2.4rem;\n    color: #fff;\n    margin-right: 1.2rem;\n  }");
  (0, _styles["default"])(".error-banner h3 {\n    color: #fff;\n    font-size: 1.4rem;\n    font-family: 'montserratbold';\n    font-weight: normal;\n    margin: 0;\n    margin-right: 3.2rem;\n  }");
  (0, _styles["default"])(".error-banner__content {\n    color: #fff;\n    font-family: 'montserratregular';\n    font-weight: normal;\n    font-size: 1.4rem;\n  }");
  (0, _styles["default"])(".error-banner__content span {\n    margin-right: 0.8rem;\n  }");
}

var InlineError = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(InlineError, _React$PureComponent);

  var _super = _createSuper(InlineError);

  function InlineError() {
    _classCallCheck(this, InlineError);

    return _super.apply(this, arguments);
  }

  _createClass(InlineError, [{
    key: "render",
    value: function render() {
      renderStyles();
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "error-banner"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "material-icons"
      }, "error"), /*#__PURE__*/_react["default"].createElement("h3", null, "Error"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "error-banner__content"
      }, this.props.error));
    }
  }]);

  return InlineError;
}(_react["default"].PureComponent);

exports["default"] = InlineError;

_defineProperty(InlineError, "propTypes", {
  error: _propTypes["default"].string
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lcnJvcnMvaW5saW5lX2Vycm9yLmpzeCJdLCJuYW1lcyI6WyJyZW5kZXJTdHlsZXMiLCJJbmxpbmVFcnJvciIsInByb3BzIiwiZXJyb3IiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLFlBQVQsR0FBd0I7QUFDdEI7QUFhQTtBQUtBO0FBUUE7QUFNQTtBQUdEOztJQUNvQkMsVzs7Ozs7Ozs7Ozs7OztXQU1uQixrQkFBUztBQUNQRCxNQUFBQSxZQUFZO0FBQ1osMEJBQ0U7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLHNCQUNFO0FBQUcsUUFBQSxTQUFTLEVBQUM7QUFBYixpQkFERixlQUVFLG9EQUZGLGVBR0U7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0ksS0FBS0UsS0FBTCxDQUFXQyxLQURmLENBSEYsQ0FERjtBQVNEOzs7O0VBakJzQ0Msa0JBQU1DLGE7Ozs7Z0JBQTFCSixXLGVBRUE7QUFDakJFLEVBQUFBLEtBQUssRUFBRUcsc0JBQVVDO0FBREEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGFkZFN0eWxlcyBmcm9tICcuLi8uLi8uLi9saWJzL3N0eWxlcyc7XG5cbmZ1bmN0aW9uIHJlbmRlclN0eWxlcygpIHtcbiAgYWRkU3R5bGVzKGAuZXJyb3ItYmFubmVyIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiA0cmVtO1xuICAgIGJhY2tncm91bmQ6ICNmMDA7XG4gICAgcGFkZGluZzogMC44cmVtIDEuMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gIH1gKTtcbiAgYWRkU3R5bGVzKGAuZXJyb3ItYmFubmVyID4gaSB7XG4gICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjJyZW07XG4gIH1gKTtcbiAgYWRkU3R5bGVzKGAuZXJyb3ItYmFubmVyIGgzIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBmb250LWZhbWlseTogJ21vbnRzZXJyYXRib2xkJztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMuMnJlbTtcbiAgfWApO1xuICBhZGRTdHlsZXMoYC5lcnJvci1iYW5uZXJfX2NvbnRlbnQge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiAnbW9udHNlcnJhdHJlZ3VsYXInO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1gKTtcbiAgYWRkU3R5bGVzKGAuZXJyb3ItYmFubmVyX19jb250ZW50IHNwYW4ge1xuICAgIG1hcmdpbi1yaWdodDogMC44cmVtO1xuICB9YCk7XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmxpbmVFcnJvciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZXJyb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJlbmRlclN0eWxlcygpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWJhbm5lclwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yPC9pPlxuICAgICAgICA8aDM+RXJyb3I8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWJhbm5lcl9fY29udGVudFwiPlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5lcnJvciB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19