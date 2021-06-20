import { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE, METHOD_GET, METHOD_POST,
  METHOD_PUT, METHOD_DELETE, STARTING_URL, ALL_DATA } from './FetchTypes';

const initialState = {
  passed: false,
  confirm: false,
  error: "",
  get: "GET",
  post: "POST",
  put: "PUT",
  deleting: "DELETE",
  url: "https://ronincode.herokuapp.com",
  alldata: null,
};

const FetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        passed: action.passed,
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        confirm: action.confirm,
      };
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        passed: action.passed,
        error: action.error,
      };
    case METHOD_GET:
      return {
        ...state,
        get: action.get,
      };
    case METHOD_POST:
      return {
        ...state,
        post: action.post,
      };
    case METHOD_PUT:
      return {
        ...state,
        put: action.put,
      };
    case METHOD_DELETE:
      return {
        ...state,
        deleting: action.deleting,
      };
    case STARTING_URL:
      return {
        ...state,
        url: action.url,
      };
    case ALL_DATA:
      return {
        ...state,
        alldata: action.alldata,
      };
    default:
      return state;
  }
};

export default FetchReducer;