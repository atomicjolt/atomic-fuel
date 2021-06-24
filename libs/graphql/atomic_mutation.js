"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactApollo = require("react-apollo");

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var AtomicMutation = /*#__PURE__*/function (_React$Component) {
  _inherits(AtomicMutation, _React$Component);

  var _super = _createSuper(AtomicMutation);

  function AtomicMutation() {
    _classCallCheck(this, AtomicMutation);

    return _super.apply(this, arguments);
  }

  _createClass(AtomicMutation, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/_react["default"].createElement(_reactApollo.Mutation, this.props, function (method, result) {
        var error = result.error;

        if (error) {
          return /*#__PURE__*/_react["default"].createElement(_inline_error["default"], {
            error: error.message
          });
        }

        return _this.props.children(method, result);
      });
    }
  }]);

  return AtomicMutation;
}(_react["default"].Component);

exports["default"] = AtomicMutation;

_defineProperty(AtomicMutation, "propTypes", {
  children: _propTypes["default"].func.isRequired
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsL2F0b21pY19tdXRhdGlvbi5qc3giXSwibmFtZXMiOlsiQXRvbWljTXV0YXRpb24iLCJwcm9wcyIsIm1ldGhvZCIsInJlc3VsdCIsImVycm9yIiwibWVzc2FnZSIsImNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxjOzs7Ozs7Ozs7Ozs7O1dBTW5CLGtCQUFTO0FBQUE7O0FBQ1AsMEJBQ0UsZ0NBQUMscUJBQUQsRUFBYyxLQUFLQyxLQUFuQixFQUNHLFVBQUNDLE1BQUQsRUFBU0MsTUFBVCxFQUFvQjtBQUNuQixZQUFRQyxLQUFSLEdBQWtCRCxNQUFsQixDQUFRQyxLQUFSOztBQUNBLFlBQUlBLEtBQUosRUFBVztBQUNULDhCQUNFLGdDQUFDLHdCQUFEO0FBQWEsWUFBQSxLQUFLLEVBQUVBLEtBQUssQ0FBQ0M7QUFBMUIsWUFERjtBQUdEOztBQUNELGVBQU8sS0FBSSxDQUFDSixLQUFMLENBQVdLLFFBQVgsQ0FBb0JKLE1BQXBCLEVBQTRCQyxNQUE1QixDQUFQO0FBQ0QsT0FUSCxDQURGO0FBYUQ7Ozs7RUFwQnlDSSxrQkFBTUMsUzs7OztnQkFBN0JSLGMsZUFFQTtBQUNqQk0sRUFBQUEsUUFBUSxFQUFFRyxzQkFBVUMsSUFBVixDQUFlQztBQURSLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTXV0YXRpb24gfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IElubGluZUVycm9yIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL2Vycm9ycy9pbmxpbmVfZXJyb3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdG9taWNNdXRhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNdXRhdGlvbiB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIHsobWV0aG9kLCByZXN1bHQpID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByZXN1bHQ7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8SW5saW5lRXJyb3IgZXJyb3I9e2Vycm9yLm1lc3NhZ2V9IC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbihtZXRob2QsIHJlc3VsdCk7XG4gICAgICAgIH19XG4gICAgICA8L011dGF0aW9uPlxuICAgICk7XG4gIH1cblxufVxuIl19