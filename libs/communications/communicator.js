'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      eventer(this.messageEvent, function (e) {
        return handler.handleComm(e);
      }, false);
    }
  }, {
    key: 'comm',
    value: function comm(payload) {
      parent.postMessage((0, _stringify2.default)(payload), this.domain);
    }
  }, {
    key: 'broadcast',
    value: function broadcast(payload) {
      // Post up the entire chain of parent windows.  This supports our use case
      // of the assessment-player being embedded in dumb content which is then
      // embedded in another controller that can understand this message.
      var parents = new _set2.default();
      var p = parent;
      while (!parents.has(p)) {
        // console.log(`Posting message: ${JSON.stringify(payload)}`);
        p.postMessage((0, _stringify2.default)(payload), this.domain);
        parents.add(p);
        p = p.parent;
      }
    }
  }]);
  return Communicator;
}();

exports.default = Communicator;