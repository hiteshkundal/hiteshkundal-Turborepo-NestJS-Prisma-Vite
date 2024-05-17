import type { ComponentStyleConfig } from '@chakra-ui/react'

import { FONT_SIZES, LETTER_SPACING, WEIGHT } from './../typography'

export enum TEXT_ENUM {
	h1 = 'h1',
	h2 = 'h2',
	h3 = 'h3',
	h4 = 'h4',
	h5 = 'h5',
	h6 = 'h6',
	xs = 'xs',
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl',
	input_label = 'input_label',
	input_description = 'input_description',
	cell_value = 'cell_value',
	cell_value_md = 'cell_value_md',
	table_header = 'table_header',

	regular24 = 'regular24',
	regular20 = 'regular20',
	regular18 = 'regular18',
	regular16 = 'regular16',
	regular14 = 'regular14',
	regular12 = 'regular12',

	medium24 = 'medium24',
	medium20 = 'medium20',
	medium18 = 'medium18',
	medium16 = 'medium16',
	medium14 = 'medium14',
	medium12 = 'medium12',

	semibold24 = 'semibold24',
	semibold20 = 'semibold20',
	semibold18 = 'semibold18',
	semibold16 = 'semibold16',
	semibold14 = 'semibold14',
	semibold12 = 'semibold12',

	bold24 = 'bold24',
	bold20 = 'bold20',
	bold18 = 'bold18',
	bold16 = 'bold16',
	bold14 = 'bold14',
	bold12 = 'bold12',

	hyperlink = 'hyperlink',
}

import { Tokens } from '../colors'

