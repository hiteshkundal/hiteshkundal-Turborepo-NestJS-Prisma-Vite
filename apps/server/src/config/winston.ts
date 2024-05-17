import { config } from 'dotenv'
import { createLogger, format, transports } from 'winston'
config({ override: true })

export const logger = createLogger({
	format: format.combine(
		format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
		format.json(),
		format.splat(),
		format.errors({ stack: true }),
		format.printf((info) => {
			return `[${info.timestamp}] ${info.level}: ${info.message}`
		}),
	),
	transports: [new transports.Console()],
	exitOnError: false,
})
