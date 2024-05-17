import { Flex, Spinner } from '@chakra-ui/react'

export const LoadingPage = () => {
	return (
		<Flex
			h="100vh"
			w="full"
			bg="transparent"
			alignItems="center"
			justify="center"
		>
			<Spinner />
		</Flex>
	)
}
