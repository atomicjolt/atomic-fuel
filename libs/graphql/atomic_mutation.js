'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _inline_error = require('../components/common/errors/inline_error');

var _inline_error2 = _interopRequireDefault(_inline_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AtomicMutation = function (_React$Component) {
  (0, _inherits3.default)(AtomicMutation, _React$Component);

  function AtomicMutation() {
    (0, _classCallCheck3.default)(this, AtomicMutation);
    return (0, _possibleConstructorReturn3.default)(this, (AtomicMutation.__proto__ || (0, _getPrototypeOf2.default)(AtomicMutation)).apply(this, arguments));
  }

  (0, _createClass3.default)(AtomicMutation, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactApollo.Mutation,
        this.props,
        function (method, result) {
          var error = result.error;

          if (error) {
            return _react2.default.createElement(_inline_error2.default, { error: error.message });
          }
          return _this2.props.children(method, result);
        }
      );
    }
  }]);
  return AtomicMutation;
}(_react2.default.Component);

exports.default = AtomicMutation;