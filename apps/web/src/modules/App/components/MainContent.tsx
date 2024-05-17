import { Flex } from '@chakra-ui/react'

import { useMainContentMaxWidth } from '@/common/hooks/useSidebarWidth'

export const MainContent = ({ children, props }: any) => {
	const mainContentMaxWidth = useMainContentMaxWidth()

	return (
		<Flex
			as="main"
			w="full"
			maxW={mainContentMaxWidth}
			h={['calc(100vh - 72px)', 'auto']}
			transition="max-width 250ms ease-in-out"
			{...props}
		>
			{children}
		</Flex>
	)
}
