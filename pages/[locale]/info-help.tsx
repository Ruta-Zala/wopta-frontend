import Head from 'next/head';
import { NextPage } from 'next';
import React, {useState} from 'react';
import getPathSlugs from "../../utils/path-slug";
import FaqHeader from "../../components/faq-container/faq-header.component";
import FaqCategoryMain from "../../components/faq-container/faq-category-main.component";
import {CategoriesService, PageService} from "../../plugins/api-service";
import {iterable, stripHTML} from "../../utils/iterable";

const InfoHelp: NextPage = ({ infoPageAttributes , infoCategoriesAttributes}: any) => {
    const infoAttribute =  infoPageAttributes.props.attributes;
    const infoCategoriesAttribute =  infoCategoriesAttributes.props.categoriesAttributes;
    const iterableContent = iterable(infoAttribute.PageContent);
    const { metaTitle, metaDescription, keywords, metaRobots, canonicalURL } =
    infoAttribute.Meta || {};
    const [result, setResult] = useState([]);
    let findKeyword = (value: string) => {
        const searchData: any = [];
        infoCategoriesAttribute.filter((categoriesData: { attributes: any }) => {
            categoriesData.attributes.Faqs.data.filter((categoryData: { attributes: { Question: string, Answer: string } }) => {
                if (categoryData.attributes.Question.toLowerCase().includes(value.toLowerCase())
                    || categoryData.attributes.Answer.toLowerCase().includes(value.toLowerCase())) {
                    searchData.push(categoryData.attributes);
                   return categoryData.attributes
                }
            });
        });
        setResult(searchData);
    };
    const setSearchQuery = (e: { target: { value: any; }; }) => {
        if(e.target.value !== '') {
            findKeyword(e.target.value)
        }
        else {
            setResult([]);
        }
    };
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
                <FaqHeader iterableContent={iterableContent} attributes={infoCategoriesAttribute} searchQuery={setSearchQuery}/>
                <FaqCategoryMain  iterableContent={iterableContent} attributes={infoCategoriesAttribute} result={result}/>
            </main>
        </div>
    );
};

export default InfoHelp;

export async function getStaticProps({ params }: any) {
    const attributes =  await PageService('info-help', params.locale) ;
    const categoriesAttributes =  await CategoriesService('Faqs,Media', params.locale) ;
    return {
        props: {
            infoPageAttributes: attributes,
            infoCategoriesAttributes: categoriesAttributes
        }
    };
}

export async function getStaticPaths() {
    const pathsWithLocale = getPathSlugs();
    return {
        paths: pathsWithLocale,
        fallback: false,
    };
}