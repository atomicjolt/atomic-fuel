'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Communicator = function () {
  function Communicator() {
    (0, _classCallCheck3.default)(this, Communicator);
  }

  (0, _createClass3.default)(Communicator, null, [{
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
    key: 'broadcastMsg',
    value: function broadcastMsg(payload) {
      // Post up the entire chain of parent windows.  This supports our use case
      // of the assessment-player being embedded in dumb content which is then
      // embedded in another controller that can understand this message.
      var parents = new _set2.default();
      var p = parent;
      while (!parents.has(p)) {
        console.log('Posting message: ' + (0, _stringify2.default)(payload));
        p.postMessage((0, _stringify2.default)(payload), '*');
        parents.add(p);
        p = p.parent;
      }
    }
  }]);
  return Communicator;
}();

exports.default = Communicator;