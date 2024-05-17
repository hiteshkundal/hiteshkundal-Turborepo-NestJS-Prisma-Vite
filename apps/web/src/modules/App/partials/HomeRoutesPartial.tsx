import { Flex } from '@chakra-ui/react'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { LoadingPage } from '@/common/components/LoadingPage'

import { MainContent } from '../components/MainContent'
import HomeSidebar from './HomeSidebar'
import { ProtectedRoutePartial } from './ProtectedRoutePartial'

export const HomeRoutesPartial = () => {
	return (
		<ProtectedRoutePartial>
			<Flex w="100vw" h="100vh" position="relative" direction="row">
				<HomeSidebar />
				<MainContent>
					<MainRoutes />
				</MainContent>
			</Flex>
		</ProtectedRoutePartial>
	)
}

const MainRoutes = () => {
	return (
		<Suspense fallback={<LoadingPage />}>
			<Routes>
				<Route path="/settings/*" element={<h1>Settings</h1>} />
			</Routes>
		</Suspense>
	)
}
