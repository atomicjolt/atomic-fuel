"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ResizeWrapper;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _resize_iframe = _interopRequireDefault(require("../../libs/resize_iframe"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function ResizeWrapper(props) {
  var children = props.children,
      getSize = props.getSize;
  (0, _react.useEffect)(function () {
    (0, _resize_iframe["default"])(getSize);
  }, []);
  return _react["default"].createElement(_react["default"].Fragment, null, children, _react["default"].createElement("div", {
    id: "content-measuring-stick"
  }));
}

ResizeWrapper.propTypes = {
  children: _propTypes["default"].node,
  getSize: _propTypes["default"].func
};