const Text: ComponentStyleConfig = {
	baseStyle: {
		fontWeight: WEIGHT.medium,
	},
	variants: {
		[TEXT_ENUM.hyperlink]: {
			fontSize: FONT_SIZES['xs'],
			fontWeight: WEIGHT.medium,
			color: Tokens.accent,
			_hover: { cursor: 'pointer' },
		},
		[TEXT_ENUM.regular24]: {
			fontSize: FONT_SIZES['2xl'],
			fontWeight: WEIGHT.regular,
		},
		[TEXT_ENUM.regular20]: {
			fontSize: FONT_SIZES['xl'],
			fontWeight: WEIGHT.regular,
		},
		[TEXT_ENUM.regular18]: {
			fontSize: FONT_SIZES['lg'],
			fontWeight: WEIGHT.regular,
		},
		[TEXT_ENUM.regular16]: {
			fontSize: FONT_SIZES['md'],
			fontWeight: WEIGHT.regular,
		},
		[TEXT_ENUM.regular14]: {
			fontSize: FONT_SIZES['sm'],
			fontWeight: WEIGHT.regular,
		},
		[TEXT_ENUM.regular12]: {
			fontSize: FONT_SIZES['xs'],
			fontWeight: WEIGHT.regular,
		},
		// medium
		[TEXT_ENUM.medium24]: {
			fontSize: FONT_SIZES['2xl'],
			fontWeight: WEIGHT.medium,
		},
		[TEXT_ENUM.medium20]: {
			fontSize: FONT_SIZES['xl'],
			fontWeight: WEIGHT.medium,
		},
		[TEXT_ENUM.medium18]: {
			fontSize: FONT_SIZES['lg'],
			fontWeight: WEIGHT.medium,
		},
		[TEXT_ENUM.medium16]: {
			fontSize: FONT_SIZES['md'],
			fontWeight: WEIGHT.medium,
		},
		[TEXT_ENUM.medium14]: {
			fontSize: FONT_SIZES['sm'],
			fontWeight: WEIGHT.medium,
		},
		[TEXT_ENUM.medium12]: {
			fontSize: FONT_SIZES['xs'],
			fontWeight: WEIGHT.medium,
		},
		// 	semibold
		[TEXT_ENUM.semibold24]: {
			fontSize: FONT_SIZES['2xl'],
			fontWeight: WEIGHT.semibold,
		},
		[TEXT_ENUM.semibold20]: {
			fontSize: FONT_SIZES['xl'],
			fontWeight: WEIGHT.semibold,
		},
		[TEXT_ENUM.semibold18]: {
			fontSize: FONT_SIZES['lg'],
			fontWeight: WEIGHT.semibold,
		},
		[TEXT_ENUM.semibold16]: {
			fontSize: FONT_SIZES['md'],
			fontWeight: WEIGHT.semibold,
		},
		[TEXT_ENUM.semibold14]: {
			fontSize: FONT_SIZES['sm'],
			fontWeight: WEIGHT.semibold,
		},
		[TEXT_ENUM.semibold12]: {
			fontSize: FONT_SIZES['xs'],
			fontWeight: WEIGHT.semibold,
		},
		// bold
		[TEXT_ENUM.bold24]: {
			fontSize: FONT_SIZES['2xl'],
			fontWeight: WEIGHT.bold,
		},
		[TEXT_ENUM.bold20]: {
			fontSize: FONT_SIZES['xl'],
			fontWeight: WEIGHT.bold,
		},
		[TEXT_ENUM.bold18]: {
			fontSize: FONT_SIZES['lg'],
			fontWeight: WEIGHT.bold,
		},
		[TEXT_ENUM.bold16]: {
			fontSize: FONT_SIZES['md'],
			fontWeight: WEIGHT.bold,
		},
		[TEXT_ENUM.bold14]: {
			fontSize: FONT_SIZES['sm'],
			fontWeight: WEIGHT.bold,
		},
		[TEXT_ENUM.bold12]: {
			fontSize: FONT_SIZES['xs'],
			fontWeight: WEIGHT.bold,
		},
		// old	------
		[TEXT_ENUM.h1]: {
			fontSize: FONT_SIZES['2xl'],
			fontWeight: WEIGHT.semibold,
			letterSpacing: LETTER_SPACING.tighter,
		},
		[TEXT_ENUM.h2]: {
			fontSize: FONT_SIZES.lg,
			fontWeight: WEIGHT.semibold,
		},
		[TEXT_ENUM.h3]: {
			fontSize: FONT_SIZES.lg,
		},
		[TEXT_ENUM.h4]: {
			fontSize: FONT_SIZES.md,
			fontWeight: WEIGHT.semibold,
		},
		[TEXT_ENUM.h5]: {
			fontSize: FONT_SIZES.sm,
			color: Tokens.text_secondary,
		},
		[TEXT_ENUM.h6]: {
			fontSize: FONT_SIZES.xs,
			color: Tokens.text_secondary,
		},
		[TEXT_ENUM.xs]: {
			fontSize: FONT_SIZES.xs,
		},
		[TEXT_ENUM.sm]: {
			fontSize: FONT_SIZES.sm,
		},
		[TEXT_ENUM.md]: {
			fontSize: FONT_SIZES.md,
		},
		[TEXT_ENUM.lg]: {
			fontSize: FONT_SIZES.lg,
		},
		[TEXT_ENUM.xl]: {
			fontSize: FONT_SIZES.xl,
		},
		[TEXT_ENUM.input_label]: {
			fontSize: FONT_SIZES.xs,
			color: Tokens.text_secondary,
			letterSpacing: LETTER_SPACING.normal,
			marginLeft: 1,
			marginBottom: 1.5,
		},
		[TEXT_ENUM.table_header]: {
			fontSize: FONT_SIZES.xs,
			fontWeight: WEIGHT.medium,
			color: Tokens.text_primary,
		},
		[TEXT_ENUM.cell_value]: {
			fontSize: FONT_SIZES.sm,
			color: Tokens.text_primary,
			fontWeight: WEIGHT.regular,
		},
		[TEXT_ENUM.cell_value_md]: {
			fontSize: FONT_SIZES.sm,
			color: Tokens.text_primary,
			fontWeight: WEIGHT.medium,
		},
		[TEXT_ENUM.input_description]: {
			fontSize: FONT_SIZES['sm'],
			fontWeight: WEIGHT.regular,
			color: Tokens.text_input_description,
			letterSpacing: LETTER_SPACING.normal,
			marginLeft: 1,
		},
	},
}

export default Text
