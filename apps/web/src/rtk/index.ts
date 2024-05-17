import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

import { BACKEND_URL } from '@/config'

const staggeredBaseQuery = retry(
	fetchBaseQuery({
		baseUrl: BACKEND_URL,
		prepareHeaders: (headers) => {
			// const token = getToken() || null

			// if (token) {
			// 	headers.set('Authorization', `Bearer ${token}`)
			// }
			headers.set('role-permissioning', 'default')

			return headers
		},
	}),
	{ maxRetries: 1 },
)

export const baseApi = createApi({
	reducerPath: 'base',
	baseQuery: staggeredBaseQuery,
	refetchOnFocus: true,
	refetchOnReconnect: true,
	tagTypes: [],
	endpoints: () => ({}),
})
