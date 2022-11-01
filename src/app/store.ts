import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataSlice";
import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: { data: dataReducer, user: userReducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
