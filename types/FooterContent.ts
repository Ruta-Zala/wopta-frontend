interface Logo {
	data: {
		attributes: {
			url: string;
			alternativeText: string;
		};
	};
}

export interface FooterContent {
	footerDescription: string;
	address: string;
	vat: string;
	logo: Logo;
}