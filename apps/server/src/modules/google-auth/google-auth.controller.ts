import { Controller, Get, Logger, Redirect, UseGuards } from '@nestjs/common'

import { FRONTEND_URL } from '../../config'
import { GoogleAuthGuard } from './utils/guard'

@Controller('google-auth')
export class GoogleAuthController {
	private logger = new Logger(GoogleAuthController.name)

	@Get('url')
	@UseGuards(GoogleAuthGuard)
	async handleLogin() {
		this.logger.debug('Redirecting to Google OAuth')
	}

	@Get('callback')
	@UseGuards(GoogleAuthGuard)
	@Redirect()
	async handleRedirect(): Promise<{ url: string }> {
		try {
			return { url: `${FRONTEND_URL}` }
		} catch (err) {
			this.logger.error(err)
			return { url: `${FRONTEND_URL}/login` }
		}
	}
}
