import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { LoadingPage } from '@/common/components/LoadingPage'

import { AuthProviderPartial } from './partials/AuthProviderPartial'

export const App = () => {
	return (
		<Suspense fallback={<LoadingPage />}>
			<AuthProviderPartial>
				<Routes>
					<Route path="/*" element={<h1>Hello World</h1>} />
				</Routes>
			</AuthProviderPartial>
		</Suspense>
	)
}
