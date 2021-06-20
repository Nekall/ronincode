import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import RootReducer from "./Reducers";

export const store = createStore(
  RootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => console.log(store.getState()));
