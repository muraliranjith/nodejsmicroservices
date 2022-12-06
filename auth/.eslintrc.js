module.exports = {
	// extends: 'airbnb-base',
	extends: [
		'airbnb-typescript/base',
		'plugin:@typescript-eslint/recommended',
		'pretteir',
		'prettier/@typescript-eslint',
	],
	plugins: ['import', 'prettier', '@typescript-eslint'],
	parseroptions: './tsconfig.json',
	// env: {
	//   browser: true,
	//   commonjs: true,
	//   es6: true,
	//   node: true
	// },
	rules: {
		// 'linebreak-style': ['error', 'windows'],
		// 'brace-style': ['error', 'stroustrup'],
		// 'comma-dangle': ['error', 'never'],
		// 'no-unused-vars': ['warn'],
		// indent: 'off',
		// 'no-var': ['off'],
		// 'one-var': ['off'],
		// 'no-console': 0,
		// 'import/newline-after-import': 'off'
		quetes: [
			'error',
			'single',
			{ avoidEscape: true, allowTemplateLiterals: false },
		],
	},
};
