import { baseTheme } from '@chakra-ui/react'

import { ThemeColors, Tokens } from '../colors'
import { SHADOWS } from '../constants'
import { SPACING } from '../space'
import { FONT_SIZES, WEIGHT } from '../typography'
import { Radii } from './../borders'

export enum INPUT_ENUM {
	secondary = 'secondary',
}

const components = {
	Switch: {
		baseStyle: () => ({
			track: {
				_checked: {
					bg: ThemeColors.Purple[9],
				},
			},
		}),
	},
	Tooltip: {
		baseStyle: () => {
			return {
				bg: ThemeColors.Background[3],
				color: ThemeColors.WhiteAlpha[12],
			}
		},
	},
	Checkbox: {
		baseStyle: () => ({
			control: {
				w: SPACING[5],
				h: SPACING[5],

				bg: Tokens.white,
				borderRadius: Radii.sm,
				color: ThemeColors.Gray[1],

				boxShadow: '0px 1px 4px rgba(34, 43, 72, 0.08)',
				border: '1px solid',
				borderColor: ThemeColors.Gray[7],

				_hover: {
					borderColor: ThemeColors.Gray[8],
					boxShadow: '0px 1px 4px rgba(34, 43, 72, 0.08)',
				},

				_focusVisible: {
					boxShadow:
						'0px 0px 0px 1px #FFFFFF, 0px 0px 0px 4px rgba(99, 99, 242, 0.32)',
				},

				_checked: {
					bg: ThemeColors.Purple[9],
					borderColor: 'transparent',

					_hover: {
						bg: ThemeColors.Purple[10],
					},

					_focus: {
						boxShadow: 'none',
						outline: 'none',
					},
				},
			},
		}),
	},
	Radio: {
		baseStyle: () => ({
			control: {
				w: SPACING[5],
				h: SPACING[5],

				bg: Tokens.white,
				borderRadius: 'full',
				color: ThemeColors.Purple[9],

				boxShadow: '0px 1px 4px rgba(34, 43, 72, 0.08)',
				border: '1px solid',
				borderColor: ThemeColors.Gray[7],

				_hover: {
					borderColor: ThemeColors.Purple[9],
					boxShadow: '0px 1px 4px rgba(34, 43, 72, 0.08)',
				},

				_focusVisible: {
					boxShadow:
						'0px 0px 0px 1px #FFFFFF, 0px 0px 0px 4px rgba(99, 99, 242, 0.32)',
					borderColor: ThemeColors.Purple[9],
				},

				_checked: {
					bg: 'white',
					border: '2px solid',
					borderColor: ThemeColors.Purple[9],
					color: ThemeColors.Purple[9],
					innerWidth: '100%',
					innerHeight: '100%',

					_before: {
						height: '8px',
						width: '8px',
						borderRadius: 'full',
					},

					_hover: {
						bg: 'white',
						border: '2px solid',
						borderColor: ThemeColors.Purple[9],
						color: ThemeColors.Purple[9],
					},

					_focus: {
						bg: 'white',
						border: '2px solid',
						borderColor: ThemeColors.Purple[9],
						color: ThemeColors.Purple[9],
					},
				},
			},
		}),
	},
	Popover: {
		baseStyle: () => ({
			content: {
				bg: Tokens.white,
				borderRadius: '10px',
				_focus: {
					boxShadow: '0px 1px 6px rgba(12, 17, 61, 0.1)',
				},
			},
		}),
	},
	Menu: {
		baseStyle: () => ({
			button: {
				bg: Tokens.white,
				borderWidth: '1px',
				fontWeight: 400,
				border: Tokens.accent,
				borderRadius: '6px',
				px: '4px',
				py: '4px',
				fontSize: 'sm',
				_hover: {
					background: Tokens.bg_hover,
				},
				_active: {
					background: Tokens.bg_hover,
					boxShadow: 'none',
				},
				rightIcon: {},
			},
			list: {
				bg: Tokens.white,
				border: 'none',
				p: 1,
				overflow: 'auto',
				borderRadius: 12,
				boxShadow: SHADOWS.depth1,
			},
			item: {
				pl: 4,
				py: 2,
				borderRadius: '8px',
				fontSize: 'sm',
				fontWeight: 500,
				_hover: {
					background: Tokens.bg_hover,
				},
				_active: {
					background: Tokens.bg_hover,
				},
				_focus: {
					background: Tokens.bg_hover,
				},
				_expanded: {
					background: Tokens.bg_hover,
				},
			},
		}),
		variants: {},
	},
	Input: {
		baseStyle: {
			field: {
				height: SPACING[10],
				bg: ThemeColors.Background[12],
				color: ThemeColors.Gray[12],
				fontWeight: WEIGHT.medium,
				fontSize: FONT_SIZES.sm,
				lineHeight: SPACING[5],
				borderRadius: Radii.lg,
				px: '12px',
				py: '10px',

				border: '1px solid',
				borderColor: ThemeColors.Gray[4],

				_hover: {
					borderColor: ThemeColors.Background[9],
				},
				_focus: { boxShadow: SHADOWS.focus, zIndex: 5 },

				_disabled: {
					bg: ThemeColors.Background[11],
					borderColor: ThemeColors.Gray[4],
					color: ThemeColors.Gray[12],
				},
			},
		},
		variants: {
			[INPUT_ENUM.secondary]: () => ({
				field: {
					height: 9,
					color: 'text',
					background: ThemeColors.Gray[2],
					px: 3,
					borderRadius: 'md',
					borderWidth: '1px',
					borderColor: Tokens.border_primary,
					fontWeight: 400,
					fontSize: 'sm',
					_focus: {
						boxShadow: 'focus',
					},
				},
			}),
		},
		defaultProps: {
			size: null,
			variant: baseTheme,
		},
	},
	Textarea: {
		baseStyle: () => ({
			color: 'text',
			background: ThemeColors.Background[12],
			px: 3,
			borderRadius: 'md',
			borderWidth: '1px',
			borderColor: Tokens.border_primary,
			fontWeight: 400,
			fontSize: 'sm',
			_focus: {
				boxShadow: 'focus',
			},
		}),
		defaultProps: {
			size: null,
			variant: baseTheme,
		},
	},
	Modal: {
		baseStyle: {
			header: {
				bg: Tokens.white,
				borderRadius: '8px 8px 0 0',
				borderBottomWidth: 'medium',
				p: 5,
				display: 'flex',
				align: 'center',
				borderColor: Tokens.border_primary,
				fontSize: '16px',
			},
			body: {
				bg: Tokens.white,
				borderRadius: Radii.md,
				p: 5,
			},
			closeButton: {
				top: 4,
				right: 5,
			},
			footer: {
				bg: Tokens.white,
				borderRadius: '0 0 8px 8px',
				borderTopWidth: 'medium',
				display: 'flex',
				alignContent: 'center',
				borderColor: Tokens.border_primary,
				p: 5,
			},
		},
	},
	IconButton: {
		baseStyle: () => {
			return {
				bg: 'green',
				_hover: {
					bg: 'green',
				},
				_focus: {
					boxShadow: 'none',
				},
			}
		},
	},
}

export default components
