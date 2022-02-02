/**
 *
 * @param {*} url The url to request
 * @param {*} params The params to pass to the request
 * @param {*} timeout Override the default network timeout for this request
 * @returns a response with the following fields:
 * {
 *  result, - the resulting data from the request
 *  error, - error if there is one
 *  loading, - boolean indicating if the request is still loading
 * }
 */
export default function useGet(url: any, params?: any, headers?: {}, timeout?: any): {
    result: undefined;
    error: undefined;
    loading: boolean;
};
