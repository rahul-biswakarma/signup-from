module.exports = {
	content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				bg_1: "#ffffff",
				bg_2: "#f2f2f2",
				border_color: "#e5e7eb",
				blue_1: "#0040ff",
				blue_2: "#00134d",
				dark_gray: "#575757",
				input_bg: "#f1f1f1",
			},
			backgroundImage: {
				signupHeroImage: "url('./assets/images/signup.webp')",
			},
		},
	},
	plugins: [],
};
