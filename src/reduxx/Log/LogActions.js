import { LOG_OUT } from './LogTypes'
import { LOG_SUCCESS } from './LogTypes'
import { LOG_FAILURE } from './LogTypes'

export const LogOut = (logged) => {
  return {
    type: LOG_OUT,
    logged,
  }
}
export const LogSuccess = (data, logged) => {
  return {
    type: LOG_SUCCESS,
    data,
    logged,
  }
}
export const LogFailure = (error, logged) => {
  return {
    type: LOG_FAILURE,
    error,
    logged,
  };
}