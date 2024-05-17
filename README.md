Turborepo + Vite+ NestJS

We have a shared database package that we are sharing between different apps.


When we fetch member in web, we can just do this to define the member type as `Primsa.memberGetPayload`

```
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
```


and similarly checkout `Prisma.memberCreateInput` to create member payload

```import { Injectable } from '@nestjs/common'
import { Prisma } from 'database'

import { DatabaseService } from '../database/database.service'

@Injectable()
export class MembersService {
	constructor(private readonly databaseService: DatabaseService) {}

	async create(createMemberDto: Prisma.memberCreateInput) {
		return this.databaseService.member.create({
			data: createMemberDto,
		})
	}
}
```
