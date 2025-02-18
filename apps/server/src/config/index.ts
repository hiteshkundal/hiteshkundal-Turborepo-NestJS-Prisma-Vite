const PORT = process.env.PORT || 4000
const DATABASE_URL = process.env.DATABASE_URL
const FRONTEND_URL = process.env.FRONTEND_URL
const BACKEND_URL = process.env.BACKEND_URL
const ZERODHA_API_KEY = process.env.ZERODHA_API_KEY
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const GOOGLE_CALLBACK_URL = process.env.GOOGLE_CALLBACK_URL
const SESSION_SECRET = process.env.SESSION_SECRET

export {
	BACKEND_URL,
	DATABASE_URL,
	FRONTEND_URL,
	GOOGLE_CALLBACK_URL,
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	PORT,
	SESSION_SECRET,
	ZERODHA_API_KEY,
}
