"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postMessage = postMessage;
exports.broadcastRawMessage = broadcastRawMessage;
exports.broadcastMessage = broadcastMessage;
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Just post to the parent
function postMessage(payload) {
  var domain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';
  parent.postMessage(JSON.stringify(payload), domain);
} // Post a payload without changing it up the entire chain of parent windows.


function broadcastRawMessage(payload) {
  var domain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';
  var parents = new Set();
  var p = parent;

  while (!parents.has(p)) {
    p.postMessage(payload, domain);
    parents.add(p);
    p = p.parent;
  }
} // Post up the entire chain of parent windows.


function broadcastMessage(payload) {
  var domain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';
  broadcastRawMessage(JSON.stringify(payload), domain);
}

var Communicator = /*#__PURE__*/function () {
  function Communicator() {
    var domain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

    _classCallCheck(this, Communicator);

    this.domain = domain;
  }

  _createClass(Communicator, [{
    key: "enableListener",
    value: function enableListener(handler) {
      // Create IE + others compatible event handler
      var eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';
      var eventer = window[eventMethod];
      this.messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message'; // Listen to message from child window

      this.handleCommFunc = function (e) {
        return handler.handleComm(e);
      };

      eventer(this.messageEvent, this.handleCommFunc, false);
    }
  }, {
    key: "removeListener",
    value: function removeListener() {
      // Create IE + others compatible event handler
      var eventMethod = window.removeEventListener ? 'removeEventListener' : 'detachEvent';
      var eventer = window[eventMethod];
      eventer(this.messageEvent, this.handleCommFunc, false);
    }
  }, {
    key: "comm",
    value: function comm(payload) {
      postMessage(payload, this.domain);
    }
  }, {
    key: "broadcast",
    value: function broadcast(payload) {
      broadcastMessage(payload, this.domain);
    }
  }], [{
    key: "parseMessageFromEvent",
    value: function parseMessageFromEvent(e) {
      var message = e.data;

      if (_lodash["default"].isString(e.data)) {
        try {
          message = JSON.parse(e.data);
        } catch (ex) {
          // We can't parse the data as JSON just send it through as a string
          message = e.data;
        }
      }

      return message;
    }
  }]);

  return Communicator;
}();

