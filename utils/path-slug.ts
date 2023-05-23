import { locales } from "../locales";

const getPathSlugs = () => {
	// We fetched locales from our API once at build time
	return locales.map((locale) => ({
		params: {
			locale,
		},
	}));
};

export default getPathSlugs