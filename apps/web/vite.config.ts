import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
	plugins: [
		svgr({
			svgrOptions: {
				exportType: 'named',
				ref: true,
				svgo: false,
				titleProp: true,
			},
			include: '**/*.svg',
		}),
		react(),
	],
	esbuild: {
		logOverride: { 'this-is-undefined-in-esm': 'silent' },
	},
	server: {
		host: true,
		port: 3000,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		commonjsOptions: {
			ignoreTryCatch: false,
		},
	},
})
