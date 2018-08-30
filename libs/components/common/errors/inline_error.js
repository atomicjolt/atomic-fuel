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

var _styles = require('../../../libs/styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderStyles() {
  (0, _styles2.default)('.error-banner {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-align-items: center;\n    align-items: center;\n    min-height: 4rem;\n    background: #f00;\n    padding: 0.8rem 1.2rem;\n    border-radius: 0.3rem;\n    margin: 20px 0;\n  }');
  (0, _styles2.default)('.error-banner > i {\n    font-size: 2.4rem;\n    color: #fff;\n    margin-right: 1.2rem;\n  }');
  (0, _styles2.default)('.error-banner h3 {\n    color: #fff;\n    font-size: 1.4rem;\n    font-family: \'montserratbold\';\n    font-weight: normal;\n    margin: 0;\n    margin-right: 3.2rem;\n  }');
  (0, _styles2.default)('.error-banner__content {\n    color: #fff;\n    font-family: \'montserratregular\';\n    font-weight: normal;\n    font-size: 1.4rem;\n  }');
  (0, _styles2.default)('.error-banner__content span {\n    margin-right: 0.8rem;\n  }');
}

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
      renderStyles();
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