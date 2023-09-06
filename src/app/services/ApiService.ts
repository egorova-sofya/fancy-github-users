import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { IStrippedDownUser, IUser } from "../types";

export const API = createApi({
  reducerPath: "API",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.github.com/`,
    prepareHeaders: (headers) => {
      headers.set("Authorization", import.meta.env.APP_API_TOKEN as string);
      headers.set("X-GitHub-Api-Version", "2022-11-28");
      return headers;
    },
  }) as BaseQueryFn,
  endpoints: (build) => ({
    getGithubUsers: build.query<Array<IStrippedDownUser>, { since?: number }>({
      query: (data) => `users?per_page=3&since=${data.since ? data.since : 1}`,
    }),
    getGithubUser: build.query<IUser, { userLogin: string }>({
      query: (data) => `users/${data.userLogin}`,
    }),
  }),
});
