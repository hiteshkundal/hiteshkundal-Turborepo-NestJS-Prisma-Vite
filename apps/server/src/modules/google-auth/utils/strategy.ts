import { Injectable, Logger } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-google-oauth2'

import {
	GOOGLE_CALLBACK_URL,
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
} from '../../../config'
import { GoogleAuthService } from '../google-auth.service'
import { GoogleMemberDetails } from '../types/user-details'

@Injectable()
export class GoogleAuthStrategy extends PassportStrategy(Strategy, 'google') {
	private logger = new Logger(GoogleAuthStrategy.name)
	constructor(private readonly authService: GoogleAuthService) {
		super({
			clientID: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
			callbackURL: GOOGLE_CALLBACK_URL,
			scope: ['profile', 'email'],
		})
	}

	async validate(
		_accessToken: string,
		_refreshToken: string,
		profile: any,
		done: any,
	): Promise<any> {
		const { name, emails, photos } = profile

		const member: GoogleMemberDetails = {
			email: emails[0].value,
			first_name: name.givenName,
			last_name: name.familyName,
			profile_picture: photos[0].value,
		}

		const user = await this.authService.validateUser(member)
		done(null, user)
		return user || null
	}
}
