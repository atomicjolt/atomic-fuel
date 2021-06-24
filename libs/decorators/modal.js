"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = modalDecorator;

var _reactRedux = require("react-redux");

var ModalActions = _interopRequireWildcard(require("../actions/modal"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Dont use with decorator syntax but it is a decorator non the less
function modalDecorator(Component, name) {
  var select = function select(_ref) {
    var modal = _ref.modal;
    return {
      isOpen: modal.currentOpenModal === name
    };
  };

  return (0, _reactRedux.connect)(select, ModalActions)(Component);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNvcmF0b3JzL21vZGFsLmpzIl0sIm5hbWVzIjpbIm1vZGFsRGVjb3JhdG9yIiwiQ29tcG9uZW50IiwibmFtZSIsInNlbGVjdCIsIm1vZGFsIiwiaXNPcGVuIiwiY3VycmVudE9wZW5Nb2RhbCIsIk1vZGFsQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUdBO0FBQ2UsU0FBU0EsY0FBVCxDQUF3QkMsU0FBeEIsRUFBbUNDLElBQW5DLEVBQXlDO0FBQ3RELE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsUUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsV0FBZ0I7QUFBRUMsTUFBQUEsTUFBTSxFQUFFRCxLQUFLLENBQUNFLGdCQUFOLEtBQTJCSjtBQUFyQyxLQUFoQjtBQUFBLEdBQWY7O0FBQ0EsU0FBTyx5QkFBUUMsTUFBUixFQUFnQkksWUFBaEIsRUFBOEJOLFNBQTlCLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBNb2RhbEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9tb2RhbCc7XG5cblxuLy8gRG9udCB1c2Ugd2l0aCBkZWNvcmF0b3Igc3ludGF4IGJ1dCBpdCBpcyBhIGRlY29yYXRvciBub24gdGhlIGxlc3NcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsRGVjb3JhdG9yKENvbXBvbmVudCwgbmFtZSkge1xuICBjb25zdCBzZWxlY3QgPSAoeyBtb2RhbCB9KSA9PiAoeyBpc09wZW46IG1vZGFsLmN1cnJlbnRPcGVuTW9kYWwgPT09IG5hbWUgfSk7XG4gIHJldHVybiBjb25uZWN0KHNlbGVjdCwgTW9kYWxBY3Rpb25zKShDb21wb25lbnQpO1xufVxuIl19