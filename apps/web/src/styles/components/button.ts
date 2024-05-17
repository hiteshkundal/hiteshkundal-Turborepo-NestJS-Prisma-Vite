import type { ComponentStyleConfig } from '@chakra-ui/react'

import { ThemeColors, Tokens } from '../colors'
import { SHADOWS } from '../constants'

export enum BTN {
	primary = 'primary_v2',
	secondary = 'secondary_v2',
	outline = 'outline_v2',
}

const Button: ComponentStyleConfig = {
	baseStyle: {
		bg: 'transparent',
		_focus: {
			boxShadow: 'none',
		},
	},

	variants: {
		[BTN.primary]: {
			bg: ThemeColors.Purple[9],
			color: Tokens.white,
			borderRadius: '8px',
			fontWeight: 500,
			fontSize: '14px',
			height: '32px',
			px: '12px',
			lineHeight: '20px',
			border: 'none',
			boxShadow: SHADOWS.primary_button_v2,
			_hover: {
				background: ThemeColors.Purple[10],
				_disabled: {
					background: ThemeColors.Purple[6],
				},
			},
			_active: { background: ThemeColors.Purple[11] },
			_focusVisible: {
				boxShadow: SHADOWS.primary_button_focus_v2,
			},
			_disabled: {
				background: ThemeColors.Purple[6],
			},
		},
		[BTN.secondary]: {
			bg: Tokens.white,
			color: ThemeColors.Background[2],
			borderRadius: '8px',
			fontWeight: 500,
			fontSize: '14px',
			height: '32px',
			px: '12px',
			lineHeight: '20px',
			boxShadow: SHADOWS.secondary_button_v2,
			border: '1px solid',
			borderColor: 'transparent',
			outline: 'none',
			_hover: {
				bg: ThemeColors.Background[12],
				border: '1px solid',
				borderColor: ThemeColors.Background[12],
				_disabled: {
					borderColor: ThemeColors.Gray[5],
				},
			},
			_active: { background: ThemeColors.Background[12] },
			_focusVisible: {
				boxShadow: SHADOWS.secondary_button_focus_v2,
			},
			_disabled: {
				boxShadow: 'none',
				bg: ThemeColors.Background[12],
				borderColor: ThemeColors.Gray[5],
			},
		},
		[BTN.outline]: {
			bg: 'transparent',
			color: ThemeColors.Purple[9],
			borderRadius: '8px',
			fontWeight: 500,
			fontSize: '14px',
			height: '32px',
			lineHeight: '20px',
			border: '1px solid',
			borderColor: ThemeColors.Purple[9],
			_hover: {
				color: ThemeColors.Purple[10],
				background: ThemeColors.Purple[3],
				borderColor: ThemeColors.Purple[10],

				_disabled: {
					background: Tokens.white,
					borderColor: ThemeColors.Purple[6],
				},
			},
			_focusVisible: {
				boxShadow: SHADOWS.primary_button_focus_v2,
			},
			_disabled: {
				background: Tokens.white,
				borderColor: ThemeColors.Purple[6],
			},
		},
	},
}

export default Button
