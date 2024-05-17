import { extendTheme } from '@chakra-ui/react'

const theme = {
	config: {
		initialColorMode: 'light',
	},
}

const defaultTheme = extendTheme({ ...theme })
export default defaultTheme
