export enum Tokens {
	white = '#FFFFFF', // whiteAlpha.12
	black = '#000000', // blackAlpha.12

	// backgrounds
	bg_card = '#FFFFFF', // whiteAlpha.12
	bg_table_header = '#FAFAFA', // background.12
	bg_secondary = '#FAFAFA', // background.12
	bg_dark = '#222B48', // gray.12
	bg_input = '#FAFAFA', // background.12
	bg = '#FAFAFA', // background.12
	bg_error = '#FAF1F0', // red.2
	bg_row_selected = '#F5F5FF', // purple.2
	bg_hover = '#F5F5FF', // purple.2
	bg_active = '#EDEDFF',

	// texts
	text_primary = '#222B48', // gray.12
	text_secondary = '#828999', // gray.9
	// Todo add hex value
	text_tertiary = 'text_tertiary',
	text_table_header = 'text_table_header',

	text = '#222B48', // gray.12
	text_inverted = '#FFFFFF', // whiteAlpha.12
	text_error = '#D42240', // red.9
	text_placeholder = '#828999', // gray.9
	text_input_description = '#697080', // gray.10

	// border
	border_primary = '#DFE4F0', // #DFE4F0', // gray.4
	border_secondary_btn = '#E6E6E6',

	// hover
	accent = '#6363F2', // purple.9
	hover_accent = '#4C4CD9', // purple.11
	hover = '#CCCCCC', // background.9
	hover_secondary = '#CCCCCC', // background.9

	// icons
	icon_primary = '#222B48', // gray.12

	danger = '#D42C22', // red.9
	danger_background = '#FAF1F0', // red.2
	success = '#0B8146', // green.9
	success_background = '#F2FCF7', // green.2
	warning = '#E05418', // orange.7
	warning_background = '#FAF3F0', // orange.2

	card_secondary = '#F1F1F1',
	error_background_primary = '#F2CED4',

	log_error_text = '#E06118',
	log_error_border = '#EB9E71',
	log_error_bg = '#FAF4F0',
}

/**
 * Todo remove this and use COLORS constant only
 * ThemeColors.Background[1] will becomes Colors.Background[1]
 */
export const ThemeColors = {
	Background: {
		1: '#181818',
		2: '#1A1A1A',
		3: '#333333',
		4: '#4C4C4C',
		5: '#666666',
		6: '#7F7F7F',
		7: '#98999A',
		8: '#B3B3B3',
		9: '#CCCCCC',
		10: '#E6E6E6',
		11: '#F0F0F0',
		12: '#FAFAFA',
	},
	Gray: {
		1: '#FAFBFF',
		2: '#F5F8FF',
		3: '#E8EDFA',
		4: '#DFE4F0',
		5: '#CED5E5',
		6: '#C3C9D9',
		7: '#B4BBCC',
		8: '#98A0B3',
		9: '#828999',
		10: '#697080',
		11: '#414861',
		12: '#222B48',
	},
	Purple: {
		1: '#FAFAFF',
		2: '#F5F5FF',
		3: '#EDEDFF',
		4: '#E5E5FF',
		5: '#D9D9FF',
		6: '#C8C8FA',
		7: '#ACACF2',
		8: '#9494F2',
		9: '#6363F2',
		10: '#5555F2',
		11: '#4C4CD9',
		12: '#242466',
		200: '#E9E9FD',
		800: '#6363F2',
	},
	Orange: {
		1: '#FFFBFA',
		2: '#FAF3F0',
		3: '#FAE8E1',
		4: '#F5DBD0',
		5: '#F0C8B6',
		6: '#F0BAA3',
		7: '#EB9671',
		8: '#EB6E38',
		9: '#E05418',
		10: '#C74B15',
		11: '#943710',
		12: '#612106',
	},
	Red: {
		1: '#FFFAFA',
		2: '#FAF1F0',
		3: '#F2E0DF',
		4: '#F2D1CE',
		5: '#E5B2AE',
		6: '#E09994',
		7: '#D97F79',
		8: '#D4544C',
		9: '#D42C22',
		10: '#BF1D13',
		11: '#A61108',
		12: '#590904',
	},
	Green: {
		1: '#FAFFFC',
		2: '#F2FCF7',
		3: '#DFF7EB',
		4: '#CEF2E0',
		5: '#B0EBCD',
		6: '#92E0B9',
		7: '#7ACFA4',
		8: '#22B56C',
		9: '#0B8146',
		10: '#096637',
		11: '#07522C',
		12: '#04331C',
	},
	BlackAlpha: {
		1: 'rgba(0, 0, 0, 0.014)',
		2: 'rgba(0, 0, 0, 0.03)',
		3: 'rgba(0, 0, 0, 0.05)',
		4: 'rgba(0, 0, 0, 0.06)',
		5: 'rgba(0, 0, 0, 0.08)',
		6: 'rgba(0, 0, 0, 0.12)',
		7: 'rgba(0, 0, 0, 0.16)',
		8: 'rgba(0, 0, 0, 0.24)',
		9: 'rgba(0, 0, 0, 0.4)',
		10: 'rgba(0, 0, 0, 0.48)',
		11: 'rgba(0, 0, 0, 0.56)',
		12: '#000000',
	},
	WhiteAlpha: {
		1: 'rgba(255, 255, 255, 0.014)',
		2: 'rgba(255, 255, 255, 0.03)',
		3: 'rgba(255, 255, 255, 0.05)',
		4: 'rgba(255, 255, 255, 0.06)',
		5: 'rgba(255, 255, 255, 0.08)',
		6: 'rgba(255, 255, 255, 0.12)',
		7: 'rgba(255, 255, 255, 0.16)',
		8: 'rgba(255, 255, 255, 0.24)',
		9: 'rgba(255, 255, 255, 0.4)',
		10: 'rgba(255, 255, 255, 0.48)',
		11: 'rgba(255, 255, 255, 0.56)',
		12: '#FFFFFF',
	},
	Teal: {
		100: '#7DEDF3',
	},
	Sky: {
		200: '#DBF6FF',
		900: '#00A4DB',
	},
}

