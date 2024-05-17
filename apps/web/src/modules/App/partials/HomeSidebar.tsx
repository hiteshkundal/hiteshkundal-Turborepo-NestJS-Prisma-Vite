import { Avatar, Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { HOME_SIDEBAR_TRANSITION } from '@/common/constants/home-sidebar'
import { useSidebarWidth } from '@/common/hooks/useSidebarWidth'
import { ThemeColors, Tokens } from '@/styles/colors'
import { TEXT_ENUM } from '@/styles/components/text'

type OPTIONS = {
	title: string
	id: string
	navTo: string
	isExpanded?: boolean
}

const OPTIONS: OPTIONS[] = [
	{
		title: 'Dashboard',
		id: 'Dashboard',
		navTo: '/dashboard',
	},
]

const HomeSidebar = React.memo(() => {
	const isExpanded = true //
	const sidebarWidth = useSidebarWidth()

	return (
		<Flex
			flexDir="column"
			bg={Tokens.white}
			h="100vh"
			w={sidebarWidth}
			minW={sidebarWidth}
			justifyContent="space-between"
			borderRightWidth="1px"
			borderColor={ThemeColors.Gray[4]}
			transition={HOME_SIDEBAR_TRANSITION}
		>
			<Flex direction="column" w="100%" alignItems="center">
				<Flex w="100%" direction="column" align="center" gap="4px" mt="16px">
					{OPTIONS.map((option) => {
						return (
							<SidebarItem
								key={option.title}
								isExpanded={isExpanded}
								{...option}
							/>
						)
					})}
				</Flex>
			</Flex>

			<Flex direction="column" w="100%" gap="2px" align="center">
				<SidebarItem
					title="Settings"
					isExpanded={isExpanded}
					id="settings"
					navTo="settings/user/profile"
				/>
				<Flex
					w="100%"
					alignItems="center"
					mt={isExpanded ? '12px' : '12px'}
					mb="12px"
					pl={isExpanded ? '12px' : '12px'}
					h="39px"
				>
					<Link to="settings/user/profile">
						<Flex w="258px" gap="12px" alignItems="center">
							<Avatar
								w="32px"
								h="32px"
								src=""
								name="Hitesh Chauhan"
								borderRadius="full"
							/>

							<Flex flexDir="column">
								<Text
									variant={TEXT_ENUM.medium14}
									noOfLines={1}
									overflow="hidden"
									textOverflow="clip"
								>
									Hitesh Chauhan
								</Text>
								<Text
									variant={TEXT_ENUM.regular12}
									color={ThemeColors.Gray[9]}
									noOfLines={1}
									overflow="hidden"
									textOverflow="clip"
								>
									hiteshchauhan.669@gmail.com
								</Text>
							</Flex>
						</Flex>
					</Link>
				</Flex>
			</Flex>
		</Flex>
	)
})

const SidebarItem = ({ title, id, navTo, isExpanded }: OPTIONS) => {
	const location = useLocation()
	const isActive = location.pathname.split('/')[1] == id.toLowerCase()

	return (
		<Flex direction="column">
			<Link to={navTo}>
				<Flex
					flexDir="row"
					alignItems="center"
					position="relative"
					gap="6px"
					w={isExpanded ? '258px' : '36px'}
					minW={isExpanded ? '258px' : '36px'}
					h={isExpanded ? '36px' : '36px'}
					transition={HOME_SIDEBAR_TRANSITION}
					borderRadius="10px"
					px="6px"
					color={
						isActive
							? `${ThemeColors.Gray[6]} !important`
							: ThemeColors.Gray[10]
					}
					bg={
						isActive && !isExpanded
							? `${Tokens.card_secondary} !important`
							: 'transparent'
					}
					_hover={{
						bg: ThemeColors.WhiteAlpha[4],
						color: ThemeColors.Gray[7],
					}}
				>
					<Center
						w="24px"
						minW="24px"
						h="36px"
						minH="36px"
						position="relative"
					></Center>
					{isExpanded && (
						<Text variant={TEXT_ENUM.medium14} color={ThemeColors.Gray[12]}>
							{title}
						</Text>
					)}
				</Flex>
			</Link>
		</Flex>
	)
}

HomeSidebar.displayName = 'HomeSidebar'
export default HomeSidebar
