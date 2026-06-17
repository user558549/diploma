import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { userReducer, modalReducer } from "./reducers";

const reducer = combineReducers({
  user: userReducer,
  modalWindow: modalReducer,
});

const composeEnhangers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  composeEnhangers(applyMiddleware(thunk)),
);
