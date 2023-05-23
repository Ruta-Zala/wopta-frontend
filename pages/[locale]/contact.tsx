import Head from 'next/head';
import { NextPage } from 'next';
import React from 'react';
import ContactHeader from '../../components/contact-us-container/contact-header.component';
import ContactTouch from '../../components/contact-us-container/contact-touch.component';
import ContactSale from '../../components/contact-us-container/contact-sale.component';
import getPathSlugs from "../../utils/path-slug";
import { PageService } from '../../plugins/api-service';
import { iterable, stripHTML } from '../../utils/iterable';

const Contact: NextPage = ({ attributes }: any) => {
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
                <ContactHeader iterableContent={iterableContent} />
                <ContactTouch iterableContent={iterableContent}/>
                <ContactSale iterableContent={iterableContent}/>
            </main>
        </div>
    );
};

export default Contact;

export async function getStaticProps({ params }: any) {
	return await PageService('contact-us', params.locale);
}

export async function getStaticPaths() {
	const pathsWithLocale = getPathSlugs();
	return {
		paths: pathsWithLocale,
		fallback: false,
	};
}