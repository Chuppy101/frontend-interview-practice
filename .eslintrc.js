module.exports = {
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "prettier"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
	],
	env: { es2020: true, node: true },
}
