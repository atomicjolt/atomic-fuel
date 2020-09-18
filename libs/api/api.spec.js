"use strict";

var _nock = _interopRequireDefault(require("nock"));

var _api = _interopRequireDefault(require("./api"));

var _network = _interopRequireDefault(require("../constants/network"));

var _helper = _interopRequireDefault(require("../specs_support/helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('api', function () {
  var jwt = 'jwt_token';
  var apiUrl = 'http://www.example.com';
  var csrf = 'csrf_value';
  var params = {};
  var body = {};
  var headers = {};
  var expectedHeaders;
  beforeEach(function () {
    expectedHeaders = {
      Accept: 'application/json'
    };
  });
  afterEach(function () {
    _nock["default"].cleanAll();
  });
  it('calls Get', function () {
    var url = '/api/test/1';
    expectedHeaders.Authorization = "Bearer ".concat(jwt);
    expectedHeaders['X-CSRF-Token'] = csrf;

    var nockRequest = _helper["default"].mockRequest('get', apiUrl, url, expectedHeaders);

    _api["default"].get(url, apiUrl, jwt, csrf, params, headers).then(function (result) {
      expect(result.statusCode).toBe(200);
      expect(result.text).toEqual(_helper["default"].testPayload());
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });
  it('calls Get without a jwt', function () {
    var url = '/api/test/2';
    expectedHeaders['X-CSRF-Token'] = csrf;

    var nockRequest = _helper["default"].mockRequest('get', apiUrl, url, expectedHeaders);

    _api["default"].get(url, apiUrl, null, csrf, params, headers).then(function (result) {
      expect(result.statusCode).toBe(200);
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });
  it('calls Get without a csrf', function () {
    var url = '/api/test/3';
    expectedHeaders.Authorization = "Bearer ".concat(jwt);

    var nockRequest = _helper["default"].mockRequest('get', apiUrl, url, expectedHeaders);

    _api["default"].get(url, apiUrl, jwt, null, params, headers).then(function (result) {
      expect(result.statusCode).toBe(200);
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });
  it('calls Get with a full url', function () {
    var url = '/api/test/full';

    var nockRequest = _helper["default"].mockRequest('get', apiUrl, url, expectedHeaders);

    _api["default"].get("".concat(apiUrl).concat(url), apiUrl, jwt, null, params, headers).then(function (result) {
      expect(result.statusCode).toBe(200);
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });
  it('calls Post', function () {
    var url = '/api/test';

    var nockRequest = _helper["default"].mockRequest('post', apiUrl, url, expectedHeaders);

    _api["default"].post(url, apiUrl, jwt, csrf, params, body, headers).then(function (result) {
      expect(result.statusCode).toBe(200);
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });
  it('calls Post with a full url', function () {
    var url = '/api/test/full';

    var nockRequest = _helper["default"].mockRequest('post', apiUrl, url, expectedHeaders);

    _api["default"].post("".concat(apiUrl).concat(url), apiUrl, jwt, csrf, params, body, headers).then(function (result) {
      expect(result.statusCode).toBe(200);
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });
  it('calls Put', function () {
    var url = '/api/test/4';

    var nockRequest = _helper["default"].mockRequest('put', apiUrl, url, expectedHeaders);

    _api["default"].put(url, apiUrl, jwt, csrf, params, body, headers).then(function (result) {
      expect(result.statusCode).toBe(200);
      var request = result.req;
      expect(request.method.toLowerCase()).toEqual(_network["default"].PUT);
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });
  it('calls Delete', function () {
    var url = '/api/test/5';

    var nockRequest = _helper["default"].mockRequest('delete', apiUrl, url, expectedHeaders);

    _api["default"].del(url, apiUrl, jwt, csrf, params, headers).then(function (result) {
      expect(result.statusCode).toBe(200);
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });
  it('calls execRequest directly', function () {
    var url = '/api/test/6';

    var nockRequest = _helper["default"].mockRequest('get', apiUrl, url, expectedHeaders);

    _api["default"].execRequest(_network["default"].GET, url, apiUrl, null, null).then(function (result) {
      expect(result.statusCode).toBe(200);
      expect(result.text).toEqual(_helper["default"].testPayload());
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });
  it('calls execRequest on a Delete with body', function () {
    var url = '/api/test/8';

    var nockRequest = _helper["default"].mockRequest('delete', apiUrl, url, expectedHeaders);

    _api["default"].execRequest(_network["default"].DEL, url, apiUrl, null, null).then(function (result) {
      expect(result.statusCode).toBe(200);
      expect(result.text).toEqual(_helper["default"].testPayload());
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });
  it('calls execRequest with optional timeout', function () {
    var url = '/api/test/7';
    var timeout = 1000;

    var nockRequest = _helper["default"].mockRequest('get', apiUrl, url, expectedHeaders);

    _api["default"].execRequest(_network["default"].GET, url, apiUrl, null, null, {}, {}, {}, timeout).then(function (result) {
      expect(result.statusCode).toBe(200);
      expect(result.text).toEqual(_helper["default"].testPayload());
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });
  describe('Pending Requests', function () {
    var url = 'http://www.example.com';

    var requestMethod = function requestMethod() {};

    it('Reuses an existing GET request', function () {
      var requestType = _network["default"].GET;

      var request1 = _api["default"].wrapRequest(url, requestMethod, requestType);

      var request2 = _api["default"].wrapRequest(url, requestMethod, requestType);

      expect(request1).toBe(request2);
    });
    it('Does not reuse Posts requests', function () {
      var requestType = _network["default"].POST;

      var request1 = _api["default"].wrapRequest(url, requestMethod, requestType);

      var request2 = _api["default"].wrapRequest(url, requestMethod, requestType);

      expect(request1).not.toBe(request2);
    });
    it('Does not reuse Put requests', function () {
      var requestType = _network["default"].PUT;

      var request1 = _api["default"].wrapRequest(url, requestMethod, requestType);

      var request2 = _api["default"].wrapRequest(url, requestMethod, requestType);

      expect(request1).not.toBe(request2);
    });
    it('Does not reuse Del requests', function () {
      var requestType = _network["default"].DELETE;

      var request1 = _api["default"].wrapRequest(url, requestMethod, requestType);

      var request2 = _api["default"].wrapRequest(url, requestMethod, requestType);

      expect(request1).not.toBe(request2);
    });
  });
});