export const COLORS = {
	default: {
		accent: '#8E8EF8',
		accentHover: '#6062bf',
		second: '#8E8E8E',
		faded: 'rgba(88,39,196,0.14)',
	},
	gray: {
		'1': '#FAFBFF',
		'2': '#F5F8FF',
		'3': '#E8EDFA',
		'4': '#DFE4F0',
		'5': '#CED5E5',
		'6': '#C3C9D9',
		'7': '#B4BBCC',
		'8': '#98A0B3',
		'9': '#828999',
		'10': '#697080',
		'11': '#414861',
		'12': '#222B48',
	},
	background: {
		'1': '#181818',
		'2': '#1A1A1A',
		'3': '#333333',
		'4': '#4C4C4C',
		'5': '#666666',
		'6': '#7F7F7F',
		'7': '#98999A',
		'8': '#B3B3B3',
		'9': '#CCCCCC',
		'10': '#E6E6E6',
		'11': '#F0F0F0',
		'12': '#FAFAFA',
	},
	purple: {
		'1': '#FAFAFF',
		'2': '#F5F5FF',
		'3': '#EDEDFF',
		'4': '#E5E5FF',
		'5': '#D9D9FF',
		'6': '#C8C8FA',
		'7': '#ACACF2',
		'8': '#9494F2',
		'9': '#6363F2',
		'10': '#5555F2',
		'11': '#4C4CD9',
		'12': '#242466',
	},
	red: {
		'1': '#FFFAFA',
		'2': '#FAF1F0',
		'3': '#F2E0DF',
		'4': '#F2D1CE',
		'5': '#E5B2AE',
		'6': '#E09994',
		'7': '#D97F79',
		'8': '#D4544C',
		'9': '#D42C22',
		'10': '#BF1D13',
		'11': '#A61108',
		'12': '#590904',
	},
	green: {
		'1': '#FAFFFC',
		'2': '#F2FCF7',
		'3': '#DFF7EB',
		'4': '#CEF2E0',
		'5': '#B0EBCD',
		'6': '#92E0B9',
		'7': '#7ACFA4',
		'8': '#22B56C',
		'9': '#0B8146',
		'10': '#096637',
		'11': '#07522C',
		'12': '#04331C',
	},
	blackAlpha: {
		'1': 'rgba(0, 0, 0, 0.014)',
		'2': 'rgba(0, 0, 0, 0.03)',
		'3': 'rgba(0, 0, 0, 0.05)',
		'4': 'rgba(0, 0, 0, 0.06)',
		'5': 'rgba(0, 0, 0, 0.08)',
		'6': 'rgba(0, 0, 0, 0.12)',
		'7': 'rgba(0, 0, 0, 0.16)',
		'8': 'rgba(0, 0, 0, 0.24)',
		'9': 'rgba(0, 0, 0, 0.4)',
		'10': 'rgba(0, 0, 0, 0.48)',
		'11': 'rgba(0, 0, 0, 0.56)',
		'12': '#000000',
	},
	whiteAlpha: {
		'1': 'rgba(255, 255, 255, 0.014)',
		'2': 'rgba(255, 255, 255, 0.03)',
		'3': 'rgba(255, 255, 255, 0.05)',
		'4': 'rgba(255, 255, 255, 0.06)',
		'5': 'rgba(255, 255, 255, 0.08)',
		'6': 'rgba(255, 255, 255, 0.12)',
		'7': 'rgba(255, 255, 255, 0.16)',
		'8': 'rgba(255, 255, 255, 0.24)',
		'9': 'rgba(255, 255, 255, 0.4)',
		'10': 'rgba(255, 255, 255, 0.48)',
		'11': 'rgba(255, 255, 255, 0.56)',
		'12': '#FFFFFF',
	},
	orange: {
		'1': '#FFFBFA',
		'2': '#FAF3F0',
		'3': '#FAE8E1',
		'4': '#F5DBD0',
		'5': '#F0C8B6',
		'6': '#F0BAA3',
		'7': '#EB9671',
		'8': '#EB6E38',
		'9': '#E05418',
		'10': '#C74B15',
		'11': '#943710',
		'12': '#612106',
	},
}
