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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9pbmRleC50c3giXSwibmFtZXMiOlsiQnV0dG9uVHlwZSIsIkJ1dHRvbiIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwiYXJpYU9wdGlvbnMiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJjb2xvciIsImRpc2FibGVkIiwic3VibWl0Iiwibm9Cb2xkIiwicmVzdCIsIm9uQ2xpY2siLCJidXR0b25UeXBlIiwiZ3JheSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7OztJQWVZQSxVOzs7V0FBQUEsVTtBQUFBQSxFQUFBQSxVO0FBQUFBLEVBQUFBLFU7QUFBQUEsRUFBQUEsVTtBQUFBQSxFQUFBQSxVO0FBQUFBLEVBQUFBLFU7QUFBQUEsRUFBQUEsVTtBQUFBQSxFQUFBQSxVO0dBQUFBLFUsMEJBQUFBLFU7O0FBVUwsSUFBTUMsTUFBTSxnQkFBR0Msa0JBQU1DLFVBQU4sQ0FBMkMsVUFBQ0MsS0FBRCxFQUFlQyxHQUFmLEVBQXVCO0FBQUE7O0FBQ3RGLDJCQVVJRCxLQVZKLENBQ0VFLFdBREY7QUFBQSxNQUNFQSxXQURGLG1DQUNnQixFQURoQjtBQUFBLE1BRUVDLFFBRkYsR0FVSUgsS0FWSixDQUVFRyxRQUZGO0FBQUEsTUFHRUMsT0FIRixHQVVJSixLQVZKLENBR0VJLE9BSEY7QUFBQSxNQUlFQyxLQUpGLEdBVUlMLEtBVkosQ0FJRUssS0FKRjtBQUFBLHdCQVVJTCxLQVZKLENBS0VNLFFBTEY7QUFBQSxNQUtFQSxRQUxGLGdDQUthLEtBTGI7QUFBQSxzQkFVSU4sS0FWSixDQU1FTyxNQU5GO0FBQUEsTUFNRUEsTUFORiw4QkFNVyxLQU5YO0FBQUEsTUFPRUMsTUFQRixHQVVJUixLQVZKLENBT0VRLE1BUEY7QUFBQSxNQVFFQyxJQVJGLEdBVUlULEtBVkosQ0FRRVMsSUFSRjtBQUFBLHVCQVVJVCxLQVZKLENBU0VVLE9BVEY7QUFBQSxNQVNFQSxPQVRGLCtCQVNZLFlBQU0sQ0FBRSxDQVRwQjtBQVlBLE1BQU1DLFVBQVUsR0FBR0wsUUFBUSxHQUFHVixVQUFVLENBQUNnQixJQUFkLEdBQXFCWixLQUFLLENBQUNXLFVBQXREO0FBRUEsTUFBTUUsU0FBUyxHQUFHLDRCQUNoQixRQURnQixvREFHRlIsS0FIRSxHQUdRQSxLQUhSLDBDQUlGTSxVQUpFLEdBSWFBLFVBSmIsd0JBS2QsaUJBTGMsRUFLS0gsTUFMTCx3QkFNYkosT0FOYSxFQU1PQSxPQU5QLFFBQWxCO0FBVUEsc0JBQ0U7QUFDRSxJQUFBLEdBQUcsRUFBRUgsR0FEUDtBQUVFLElBQUEsSUFBSSxFQUFFTSxNQUFNLEdBQUcsUUFBSCxHQUFjLFFBRjVCO0FBR0UsSUFBQSxTQUFTLEVBQUVNLFNBSGI7QUFJRSxJQUFBLFFBQVEsRUFBRVA7QUFKWixLQUtNSixXQUxOLEVBTU1PLElBTk47QUFPRSxJQUFBLE9BQU8sRUFBRUM7QUFQWCxNQVNHUCxRQVRILENBREY7QUFhRCxDQXRDcUIsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGFyaWFPcHRpb25zPzogT2JqZWN0LFxuICBidXR0b25UeXBlPzogQnV0dG9uVHlwZSxcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSxcbiAgY2xhc3Nlcz86IHN0cmluZyxcbiAgY29sb3I/OiBzdHJpbmcsXG4gIGRpc2FibGVkPzogYm9vbGVhbixcbiAgbm9Cb2xkPzogYm9vbGVhbixcbiAgc3VibWl0PzogYm9vbGVhbixcbiAgcmVzdD86IE9iamVjdCxcbiAgb25DbGljaz86IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHZvaWQsXG59XG5cbmV4cG9ydCBlbnVtIEJ1dHRvblR5cGUge1xuICBwcmltYXJ5ID0gJ3ByaW1hcnknLFxuICBzZWNvbmRhcnkgPSAnc2Vjb25kYXJ5JyxcbiAgbGFyZ2UgPSAnbGFyZ2UnLFxuICBwcmltYXJ5TGFyZ2UgPSAncHJpbWFyeS1sYXJnZScsXG4gIHNtYWxsID0gJ3NtYWxsJyxcbiAgZ3JheSA9ICdncmF5JyxcbiAgaWNvbiA9ICdpY29uJyxcbn1cblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQsIFByb3BzPigocHJvcHM6IFByb3BzLCByZWYpID0+IHtcbiAgY29uc3Qge1xuICAgIGFyaWFPcHRpb25zID0ge30sXG4gICAgY2hpbGRyZW4sXG4gICAgY2xhc3NlcyxcbiAgICBjb2xvcixcbiAgICBkaXNhYmxlZCA9IGZhbHNlLFxuICAgIHN1Ym1pdCA9IGZhbHNlLFxuICAgIG5vQm9sZCxcbiAgICByZXN0LFxuICAgIG9uQ2xpY2sgPSAoKSA9PiB7fSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGJ1dHRvblR5cGUgPSBkaXNhYmxlZCA/IEJ1dHRvblR5cGUuZ3JheSA6IHByb3BzLmJ1dHRvblR5cGU7XG5cbiAgY29uc3QgY2xhc3NOYW1lID0gY24oXG4gICAgJ2FqLWJ0bicsXG4gICAge1xuICAgICAgW2Bhai1idG4tLSR7Y29sb3J9YF06IGNvbG9yLFxuICAgICAgW2Bhai1idG4tLSR7YnV0dG9uVHlwZX1gXTogYnV0dG9uVHlwZSxcbiAgICAgICdhai1idG4tLW5vLWJvbGQnOiBub0JvbGQsXG4gICAgICBbY2xhc3NlcyBhcyBzdHJpbmddOiBjbGFzc2VzLFxuICAgIH0sXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICByZWY9e3JlZn1cbiAgICAgIHR5cGU9e3N1Ym1pdCA/ICdzdWJtaXQnIDogJ2J1dHRvbid9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIHsuLi5hcmlhT3B0aW9uc31cbiAgICAgIHsuLi5yZXN0fVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9idXR0b24+XG4gICk7XG59KTtcbiJdfQ==