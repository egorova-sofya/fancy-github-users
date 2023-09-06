import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import users from "./../utils/usersV2.json";
import { IUser } from "./types";

const initialState = {
  users: users as Array<IUser>,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    updateUsers: (state, action: PayloadAction<Array<IUser>>) => {
      state.users = action.payload;
    },
  },
});

export const { updateUsers } = commonSlice.actions;

export default commonSlice.reducer;
