'use strict';

var _nock = require('nock');

var _nock2 = _interopRequireDefault(_nock);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _network = require('../constants/network');

var _network2 = _interopRequireDefault(_network);

var _helper = require('atomic-reactor/specs_support/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('api', function () {
  var jwt = 'jwt_token';
  var apiUrl = 'http://www.example.com';
  var csrf = 'csrf_value';
  var params = {};
  var body = {};
  var headers = {};
  var expectedHeaders = void 0;

  beforeEach(function () {
    expectedHeaders = {
      Accept: 'application/json'
    };
  });

  afterEach(function () {
    _nock2.default.cleanAll();
  });

  it('calls Get', function () {
    var url = '/api/test/1';
    expectedHeaders.Authorization = 'Bearer ' + jwt;
    expectedHeaders['X-CSRF-Token'] = csrf;
    var nockRequest = _helper2.default.mockRequest('get', apiUrl, url, expectedHeaders);

    _api2.default.get(url, apiUrl, jwt, csrf, params, headers).then(function (result) {
      expect(result.statusCode).toBe(200);
      expect(result.text).toEqual(_helper2.default.testPayload());
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });

  it('calls Get without a jwt', function () {
    var url = '/api/test/2';
    expectedHeaders['X-CSRF-Token'] = csrf;
    var nockRequest = _helper2.default.mockRequest('get', apiUrl, url, expectedHeaders);

    _api2.default.get(url, apiUrl, null, csrf, params, headers).then(function (result) {
      expect(result.statusCode).toBe(200);
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });

  it('calls Get without a csrf', function () {
    var url = '/api/test/3';
    expectedHeaders.Authorization = 'Bearer ' + jwt;
    var nockRequest = _helper2.default.mockRequest('get', apiUrl, url, expectedHeaders);

    _api2.default.get(url, apiUrl, jwt, null, params, headers).then(function (result) {
      expect(result.statusCode).toBe(200);
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });

  it('calls Get with a full url', function () {
    var url = '/api/test/full';
    var nockRequest = _helper2.default.mockRequest('get', apiUrl, url, expectedHeaders);

    _api2.default.get('' + apiUrl + url, apiUrl, jwt, null, params, headers).then(function (result) {
      expect(result.statusCode).toBe(200);
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });

  it('calls Post', function () {
    var url = '/api/test';
    var nockRequest = _helper2.default.mockRequest('post', apiUrl, url, expectedHeaders);

    _api2.default.post(url, apiUrl, jwt, csrf, params, body, headers).then(function (result) {
      expect(result.statusCode).toBe(200);
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });

  it('calls Post with a full url', function () {
    var url = '/api/test/full';
    var nockRequest = _helper2.default.mockRequest('post', apiUrl, url, expectedHeaders);

    _api2.default.post('' + apiUrl + url, apiUrl, jwt, csrf, params, body, headers).then(function (result) {
      expect(result.statusCode).toBe(200);
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });

  it('calls Put', function () {
    var url = '/api/test/4';
    var nockRequest = _helper2.default.mockRequest('put', apiUrl, url, expectedHeaders);

    _api2.default.put(url, apiUrl, jwt, csrf, params, body, headers).then(function (result) {
      expect(result.statusCode).toBe(200);
      var request = result.req;
      expect(request.method.toLowerCase()).toEqual(_network2.default.PUT);
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });

  it('calls Delete', function () {
    var url = '/api/test/5';
    var nockRequest = _helper2.default.mockRequest('delete', apiUrl, url, expectedHeaders);

    _api2.default.del(url, apiUrl, jwt, csrf, params, headers).then(function (result) {
      expect(result.statusCode).toBe(200);
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });

  it('calls execRequest directly', function () {
    var url = '/api/test/6';
    var nockRequest = _helper2.default.mockRequest('get', apiUrl, url, expectedHeaders);

    _api2.default.execRequest(_network2.default.GET, url, apiUrl, null, null).then(function (result) {
      expect(result.statusCode).toBe(200);
      expect(result.text).toEqual(_helper2.default.testPayload());
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });

  it('calls execRequest with optional timeout', function () {
    var url = '/api/test/7';
    var timeout = 1000;
    var nockRequest = _helper2.default.mockRequest('get', apiUrl, url, expectedHeaders);

    _api2.default.execRequest(_network2.default.GET, url, apiUrl, null, null, {}, {}, {}, timeout).then(function (result) {
      expect(result.statusCode).toBe(200);
      expect(result.text).toEqual(_helper2.default.testPayload());
    });
    expect(nockRequest.isDone()).toBeTruthy();
  });

  describe('Pending Requests', function () {
    var url = 'http://www.example.com';
    var requestMethod = function requestMethod() {};

    it('Reuses an existing GET request', function () {
      var requestType = _network2.default.GET;
      var request1 = _api2.default.wrapRequest(url, requestMethod, requestType);
      var request2 = _api2.default.wrapRequest(url, requestMethod, requestType);
      expect(request1).toBe(request2);
    });

    it('Does not reuse Posts requests', function () {
      var requestType = _network2.default.POST;
      var request1 = _api2.default.wrapRequest(url, requestMethod, requestType);
      var request2 = _api2.default.wrapRequest(url, requestMethod, requestType);
      expect(request1).not.toBe(request2);
    });

    it('Does not reuse Put requests', function () {
      var requestType = _network2.default.PUT;
      var request1 = _api2.default.wrapRequest(url, requestMethod, requestType);
      var request2 = _api2.default.wrapRequest(url, requestMethod, requestType);
      expect(request1).not.toBe(request2);
    });

    it('Does not reuse Del requests', function () {
      var requestType = _network2.default.DELETE;
      var request1 = _api2.default.wrapRequest(url, requestMethod, requestType);
      var request2 = _api2.default.wrapRequest(url, requestMethod, requestType);
      expect(request1).not.toBe(request2);
    });
  });
});