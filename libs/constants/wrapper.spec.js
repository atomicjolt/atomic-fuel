'use strict';

var _wrapper = require('./wrapper');

var _wrapper2 = _interopRequireDefault(_wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('wrapper', function () {
  var actionTypes = ['LOCAL_ACTION'];
  var asyncActionTypes = ['SERVER_ACTION'];
  var result = (0, _wrapper2.default)(actionTypes, asyncActionTypes);

  it('Setups up local actions', function () {
    // Local actions shouldn't get a 'DONE'
    expect(result.LOCAL_ACTION).toEqual('LOCAL_ACTION');
    expect(result.LOCAL_ACTION_DONE).toEqual(undefined);
  });

  it('Adds a "DONE" for async actions', function () {
    // Server actions or async actions get a 'DONE'
    expect(result.SERVER_ACTION).toEqual('SERVER_ACTION');
    expect(result.SERVER_ACTION_DONE).toEqual('SERVER_ACTION_DONE');
  });
});