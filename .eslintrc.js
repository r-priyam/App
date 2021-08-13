module.exports = {
	parserOptions: {
		parser: '@babel/eslint-parser',
	},
	env: {
		jest: true,
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:vue/essential'],
	plugins: ['vue'],
	rules: {
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
	},
};
