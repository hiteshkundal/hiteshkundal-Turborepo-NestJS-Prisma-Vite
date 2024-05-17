import { Prisma } from 'database'

import { baseApi } from '@/rtk'

export enum MemberEndPoints {
	/** Query */
	getMember = 'getMember',
	getTeamMembers = 'getTeamMembers',

	/** Mutation */
}

const membersApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		[MemberEndPoints.getMember]: builder.query<
			Prisma.memberGetPayload<true>,
			void
		>({
			query: () => ({
				url: `/members/member`,
			}),
		}),
	}),
})

export const { useGetMemberQuery } = membersApi

export { membersApi }
