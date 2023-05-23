import React, { useContext } from 'react';
import logo from '../../icons/wopta-logo.svg';
import aboutLeft from '../../public/about-left.png';
import Image from 'next/image';
import { mardownToHtml } from '../../utils/markdown-html';
import Link from 'next/link';
import { LocaleContext } from '../../context/LocaleContext';
import dynamicImageLoader from '../../utils/image-loader';

export function AboutUs({ iterableContent }: any) {
	const { locale } = useContext(LocaleContext);
	return (
		<section className="xl:mt-40 relative text-w-dark-black">
			<div className="absolute left-0 z-[-1] hidden md:block">
				<Image src={aboutLeft} alt="about us" />
			</div>
			<div className="font-sans 4xl:max-w-[1920px] 4xl:mx-auto px-6 md:px-12 lg:px-9 xl:px-14 2xl:px-[72px] 3xl:px-36">
				<div className="flex-col xl:flex-row flex gap-20">
					<div className="flex-1 xl:py-10">
						<div className="text-sm uppercase text-w-dark-pink font-bold text-center xl:text-left">
							{iterableContent(true)?.SectionHeader?.Surtitle}
						</div>
						<div className="mt-5 text-[28px] md:text-4xl justify-center xl:justify-start flex flex-wrap xl:mr-6">
							<span
								dangerouslySetInnerHTML={{
									__html: iterableContent()?.SectionHeader?.Title,
								}}
							></span>
						</div>
						<div
							dangerouslySetInnerHTML={mardownToHtml(
								iterableContent()?.SectionContent?.Content,
							)}
							className="mt-7 md:mt-16 text-center xl:text-left lg:mx-28 xl:mx-0 xl:mr-6"
						></div>
						<div className="flex flex-col md:flex-row gap-4 mt-12 md:mt-14 items-center md:items-start">
							<div className="flex items-center flex-1 justify-center xl:justify-start">
								<div className="mr-4 w-10 lg:w-12">
									{iterableContent()?.SectionList[0]?.Media.data.attributes
										.url && (
										<Image
											loader={dynamicImageLoader}
											src={
												iterableContent()?.SectionList[0]?.Media.data?.attributes
													.url
											}
											width={38}
											height={96}
											alt={
												iterableContent()?.SectionList[0]?.Media.data?.attributes
													.alternativeText
											}
											layout="responsive"
										/>
									)}
								</div>
								<div className="flex flex-col">
									<span className="font-medium text-[22px] md:text-[26px]">
										{iterableContent()?.SectionList[0]?.Title}
									</span>
									<span className="text-sm">
										{iterableContent()?.SectionList[0]?.Description}
									</span>
								</div>
							</div>
							<div className="flex items-center flex-1 justify-center xl:justify-start">
								<div className="mr-4 w-10 lg:w-12">
									{iterableContent()?.SectionList[1]?.Media.data?.attributes
										.url && (
										<Image
											loader={dynamicImageLoader}
											src={
												iterableContent()?.SectionList[1]?.Media.data?.attributes
													.url
											}
											width={38}
											height={96}
											alt={
												iterableContent()?.SectionList[1]?.Media.data?.attributes
													.alternativeText
											}
											layout="responsive"
										/>
									)}
								</div>
								<div className="flex flex-col">
									<span className="font-medium text-2xl md:text-3xl">
										{iterableContent()?.SectionList[1]?.Title}
									</span>
									<span className="text-sm">
										{iterableContent()?.SectionList[1]?.Description}
									</span>
								</div>
							</div>
						</div>
						<div className="mt-12 text-center xl:text-left">
							<Link
								href={{
									pathname: `/[locale]${
										iterableContent()?.SectionButtons[0]?.Target
									}`,
									query: { locale: locale },
								}}
								passHref
							>
								<button
									className="whitespace-nowrap text-white font-semibold
                         py-4 px-8 rounded-xl shadow-pink-shadow bg-back-grad-2"
								>
									{iterableContent()?.SectionButtons[0]?.Label}
								</button>
							</Link>
						</div>
					</div>
					<div className="bg-about-right bg-no-repeat  bg-contain bg-center text-center flex-1 py-10">
						<Image src={logo} height={30} alt="logo" />
						<div className="flex flex-col gap-4 items-center mt-10">
							<div className="bg-white shadow-custom p-3 flex items-center rounded-full w-64">
								<div className="h-12 w-12 mr-2 flex justify-center items-center bg-w-light-pink rounded-full">
									{iterableContent(true)?.SectionList[0]?.Media.data?.attributes
										.url && (
										<Image
											loader={dynamicImageLoader}
											src={
												iterableContent()?.SectionList[0]?.Media.data
													.attributes.url
											}
											alt={
												iterableContent()?.SectionList[0]?.Media.data?.attributes
													.alternativeText
											}
											height="25"
											width="25"
										/>
									)}
								</div>
								<div className="flex flex-col items-start">
									<span className="font-semibold text-sm">
										{iterableContent()?.SectionList[0]?.Title}
									</span>
									<span className="text-sm">
										{iterableContent()?.SectionList[0]?.Description}
									</span>
								</div>
							</div>
							<div className="sm:ml-24 lg:ml-60 bg-white shadow-custom p-3 flex items-center rounded-full w-64">
								<div className="h-12 w-12 mr-2 flex justify-center items-center bg-w-light-pink rounded-full">
									{iterableContent()?.SectionList[1]?.Media.data?.attributes
										.url && (
										<Image
											loader={dynamicImageLoader}
											src={
												iterableContent()?.SectionList[1]?.Media.data?.attributes
													.url
											}
											alt={
												iterableContent()?.SectionList[1]?.Media.data?.attributes
													.alternativeText
											}
											height="25"
											width="25"
										/>
									)}
								</div>
								<div className="flex flex-col items-start">
									<span className="font-semibold text-sm">
										{iterableContent()?.SectionList[1]?.Title}
									</span>
									<span className="text-sm">
										{iterableContent()?.SectionList[1]?.Description}
									</span>
								</div>
							</div>
							<div className="bg-white shadow-custom p-3 flex items-center rounded-full w-64">
								<div className="h-12 w-12 mr-2 flex justify-center items-center bg-w-light-pink rounded-full">
									{iterableContent()?.SectionList[2]?.Media.data?.attributes
										.url && (
										<Image
											loader={dynamicImageLoader}
											src={
												iterableContent()?.SectionList[2]?.Media.data?.attributes
													.url
											}
											alt={
												iterableContent()?.SectionList[2]?.Media.data?.attributes
													.alternativeText
											}
											height="25"
											width="25"
										/>
									)}
								</div>
								<div className="flex flex-col items-start">
									<span className="font-semibold text-sm">
										{iterableContent()?.SectionList[2]?.Title}
									</span>
									<span className="text-sm">
										{iterableContent()?.SectionList[2]?.Description}
									</span>
								</div>
							</div>
							<div className="sm:ml-24 lg:ml-60 bg-white shadow-custom p-3 flex items-center rounded-full w-64">
								<div className="h-12 w-12 mr-2 flex justify-center items-center bg-w-light-pink rounded-full">
									{iterableContent()?.SectionList[3]?.Media.data?.attributes
										.url && (
										<Image
											loader={dynamicImageLoader}
											src={
												iterableContent()?.SectionList[3]?.Media.data?.attributes
													.url
											}
											alt={
												iterableContent()?.SectionList[3]?.Media.data?.attributes
													.alternativeText
											}
											height="25"
											width="25"
										/>
									)}
								</div>
								<div className="flex flex-col items-start">
									<span className="font-semibold text-sm">
										{iterableContent()?.SectionList[3]?.Title}
									</span>
									<span className="text-sm">
										{iterableContent()?.SectionList[3]?.Description}
									</span>
								</div>
							</div>
							<div className="bg-white shadow-custom p-3 flex items-center rounded-full w-64">
								<div className="h-12 w-12 mr-2 flex justify-center items-center bg-w-light-pink rounded-full">
									{iterableContent()?.SectionList[4]?.Media.data?.attributes
										.url && (
										<Image
											loader={dynamicImageLoader}
											src={
												iterableContent()?.SectionList[4]?.Media.data?.attributes
													.url
											}
											alt={
												iterableContent()?.SectionList[4]?.Media.data?.attributes
													.alternativeText
											}
											height="25"
											width="25"
										/>
									)}
								</div>
								<div className="flex flex-col items-start">
									<span className="font-semibold text-sm">
										{iterableContent()?.SectionList[4]?.Title}
									</span>
									<span className="text-sm">
										{iterableContent()?.SectionList[4]?.Description}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
