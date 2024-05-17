import React from 'react'

export enum Icons {}

export type IconType = `${Icons}`

/**
 * Return svg icon
 * @param type the icon name
 * @returns icon element
 */
export const IconSwitcher = React.memo(
	({ icon, ...props }: { icon: IconType; [key: string]: any }) => {
		switch (icon) {
			case 'no_icon':
				return <></>
		}
	},
)

IconSwitcher.displayName = 'IconSwitcher'
