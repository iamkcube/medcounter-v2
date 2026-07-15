/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			fontFamily: {
				sans: ["DMSans_400Regular"],
				thin: ["DMSans_100Thin"],
				extralight: ["DMSans_200ExtraLight"],
				light: ["DMSans_300Light"],
				regular: ["DMSans_400Regular"],
				medium: ["DMSans_500Medium"],
				semibold: ["DMSans_600SemiBold"],
				bold: ["DMSans_700Bold"],
				extrabold: ["DMSans_800ExtraBold"],
				black: ["DMSans_900Black"],
			},
		},
	},
	plugins: [],
};
