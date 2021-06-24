"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeModal = exports.openModal = exports.Constants = void 0;

var _wrapper = _interopRequireDefault(require("../constants/wrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Local actions
var actions = ['OPEN_MODAL', 'CLOSE_MODAL'];
var Constants = (0, _wrapper["default"])(actions, []);
exports.Constants = Constants;

var openModal = function openModal(modalName) {
  return {
    type: Constants.OPEN_MODAL,
    modalName: modalName
  };
};

exports.openModal = openModal;

var closeModal = function closeModal() {
  return {
    type: Constants.CLOSE_MODAL
  };
};

exports.closeModal = closeModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL21vZGFsLmpzIl0sIm5hbWVzIjpbImFjdGlvbnMiLCJDb25zdGFudHMiLCJvcGVuTW9kYWwiLCJtb2RhbE5hbWUiLCJ0eXBlIiwiT1BFTl9NT0RBTCIsImNsb3NlTW9kYWwiLCJDTE9TRV9NT0RBTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUE7QUFDQSxJQUFNQSxPQUFPLEdBQUcsQ0FDZCxZQURjLEVBRWQsYUFGYyxDQUFoQjtBQUtPLElBQU1DLFNBQVMsR0FBRyx5QkFBUUQsT0FBUixFQUFpQixFQUFqQixDQUFsQjs7O0FBRUEsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsU0FBRDtBQUFBLFNBQWdCO0FBQUVDLElBQUFBLElBQUksRUFBRUgsU0FBUyxDQUFDSSxVQUFsQjtBQUE4QkYsSUFBQUEsU0FBUyxFQUFUQTtBQUE5QixHQUFoQjtBQUFBLENBQWxCOzs7O0FBRUEsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxTQUFPO0FBQUVGLElBQUFBLElBQUksRUFBRUgsU0FBUyxDQUFDTTtBQUFsQixHQUFQO0FBQUEsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd3JhcHBlciAgICBmcm9tICcuLi9jb25zdGFudHMvd3JhcHBlcic7XG5cbi8vIExvY2FsIGFjdGlvbnNcbmNvbnN0IGFjdGlvbnMgPSBbXG4gICdPUEVOX01PREFMJyxcbiAgJ0NMT1NFX01PREFMJ1xuXTtcblxuZXhwb3J0IGNvbnN0IENvbnN0YW50cyA9IHdyYXBwZXIoYWN0aW9ucywgW10pO1xuXG5leHBvcnQgY29uc3Qgb3Blbk1vZGFsID0gKG1vZGFsTmFtZSkgPT4gKHsgdHlwZTogQ29uc3RhbnRzLk9QRU5fTU9EQUwsIG1vZGFsTmFtZSB9KTtcblxuZXhwb3J0IGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiAoeyB0eXBlOiBDb25zdGFudHMuQ0xPU0VfTU9EQUwgfSk7XG4iXX0=