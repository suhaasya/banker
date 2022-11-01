import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import getDate from "../utils/getDate";

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

const initialState: InitialStateTypes[] = [
  {
    accountNo: uuidv4(),
    username: "test",
    movements: [
      { amount: 200, date: "1 November, 2022" },
      { amount: -50, date: "1 November, 2022" },
      { amount: 100, date: "1 November, 2022" },
      { amount: 250, date: "1 November, 2022" },
      { amount: -200, date: "1 November, 2022" },
    ],
    interestRate: 1.2,
    password: "test@123",
  },
  {
    accountNo: uuidv4(),
    username: "demo",
    movements: [
      { amount: 400, date: "1 November, 2022" },
      { amount: -100, date: "1 November, 2022" },
      { amount: 150, date: "1 November, 2022" },
      { amount: 203, date: "1 November, 2022" },
      { amount: -20, date: "1 November, 2022" },
    ],
    interestRate: 1.2,
    password: "demo@123",
  },
];

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    createAccount: (state, action: PayloadAction<InitialStateTypes>) => {
      state.push(action.payload);
    },
    transferMoney: (
      state,
      action: PayloadAction<{
        amount: number;
        benAccount: String;
        userAccount: String | undefined;
      }>
    ) => {
      const { amount, benAccount, userAccount } = action.payload;
      state
        .find((acc) => acc.accountNo === benAccount)
        ?.movements?.push({ amount: amount, date: getDate() });

      state
        .find((acc) => acc.accountNo === userAccount)
        ?.movements?.push({ amount: -amount, date: getDate() });
    },
    requestLoan: (
      state,
      action: PayloadAction<{ amount: number; userAccount: String | undefined }>
    ) => {
      const { amount, userAccount } = action.payload;
      state
        .find((acc) => acc.accountNo === userAccount)
        ?.movements?.push({ amount: +amount, date: getDate() });
    },

    deleteAccount: (
      state,
      action: PayloadAction<{
        userPassword: string;
        userAccount: string;
      }>
    ) => {
      const { userAccount, userPassword } = action.payload;
      const index = state.findIndex((st) => st.accountNo === userAccount);
      state.splice(index, 1);
    },
  },
});

export default dataSlice.reducer;
export const { createAccount, transferMoney, requestLoan, deleteAccount } =
  dataSlice.actions;
