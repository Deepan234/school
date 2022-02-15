import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducers/RootReducers";





const Store = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default Store;