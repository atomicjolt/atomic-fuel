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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _react2.default.createElement(
  'i',
  { className: 'material-icons' },
  'error'
);

var _ref2 = _react2.default.createElement(
  'h3',
  null,
  'Error'
);

var InlineError = function (_React$PureComponent) {
  (0, _inherits3.default)(InlineError, _React$PureComponent);

  function InlineError() {
    (0, _classCallCheck3.default)(this, InlineError);
    return (0, _possibleConstructorReturn3.default)(this, (InlineError.__proto__ || (0, _getPrototypeOf2.default)(InlineError)).apply(this, arguments));
  }

  (0, _createClass3.default)(InlineError, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'error-banner' },
        _ref,
        _ref2,
        _react2.default.createElement(
          'div',
          { className: 'error-banner__content' },
          this.props.error
        )
      );
    }
  }]);
  return InlineError;
}(_react2.default.PureComponent);

exports.default = InlineError;