import Head from 'next/head';
import {NextPage} from 'next';
import AboutUsHeader from '../../components/about-us-container/about-us-header.component';
import React from 'react';
import OurTeamContainer from '../../components/about-us-container/our-team.component';
import OurVision from '../../components/about-us-container/our-vision.component';
import OurValue from '../../components/about-us-container/our-value.component';
import OurValueHeader from '../../components/about-us-container/our-value-header.component';
import OurVisionHeader from '../../components/about-us-container/our-vision-header.component';
import getPathSlugs from '../../utils/path-slug';
import {iterable, stripHTML} from "../../utils/iterable";
import {PageService} from "../../plugins/api-service";

const AboutUs: NextPage = ({ attributes }: any) =>  {
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
			    <AboutUsHeader iterableContent={iterableContent} />
                <OurTeamContainer iterableContent={iterableContent} />
				<div className="text-center mb-[598px] md:mb-96 lg:mb-[464px] xl:mb-[367px] 3xl:mb-[344px] relative pt-[176px] md:pt-36 pb-28 md:pb-48 xl:pb-40 bg-back_grad_1">
					<OurVisionHeader iterableContent={iterableContent} />
					<OurVision iterableContent={iterableContent} />
				</div>
				<div className="text-center relative pt-[666px] md:pt-[551px] lg:pt-[410px] pb-44 md:pb-56 lg:pb-[165px] xl:pb-52 2xl:pb-48 bg-w-light-white">
					<OurValueHeader iterableContent={iterableContent} />
					<OurValue iterableContent={iterableContent} />
				</div>
			</main>
		</div>
	);
};

export default AboutUs;

export async function getStaticProps({ params }: any) {
	return await PageService('about-us', params.locale);
}

export async function getStaticPaths() {
	const pathsWithLocale = getPathSlugs();
	return {
		paths: pathsWithLocale,
		fallback: false,
	};
}
