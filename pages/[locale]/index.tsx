import Head from 'next/head';
import { NextPage } from 'next';
import HomeHeaderSection from '../../components/home-header-section/home-header-section.component';
import { AboutUs } from '../../components/home-container/about-us.component';
import { Service } from '../../components/home-container/service.components';
import React from 'react';
import getPathSlugs from '../../utils/path-slug';
import { PageService } from '../../plugins/api-service';
import { iterable, stripHTML } from '../../utils/iterable';

const Home: NextPage = ({ attributes }: any) => {
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
			<main>
				<HomeHeaderSection iterableContent={iterableContent} />
				<Service iterableContent={iterableContent} />
				<hr className="border-t-2 border-w-dark-pink my-20 sm:my-30 block xl:hidden w-24 md:w-72 mx-auto" />
				<AboutUs iterableContent={iterableContent} />
			</main>
		</div>
	);
};

export default Home;

export async function getStaticProps({ params }: any) {
	return await PageService('home', params.locale);
}

export async function getStaticPaths() {
	const pathsWithLocale = getPathSlugs();
	return {
		paths: pathsWithLocale,
		fallback: false,
	};
}
