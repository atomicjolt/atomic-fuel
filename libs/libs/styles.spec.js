"use strict";

var _styles = _interopRequireDefault(require("./styles.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('addStyles function', function () {
  it('Should only add one class rule to the style element when invoked repetitively', function () {
    for (var i = 0; i < 5; i += 1) {
      (0, _styles["default"])(".error-banner__content {\n        color: #fff;\n        font-family: 'montserratregular';\n        font-weight: normal;\n        font-size: 1.4rem;\n      }");
    }

    var styleEl = document.getElementById('atomic-fuel-styles');
    var stylesheet = styleEl.sheet;
    var rulesLength = stylesheet.cssRules.length;
    expect(rulesLength).toEqual(1);
  });
  it('Should not insert repetitive selectorText to the style element', function () {
    var expectedSelectorTextOne = '.error-banner__content';
    var expectedSelectorTextTwo = '.atomicjolt-loading-animation svg polygon, .atomicjolt-loading-animation svg polyline';

    for (var i = 0; i < 5; i += 1) {
      (0, _styles["default"])("".concat(expectedSelectorTextOne, " {\n        color: #fff;\n        font-family: 'montserratregular';\n        font-weight: normal;\n        font-size: 1.4rem;\n      }"));
      (0, _styles["default"])("".concat(expectedSelectorTextTwo, "{\n        fill: none;\n        stroke: #424;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-width: 8px;\n      }"));
    }

    var styleEl = document.getElementById('atomic-fuel-styles');
    var stylesheet = styleEl.sheet;
    var rulesLength = stylesheet.cssRules.length;
    var selectorTextOne = stylesheet.cssRules[0].selectorText;
    var selectorTextTwo = stylesheet.cssRules[1].selectorText;
    expect(rulesLength).toEqual(2);
    expect(selectorTextOne).toEqual(expectedSelectorTextOne);
    expect(selectorTextTwo).toEqual(expectedSelectorTextTwo);
  });
});