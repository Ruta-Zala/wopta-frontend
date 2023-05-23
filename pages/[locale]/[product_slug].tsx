import Head from 'next/head';
import { NextPage } from 'next';
import ServiceHeader from '../../components/service/service-header.component';
import React from 'react';
import ServiceDeposit from '../../components/service/service-deposit.component';
import ServiceGuarantees from '../../components/service/service-guarantees.component';
import ServiceFaq from '../../components/service/service-faq.component';
import { ProductList, ProductService } from '../../plugins/api-service';
import { iterable, stripHTML } from '../../utils/iterable';
import { locales } from '../../locales';

const Service: NextPage = ({ attributes }: any) => {
	const iterableContent = iterable(attributes.PageContent);
	const { metaTitle, metaDescription, keywords, metaRobots, canonicalURL } =
		attributes.Meta || {};
	return (
		<div>
			<Head>
				<title>{stripHTML(iterableContent().Title)}</title>
			</Head>
			<meta property="og:title" content={metaTitle} />
			<meta name="description" content={metaDescription} />
			<meta name="keywords" content={keywords} />
			<meta name="robots" content={metaRobots} />
			<link rel="canonical" href={canonicalURL} />
			<main className="text-w-dark">
				<ServiceHeader iterableContent={iterableContent} />
				<ServiceDeposit iterableContent={iterableContent} />
				<ServiceGuarantees iterableContent={iterableContent} />
				{/* <ServiceFaq iterableContent={iterableContent} /> */}
			</main>
		</div>
	);
};

export default Service;

export async function getStaticProps({ params }: any) {
	return await ProductService(params.locale, params.product_slug);
}

export async function getStaticPaths() {
	let paths = [];

	for (const locale of locales) {
		const products = await ProductList(locale);
		for (const product of products) {
			paths.push({
				params: {
					product_slug: product.attributes.slug,
					locale:locale
				},
			});
		}
	}

	return {
		paths: paths,
		fallback: false,
	};
}
