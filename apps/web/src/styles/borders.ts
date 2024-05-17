import { Tokens } from './colors'

export enum Borders {
	primary = 'primary',
	secondary_btn = 'secondary_btn',
}

export const borders: Record<Borders, string> = {
	[Borders.primary]: `1px solid ${Tokens.border_primary}`,
	[Borders.secondary_btn]: `1px solid ${Tokens.border_secondary_btn}`,
}

export const Radii = {
	sm: '0.1875rem', // 3px
	md: '0.375rem', // 6px
	lg: '0.5rem', // 8px
	xl: '1rem', // 16px
}
