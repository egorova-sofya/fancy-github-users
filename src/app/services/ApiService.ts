import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { IRepository, IStrippedDownUser, IUser } from "../types";

export const API = createApi({
  reducerPath: "API",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.github.com/`,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${import.meta.env.VITE_API_TOKEN as string}`
      );
      headers.set("X-GitHub-Api-Version", "2022-11-28");
      return headers;
    },
  }) as BaseQueryFn,
  endpoints: (build) => ({
    getGithubUsers: build.query<Array<IUser>, void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const users = await fetchWithBQ(
          `users?per_page=12&since=${Math.round(
            Math.random() * 10000
          )}&page=${Math.round(Math.random() * 10000)}`
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
    searchUsers: build.query<Array<IUser>, { searchingData: string }>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const users = await fetchWithBQ(
          `search/users?per_page=12&q=${_arg.searchingData}`
        );

        if (users.error) return { error: users.error };

        const finalUsers = [];

        const userData = users.data as { items: Array<IStrippedDownUser> };
        const strippedUsers = userData.items as Array<IStrippedDownUser>;
        console.log("strippedUsers", strippedUsers);
        for (const user of strippedUsers) {
          const finalUser = await fetchWithBQ(`users/${user.login}`);
          finalUsers.push(finalUser.data);
        }

        return finalUsers
          ? { data: finalUsers as Array<IUser> }
          : { error: new Error("Error fetching users") };
      },
    }),
    getGithubUser: build.query<IUser, { userLogin: string }>({
      query: (data) => `users/${data.userLogin}`,
    }),
    getRepositories: build.query<Array<IRepository>, { userLogin: string }>({
      query: (data) => `users/${data.userLogin}/repos`,
    }),
  }),
});
