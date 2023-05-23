import Image from 'next/image';
import React, { useContext } from 'react';
import Button from '../button/button.component';
import Link from 'next/link';
import { LocaleContext } from '../../context/LocaleContext';
import { mardownToHtml } from '../../utils/markdown-html';
import dynamicImageLoader from '../../utils/image-loader';

const ContactTouch = ({ iterableContent }: any) => {
	const { locale } = useContext(LocaleContext);
	return (
		<>
			<div className="relative pb-32 4xl:max-w-[1920px] 4xl:mx-auto px-6 md:px-12 lg:px-9 xl:px-14 2xl:px-[72px] 3xl:px-36">
				<div className="text-2xl text-center md:w-[760px] mx-auto font-medium">
					{iterableContent(true)?.SectionHeader.Title}
				</div>
				<div className="flex gap-8 flex-col xl:flex-row pt-20 lg:w-[912px] mx-auto">
					{iterableContent()?.SectionList.map((content: any, index: number) => (
						<div
							key={index}
							className="bg-white shadow-custom rounded-xl py-7 px-6 gap-5 flex flex-col flex-1"
						>
							<div className="flex justify-between">
								<Image
									loader={dynamicImageLoader}
									src={content.Media.data.attributes.url}
									alt={content.Media.data.attributes.alternativeText}
									height="33"
									width="33"
								/>
							</div>
							<div className="flex flex-col flex-1">
								<div className="font-semibold xl:mb-2">{content.Title}</div>
								<div
									dangerouslySetInnerHTML={mardownToHtml(content.Description)}
									className="text-sm block leading-[22px]"
								></div>
							</div>
							{content.CTALabel && (
								<Button
									className="w-full border-w-dark-pink text-w-dark-pink h-[31px] font-semibold hover:shadow-lg p-4 text-center rounded-full flex flex-row-reverse"
									default={
										<Link
											href={
												content.CTATarget === '#GoToContactForm'
													? content.CTATarget
													: {
															pathname: `/[locale]${content.CTATarget}`,
															query: {
																locale: locale,
															},
													  }
											}
											passHref
										>
											<span className="block text-w-dark-pink text-sm font-semibold">
												{content.CTALabel}
											</span>
										</Link>
									}
								/>
							)}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default ContactTouch;
