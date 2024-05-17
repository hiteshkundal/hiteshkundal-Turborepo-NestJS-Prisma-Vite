import { extendTheme } from '@chakra-ui/react'

import { borders, Radii } from './borders'
import { COLORS, Tokens } from './colors'
import components from './components'
import { SHADOWS } from './constants'
import styles from './global'
import { SPACING } from './space'
import { TypographyConfig } from './typography'

const theme = {
	...TypographyConfig,
	config: {
		initialColorMode: 'light',
	},
	semanticTokens: {
		colors: {
			Colors: Tokens,
		},
		borders: borders,
	},
	components,
	shadows: {
		[SHADOWS.small]: '0px 1px 4px 1px rgba(12, 17, 61, 0.04)',
		[SHADOWS.medium]: '0px 1px 3px rgba(12, 17, 61, 0.08)',
		[SHADOWS.elevated]: '0px 2px 6px 2px rgba(12, 17, 61, 0.06)',
		[SHADOWS.focus]: '0px 0px 0px 2px rgba(118, 120, 237, 0.85)',
		[SHADOWS.depth0]: '0px 1px 4px rgba(34, 43, 72, 0.08)',
		[SHADOWS.depth1]: '0px 16px 24px rgba(34, 43, 72, 0.12)',
	},
	colors: COLORS,
	radii: Radii,
	borderWidths: {
		thin: '0.5px',
		medium: '1px',
	},
	space: SPACING,
	styles,
	breakpoints: {
		sm: '320px',
		md: '650px',
		lg: '960px',
		xl: '1200px',
		'2xl': '1536px',
	},
}

const defaultTheme = extendTheme({ ...theme })
export default defaultTheme
