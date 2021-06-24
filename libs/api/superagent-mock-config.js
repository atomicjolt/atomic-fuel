"use strict";

// ./superagent-mock-config.js file
module.exports = [{
  /**
   * regular expression of URL
   */
  pattern: 'http://www.example.com(.*)',

  /**
   * returns the data
   *
   * @param match array Result of the resolution of the regular expression
   * @param params object sent by 'send' function
   * @param headers object set by 'set' function
   * @param context object the context of running the fixtures function
   */
  fixtures: function fixtures(match, params, headers, context) {
    /**
     * Returning error codes example:
     *   request.get('https://domain.example/404').end(function(err, res){
     *     console.log(err); // 404
     *     console.log(res.notFound); // true
     *   })
     */
    if (match[1] === '/404') {
      throw new Error(404);
    }
    /**
     * Checking on parameters example:
     *   request.get('https://domain.example/hero').send({superhero: "superman"}).end(function(err, res){
     *     console.log(res.body); // "Your hero: superman"
     *   })
     */


    if (match[1] === '/hero') {
      if (params.superhero) {
        return "Your hero:".concat(params.superhero);
      }

      return 'You didnt choose a hero';
    }
    /**
     * Checking on headers example:
     *   request.get('https://domain.example/authorized_endpoint').set({Authorization: "9382hfih1834h"}).end(function(err, res){
     *     console.log(res.body); // "Authenticated!"
     *   })
     */


    if (match[1] === '/api/test/12') {
      if (headers.Authorization && headers['X-CSRF-Token']) {
        return {
          status: 200,
          contentType: 'application/json',
          statusText: 'OK',
          responseText: JSON.stringify([{
            id: 1,
            name: 'Starter App'
          }])
        };
      }

      return {
        status: 401,
        statusText: 'Unauthorized'
      };
    }
    /**
     * Cancelling the mocking for a specific matched route example:
     *   request.get('https://domain.example/server_test').end(function(err, res){
     *     console.log(res.body); // (whatever the actual server would have returned)
     *   })
     */


    if (match[1] === '/api/test/full') {
      return {
        status: 200,
        contentType: 'application/json',
        statusText: 'OK',
        responseText: JSON.stringify([{
          id: 1,
          name: 'Starter App'
        }])
      };
    }
    /**
     * Delaying the response with a specific number of milliseconds:
     *   request.get('https://domain.example/delay_test').end(function(err, res){
     *     console.log(res.body); // This log will be written after the delay time has passed
     *   })
     */


    if (match[1] === '/delay_test') {
      context.delay = 3000; // This will delay the response by 3 seconds

      return 'zzZ';
    }
    /**
     * Mocking progress events:
     *   request.get('https://domain.example/progress_test')
     *     .on('progress', function (e) { console.log(e.percent + '%'); })
     *     .end(function(err, res){
     *       console.log(res.body); // This log will be written after all progress events emitted
     *     })
     */


    if (match[1] === '/progress_test') {
      context.progress = {
        parts: 3,
        // The number of progress events to emit one after the other with
        // linear progress
        //   (Meaning, loaded will be [total/parts])
        delay: 1000,
        // [optional] The delay of emitting each of the progress events
        // by ms
        //   (default is 0 unless context.delay specified, then it's
        // [delay/parts])
        total: 100,
        // [optional] The total as it will appear in the progress
        // event (default is 100)
        lengthComputable: true,
        // [optional] The same as it will appear in the progress
        // event (default is true)
        direction: 'upload' // [optional] superagent adds 'download'/'upload' direction
        // to the event (default is 'upload')

      };
      return 'Hundred percent!';
    }

    return null;
  },

  /**
   * returns the result of the GET request
   *
   * @param match array Result of the resolution of the regular expression
   * @param data  mixed Data returns by `fixtures` attribute
   */
  get: function get(match, data) {
    return {
      body: data
    };
  },

  /**
   * returns the result of the POST request
   *
   * @param match array Result of the resolution of the regular expression
   * @param data  mixed Data returns by `fixtures` attribute
   */
  post: function post(match, data) {
    return {
      code: 201,
      body: data
    };
  },
  put: function put(match, data) {
    return {
      code: 202,
      body: data
    };
  },
  "delete": function _delete(match, data) {
    return {
      code: 204,
      body: data
    };
  }
}];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvc3VwZXJhZ2VudC1tb2NrLWNvbmZpZy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicGF0dGVybiIsImZpeHR1cmVzIiwibWF0Y2giLCJwYXJhbXMiLCJoZWFkZXJzIiwiY29udGV4dCIsIkVycm9yIiwic3VwZXJoZXJvIiwiQXV0aG9yaXphdGlvbiIsInN0YXR1cyIsImNvbnRlbnRUeXBlIiwic3RhdHVzVGV4dCIsInJlc3BvbnNlVGV4dCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZCIsIm5hbWUiLCJkZWxheSIsInByb2dyZXNzIiwicGFydHMiLCJ0b3RhbCIsImxlbmd0aENvbXB1dGFibGUiLCJkaXJlY3Rpb24iLCJnZXQiLCJkYXRhIiwiYm9keSIsInBvc3QiLCJjb2RlIiwicHV0Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixDQUNmO0FBQ0U7QUFDSjtBQUNBO0FBQ0lDLEVBQUFBLE9BQU8sRUFBRSw0QkFKWDs7QUFNRTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0lDLEVBQUFBLFFBZEYsb0JBY1dDLEtBZFgsRUFja0JDLE1BZGxCLEVBYzBCQyxPQWQxQixFQWNtQ0MsT0FkbkMsRUFjNEM7QUFDeEM7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTSxRQUFJSCxLQUFLLENBQUMsQ0FBRCxDQUFMLEtBQWEsTUFBakIsRUFBeUI7QUFDdkIsWUFBTSxJQUFJSSxLQUFKLENBQVUsR0FBVixDQUFOO0FBQ0Q7QUFFRDtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVNLFFBQUlKLEtBQUssQ0FBQyxDQUFELENBQUwsS0FBYSxPQUFqQixFQUEwQjtBQUN4QixVQUFJQyxNQUFNLENBQUNJLFNBQVgsRUFBc0I7QUFDcEIsbUNBQW9CSixNQUFNLENBQUNJLFNBQTNCO0FBQ0Q7O0FBQ0QsYUFBTyx5QkFBUDtBQUNEO0FBR0Q7QUFDTjtBQUNB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REQ7QUFFTEYsTUFBQUEsSUFBSSxFQUFFRDtBQUZELEtBQVA7QUFJRDtBQXRLSCxDQURlLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLi9zdXBlcmFnZW50LW1vY2stY29uZmlnLmpzIGZpbGVcbm1vZHVsZS5leHBvcnRzID0gW1xuICB7XG4gICAgLyoqXG4gICAgICogcmVndWxhciBleHByZXNzaW9uIG9mIFVSTFxuICAgICAqL1xuICAgIHBhdHRlcm46ICdodHRwOi8vd3d3LmV4YW1wbGUuY29tKC4qKScsXG5cbiAgICAvKipcbiAgICAgKiByZXR1cm5zIHRoZSBkYXRhXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWF0Y2ggYXJyYXkgUmVzdWx0IG9mIHRoZSByZXNvbHV0aW9uIG9mIHRoZSByZWd1bGFyIGV4cHJlc3Npb25cbiAgICAgKiBAcGFyYW0gcGFyYW1zIG9iamVjdCBzZW50IGJ5ICdzZW5kJyBmdW5jdGlvblxuICAgICAqIEBwYXJhbSBoZWFkZXJzIG9iamVjdCBzZXQgYnkgJ3NldCcgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0gY29udGV4dCBvYmplY3QgdGhlIGNvbnRleHQgb2YgcnVubmluZyB0aGUgZml4dHVyZXMgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBmaXh0dXJlcyhtYXRjaCwgcGFyYW1zLCBoZWFkZXJzLCBjb250ZXh0KSB7XG4gICAgICAvKipcbiAgICAgICAqIFJldHVybmluZyBlcnJvciBjb2RlcyBleGFtcGxlOlxuICAgICAgICogICByZXF1ZXN0LmdldCgnaHR0cHM6Ly9kb21haW4uZXhhbXBsZS80MDQnKS5lbmQoZnVuY3Rpb24oZXJyLCByZXMpe1xuICAgICAgICogICAgIGNvbnNvbGUubG9nKGVycik7IC8vIDQwNFxuICAgICAgICogICAgIGNvbnNvbGUubG9nKHJlcy5ub3RGb3VuZCk7IC8vIHRydWVcbiAgICAgICAqICAgfSlcbiAgICAgICAqL1xuICAgICAgaWYgKG1hdGNoWzFdID09PSAnLzQwNCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKDQwNCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2hlY2tpbmcgb24gcGFyYW1ldGVycyBleGFtcGxlOlxuICAgICAgICogICByZXF1ZXN0LmdldCgnaHR0cHM6Ly9kb21haW4uZXhhbXBsZS9oZXJvJykuc2VuZCh7c3VwZXJoZXJvOiBcInN1cGVybWFuXCJ9KS5lbmQoZnVuY3Rpb24oZXJyLCByZXMpe1xuICAgICAgICogICAgIGNvbnNvbGUubG9nKHJlcy5ib2R5KTsgLy8gXCJZb3VyIGhlcm86IHN1cGVybWFuXCJcbiAgICAgICAqICAgfSlcbiAgICAgICAqL1xuXG4gICAgICBpZiAobWF0Y2hbMV0gPT09ICcvaGVybycpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5zdXBlcmhlcm8pIHtcbiAgICAgICAgICByZXR1cm4gYFlvdXIgaGVybzoke3BhcmFtcy5zdXBlcmhlcm99YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ1lvdSBkaWRudCBjaG9vc2UgYSBoZXJvJztcbiAgICAgIH1cblxuXG4gICAgICAvKipcbiAgICAgICAqIENoZWNraW5nIG9uIGhlYWRlcnMgZXhhbXBsZTpcbiAgICAgICAqICAgcmVxdWVzdC5nZXQoJ2h0dHBzOi8vZG9tYWluLmV4YW1wbGUvYXV0aG9yaXplZF9lbmRwb2ludCcpLnNldCh7QXV0aG9yaXphdGlvbjogXCI5MzgyaGZpaDE4MzRoXCJ9KS5lbmQoZnVuY3Rpb24oZXJyLCByZXMpe1xuICAgICAgICogICAgIGNvbnNvbGUubG9nKHJlcy5ib2R5KTsgLy8gXCJBdXRoZW50aWNhdGVkIVwiXG4gICAgICAgKiAgIH0pXG4gICAgICAgKi9cblxuICAgICAgaWYgKG1hdGNoWzFdID09PSAnL2FwaS90ZXN0LzEyJykge1xuICAgICAgICBpZiAoaGVhZGVycy5BdXRob3JpemF0aW9uICYmIGhlYWRlcnNbJ1gtQ1NSRi1Ub2tlbiddKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6ICdPSycsXG4gICAgICAgICAgICByZXNwb25zZVRleHQ6IEpTT04uc3RyaW5naWZ5KFt7XG4gICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICBuYW1lOiAnU3RhcnRlciBBcHAnXG4gICAgICAgICAgICB9XSlcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdGF0dXM6IDQwMSxcbiAgICAgICAgICBzdGF0dXNUZXh0OiAnVW5hdXRob3JpemVkJyxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYW5jZWxsaW5nIHRoZSBtb2NraW5nIGZvciBhIHNwZWNpZmljIG1hdGNoZWQgcm91dGUgZXhhbXBsZTpcbiAgICAgICAqICAgcmVxdWVzdC5nZXQoJ2h0dHBzOi8vZG9tYWluLmV4YW1wbGUvc2VydmVyX3Rlc3QnKS5lbmQoZnVuY3Rpb24oZXJyLCByZXMpe1xuICAgICAgICogICAgIGNvbnNvbGUubG9nKHJlcy5ib2R5KTsgLy8gKHdoYXRldmVyIHRoZSBhY3R1YWwgc2VydmVyIHdvdWxkIGhhdmUgcmV0dXJuZWQpXG4gICAgICAgKiAgIH0pXG4gICAgICAgKi9cblxuICAgICAgaWYgKG1hdGNoWzFdID09PSAnL2FwaS90ZXN0L2Z1bGwnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiAnT0snLFxuICAgICAgICAgIHJlc3BvbnNlVGV4dDogSlNPTi5zdHJpbmdpZnkoW3tcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgbmFtZTogJ1N0YXJ0ZXIgQXBwJ1xuICAgICAgICAgIH1dKVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIERlbGF5aW5nIHRoZSByZXNwb25zZSB3aXRoIGEgc3BlY2lmaWMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kczpcbiAgICAgICAqICAgcmVxdWVzdC5nZXQoJ2h0dHBzOi8vZG9tYWluLmV4YW1wbGUvZGVsYXlfdGVzdCcpLmVuZChmdW5jdGlvbihlcnIsIHJlcyl7XG4gICAgICAgKiAgICAgY29uc29sZS5sb2cocmVzLmJvZHkpOyAvLyBUaGlzIGxvZyB3aWxsIGJlIHdyaXR0ZW4gYWZ0ZXIgdGhlIGRlbGF5IHRpbWUgaGFzIHBhc3NlZFxuICAgICAgICogICB9KVxuICAgICAgICovXG5cbiAgICAgIGlmIChtYXRjaFsxXSA9PT0gJy9kZWxheV90ZXN0Jykge1xuICAgICAgICBjb250ZXh0LmRlbGF5ID0gMzAwMDsgLy8gVGhpcyB3aWxsIGRlbGF5IHRoZSByZXNwb25zZSBieSAzIHNlY29uZHNcbiAgICAgICAgcmV0dXJuICd6elonO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIE1vY2tpbmcgcHJvZ3Jlc3MgZXZlbnRzOlxuICAgICAgICogICByZXF1ZXN0LmdldCgnaHR0cHM6Ly9kb21haW4uZXhhbXBsZS9wcm9ncmVzc190ZXN0JylcbiAgICAgICAqICAgICAub24oJ3Byb2dyZXNzJywgZnVuY3Rpb24gKGUpIHsgY29uc29sZS5sb2coZS5wZXJjZW50ICsgJyUnKTsgfSlcbiAgICAgICAqICAgICAuZW5kKGZ1bmN0aW9uKGVyciwgcmVzKXtcbiAgICAgICAqICAgICAgIGNvbnNvbGUubG9nKHJlcy5ib2R5KTsgLy8gVGhpcyBsb2cgd2lsbCBiZSB3cml0dGVuIGFmdGVyIGFsbCBwcm9ncmVzcyBldmVudHMgZW1pdHRlZFxuICAgICAgICogICAgIH0pXG4gICAgICAgKi9cblxuICAgICAgaWYgKG1hdGNoWzFdID09PSAnL3Byb2dyZXNzX3Rlc3QnKSB7XG4gICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSB7XG4gICAgICAgICAgcGFydHM6IDMsIC8vIFRoZSBudW1iZXIgb2YgcHJvZ3Jlc3MgZXZlbnRzIHRvIGVtaXQgb25lIGFmdGVyIHRoZSBvdGhlciB3aXRoXG4gICAgICAgICAgLy8gbGluZWFyIHByb2dyZXNzXG4gICAgICAgICAgLy8gICAoTWVhbmluZywgbG9hZGVkIHdpbGwgYmUgW3RvdGFsL3BhcnRzXSlcbiAgICAgICAgICBkZWxheTogMTAwMCwgLy8gW29wdGlvbmFsXSBUaGUgZGVsYXkgb2YgZW1pdHRpbmcgZWFjaCBvZiB0aGUgcHJvZ3Jlc3MgZXZlbnRzXG4gICAgICAgICAgLy8gYnkgbXNcbiAgICAgICAgICAvLyAgIChkZWZhdWx0IGlzIDAgdW5sZXNzIGNvbnRleHQuZGVsYXkgc3BlY2lmaWVkLCB0aGVuIGl0J3NcbiAgICAgICAgICAvLyBbZGVsYXkvcGFydHNdKVxuICAgICAgICAgIHRvdGFsOiAxMDAsIC8vIFtvcHRpb25hbF0gVGhlIHRvdGFsIGFzIGl0IHdpbGwgYXBwZWFyIGluIHRoZSBwcm9ncmVzc1xuICAgICAgICAgIC8vIGV2ZW50IChkZWZhdWx0IGlzIDEwMClcbiAgICAgICAgICBsZW5ndGhDb21wdXRhYmxlOiB0cnVlLCAvLyBbb3B0aW9uYWxdIFRoZSBzYW1lIGFzIGl0IHdpbGwgYXBwZWFyIGluIHRoZSBwcm9ncmVzc1xuICAgICAgICAgIC8vIGV2ZW50IChkZWZhdWx0IGlzIHRydWUpXG4gICAgICAgICAgZGlyZWN0aW9uOiAndXBsb2FkJyAvLyBbb3B0aW9uYWxdIHN1cGVyYWdlbnQgYWRkcyAnZG93bmxvYWQnLyd1cGxvYWQnIGRpcmVjdGlvblxuICAgICAgICAgIC8vIHRvIHRoZSBldmVudCAoZGVmYXVsdCBpcyAndXBsb2FkJylcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuICdIdW5kcmVkIHBlcmNlbnQhJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgR0VUIHJlcXVlc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSBtYXRjaCBhcnJheSBSZXN1bHQgb2YgdGhlIHJlc29sdXRpb24gb2YgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvblxuICAgICAqIEBwYXJhbSBkYXRhICBtaXhlZCBEYXRhIHJldHVybnMgYnkgYGZpeHR1cmVzYCBhdHRyaWJ1dGVcbiAgICAgKi9cbiAgICBnZXQobWF0Y2gsIGRhdGEpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJvZHk6IGRhdGFcbiAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgUE9TVCByZXF1ZXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWF0Y2ggYXJyYXkgUmVzdWx0IG9mIHRoZSByZXNvbHV0aW9uIG9mIHRoZSByZWd1bGFyIGV4cHJlc3Npb25cbiAgICAgKiBAcGFyYW0gZGF0YSAgbWl4ZWQgRGF0YSByZXR1cm5zIGJ5IGBmaXh0dXJlc2AgYXR0cmlidXRlXG4gICAgICovXG4gICAgcG9zdChtYXRjaCwgZGF0YSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29kZTogMjAxLFxuICAgICAgICBib2R5OiBkYXRhXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBwdXQobWF0Y2gsIGRhdGEpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvZGU6IDIwMixcbiAgICAgICAgYm9keTogZGF0YVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgZGVsZXRlKG1hdGNoLCBkYXRhKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb2RlOiAyMDQsXG4gICAgICAgIGJvZHk6IGRhdGFcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbl07XG4iXX0=