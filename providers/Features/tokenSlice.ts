import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};
const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    clearState: (state) => {
      return initialState;
    },
    setToken: (state, { payload }) => {
      return { ...state, token: payload };
    },
  },
});

export const { clearState, setToken } = tokenSlice.actions;
export default tokenSlice.reducer;
