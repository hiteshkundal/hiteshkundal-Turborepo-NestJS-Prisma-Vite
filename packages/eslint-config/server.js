module.exports = {
	extends: [
		'turbo',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	plugins: [
		'@typescript-eslint',
		'unused-imports',
		'simple-import-sort',
		'import',
	],
	env: {
		node: true,
		jest: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		tsRootDir: __dirname,
	},
	settings: {
		'import/resolver': {
			typescript: {
				project: './tsconfig.json',
			},
		},
	},
	rules: {
		'@typescript-eslint/no-duplicate-enum-values': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-empty-function': 'warn',
		'@typescript-eslint/no-empty-interface': 'warn',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_',
				ignoreRestSiblings: true,
			},
		],
		'@typescript-eslint/switch-exhaustiveness-check': 'warn',
		'import/no-unresolved': 'error',
		'import/order': 'off',
		'no-console': ['warn', { allow: ['info', 'error'] }],
		'no-constant-condition': 'warn',
		'no-extra-semi': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'no-unsafe-optional-chaining': 'warn',
		'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
		'simple-import-sort/exports': 'error',
		'simple-import-sort/imports': 'error',
		'sort-imports': 'off',
		'unused-imports/no-unused-imports': 'error',
	},
	ignorePatterns: [
		'**/*.js',
		'**/*.cjs',
		'**/*.json',
		'node_modules',
		'public',
		'.next',
		'coverage',
		'dist',
		'.turbo',
	],
}
