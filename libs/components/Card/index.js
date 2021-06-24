"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Card;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Card(props) {
  var classOverride = props.classOverride,
      classes = props.classes,
      title = props.title,
      subtitle = props.subtitle,
      blank = props.blank,
      children = props.children;
  var baseClass = classOverride || 'aj-card';
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(baseClass, classes)
  }, !blank && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(baseClass, "__heading")
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "".concat(baseClass, "__heading-title")
  }, title), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "".concat(baseClass, "__heading-subtitle")
  }, subtitle)), /*#__PURE__*/_react["default"].createElement("section", {
    className: "".concat(baseClass, "__content")
  }, children)), blank && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmQvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkNhcmQiLCJwcm9wcyIsImNsYXNzT3ZlcnJpZGUiLCJjbGFzc2VzIiwidGl0bGUiLCJzdWJ0aXRsZSIsImJsYW5rIiwiY2hpbGRyZW4iLCJiYXNlQ2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7OztBQVdlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUE0QjtBQUN6QyxNQUNFQyxhQURGLEdBT0lELEtBUEosQ0FDRUMsYUFERjtBQUFBLE1BRUVDLE9BRkYsR0FPSUYsS0FQSixDQUVFRSxPQUZGO0FBQUEsTUFHRUMsS0FIRixHQU9JSCxLQVBKLENBR0VHLEtBSEY7QUFBQSxNQUlFQyxRQUpGLEdBT0lKLEtBUEosQ0FJRUksUUFKRjtBQUFBLE1BS0VDLEtBTEYsR0FPSUwsS0FQSixDQUtFSyxLQUxGO0FBQUEsTUFNRUMsUUFORixHQU9JTixLQVBKLENBTUVNLFFBTkY7QUFTQSxNQUFNQyxTQUFTLEdBQUdOLGFBQWEsSUFBSSxTQUFuQztBQUVBLHNCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUUsNEJBQUdNLFNBQUgsRUFBY0wsT0FBZDtBQUFoQixLQUNJLENBQUNHLEtBQUQsaUJBQ0EsK0VBQ0U7QUFBSyxJQUFBLFNBQVMsWUFBS0UsU0FBTDtBQUFkLGtCQUNFO0FBQUksSUFBQSxTQUFTLFlBQUtBLFNBQUw7QUFBYixLQUErQ0osS0FBL0MsQ0FERixlQUVFO0FBQUksSUFBQSxTQUFTLFlBQUtJLFNBQUw7QUFBYixLQUFrREgsUUFBbEQsQ0FGRixDQURGLGVBS0U7QUFBUyxJQUFBLFNBQVMsWUFBS0csU0FBTDtBQUFsQixLQUNHRCxRQURILENBTEYsQ0FGSixFQVdJRCxLQUFLLGlCQUFJLGtFQUFHQyxRQUFILENBWGIsQ0FERjtBQWVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgY2xhc3NPdmVycmlkZT86IHN0cmluZyxcbiAgY2xhc3Nlcz86IHN0cmluZyxcbiAgdGl0bGU6IHN0cmluZyxcbiAgc3VidGl0bGU/OiBzdHJpbmcsXG4gIGJsYW5rPzogYm9vbGVhbixcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBjbGFzc092ZXJyaWRlLFxuICAgIGNsYXNzZXMsXG4gICAgdGl0bGUsXG4gICAgc3VidGl0bGUsXG4gICAgYmxhbmssXG4gICAgY2hpbGRyZW4sXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBiYXNlQ2xhc3MgPSBjbGFzc092ZXJyaWRlIHx8ICdhai1jYXJkJztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbihiYXNlQ2xhc3MsIGNsYXNzZXMpfT5cbiAgICAgIHsgIWJsYW5rICYmXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRpbmdgfT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRpbmctdGl0bGVgfT57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRpbmctc3VidGl0bGVgfT57c3VidGl0bGV9PC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2NvbnRlbnRgfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvPiB9XG4gICAgICB7IGJsYW5rICYmIDw+e2NoaWxkcmVufTwvPiB9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0=