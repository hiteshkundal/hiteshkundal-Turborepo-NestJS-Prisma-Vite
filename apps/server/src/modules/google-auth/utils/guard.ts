import { ExecutionContext, Injectable, Logger } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class GoogleAuthGuard extends AuthGuard('google') {
	private logger = new Logger(GoogleAuthGuard.name)
	async canActivate(context: ExecutionContext): Promise<boolean> {
		try {
			const activate = (await super.canActivate(context)) as boolean
			const request = context.switchToHttp().getRequest()
			await super.logIn(request)
			return activate
		} catch (error) {
			this.logger.error(error)
			return false
		}
	}
}
