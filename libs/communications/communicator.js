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

var Communicator =
/*#__PURE__*/
function () {
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