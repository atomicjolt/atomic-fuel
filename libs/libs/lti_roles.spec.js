"use strict";

var _lti_roles = require("./lti_roles");

describe('isLtiInstructor', function () {
  it('returns true if the roles includes an array with urn:lti:role:ims/lis/Instructor', function () {
    var roles = ['urn:lti:role:ims/lis/Instructor'];
    expect((0, _lti_roles.isLtiInstructor)(roles)).toBe(true);
  });
  it('returns true if the roles includes a string with urn:lti:role:ims/lis/Instructor', function () {
    var roles = 'urn:lti:role:ims/lis/Instructor';
    expect((0, _lti_roles.isLtiInstructor)(roles)).toBe(true);
  });
});
describe('isLtiAdmin', function () {
  it('returns true if the roles includes an array with urn:lti:role:ims/lis/Administrator', function () {
    var roles = ['urn:lti:role:ims/lis/Administrator'];
    expect((0, _lti_roles.isLtiAdmin)(roles)).toBe(true);
  });
  it('returns true if the roles includes a string with urn:lti:role:ims/lis/Administrator', function () {
    var roles = 'urn:lti:role:ims/lis/Administrator';
    expect((0, _lti_roles.isLtiAdmin)(roles)).toBe(true);
  });
});