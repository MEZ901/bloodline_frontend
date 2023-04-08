import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentialsAndStoreCookie, logOutAndRemoveCookie } from '../../features/auth';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result?.error?.originalStatus === 403) {
        console.log('sending refresh token');
        const refreshResult = await baseQuery('/refresh', api, extraOptions);
        console.log(refreshResult);
        if (refreshResult?.data) {
            const user = api.getState().auth.user;
            api.dispatch(setCredentialsAndStoreCookie({ ...refreshResult.data, user }));
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logOutAndRemoveCookie());
        }
    }
    return result;
};

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/login",
                method: "POST",
                body: credentials,
            }),
        }),
        getBloodTypes: builder.query({
            query: () => 'blood-types',
        }),
        getCities: builder.query({
            query: () => 'cities',
        }),
    }),
});

export const {
    useLoginMutation,
    useGetBloodTypesQuery,
    useGetCitiesQuery,
} = apiSlice;
