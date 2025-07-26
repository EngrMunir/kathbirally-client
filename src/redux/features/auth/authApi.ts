import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo : { email: string; password: string }) => ({
        url: '/auth/login',
        method: 'POST',
        body: userInfo,
      }),
    }),
    register: builder.mutation({
      query: (userInfo: { name: string; email: string; password: string }) => ({
        url: '/users/register',
        method: 'POST',
        body: userInfo,
      }),
    }),
    getSingleUser: builder.query({
      query: (email) => ({
        url: `/users/${email}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
