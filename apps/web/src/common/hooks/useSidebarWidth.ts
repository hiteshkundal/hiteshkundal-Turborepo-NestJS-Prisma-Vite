import {
	COLLAPSED_HOME_SIDEBAR_WIDTH_PX,
	EXPANDED_HOME_SIDEBAR_WIDTH_PX,
} from '../constants/home-sidebar'

export const useSidebarWidth = () => {
	const isExpanded = true //useAppSelector(selectIssHomeSidebarExpanded)

	return isExpanded
		? EXPANDED_HOME_SIDEBAR_WIDTH_PX
		: COLLAPSED_HOME_SIDEBAR_WIDTH_PX
}

export const useMainContentMaxWidth = () => {
	const sidebarWidth = useSidebarWidth()
	return `calc(100vw - ${sidebarWidth})`
}
