import { IconProps } from '@chakra-ui/react'
import React from 'react'

import { Icons, IconSwitcher, IconType } from './IconSwitcher'

export interface IconComponentProps extends IconProps {
	icon: IconType
}

const IconComponent = React.forwardRef<HTMLElement, IconComponentProps>(
	({ icon, ...props }, ref) => {
		return <IconSwitcher icon={icon} {...props} ref={ref} />
	},
)

IconComponent.displayName = 'IconComponent'

export const GetIcon = React.memo(IconComponent)
export { Icons }
