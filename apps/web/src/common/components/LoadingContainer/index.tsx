import { Center, CenterProps, Spinner } from '@chakra-ui/react'

export const LoadingContainer = (props: CenterProps) => {
	return (
		<Center h="full" w="full" {...props}>
			<Spinner />
		</Center>
	)
}
