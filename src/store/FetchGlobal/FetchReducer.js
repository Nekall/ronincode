import { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE, ALL_DATA, ALL_USER } from './FetchTypes';

const initialState = {
  passed: false,
  confirm: false,
  error: "",
  alldata: null,
  alluser: null,
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
    case ALL_DATA:
      return {
        ...state,
        alldata: action.alldata,
      };
    case ALL_USER:
      return {
        ...state,
        alluser: action.alluser,
      };
    default:
      return state;
  }
};

export default FetchReducer;