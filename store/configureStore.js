import { createStore, combineReducers } from "redux";
import reducers from "../src/reducers";

const configureStore = () => {
  return createStore(reducers);
};

export default configureStore;
