import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../GlobalRedux/Features/userSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import tokenSlice from "../GlobalRedux/Features/tokenSlice";

export const store = configureStore({
  reducer: {
    userSlice,
    tokenSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
