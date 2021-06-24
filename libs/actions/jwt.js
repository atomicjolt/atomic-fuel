"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refreshJwt = refreshJwt;
exports.Constants = void 0;

var _wrapper = _interopRequireDefault(require("../constants/wrapper"));

var _network = _interopRequireDefault(require("../constants/network"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Local actions
var actions = []; // Actions that make an api request

var requests = ['REFRESH_JWT'];
var Constants = (0, _wrapper["default"])(actions, requests);
exports.Constants = Constants;

function refreshJwt(userId) {
  return {
    type: Constants.REFRESH_JWT,
    method: _network["default"].GET,
    url: "api/jwts/".concat(userId)
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL2p3dC5qcyJdLCJuYW1lcyI6WyJhY3Rpb25zIiwicmVxdWVzdHMiLCJDb25zdGFudHMiLCJyZWZyZXNoSnd0IiwidXNlcklkIiwidHlwZSIsIlJFRlJFU0hfSldUIiwibWV0aG9kIiwiTmV0d29yayIsIkdFVCIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBO0FBQ0EsSUFBTUEsT0FBTyxHQUFHLEVBQWhCLEMsQ0FFQTs7QUFDQSxJQUFNQyxRQUFRLEdBQUcsQ0FDZixhQURlLENBQWpCO0FBSU8sSUFBTUMsU0FBUyxHQUFHLHlCQUFRRixPQUFSLEVBQWlCQyxRQUFqQixDQUFsQjs7O0FBRUEsU0FBU0UsVUFBVCxDQUFvQkMsTUFBcEIsRUFBNEI7QUFDakMsU0FBTztBQUNMQyxJQUFBQSxJQUFJLEVBQUtILFNBQVMsQ0FBQ0ksV0FEZDtBQUVMQyxJQUFBQSxNQUFNLEVBQUdDLG9CQUFRQyxHQUZaO0FBR0xDLElBQUFBLEdBQUcscUJBQWtCTixNQUFsQjtBQUhFLEdBQVA7QUFLRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3cmFwcGVyIGZyb20gJy4uL2NvbnN0YW50cy93cmFwcGVyJztcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4uL2NvbnN0YW50cy9uZXR3b3JrJztcblxuLy8gTG9jYWwgYWN0aW9uc1xuY29uc3QgYWN0aW9ucyA9IFtdO1xuXG4vLyBBY3Rpb25zIHRoYXQgbWFrZSBhbiBhcGkgcmVxdWVzdFxuY29uc3QgcmVxdWVzdHMgPSBbXG4gICdSRUZSRVNIX0pXVCcsXG5dO1xuXG5leHBvcnQgY29uc3QgQ29uc3RhbnRzID0gd3JhcHBlcihhY3Rpb25zLCByZXF1ZXN0cyk7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoSnd0KHVzZXJJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGUgICA6IENvbnN0YW50cy5SRUZSRVNIX0pXVCxcbiAgICBtZXRob2QgOiBOZXR3b3JrLkdFVCxcbiAgICB1cmwgICAgOiBgYXBpL2p3dHMvJHt1c2VySWR9YCxcbiAgfTtcbn1cbiJdfQ==