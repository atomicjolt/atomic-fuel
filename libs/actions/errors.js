"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearErrors = clearErrors;
exports.addError = addError;
exports.Constants = void 0;

var _wrapper = _interopRequireDefault(require("../constants/wrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Local actions
var actions = ['CLEAR_ERRORS', 'ADD_ERROR']; // Actions that make an api request

var requests = [];
var Constants = (0, _wrapper["default"])(actions, requests);
exports.Constants = Constants;

function clearErrors() {
  return {
    type: Constants.CLEAR_ERRORS
  };
} // Error should be the original error, usually from a network response.


function addError(error, message, context) {
  return {
    type: Constants.ADD_ERROR,
    payload: {
      error: error,
      message: message,
      context: context
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL2Vycm9ycy5qcyJdLCJuYW1lcyI6WyJhY3Rpb25zIiwicmVxdWVzdHMiLCJDb25zdGFudHMiLCJjbGVhckVycm9ycyIsInR5cGUiLCJDTEVBUl9FUlJPUlMiLCJhZGRFcnJvciIsImVycm9yIiwibWVzc2FnZSIsImNvbnRleHQiLCJBRERfRVJST1IiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUVBO0FBQ0EsSUFBTUEsT0FBTyxHQUFHLENBQ2QsY0FEYyxFQUVkLFdBRmMsQ0FBaEIsQyxDQUtBOztBQUNBLElBQU1DLFFBQVEsR0FBRyxFQUFqQjtBQUdPLElBQU1DLFNBQVMsR0FBRyx5QkFBUUYsT0FBUixFQUFpQkMsUUFBakIsQ0FBbEI7OztBQUVBLFNBQVNFLFdBQVQsR0FBdUI7QUFDNUIsU0FBTztBQUNMQyxJQUFBQSxJQUFJLEVBQUVGLFNBQVMsQ0FBQ0c7QUFEWCxHQUFQO0FBR0QsQyxDQUVEOzs7QUFDTyxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF5QkMsT0FBekIsRUFBa0NDLE9BQWxDLEVBQTJDO0FBQ2hELFNBQU87QUFDTEwsSUFBQUEsSUFBSSxFQUFFRixTQUFTLENBQUNRLFNBRFg7QUFFTEMsSUFBQUEsT0FBTyxFQUFFO0FBQ1BKLE1BQUFBLEtBQUssRUFBTEEsS0FETztBQUVQQyxNQUFBQSxPQUFPLEVBQVBBLE9BRk87QUFHUEMsTUFBQUEsT0FBTyxFQUFQQTtBQUhPO0FBRkosR0FBUDtBQVFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vY29uc3RhbnRzL3dyYXBwZXInO1xuXG4vLyBMb2NhbCBhY3Rpb25zXG5jb25zdCBhY3Rpb25zID0gW1xuICAnQ0xFQVJfRVJST1JTJyxcbiAgJ0FERF9FUlJPUicsXG5dO1xuXG4vLyBBY3Rpb25zIHRoYXQgbWFrZSBhbiBhcGkgcmVxdWVzdFxuY29uc3QgcmVxdWVzdHMgPSBbXG5dO1xuXG5leHBvcnQgY29uc3QgQ29uc3RhbnRzID0gd3JhcHBlcihhY3Rpb25zLCByZXF1ZXN0cyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckVycm9ycygpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDb25zdGFudHMuQ0xFQVJfRVJST1JTLFxuICB9O1xufVxuXG4vLyBFcnJvciBzaG91bGQgYmUgdGhlIG9yaWdpbmFsIGVycm9yLCB1c3VhbGx5IGZyb20gYSBuZXR3b3JrIHJlc3BvbnNlLlxuZXhwb3J0IGZ1bmN0aW9uIGFkZEVycm9yKGVycm9yLCBtZXNzYWdlLCBjb250ZXh0KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ29uc3RhbnRzLkFERF9FUlJPUixcbiAgICBwYXlsb2FkOiB7XG4gICAgICBlcnJvcixcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBjb250ZXh0LFxuICAgIH0sXG4gIH07XG59XG4iXX0=