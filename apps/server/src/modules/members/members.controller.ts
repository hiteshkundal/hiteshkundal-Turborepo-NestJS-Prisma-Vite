import { Controller, Get, Session } from '@nestjs/common'

import { MembersService } from './members.service'

@Controller('members')
export class MembersController {
	constructor(private readonly membersService: MembersService) {}
	@Get('session')
	async getMember(@Session() session: any) {
		console.log(session, 'hello')
		// return await this.membersService.getMember()
	}
}
