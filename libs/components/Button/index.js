"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.ButtonType = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ButtonType;
exports.ButtonType = ButtonType;

(function (ButtonType) {
  ButtonType["primary"] = "primary";
  ButtonType["secondary"] = "secondary";
  ButtonType["large"] = "large";
  ButtonType["primaryLarge"] = "primary-large";
  ButtonType["small"] = "small";
  ButtonType["gray"] = "gray";
  ButtonType["icon"] = "icon";
})(ButtonType || (exports.ButtonType = ButtonType = {}));

var Button = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var _cn;

  var _props$ariaOptions = props.ariaOptions,
      ariaOptions = _props$ariaOptions === void 0 ? {} : _props$ariaOptions,
      children = props.children,
      classes = props.classes,
      color = props.color,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$submit = props.submit,
      submit = _props$submit === void 0 ? false : _props$submit,
      noBold = props.noBold,
      rest = props.rest,
      _props$onClick = props.onClick,
      onClick = _props$onClick === void 0 ? function () {} : _props$onClick;
  var buttonType = disabled ? ButtonType.gray : props.buttonType;
  var className = (0, _classnames["default"])('aj-btn', (_cn = {}, _defineProperty(_cn, "aj-btn--".concat(color), color), _defineProperty(_cn, "aj-btn--".concat(buttonType), buttonType), _defineProperty(_cn, 'aj-btn--no-bold', noBold), _defineProperty(_cn, classes, classes), _cn));
  return /*#__PURE__*/_react["default"].createElement("button", _extends({
    ref: ref,
    type: submit ? 'submit' : 'button',
    className: className,
    disabled: disabled
  }, ariaOptions, rest, {
    onClick: onClick
  }), children);
});

exports.Button = Button;