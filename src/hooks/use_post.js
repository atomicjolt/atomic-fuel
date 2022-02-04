import Api from '../api/api';
import NetworkConstants from '../constants/network';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

/**
 *
 * @param {string} url The url to request
 * @param {*} params Optional url parameters to pass to the request
 * @param {*} body Optional post body to pass to the request
 * @param {*} headers Optional headers to pass to the request
 * @param {number} timeout Override the default network timeout for this request
 * @returns a response with the following fields:
 * {
 *  result, - the resulting data from the request
 *  error, - error if there is one
 *  loading, - boolean indicating if the request is still loading
 * }
 */
export default function usePost(url, params = {}, body = {}, headers = {}, timeout = NetworkConstants.TIMEOUT) {
  const [result, setResult] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const settings = useSelector((state) => state.settings);
  const jwt = useSelector((state) => state.jwt);

  useEffect(() => {
    async function send() {
      try {
        const res = await Api.post(url, settings.api_url, jwt, settings.csrf_token, params, body, headers, timeout);
        setResult(res);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    }
    send();
  }, []);

  return {
    result,
    error,
    loading,
  };
}
