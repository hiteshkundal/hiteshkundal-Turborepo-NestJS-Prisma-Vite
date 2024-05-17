export const ProtectedRoutePartial = ({ children }) => {
	// const member = useMember()?.member
	// const isAuth = !!member
	// const teamId = useTeamId()

	// const shouldRedirectToLogin = !isAuth
	// const shouldRedirectToOnboarding = !teamId

	// if (shouldRedirectToLogin) return <Navigate to="/login" />
	// if (shouldRedirectToOnboarding) return <Navigate to="/onboarding/profile" />

	return <>{children}</>
}
