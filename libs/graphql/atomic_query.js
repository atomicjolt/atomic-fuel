"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var AtomicQuery = /*#__PURE__*/function (_React$Component) {
  _inherits(AtomicQuery, _React$Component);

  var _super = _createSuper(AtomicQuery);

  function AtomicQuery() {
    var _this;

    _classCallCheck(this, AtomicQuery);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "dataReady", false);

    _defineProperty(_assertThisInitialized(_this), "dataLoading", false);

    return _this;
  }

  _createClass(AtomicQuery, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement(_reactApollo.Query, this.props, function (result) {
        var loading = result.loading,
            error = result.error;

        if (loading) {
          if (!_this2.dataLoading) {
            _this2.props.onDataLoading();

            _this2.dataLoading = true;
            _this2.dataReady = false;
          }

          if (_this2.props.hideLoader) {
            return null;
          }

          return /*#__PURE__*/_react["default"].createElement(_atomicjolt_loader["default"], {
            message: _this2.props.loadingMessage
          });
        }

        if (error) {
          if (error.networkError && error.networkError.result && error.networkError.result.canvas_authorization_required) {
            // This error will be handled by a Canvas reauth. Don't output an error.
            return null;
          }

          if (error.networkError && error.networkError.bodyText && error.networkError.bodyText.indexOf('JWT::ExpiredSignature') >= 0) {
            return /*#__PURE__*/_react["default"].createElement(_inline_error["default"], {
              error: "Your authentication token has expired. Please refresh the page to enable authentication."
            });
          }

          return /*#__PURE__*/_react["default"].createElement(_inline_error["default"], {
            error: error.message
          });
        }

        if (!_this2.dataReady) {
          _this2.props.onDataReady(result.data);

          _this2.dataReady = true;
          _this2.dataLoading = false;
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
  onDataReady: _propTypes["default"].func,
  onDataLoading: _propTypes["default"].func
});

_defineProperty(AtomicQuery, "defaultProps", {
  onDataReady: function onDataReady() {},
  onDataLoading: function onDataLoading() {}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsL2F0b21pY19xdWVyeS5qc3giXSwibmFtZXMiOlsiQXRvbWljUXVlcnkiLCJwcm9wcyIsInJlc3VsdCIsImxvYWRpbmciLCJlcnJvciIsImRhdGFMb2FkaW5nIiwib25EYXRhTG9hZGluZyIsImRhdGFSZWFkeSIsImhpZGVMb2FkZXIiLCJsb2FkaW5nTWVzc2FnZSIsIm5ldHdvcmtFcnJvciIsImNhbnZhc19hdXRob3JpemF0aW9uX3JlcXVpcmVkIiwiYm9keVRleHQiLCJpbmRleE9mIiwibWVzc2FnZSIsIm9uRGF0YVJlYWR5IiwiZGF0YSIsImNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7Ozs7OztnRUFrQlAsSzs7a0VBRUUsSzs7Ozs7OztXQUVkLGtCQUFTO0FBQUE7O0FBQ1AsMEJBQ0UsZ0NBQUMsa0JBQUQsRUFBVyxLQUFLQyxLQUFoQixFQUNHLFVBQUNDLE1BQUQsRUFBWTtBQUNYLFlBQVFDLE9BQVIsR0FBMkJELE1BQTNCLENBQVFDLE9BQVI7QUFBQSxZQUFpQkMsS0FBakIsR0FBMkJGLE1BQTNCLENBQWlCRSxLQUFqQjs7QUFDQSxZQUFJRCxPQUFKLEVBQWE7QUFDWCxjQUFJLENBQUMsTUFBSSxDQUFDRSxXQUFWLEVBQXVCO0FBQ3JCLFlBQUEsTUFBSSxDQUFDSixLQUFMLENBQVdLLGFBQVg7O0FBQ0EsWUFBQSxNQUFJLENBQUNELFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxZQUFBLE1BQUksQ0FBQ0UsU0FBTCxHQUFpQixLQUFqQjtBQUNEOztBQUVELGNBQUksTUFBSSxDQUFDTixLQUFMLENBQVdPLFVBQWYsRUFBMkI7QUFDekIsbUJBQU8sSUFBUDtBQUNEOztBQUNELDhCQUNFLGdDQUFDLDZCQUFEO0FBQWtCLFlBQUEsT0FBTyxFQUFFLE1BQUksQ0FBQ1AsS0FBTCxDQUFXUTtBQUF0QyxZQURGO0FBR0Q7O0FBQ0QsWUFBSUwsS0FBSixFQUFXO0FBQ1QsY0FBSUEsS0FBSyxDQUFDTSxZQUFOLElBQ0ZOLEtBQUssQ0FBQ00sWUFBTixDQUFtQlIsTUFEakIsSUFFRkUsS0FBSyxDQUFDTSxZQUFOLENBQW1CUixNQUFuQixDQUEwQlMsNkJBRjVCLEVBRTJEO0FBQ3pEO0FBQ0EsbUJBQU8sSUFBUDtBQUNEOztBQUVELGNBQUlQLEtBQUssQ0FBQ00sWUFBTixJQUNGTixLQUFLLENBQUNNLFlBQU4sQ0FBbUJFLFFBRGpCLElBRUZSLEtBQUssQ0FBQ00sWUFBTixDQUFtQkUsUUFBbkIsQ0FBNEJDLE9BQTVCLENBQW9DLHVCQUFwQyxLQUFnRSxDQUZsRSxFQUVxRTtBQUNuRSxnQ0FDRSxnQ0FBQyx3QkFBRDtBQUFhLGNBQUEsS0FBSyxFQUFDO0FBQW5CLGNBREY7QUFHRDs7QUFFRCw4QkFDRSxnQ0FBQyx3QkFBRDtBQUFhLFlBQUEsS0FBSyxFQUFFVCxLQUFLLENBQUNVO0FBQTFCLFlBREY7QUFHRDs7QUFDRCxZQUFJLENBQUMsTUFBSSxDQUFDUCxTQUFWLEVBQXFCO0FBQ25CLFVBQUEsTUFBSSxDQUFDTixLQUFMLENBQVdjLFdBQVgsQ0FBdUJiLE1BQU0sQ0FBQ2MsSUFBOUI7O0FBQ0EsVUFBQSxNQUFJLENBQUNULFNBQUwsR0FBaUIsSUFBakI7QUFDQSxVQUFBLE1BQUksQ0FBQ0YsV0FBTCxHQUFtQixLQUFuQjtBQUNEOztBQUNELGVBQU8sTUFBSSxDQUFDSixLQUFMLENBQVdnQixRQUFYLENBQW9CZixNQUFwQixDQUFQO0FBQ0QsT0EzQ0gsQ0FERjtBQStDRDs7OztFQXRFc0NnQixrQkFBTUMsUzs7OztnQkFBMUJuQixXLGVBRUE7QUFDakJpQixFQUFBQSxRQUFRLEVBQUVHLHNCQUFVQyxJQUFWLENBQWVDLFVBRFI7QUFFakJiLEVBQUFBLGNBQWMsRUFBRVcsc0JBQVVHLE1BRlQ7QUFHakJmLEVBQUFBLFVBQVUsRUFBRVksc0JBQVVJLElBSEw7QUFJakI7QUFDQTtBQUNBO0FBQ0FULEVBQUFBLFdBQVcsRUFBRUssc0JBQVVDLElBUE47QUFRakJmLEVBQUFBLGFBQWEsRUFBRWMsc0JBQVVDO0FBUlIsQzs7Z0JBRkFyQixXLGtCQWFHO0FBQ3BCZSxFQUFBQSxXQUFXLEVBQUUsdUJBQU0sQ0FBRSxDQUREO0FBRXBCVCxFQUFBQSxhQUFhLEVBQUUseUJBQU0sQ0FBRTtBQUZILEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEF0b21pY0pvbHRMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vYXRvbWljam9sdF9sb2FkZXInO1xuaW1wb3J0IElubGluZUVycm9yIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL2Vycm9ycy9pbmxpbmVfZXJyb3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdG9taWNRdWVyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBsb2FkaW5nTWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBoaWRlTG9hZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvLyB0aGUgYmFzZSBRdWVyeSBjb21wb25lbnQgaGFzIGFuIG9uQ29tcGxldGVkIGZ1bmN0aW9uLCBidXQgaXQncyBvbmx5XG4gICAgLy8gY2FsbGVkIGFmdGVyIHRoZSBpbml0aWFsIHJlcXVlc3QgZm9yIGRhdGEgcmV0dXJucywgYW5kIG5vdCBpZiB5b3UgdmlzaXRcbiAgICAvLyB0aGUgcGFnZSBhZ2FpblxuICAgIG9uRGF0YVJlYWR5OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkRhdGFMb2FkaW5nOiBQcm9wVHlwZXMuZnVuYyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uRGF0YVJlYWR5OiAoKSA9PiB7fSxcbiAgICBvbkRhdGFMb2FkaW5nOiAoKSA9PiB7fSxcbiAgfTtcblxuICBkYXRhUmVhZHkgPSBmYWxzZTtcblxuICBkYXRhTG9hZGluZyA9IGZhbHNlO1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFF1ZXJ5IHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgeyhyZXN1bHQpID0+IHtcbiAgICAgICAgICBjb25zdCB7IGxvYWRpbmcsIGVycm9yIH0gPSByZXN1bHQ7XG4gICAgICAgICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhTG9hZGluZykge1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uRGF0YUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVJlYWR5ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmhpZGVMb2FkZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8QXRvbWljSm9sdExvYWRlciBtZXNzYWdlPXt0aGlzLnByb3BzLmxvYWRpbmdNZXNzYWdlfS8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvci5uZXR3b3JrRXJyb3IgJiZcbiAgICAgICAgICAgICAgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdCAmJlxuICAgICAgICAgICAgICBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmNhbnZhc19hdXRob3JpemF0aW9uX3JlcXVpcmVkKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgZXJyb3Igd2lsbCBiZSBoYW5kbGVkIGJ5IGEgQ2FudmFzIHJlYXV0aC4gRG9uJ3Qgb3V0cHV0IGFuIGVycm9yLlxuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVycm9yLm5ldHdvcmtFcnJvciAmJlxuICAgICAgICAgICAgICBlcnJvci5uZXR3b3JrRXJyb3IuYm9keVRleHQgJiZcbiAgICAgICAgICAgICAgZXJyb3IubmV0d29ya0Vycm9yLmJvZHlUZXh0LmluZGV4T2YoJ0pXVDo6RXhwaXJlZFNpZ25hdHVyZScpID49IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8SW5saW5lRXJyb3IgZXJyb3I9XCJZb3VyIGF1dGhlbnRpY2F0aW9uIHRva2VuIGhhcyBleHBpcmVkLiBQbGVhc2UgcmVmcmVzaCB0aGUgcGFnZSB0byBlbmFibGUgYXV0aGVudGljYXRpb24uXCIgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPElubGluZUVycm9yIGVycm9yPXtlcnJvci5tZXNzYWdlfSAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLmRhdGFSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkRhdGFSZWFkeShyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFSZWFkeSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmRhdGFMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHJlc3VsdCk7XG4gICAgICAgIH19XG4gICAgICA8L1F1ZXJ5PlxuICAgICk7XG4gIH1cblxufVxuIl19