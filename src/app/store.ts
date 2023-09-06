import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./commonSlice";
import { API } from "./services/ApiService";

export const store = configureStore({
  reducer: {
    commonSlice,
    [API.reducerPath]: API.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(API.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
