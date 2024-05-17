import React from 'react'

import { LoadingPage } from '@/common/components/LoadingPage'
import { useGetMemberQuery } from '@/modules/Members/api'

export const AuthProviderPartial = ({ children }) => {
	const { data, isLoading, isFetching } = useGetMemberQuery()

	const isDataPending = isLoading || isFetching
	const isAuthenticated = !!data?.id

	if (isDataPending && !isAuthenticated) {
		return <LoadingPage />
	}

	return <>{children}</>
}
