import axios from 'axios';

axios.defaults.headers.common = {
	Authorization: `Bearer ${process.env.API_TOKEN}`,
};

export const PageService = async (pageName: string, locale: string) => {
	const response = await axios.get(
		`${process.env.API_BASE_URL}/pages?populate[PageContent][populate]=*,SectionHeader,SectionContent,SectionList,SectionButtons,SectionList.Media&locale=${locale}&filters[slug][$eq]=${pageName}`,
	);

	if (response.data.data[0] === undefined) {
		return {
			notFound: true,
		};
	}

	const attributes = response.data.data[0].attributes;
	return {
		props: {
			attributes,
		},
	};
};

export const ThemeService = async (locale: string) => {
	const response = await axios.get(
		`${process.env.API_BASE_URL}/theme?locale=${locale}&populate=logo`,
	);

	return response.data.data.attributes;
};

export const ProductService = async (locale: string, slug: string) => {
	const response = await axios.get(
		`${process.env.API_BASE_URL}/products?populate[Meta][populate]=*&populate[PageContent][populate]=*,SectionHeader,SectionContent,SectionList,SectionButtons,SectionList.Media&locale=${locale}&filters[slug][$eq]=${slug}`,
	);

	if (response.data.data[0] === undefined) {
		return {
			notFound: true,
		};
	}

	const attributes = response.data.data[0].attributes;

	return {
		props: {
			attributes,
		},
	};
};

export const ProductList = async (locale: string) => {
    const response = await axios.get(
        `${process.env.API_BASE_URL}/products?locale=${locale}&populate[PageContent][populate]=*`,
    );

    return response.data.data;
};


export const CategoriesService = async (categoriesName: string, locale: string) => {

	const response = await axios.get(
		`${process.env.API_BASE_URL}/categories?pagination[pageSize]=100&locale=${locale}&populate=${categoriesName}`
	);

	if (response.data.data[0] === undefined) {
		return {
			notFound: true,
		};
	}
	const categoriesAttributes = response.data.data;
	return {
		props: {
			categoriesAttributes,
		},
	};
};