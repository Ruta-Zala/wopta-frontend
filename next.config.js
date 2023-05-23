module.exports = {
	trailingSlash: true,
	images: {
		path: process.env.BASE_PATH,
		loader: 'akamai',
	},
	googleFonts: {
		families: {
			Montserrat: {
				wght: [200, 300, 400, 500, 600, 700],
			},
		},
	},
	env: {
		API_TOKEN: process.env.API_TOKEN,
		API_BASE_URL: process.env.API_BASE_URL,
		BASE_URL: process.env.BASE_URL,
		AUTH_USERNAME: process.env.AUTH_USERNAME,
		AUTH_PASSWORD: process.env.AUTH_PASSWORD,
		AUTH_ENABLED: process.env.AUTH_ENABLED,
		SUPPORT_EMAIL: process.env.SUPPORT_EMAIL
	},
};
