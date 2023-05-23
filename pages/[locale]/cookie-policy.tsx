import { NextPage } from 'next';
import Head from 'next/head';
import PolicySection from '../../components/policy-section/policy-section.component';
import { PageService } from '../../plugins/api-service';
import { iterable, stripHTML } from '../../utils/iterable';
import { mardownToHtml } from '../../utils/markdown-html';
import getPathSlugs from '../../utils/path-slug';

const CookiePolicyPage: NextPage = ({ attributes }: any) => {
	const iterableContent = iterable(attributes.PageContent);
	const { metaTitle, metaDescription, keywords, metaRobots, canonicalURL } =
		attributes.Meta || {};

	return (
		<>
			<Head>
				<title>{stripHTML(iterableContent().Title)}</title>
			</Head>
			<meta property="og:title" content={metaTitle} />
			<meta name="description" content={metaDescription} />
			<meta name="keywords" content={keywords} />
			<meta name="robots" content={metaRobots} />
			<link rel="canonical" href={canonicalURL} />
			<PolicySection
				header={
					<span
						dangerouslySetInnerHTML={{ __html: iterableContent().Title }}
					></span>
				}
				content={
					<>
						<h1
							dangerouslySetInnerHTML={{ __html: iterableContent(true).Title }}
							className="font-medium text-[26px] mb-3"
						></h1>
						<div
							dangerouslySetInnerHTML={mardownToHtml(iterableContent().Content)}
							className="font-normal text-[16px] leading-7 text-justify"
						></div>
					</>
				}
			/>
		</>
	);
};

export default CookiePolicyPage;

export async function getStaticProps({ params }: any) {
	return await PageService('cookie-policy', params.locale);
}

export async function getStaticPaths() {
	const pathsWithLocale = getPathSlugs();
	return {
		paths: pathsWithLocale,
		fallback: false,
	};
}
