"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _testUtils = _interopRequireDefault(require("react-dom/test-utils"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  findTextField: function findTextField(textFields, labelText) {
    return _lodash["default"].find(textFields, function (field) {
      var label = _testUtils["default"].findRenderedDOMComponentWithTag(field, 'label');

      return label.getDOMNode().textContent.toLowerCase() === labelText;
    });
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGVjc19zdXBwb3J0L3V0aWxzLmpzIl0sIm5hbWVzIjpbImZpbmRUZXh0RmllbGQiLCJ0ZXh0RmllbGRzIiwibGFiZWxUZXh0IiwiXyIsImZpbmQiLCJmaWVsZCIsImxhYmVsIiwiVGVzdFV0aWxzIiwiZmluZFJlbmRlcmVkRE9NQ29tcG9uZW50V2l0aFRhZyIsImdldERPTU5vZGUiLCJ0ZXh0Q29udGVudCIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7ZUFFZTtBQUViQSxFQUFBQSxhQUZhLHlCQUVDQyxVQUZELEVBRWFDLFNBRmIsRUFFd0I7QUFDbkMsV0FBT0MsbUJBQUVDLElBQUYsQ0FBT0gsVUFBUCxFQUFtQixVQUFDSSxLQUFELEVBQVc7QUFDbkMsVUFBTUMsS0FBSyxHQUFHQyxzQkFBVUMsK0JBQVYsQ0FBMENILEtBQTFDLEVBQWlELE9BQWpELENBQWQ7O0FBQ0EsYUFBT0MsS0FBSyxDQUFDRyxVQUFOLEdBQW1CQyxXQUFuQixDQUErQkMsV0FBL0IsT0FBaURULFNBQXhEO0FBQ0QsS0FITSxDQUFQO0FBSUQ7QUFQWSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlc3RVdGlscyBmcm9tICdyZWFjdC1kb20vdGVzdC11dGlscyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgZmluZFRleHRGaWVsZCh0ZXh0RmllbGRzLCBsYWJlbFRleHQpIHtcbiAgICByZXR1cm4gXy5maW5kKHRleHRGaWVsZHMsIChmaWVsZCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWwgPSBUZXN0VXRpbHMuZmluZFJlbmRlcmVkRE9NQ29tcG9uZW50V2l0aFRhZyhmaWVsZCwgJ2xhYmVsJyk7XG4gICAgICByZXR1cm4gbGFiZWwuZ2V0RE9NTm9kZSgpLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkgPT09IGxhYmVsVGV4dDtcbiAgICB9KTtcbiAgfSxcbn07XG4iXX0=