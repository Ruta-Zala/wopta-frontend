import Image from 'next/image';
import * as React from 'react';
import { mardownToHtml } from '../../utils/markdown-html';
import dynamicImageLoader from '../../utils/image-loader';

const ServiceDeposit = ({ iterableContent }: any) => {
	return (
		<>
			<div className="relative pb-32 4xl:max-w-[1920px] 4xl:mx-auto px-6 md:px-12 lg:px-9 xl:px-14 2xl:px-[72px] 3xl:px-36">
				<div
					dangerouslySetInnerHTML={mardownToHtml(iterableContent(true).Content)}
					className="text-2xl text-center md:w-[760px] mx-auto font-medium md-10 md:mb-36"
				></div>
				<div className="grid lg:grid-cols-2 xl:gap-28 xl:mx-[133px] items-center mb-32">
					<div>
						<div className="mt-6 text-[28px] md:text-4xl flex flex-wrap font-medium mb-16">
							<span
								dangerouslySetInnerHTML={{
									__html: iterableContent(true).SectionList[0].Title,
								}}
							></span>
						</div>
						<div
							dangerouslySetInnerHTML={mardownToHtml(
								iterableContent().SectionList[0].Description,
							)}
							className="mb-6"
						></div>
					</div>
					<div className="flex justify-center">
						{iterableContent()?.SectionList[0]?.Media.data?.attributes.url && (
							<Image
								loader={dynamicImageLoader}
								src={
									iterableContent()?.SectionList[0]?.Media.data?.attributes.url
								}
								alt={
									iterableContent()?.SectionList[0]?.Media.data?.attributes
										.alternativeText
								}
								height="369"
								width="488"
							/>
						)}
					</div>
				</div>
				<div className="grid lg:grid-cols-2 xl:gap-28 xl:mx-[133px] items-center mb-32">
					<div className="order-1 xl:order-2">
						<div className="mt-6 text-[28px] md:text-4xl flex flex-wrap font-medium mb-16">
							<span
								dangerouslySetInnerHTML={{
									__html: iterableContent().SectionList[1].Title,
								}}
							></span>
						</div>
						<div
							dangerouslySetInnerHTML={mardownToHtml(
								iterableContent().SectionList[1].Description,
							)}
							className="mb-6"
						></div>
					</div>
					<div className="flex justify-center order-2 xl:order-1">
						{iterableContent()?.SectionList[1]?.Media.data?.attributes.url && (
							<Image
								loader={dynamicImageLoader}
								src={
									iterableContent()?.SectionList[1]?.Media.data?.attributes.url
								}
								alt={
									iterableContent()?.SectionList[1]?.Media.data?.attributes
										.alternativeText
								}
								height="369"
								width="488"
							/>
						)}
					</div>
				</div>
				<div className="grid lg:grid-cols-2 xl:gap-28 xl:mx-[133px] items-center">
					<div>
						<div className="mt-6 text-[28px] md:text-4xl flex flex-wrap font-medium mb-16">
							<span
								dangerouslySetInnerHTML={{
									__html: iterableContent().SectionList[2].Title,
								}}
							></span>
						</div>
						<div
							dangerouslySetInnerHTML={mardownToHtml(
								iterableContent().SectionList[2].Description,
							)}
							className="mb-6"
						></div>
					</div>
					<div className="flex justify-center">
						{iterableContent()?.SectionList[2]?.Media.data?.attributes.url && (
							<Image
								loader={dynamicImageLoader}
								src={
									iterableContent()?.SectionList[2]?.Media.data?.attributes.url
								}
								alt={
									iterableContent()?.SectionList[2]?.Media.data?.attributes
										.alternativeText
								}
								height="369"
								width="488"
							/>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default ServiceDeposit;
