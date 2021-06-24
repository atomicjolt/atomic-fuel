"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLtiInstructor = isLtiInstructor;
exports.isLtiAdmin = isLtiAdmin;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isLtiInstructor(roles) {
  return _lodash["default"].includes(roles, 'urn:lti:role:ims/lis/Instructor');
}

function isLtiAdmin(roles) {
  return _lodash["default"].includes(roles, 'urn:lti:role:ims/lis/Administrator') || _lodash["default"].includes(roles, 'urn:lti:instrole:ims/lis/Administrator') || _lodash["default"].includes(roles, 'urn:lti:sysrole:ims/lis/SysAdmin') || _lodash["default"].includes(roles, 'urn:lti:sysrole:ims/lis/Administrator');
}