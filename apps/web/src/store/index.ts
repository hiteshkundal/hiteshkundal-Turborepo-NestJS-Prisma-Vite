import { configureStore } from '@reduxjs/toolkit'

import { baseApi } from '../rtk'

export const store = configureStore({
	reducer: {
		// API
		[baseApi.reducerPath]: baseApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(baseApi.middleware),
	devTools: { trace: true },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
