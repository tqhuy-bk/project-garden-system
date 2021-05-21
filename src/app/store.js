import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/Register/userSlice";

const rootReducer = {
  user: userReducer,
};

const store = configureStore({ reducer: rootReducer });
export default store;
// The store now has redux-thunk added and the Redux DevTools Extension is turned on
