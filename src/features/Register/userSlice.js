import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {
    signup(state, action) {
      state.users.push({ ...action.payload, id: state.users.length + 1 });
    },
    signin(state, action) {
      state.users.push({ ...action.payload, id: state.users.length + 1 });
    },
  },
});

const { actions, reducer } = counterSlice;
export const { signup, signin } = actions;

export default reducer;