exports["default"] = Communicator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tdW5pY2F0aW9ucy9jb21tdW5pY2F0b3IuanMiXSwibmFtZXMiOlsicG9zdE1lc3NhZ2UiLCJwYXlsb2FkIiwiZG9tYWluIiwicGFyZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImJyb2FkY2FzdFJhd01lc3NhZ2UiLCJwYXJlbnRzIiwiU2V0IiwicCIsImhhcyIsImFkZCIsImJyb2FkY2FzdE1lc3NhZ2UiLCJDb21tdW5pY2F0b3IiLCJoYW5kbGVyIiwiZXZlbnRNZXRob2QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnRlciIsIm1lc3NhZ2VFdmVudCIsImhhbmRsZUNvbW1GdW5jIiwiZSIsImhhbmRsZUNvbW0iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWVzc2FnZSIsImRhdGEiLCJfIiwiaXNTdHJpbmciLCJwYXJzZSIsImV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUFFQTtBQUNPLFNBQVNBLFdBQVQsQ0FBcUJDLE9BQXJCLEVBQTRDO0FBQUEsTUFBZEMsTUFBYyx1RUFBTCxHQUFLO0FBQ2pEQyxFQUFBQSxNQUFNLENBQUNILFdBQVAsQ0FBbUJJLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixPQUFmLENBQW5CLEVBQTRDQyxNQUE1QztBQUNELEMsQ0FFRDs7O0FBQ08sU0FBU0ksbUJBQVQsQ0FBNkJMLE9BQTdCLEVBQW9EO0FBQUEsTUFBZEMsTUFBYyx1RUFBTCxHQUFLO0FBQ3pELE1BQU1LLE9BQU8sR0FBRyxJQUFJQyxHQUFKLEVBQWhCO0FBQ0EsTUFBSUMsQ0FBQyxHQUFHTixNQUFSOztBQUNBLFNBQU8sQ0FBQ0ksT0FBTyxDQUFDRyxHQUFSLENBQVlELENBQVosQ0FBUixFQUF3QjtBQUN0QkEsSUFBQUEsQ0FBQyxDQUFDVCxXQUFGLENBQWNDLE9BQWQsRUFBdUJDLE1BQXZCO0FBQ0FLLElBQUFBLE9BQU8sQ0FBQ0ksR0FBUixDQUFZRixDQUFaO0FBQ0FBLElBQUFBLENBQUMsR0FBR0EsQ0FBQyxDQUFDTixNQUFOO0FBQ0Q7QUFDRixDLENBRUQ7OztBQUNPLFNBQVNTLGdCQUFULENBQTBCWCxPQUExQixFQUFpRDtBQUFBLE1BQWRDLE1BQWMsdUVBQUwsR0FBSztBQUN0REksRUFBQUEsbUJBQW1CLENBQUNGLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixPQUFmLENBQUQsRUFBMEJDLE1BQTFCLENBQW5CO0FBQ0Q7O0lBRW9CVyxZO0FBQ25CLDBCQUEwQjtBQUFBLFFBQWRYLE1BQWMsdUVBQUwsR0FBSzs7QUFBQTs7QUFDeEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7V0FlRCx3QkFBZVksT0FBZixFQUF3QjtBQUN0QjtBQUNBLFVBQU1DLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxnQkFBUCxHQUEwQixrQkFBMUIsR0FBK0MsYUFBbkU7QUFDQSxVQUFNQyxPQUFPLEdBQUdGLE1BQU0sQ0FBQ0QsV0FBRCxDQUF0QjtBQUNBLFdBQUtJLFlBQUwsR0FBb0JKLFdBQVcsS0FBSyxhQUFoQixHQUFnQyxXQUFoQyxHQUE4QyxTQUFsRSxDQUpzQixDQUt0Qjs7QUFDQSxXQUFLSyxjQUFMLEdBQXNCLFVBQUNDLENBQUQ7QUFBQSxlQUFPUCxPQUFPLENBQUNRLFVBQVIsQ0FBbUJELENBQW5CLENBQVA7QUFBQSxPQUF0Qjs7QUFDQUgsTUFBQUEsT0FBTyxDQUFDLEtBQUtDLFlBQU4sRUFBb0IsS0FBS0MsY0FBekIsRUFBeUMsS0FBekMsQ0FBUDtBQUNEOzs7V0FFRCwwQkFBaUI7QUFDZjtBQUNBLFVBQU1MLFdBQVcsR0FBR0MsTUFBTSxDQUFDTyxtQkFBUCxHQUE2QixxQkFBN0IsR0FBcUQsYUFBekU7QUFDQSxVQUFNTCxPQUFPLEdBQUdGLE1BQU0sQ0FBQ0QsV0FBRCxDQUF0QjtBQUNBRyxNQUFBQSxPQUFPLENBQUMsS0FBS0MsWUFBTixFQUFvQixLQUFLQyxjQUF6QixFQUF5QyxLQUF6QyxDQUFQO0FBQ0Q7OztXQUVELGNBQUtuQixPQUFMLEVBQWM7QUFDWkQsTUFBQUEsV0FBVyxDQUFDQyxPQUFELEVBQVUsS0FBS0MsTUFBZixDQUFYO0FBQ0Q7OztXQUVELG1CQUFVRCxPQUFWLEVBQW1CO0FBQ2pCVyxNQUFBQSxnQkFBZ0IsQ0FBQ1gsT0FBRCxFQUFVLEtBQUtDLE1BQWYsQ0FBaEI7QUFDRDs7O1dBcENELCtCQUE2Qm1CLENBQTdCLEVBQWdDO0FBQzlCLFVBQUlHLE9BQU8sR0FBR0gsQ0FBQyxDQUFDSSxJQUFoQjs7QUFDQSxVQUFJQyxtQkFBRUMsUUFBRixDQUFXTixDQUFDLENBQUNJLElBQWIsQ0FBSixFQUF3QjtBQUN0QixZQUFJO0FBQ0ZELFVBQUFBLE9BQU8sR0FBR3BCLElBQUksQ0FBQ3dCLEtBQUwsQ0FBV1AsQ0FBQyxDQUFDSSxJQUFiLENBQVY7QUFDRCxTQUZELENBRUUsT0FBT0ksRUFBUCxFQUFXO0FBQ1g7QUFDQUwsVUFBQUEsT0FBTyxHQUFHSCxDQUFDLENBQUNJLElBQVo7QUFDRDtBQUNGOztBQUNELGFBQU9ELE9BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbi8vIEp1c3QgcG9zdCB0byB0aGUgcGFyZW50XG5leHBvcnQgZnVuY3Rpb24gcG9zdE1lc3NhZ2UocGF5bG9hZCwgZG9tYWluID0gJyonKSB7XG4gIHBhcmVudC5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeShwYXlsb2FkKSwgZG9tYWluKTtcbn1cblxuLy8gUG9zdCBhIHBheWxvYWQgd2l0aG91dCBjaGFuZ2luZyBpdCB1cCB0aGUgZW50aXJlIGNoYWluIG9mIHBhcmVudCB3aW5kb3dzLlxuZXhwb3J0IGZ1bmN0aW9uIGJyb2FkY2FzdFJhd01lc3NhZ2UocGF5bG9hZCwgZG9tYWluID0gJyonKSB7XG4gIGNvbnN0IHBhcmVudHMgPSBuZXcgU2V0KCk7XG4gIGxldCBwID0gcGFyZW50O1xuICB3aGlsZSAoIXBhcmVudHMuaGFzKHApKSB7XG4gICAgcC5wb3N0TWVzc2FnZShwYXlsb2FkLCBkb21haW4pO1xuICAgIHBhcmVudHMuYWRkKHApO1xuICAgIHAgPSBwLnBhcmVudDtcbiAgfVxufVxuXG4vLyBQb3N0IHVwIHRoZSBlbnRpcmUgY2hhaW4gb2YgcGFyZW50IHdpbmRvd3MuXG5leHBvcnQgZnVuY3Rpb24gYnJvYWRjYXN0TWVzc2FnZShwYXlsb2FkLCBkb21haW4gPSAnKicpIHtcbiAgYnJvYWRjYXN0UmF3TWVzc2FnZShKU09OLnN0cmluZ2lmeShwYXlsb2FkKSwgZG9tYWluKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbXVuaWNhdG9yIHtcbiAgY29uc3RydWN0b3IoZG9tYWluID0gJyonKSB7XG4gICAgdGhpcy5kb21haW4gPSBkb21haW47XG4gIH1cblxuICBzdGF0aWMgcGFyc2VNZXNzYWdlRnJvbUV2ZW50KGUpIHtcbiAgICBsZXQgbWVzc2FnZSA9IGUuZGF0YTtcbiAgICBpZiAoXy5pc1N0cmluZyhlLmRhdGEpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBtZXNzYWdlID0gSlNPTi5wYXJzZShlLmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgLy8gV2UgY2FuJ3QgcGFyc2UgdGhlIGRhdGEgYXMgSlNPTiBqdXN0IHNlbmQgaXQgdGhyb3VnaCBhcyBhIHN0cmluZ1xuICAgICAgICBtZXNzYWdlID0gZS5kYXRhO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfVxuXG4gIGVuYWJsZUxpc3RlbmVyKGhhbmRsZXIpIHtcbiAgICAvLyBDcmVhdGUgSUUgKyBvdGhlcnMgY29tcGF0aWJsZSBldmVudCBoYW5kbGVyXG4gICAgY29uc3QgZXZlbnRNZXRob2QgPSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdhdHRhY2hFdmVudCc7XG4gICAgY29uc3QgZXZlbnRlciA9IHdpbmRvd1tldmVudE1ldGhvZF07XG4gICAgdGhpcy5tZXNzYWdlRXZlbnQgPSBldmVudE1ldGhvZCA9PT0gJ2F0dGFjaEV2ZW50JyA/ICdvbm1lc3NhZ2UnIDogJ21lc3NhZ2UnO1xuICAgIC8vIExpc3RlbiB0byBtZXNzYWdlIGZyb20gY2hpbGQgd2luZG93XG4gICAgdGhpcy5oYW5kbGVDb21tRnVuYyA9IChlKSA9PiBoYW5kbGVyLmhhbmRsZUNvbW0oZSk7XG4gICAgZXZlbnRlcih0aGlzLm1lc3NhZ2VFdmVudCwgdGhpcy5oYW5kbGVDb21tRnVuYywgZmFsc2UpO1xuICB9XG5cbiAgcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgLy8gQ3JlYXRlIElFICsgb3RoZXJzIGNvbXBhdGlibGUgZXZlbnQgaGFuZGxlclxuICAgIGNvbnN0IGV2ZW50TWV0aG9kID0gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIgPyAncmVtb3ZlRXZlbnRMaXN0ZW5lcicgOiAnZGV0YWNoRXZlbnQnO1xuICAgIGNvbnN0IGV2ZW50ZXIgPSB3aW5kb3dbZXZlbnRNZXRob2RdO1xuICAgIGV2ZW50ZXIodGhpcy5tZXNzYWdlRXZlbnQsIHRoaXMuaGFuZGxlQ29tbUZ1bmMsIGZhbHNlKTtcbiAgfVxuXG4gIGNvbW0ocGF5bG9hZCkge1xuICAgIHBvc3RNZXNzYWdlKHBheWxvYWQsIHRoaXMuZG9tYWluKTtcbiAgfVxuXG4gIGJyb2FkY2FzdChwYXlsb2FkKSB7XG4gICAgYnJvYWRjYXN0TWVzc2FnZShwYXlsb2FkLCB0aGlzLmRvbWFpbik7XG4gIH1cblxufVxuIl19