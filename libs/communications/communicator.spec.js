"use strict";

var _communicator = _interopRequireWildcard(require("./communicator"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

describe('Communicator', function () {
  var communicator;
  var handler = {
    handleComm: function handleComm(e) {}
  };
  beforeEach(function () {
    communicator = new _communicator["default"]();
  });
  it('enables a listener', function () {
    communicator.enableListener(handler);
  });
});