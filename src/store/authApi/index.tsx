import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQuery} from '../api';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery,
  endpoints: builder => ({
    login: builder.mutation<ILoginResponse, FormData>({
      query: body => {
        return {
          url: '/login',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const {useLoginMutation} = authApi;
