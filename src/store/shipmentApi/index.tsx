import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQuery} from '../api';

export const shipmentAPi = createApi({
  reducerPath: 'shipmentAPi',
  baseQuery: baseQuery,
  endpoints: builder => ({
    getShipmentStatus: builder.query<IShipmentResponse, IShipment>({
      query: params => {
        return {
          url: `/frappe.client.get_list?doctype=${params.doctype}&fields=${params.fields}`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const {useGetShipmentStatusQuery} = shipmentAPi;
