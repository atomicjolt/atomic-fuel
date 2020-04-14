"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("../../../libs/styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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