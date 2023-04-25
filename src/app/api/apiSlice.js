import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, authLogOut } from "../../features/auth";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://bloodlink_backend.test/api/",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Accept", "application/json");
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.originalStatus === 403) {
    console.log("sending refresh token");
    const refreshResult = await baseQuery("/refresh", api, extraOptions);
    console.log(refreshResult);
    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(authLogOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "/register",
        method: "POST",
        body: credentials,
      }),
    }),
    logOut: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
    getBloodTypes: builder.query({
      query: () => "blood-types",
    }),
    getCities: builder.query({
      query: () => "cities",
    }),
    getHospitals: builder.query({
      query: (city_id) => ({
        url: "hospitals",
        params: city_id,
      }),
    }),
    getUsers: builder.query({
      query: () => "users",
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
    }),
    makeAppointment: builder.mutation({
      query: (appointment) => ({
        url: "appointments",
        method: "POST",
        body: appointment,
      }),
    }),
    getAppointments: builder.query({
      query: (id) => `appointments?user_id=${id}`,
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogOutMutation,
  useGetBloodTypesQuery,
  useGetCitiesQuery,
  useGetHospitalsQuery,
  useGetUsersQuery,
  useDeleteUserMutation,
  useMakeAppointmentMutation,
  useGetAppointmentsQuery,
} = apiSlice;
