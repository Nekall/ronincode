import { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE, ALL_DATA, ALL_USER } from './FetchTypes';

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
export const SetAllData = (alldata) => ({
  type: ALL_DATA,
  alldata,
});
export const SetAllUser = (alluser) => ({
  type: ALL_USER,
  alluser,
});