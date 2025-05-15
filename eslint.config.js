import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'

export default tseslint.config({ ignores: ['dist', 'node_modules', 'env.d.ts'] }, [
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: { project: './tsconfig.app.json' },
		},
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			prettier: prettierPlugin,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'prettier/prettier': 'error',
		},
		settings: {
			react: { version: 'detect' },
		},
	},
	{
		files: ['vite.config.ts'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.node,
			parserOptions: { project: './tsconfig.node.json' },
		},
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		plugins: {
			prettier: prettierPlugin,
		},
		rules: {
			'prettier/prettier': 'error',
		},
	},
])
