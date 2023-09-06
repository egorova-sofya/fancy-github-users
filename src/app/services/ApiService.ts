import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { IUser } from "../types";

export const API = createApi({
  reducerPath: "API",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.github.com/`,
    prepareHeaders: (headers) => {
      // headers.set("Authorization", process.env.REACT_APP_API_TOKEN as string);
      headers.set("Authorization", import.meta.env.APP_API_TOKEN as string);
      headers.set("X-GitHub-Api-Version", "2022-11-28");

      return headers;
    },
  }) as BaseQueryFn,
  endpoints: (build) => ({
    getGithubUsers: build.query<Array<IUser>, void>({
      query: () => `users`,
    }),
  }),
});
