"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactApollo = require("react-apollo");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _atomicjolt_loader = _interopRequireDefault(require("../components/common/atomicjolt_loader"));

var _inline_error = _interopRequireDefault(require("../components/common/errors/inline_error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AtomicQuery =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AtomicQuery, _React$Component);

  function AtomicQuery() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AtomicQuery);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AtomicQuery)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "dataReady", false);

    return _this;
  }

  _createClass(AtomicQuery, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement(_reactApollo.Query, this.props, function (result) {
        var loading = result.loading,
            error = result.error;

        if (loading) {
          if (_this2.props.hideLoader) {
            return null;
          }

          return _react["default"].createElement("div", {
            className: "text--centered"
          }, _react["default"].createElement(_atomicjolt_loader["default"], null), _react["default"].createElement("h1", {
            className: "c-title"
          }, _this2.props.loadingMessage));
        }

        if (error) {
          if (error.networkError && error.networkError.result && error.networkError.result.canvas_authorization_required) {
            // This error will be handled by a Canvas reauth. Don't output an error.
            return null;
          }

          if (error.networkError && error.networkError.bodyText && error.networkError.bodyText.indexOf('JWT::ExpiredSignature') >= 0) {
            return _react["default"].createElement(_inline_error["default"], {
              error: "Your authentication token has expired. Please refresh the page to enable authentication."
            });
          }

          return _react["default"].createElement(_inline_error["default"], {
            error: error.message
          });
        }

        if (!_this2.dataReady) {
          _this2.props.onDataReady(result.data);

          _this2.dataReady = true;
        }

        return _this2.props.children(result);
      });
    }
  }]);

  return AtomicQuery;
}(_react["default"].Component);

exports["default"] = AtomicQuery;

_defineProperty(AtomicQuery, "propTypes", {
  children: _propTypes["default"].func.isRequired,
  loadingMessage: _propTypes["default"].string,
  hideLoader: _propTypes["default"].bool,
  // the base Query component has an onCompleted function, but it's only
  // called after the initial request for data returns, and not if you visit
  // the page again
  onDataReady: _propTypes["default"].func
});

_defineProperty(AtomicQuery, "defaultProps", {
  onDataReady: function onDataReady() {}
});