import { Injectable } from '@nestjs/common'

import { DatabaseService } from '../database/database.service'
import { GoogleMemberDetails } from './types/user-details'

@Injectable()
export class GoogleAuthService {
	constructor(private readonly databaseService: DatabaseService) {}

	async validateUser({
		email,
		first_name,
		last_name,
		profile_picture,
	}: GoogleMemberDetails) {
		const user = await this.databaseService.member.findUnique({
			where: { email },
		})

		if (user) return user

		return await this.databaseService.member.create({
			data: {
				email,
				first_name,
				last_name,
				profile_picture,
			},
		})
	}

	async findUser(id: string) {
		const user = await this.databaseService.member.findUnique({
			where: { id },
		})
		if (user) return user
		return null
	}
}
