import { Injectable } from '@nestjs/common'
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
