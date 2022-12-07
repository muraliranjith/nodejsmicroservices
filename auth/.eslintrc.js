module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'airbnb-base',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/eslint-recommended'
	],
	// extends: [
	// 	'airbnb-typescript/base',
	// 	'plugin:@typescript-eslint/recommended',
	// 	'pretteir',
	// 	'prettier/@typescript-eslint',
	// ],
	plugins: ['import', 'prettier', '@typescript-eslint'],
	// parseroptions: './tsconfig.json',
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true
	},
	rules: {
		'linebreak-style': ['off', 'windows'],
		'brace-style': ['error', 'stroustrup'],
		'comma-dangle': ['error', 'never'],
		'no-unused-vars': ['off'],
		'@typescript-eslint/no-unused-vars': ['off'],
		indent: 'off',
		'no-tabs': 0,
		'no-var': ['off'],
		'one-var': ['off'],
		'no-console': 0,
		'import/newline-after-import': 'off',
		'import/prefer-default-export': 'off',
		'import/no-unresolved': [2, { caseSensitive: false }],
		quetes: [
			'error',
			'single',
			{ avoidEscape: true, allowTemplateLiterals: false }
		]
	}
};
