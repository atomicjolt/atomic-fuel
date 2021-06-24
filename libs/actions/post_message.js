"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postMessage = exports.Constants = void 0;

var _wrapper = _interopRequireDefault(require("../constants/wrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var actions = ['POST_MESSAGE'];
var Constants = (0, _wrapper["default"])(actions, []);
exports.Constants = Constants;

var postMessage = function postMessage(message) {
  var broadcast = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    type: Constants.POST_MESSAGE,
    postMessage: true,
    broadcast: broadcast,
    message: message
  };
};

exports.postMessage = postMessage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3Bvc3RfbWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJhY3Rpb25zIiwiQ29uc3RhbnRzIiwicG9zdE1lc3NhZ2UiLCJtZXNzYWdlIiwiYnJvYWRjYXN0IiwidHlwZSIsIlBPU1RfTUVTU0FHRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLENBQ2QsY0FEYyxDQUFoQjtBQUlPLElBQU1DLFNBQVMsR0FBRyx5QkFBUUQsT0FBUixFQUFpQixFQUFqQixDQUFsQjs7O0FBRUEsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsT0FBRDtBQUFBLE1BQVVDLFNBQVYsdUVBQXNCLEtBQXRCO0FBQUEsU0FBaUM7QUFDMURDLElBQUFBLElBQUksRUFBRUosU0FBUyxDQUFDSyxZQUQwQztBQUUxREosSUFBQUEsV0FBVyxFQUFFLElBRjZDO0FBRzFERSxJQUFBQSxTQUFTLEVBQVRBLFNBSDBEO0FBSTFERCxJQUFBQSxPQUFPLEVBQVBBO0FBSjBELEdBQWpDO0FBQUEsQ0FBcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd3JhcHBlciBmcm9tICcuLi9jb25zdGFudHMvd3JhcHBlcic7XG5cbmNvbnN0IGFjdGlvbnMgPSBbXG4gICdQT1NUX01FU1NBR0UnLFxuXTtcblxuZXhwb3J0IGNvbnN0IENvbnN0YW50cyA9IHdyYXBwZXIoYWN0aW9ucywgW10pO1xuXG5leHBvcnQgY29uc3QgcG9zdE1lc3NhZ2UgPSAobWVzc2FnZSwgYnJvYWRjYXN0ID0gZmFsc2UpID0+ICh7XG4gIHR5cGU6IENvbnN0YW50cy5QT1NUX01FU1NBR0UsXG4gIHBvc3RNZXNzYWdlOiB0cnVlLFxuICBicm9hZGNhc3QsXG4gIG1lc3NhZ2UsXG59KTtcbiJdfQ==