import { createStore } from 'redux';
import LogReducer from 'reduxx/Log/LogReducer'


export const store = createStore(
  LogReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => console.log(store.getState()));
