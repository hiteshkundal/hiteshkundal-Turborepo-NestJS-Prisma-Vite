import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'

import { DatabaseModule } from './modules/database/database.module'
import { GoogleAuthModule } from './modules/google-auth/google-auth.module'
import { MembersModule } from './modules/members/members.module'

@Module({
	imports: [
		PassportModule.register({ session: true }),
		GoogleAuthModule,
		DatabaseModule,
		MembersModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
