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
      headers.set("Authorization", import.meta.env.APP_API_TOKEN as string);
      headers.set("X-GitHub-Api-Version", "2022-11-28");
      return headers;
    },
  }) as BaseQueryFn,
  endpoints: (build) => ({
    getGithubUsers: build.query<Array<IUser>, { since?: number }>({
      query: (since) => `users?per_page=10&since=${since ? since : 1}`,
    }),
    getGithubUser: build.query<Array<IUser>, { userLogin: string }>({
      query: (userLogin) => `users/${userLogin}`,
    }),
  }),
});

// Параметры запроса
// Имя, Вид, Description
// since integer
// A user ID. Only return users with an ID greater than this ID.

// per_page integer
// The number of results per page (max 100).

// По умолчанию.: 30
