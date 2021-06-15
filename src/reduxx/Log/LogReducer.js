import Cookies from 'js-cookie'
import { LOG_OUT, LOG_SUCCESS, LOG_FAILURE } from './LogTypes'

const cookie = Cookies.get('id');

const initialState = {
  logged: cookie ? true : false,
  data: [],
  error: '',
  token : Cookies.get('token'),
  userID : Cookies.get('id'),
}

const LogReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOG_OUT:
      return {
        ...state,
        logged : action.logged,
      }
      case LOG_SUCCESS:
        return {
          ...state,
          data : action.data,
          logged : action.logged,
          token : action.data.jwt,
          userID : action.data.user.id,
        }
      case LOG_FAILURE:
        return {
          ...state,
          error : action.error,
          logged : action.logged,
        }
        default:
          return state;
        }
      }  

export default LogReducer;