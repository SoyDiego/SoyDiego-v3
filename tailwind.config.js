const withAnimations = require("animated-tailwindcss");

module.exports = withAnimations({
	prefix: "tw-",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
	variants: {
		fill: ["hover", "focus"],
		textColor: ["responsive", "hover", "focus", "group-hover"],
	},
});