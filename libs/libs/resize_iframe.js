"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var communicator_1 = require("../communications/communicator");
var currentHeight = 0;
function sendLtiIframeResize(height) {
    var message = { subject: 'lti.frameResize', height: height };
    (0, communicator_1.broadcastMessage)(message);
}
var defaultGetSize = function () {
    var ruler = document.getElementById('content-measuring-stick');
    return ruler.offsetTop;
};
function initResizeHandler(getSize) {
    if (getSize === void 0) { getSize = defaultGetSize; }
    var handleResize = function () {
        var height = getSize();
        if (height === currentHeight)
            return;
        currentHeight = height;
        sendLtiIframeResize(currentHeight);
    };
    var mObserver = new MutationObserver(handleResize);
    window.addEventListener('resize', handleResize);
    mObserver.observe(document.documentElement, {
        attributes: true, childList: true, subtree: true, characterData: true
    });
}
exports.default = initResizeHandler;
//# sourceMappingURL=resize_iframe.js.map