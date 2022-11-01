import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../app/hooks";

type MovementsTypes = {
  amount: number;
  date: string;
};

type InitialStateTypes = {
  accountNo?: String;
  username?: String;
  movements?: MovementsTypes[];
  interestRate?: number;
  password?: String;
};

const initialState: InitialStateTypes = {
  accountNo: "",
  username: "",
  movements: [],
  interestRate: 0,
  password: "",
};

const userSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<InitialStateTypes>) => {
      state.accountNo = action.payload.accountNo;
      state.interestRate = action.payload.interestRate;
      state.movements = action.payload.movements;
      state.password = action.payload.password;
      state.username = action.payload.username;
    },
  },
});

export default userSlice.reducer;
export const { setAccount } = userSlice.actions;
