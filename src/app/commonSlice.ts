import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "./types";

const initialState = {
  users: [] as Array<IUser>,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    updateUsers: (state, action: PayloadAction<Array<IUser>>) => {
      state.users = [...state.users, ...action.payload];
    },
  },
});

export const { updateUsers } = commonSlice.actions;

export default commonSlice.reducer;
