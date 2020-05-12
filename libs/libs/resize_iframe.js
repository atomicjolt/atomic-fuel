"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initResizeHandler;

var _communicator = require("../communications/communicator");

var currentHeight = 0;

function sendLtiIframeResize(height) {
  var message = {
    subject: 'lti.frameResize',
    height: height
  };
  (0, _communicator.broadcastMessage)(message);
}

var defaultGetSize = function defaultGetSize() {
  var ruler = document.getElementById('content-measuring-stick');
  return ruler.offsetTop;
};

function initResizeHandler() {
  var getSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultGetSize;

  var handleResize = function handleResize() {
    var height = getSize();
    if (height === currentHeight) return;
    currentHeight = height;
    sendLtiIframeResize(currentHeight);
  };

  var mObserver = new MutationObserver(handleResize);
  window.addEventListener('resize', handleResize);
  mObserver.observe(document.documentElement, {
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true
  });
}