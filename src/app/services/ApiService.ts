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
    getGithubUsers: build.query<Array<IUser>, { since?: number }>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const users = await fetchWithBQ(
          `users?per_page=3&since=${_arg.since ? _arg.since : 1}`
        );

        if (users.error) return { error: users.error };

        const finalUsers = [];
        const strippedUsers = users.data as Array<IStrippedDownUser>;
        for (const user of strippedUsers) {
          const finalUser = await fetchWithBQ(`users/${user.login}`);
          finalUsers.push(finalUser.data);
        }

        return finalUsers
          ? { data: finalUsers as Array<IUser> }
          : { error: new Error("Error fetching users") };
      },
    }),
  }),
});
