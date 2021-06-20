import { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE, METHOD_GET, METHOD_POST,
  METHOD_PUT, METHOD_DELETE, STARTING_URL, ALL_DATA } from './FetchTypes';

export const FetchNewsRequest = (passed) => ({
  type: FETCH_NEWS_REQUEST,
  passed,
});
export const FetchNewsSuccess = (confirm) => ({
  type: FETCH_NEWS_SUCCESS,
  confirm,
});
export const FetchNewsFailure = (passed, error) => ({
  type: FETCH_NEWS_FAILURE,
  passed,
  error,
});
export const MethodGet = (get) => ({
  type: METHOD_GET,
  get,
});
export const MethodPost = (post) => ({
  type: METHOD_POST,
  post,
});
export const MethodPut = (put) => ({
  type: METHOD_PUT,
  put,
});
export const MethodDelete = (deleting) => ({
  type: METHOD_DELETE,
  deleting,
});
export const StartingUrl = (url) => ({
  type: STARTING_URL,
  url,
});
export const SetAllData = (alldata) => ({
  type: ALL_DATA,
  alldata,
});