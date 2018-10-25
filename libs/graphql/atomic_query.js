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

var _atomicjolt_loader = require('../components/common/atomicjolt_loader');

var _atomicjolt_loader2 = _interopRequireDefault(_atomicjolt_loader);

var _inline_error = require('../components/common/errors/inline_error');

var _inline_error2 = _interopRequireDefault(_inline_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _react2.default.createElement(_atomicjolt_loader2.default, null);

var AtomicQuery = function (_React$Component) {
  (0, _inherits3.default)(AtomicQuery, _React$Component);

  function AtomicQuery() {
    (0, _classCallCheck3.default)(this, AtomicQuery);
    return (0, _possibleConstructorReturn3.default)(this, (AtomicQuery.__proto__ || (0, _getPrototypeOf2.default)(AtomicQuery)).apply(this, arguments));
  }

  (0, _createClass3.default)(AtomicQuery, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactApollo.Query,
        this.props,
        function (result) {
          var loading = result.loading,
              error = result.error;

          if (loading) {
            if (_this2.props.hideLoader) {
              return null;
            }
            return _react2.default.createElement(
              'div',
              { className: 'text--centered' },
              _ref,
              _react2.default.createElement(
                'h1',
                { className: 'c-title' },
                _this2.props.loadingMessage
              )
            );
          }
          if (error) {
            if (error.networkError && error.networkError.result && error.networkError.result.canvas_authorization_required) {
              // This error will be handled by a Canvas reauth. Don't output an error.
              return null;
            }
            return _react2.default.createElement(_inline_error2.default, { error: error.message });
          }
          return _this2.props.children(result);
        }
      );
    }
  }]);
  return AtomicQuery;
}(_react2.default.Component);

exports.default = AtomicQuery;