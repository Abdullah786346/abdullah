import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  image: "/assets",
  bio: "",
  address: "",
  country: "",
  phone: "",
  anonymous: false,
  //role: "donor",
};
const userSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    handleChange: (state, { payload }) => {
      const { name, value } = payload;
      return { ...state, [name]: value };
    },
    clearState: (state) => {
      return initialState;
    },
    setUserDetails: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export const { handleChange, clearState, setUserDetails } = userSlice.actions;
export default userSlice.reducer;
