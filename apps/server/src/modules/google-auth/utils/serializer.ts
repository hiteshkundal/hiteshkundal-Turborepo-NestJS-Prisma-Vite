import { Injectable } from '@nestjs/common'
import { PassportSerializer } from '@nestjs/passport'
import { member } from '@prisma/client'

import { GoogleAuthService } from '../google-auth.service'

@Injectable()
export class SessionSerializer extends PassportSerializer {
	constructor(private readonly authService: GoogleAuthService) {
		super()
	}

	serializeUser(user: member, done: any) {
		done(null, user)
	}

	async deserializeUser(payload: any, done: any) {
		const user = await this.authService.findUser(payload.id)
		return user ? done(null, user) : done(null, null)
	}
}
