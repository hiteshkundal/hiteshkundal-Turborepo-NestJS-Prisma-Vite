export const FONT_SIZES = {
	xs: '0.75rem', // 13px
	sm: '0.875rem', // 14px
	md: '1rem', // 16px
	lg: '1.125rem', //18px
	xl: '1.25rem', // 20px
	'2xl': '1.5rem', // 24px
	'3xl': '1.875rem', // 30px
	'4xl': '2.25rem', // 36px
	'5xl': '3rem', // 48px
	'6xl': '3.75rem', // 60px
	'7xl': '4.5rem', // 72px
	'8xl': '6rem', // 96px
	'9xl': '8rem', // 128px
}

export const LETTER_SPACING = {
	tighter: '-0.009em',
	tight: '-0.025em',
	normal: '0',
	wide: '0.003125em',
	wider: '0.00625em',
	widest: '0.1em',
}

export const LINE_HEIGHT = {
	normal: 'normal',
	none: '1',
	shorter: '1.25',
	short: '1.375',
	base: '1.5',
	tall: '1.625',
	taller: '2',
}

export const WEIGHT = {
	hairline: 100,
	thin: 200,
	light: 300,
	regular: 400,
	medium: 500,
	semibold: 600,
	bold: 700,
	extrabold: 800,
	black: 900,
}

export const FONTS = {
	boldHeading: `Inter, SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
	heading: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
	body: `Inter, CustomDynamicFont, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
	mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
}

export const TypographyConfig = {
	fontSizes: FONT_SIZES,
	letterSpacings: LETTER_SPACING,
	lineHeights: LINE_HEIGHT,
	fonts: FONTS,
	fontWeights: WEIGHT,
}
