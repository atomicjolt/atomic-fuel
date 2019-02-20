'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.postMessage = postMessage;
exports.broadcastRawMessage = broadcastRawMessage;
exports.broadcastMessage = broadcastMessage;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Just post to the parent
function postMessage(payload) {
  var domain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';

  parent.postMessage((0, _stringify2.default)(payload), domain);
}

// Post a payload without changing it up the entire chain of parent windows.
function broadcastRawMessage(payload) {
  var domain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';

  var parents = new _set2.default();
  var p = parent;
  while (!parents.has(p)) {
    p.postMessage(payload, domain);
    parents.add(p);
    p = p.parent;
  }
}

// Post up the entire chain of parent windows.
function broadcastMessage(payload) {
  var domain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';

  broadcastRawMessage((0, _stringify2.default)(payload), domain);
}

var Communicator = function () {
  function Communicator() {
    var domain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';
    (0, _classCallCheck3.default)(this, Communicator);

    this.domain = domain;
  }

  (0, _createClass3.default)(Communicator, [{
    key: 'enableListener',
    value: function enableListener(handler) {
      // Create IE + others compatible event handler
      var eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';
      var eventer = window[eventMethod];
      this.messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message';
      // Listen to message from child window
      this.handleCommFunc = function (e) {
        return handler.handleComm(e);
      };
      eventer(this.messageEvent, this.handleCommFunc, false);
    }
  }, {
    key: 'removeListener',
    value: function removeListener() {
      // Create IE + others compatible event handler
      var eventMethod = window.removeEventListener ? 'removeEventListener' : 'detachEvent';
      var eventer = window[eventMethod];
      eventer(this.messageEvent, this.handleCommFunc, false);
    }
  }, {
    key: 'comm',
    value: function comm(payload) {
      postMessage(payload, this.domain);
    }
  }, {
    key: 'broadcast',
    value: function broadcast(payload) {
      broadcastMessage(payload, this.domain);
    }
  }], [{
    key: 'parseMessageFromEvent',
    value: function parseMessageFromEvent(e) {
      var message = e.data;
      if (_lodash2.default.isString(e.data)) {
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

exports.default = Communicator;