import { Module } from '@nestjs/common'

import { GoogleAuthController } from './google-auth.controller'
import { GoogleAuthService } from './google-auth.service'
import { SessionSerializer } from './utils/serializer'
import { GoogleAuthStrategy } from './utils/strategy'

@Module({
	controllers: [GoogleAuthController],
	providers: [GoogleAuthService, GoogleAuthStrategy, SessionSerializer],
})
export class GoogleAuthModule {}
