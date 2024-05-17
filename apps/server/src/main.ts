import * as dotenv from 'dotenv'
import * as passport from 'passport'
dotenv.config()
import { NestFactory } from '@nestjs/core'
import * as bodyParser from 'body-parser'
import * as sessions from 'express-session'

import { AppModule } from './app.module'
import { BACKEND_URL, PORT, SESSION_SECRET } from './config'
import { setUpSwagger } from './config/swagger'
import { logger } from './config/winston'

const bootstrap = async () => {
	const app = await NestFactory.create(AppModule, {
		logger: logger,
	})
	app.setGlobalPrefix('api')
	setUpSwagger(app)
	app.use(bodyParser.json({ limit: '50mb' }))
	app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
	app.enableCors()

	app.use(
		sessions({
			secret: SESSION_SECRET,
			resave: false,
			saveUninitialized: false,
			cookie: {
				maxAge: 1000 * 60 * 60 * 24 * 365,
			},
		}),
	)
	app.use(passport.initialize())
	app.use(passport.session())

	await app.listen(PORT, () =>
		console.info(`🚀 Server running on ${BACKEND_URL}`),
	)
}

bootstrap()
