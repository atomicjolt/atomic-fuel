"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function getAddStyles() {
  var selectorTextRegex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /[^{]*/;
  var memo = {};
  var id = 'atomic-fuel-styles';
  var styleEl = document.getElementById(id);
  return function (styles) {
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = id;
      document.head.appendChild(styleEl);
    }
    /*
     * The RegEx below extracts the selectorText from the styles
     * string. For example running this regex on the styles string
     * ".myClass > h1 .myclassTwo {...}" would yield ".myClass > h1 .myclassTwo"
     */


    var classes = styles.match(selectorTextRegex)[0].trim();

    if (memo[classes] === undefined) {
      var styleSheet = styleEl.sheet;
      styleSheet.insertRule(styles, styleSheet.cssRules.length);
      memo[classes] = 1;
    }
  };
}

var _default = getAddStyles();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWJzL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJnZXRBZGRTdHlsZXMiLCJzZWxlY3RvclRleHRSZWdleCIsIm1lbW8iLCJpZCIsInN0eWxlRWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGVzIiwiY3JlYXRlRWxlbWVudCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImNsYXNzZXMiLCJtYXRjaCIsInRyaW0iLCJ1bmRlZmluZWQiLCJzdHlsZVNoZWV0Iiwic2hlZXQiLCJpbnNlcnRSdWxlIiwiY3NzUnVsZXMiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxTQUFTQSxZQUFULEdBQW1EO0FBQUEsTUFBN0JDLGlCQUE2Qix1RUFBVCxPQUFTO0FBQ2pELE1BQU1DLElBQUksR0FBRyxFQUFiO0FBQ0EsTUFBTUMsRUFBRSxHQUFHLG9CQUFYO0FBRUEsTUFBSUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JILEVBQXhCLENBQWQ7QUFFQSxTQUFPLFVBQUNJLE1BQUQsRUFBWTtBQUNqQixRQUFJLENBQUNILE9BQUwsRUFBYztBQUNaQSxNQUFBQSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixPQUF2QixDQUFWO0FBQ0FKLE1BQUFBLE9BQU8sQ0FBQ0QsRUFBUixHQUFhQSxFQUFiO0FBQ0FFLE1BQUFBLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjQyxXQUFkLENBQTBCTixPQUExQjtBQUNEO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0ksUUFBTU8sT0FBTyxHQUFHSixNQUFNLENBQUNLLEtBQVAsQ0FBYVgsaUJBQWIsRUFBZ0MsQ0FBaEMsRUFBbUNZLElBQW5DLEVBQWhCOztBQUVBLFFBQUlYLElBQUksQ0FBQ1MsT0FBRCxDQUFKLEtBQWtCRyxTQUF0QixFQUFpQztBQUMvQixVQUFNQyxVQUFVLEdBQUdYLE9BQU8sQ0FBQ1ksS0FBM0I7QUFDQUQsTUFBQUEsVUFBVSxDQUFDRSxVQUFYLENBQXNCVixNQUF0QixFQUE4QlEsVUFBVSxDQUFDRyxRQUFYLENBQW9CQyxNQUFsRDtBQUNBakIsTUFBQUEsSUFBSSxDQUFDUyxPQUFELENBQUosR0FBZ0IsQ0FBaEI7QUFDRDtBQUNGLEdBbkJEO0FBb0JEOztlQUVjWCxZQUFZLEUiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRBZGRTdHlsZXMoc2VsZWN0b3JUZXh0UmVnZXggPSAvW157XSovKSB7XG4gIGNvbnN0IG1lbW8gPSB7fTtcbiAgY29uc3QgaWQgPSAnYXRvbWljLWZ1ZWwtc3R5bGVzJztcblxuICBsZXQgc3R5bGVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICByZXR1cm4gKHN0eWxlcykgPT4ge1xuICAgIGlmICghc3R5bGVFbCkge1xuICAgICAgc3R5bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBzdHlsZUVsLmlkID0gaWQ7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlRWwpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogVGhlIFJlZ0V4IGJlbG93IGV4dHJhY3RzIHRoZSBzZWxlY3RvclRleHQgZnJvbSB0aGUgc3R5bGVzXG4gICAgICogc3RyaW5nLiBGb3IgZXhhbXBsZSBydW5uaW5nIHRoaXMgcmVnZXggb24gdGhlIHN0eWxlcyBzdHJpbmdcbiAgICAgKiBcIi5teUNsYXNzID4gaDEgLm15Y2xhc3NUd28gey4uLn1cIiB3b3VsZCB5aWVsZCBcIi5teUNsYXNzID4gaDEgLm15Y2xhc3NUd29cIlxuICAgICAqL1xuICAgIGNvbnN0IGNsYXNzZXMgPSBzdHlsZXMubWF0Y2goc2VsZWN0b3JUZXh0UmVnZXgpWzBdLnRyaW0oKTtcblxuICAgIGlmIChtZW1vW2NsYXNzZXNdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHN0eWxlU2hlZXQgPSBzdHlsZUVsLnNoZWV0O1xuICAgICAgc3R5bGVTaGVldC5pbnNlcnRSdWxlKHN0eWxlcywgc3R5bGVTaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgICAgbWVtb1tjbGFzc2VzXSA9IDE7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRBZGRTdHlsZXMoKTtcbiJdfQ==