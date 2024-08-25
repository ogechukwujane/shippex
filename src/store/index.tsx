import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {authApi} from './authApi';
import {shipmentAPi} from './shipmentApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [shipmentAPi.reducerPath]: shipmentAPi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'shipmentAPi/executeQuery/fulfilled',
          'shipmentAPi/executeQuery/pending',
          'shipmentAPi/executeQuery/rejected',
        ],
        ignoredPaths: ['shipmentAPi.queries.getShipmentStatus.originalArgs'],
      },
    }).concat(authApi.middleware, shipmentAPi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
