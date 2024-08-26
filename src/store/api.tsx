import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../baseUrl';

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});
