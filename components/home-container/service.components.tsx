import React from 'react';
import Image from 'next/image';
import { mardownToHtml } from '../../utils/markdown-html';
import dynamicImageLoader from '../../utils/image-loader';

export function Service({ iterableContent }: any) {
	return (
		<section className="pt-[60px] text-w-dark">
			<div className="font-sans 4xl:max-w-[1920px] 4xl:mx-auto px-6 md:px-12 lg:px-9 xl:px-14 2xl:px-[72px] 3xl:px-36">
				<div className="flex-col flex gap-6 lg:gap-8 justify-center items-center">
					<div className="flex-1 relative">
						<div className="mt-5 text-[28px] lg:text-[32px] md:text-[38px] font-medium justify-center flex flex-wrap">
							<span
								dangerouslySetInnerHTML={{
									__html: iterableContent(true).SectionHeader.Title,
								}}
							></span>
						</div>
					</div>
					<div className="bg-[url('../public/service-bg-sm.png')] md:bg-[url('../public/service-bg-md.png')] lg:bg-[url('../public/service-bg-lg.png')] xl:bg-[url('../public/service-bg.png')] bg-no-repeat w-full px-7 pt-20 pb-16 2xl:px-16 bg-100">
						<div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-x-[16px] gap-y-[9px] lg:gap-[16px] xl:gap-[18px]">
							{iterableContent().SectionList.map(
								(content: any, index: number) => (
									<div
										className="bg-white shadow-custom rounded-xl py-7 px-6 gap-5 flex flex-col"
										key={index}
									>
										<div className="flex justify-between">
											{content.Media.data.attributes.url && (
												<Image
													loader={dynamicImageLoader}
													src={content.Media.data.attributes.url}
													alt={content.Media.data.attributes.alternativeText}
													height="32"
													width="32"
												/>
											)}
										</div>
										<div className="flex flex-col flex-1">
											<div className="font-semibold xl:mb-2">
												{content.Title}
											</div>
											<div
												dangerouslySetInnerHTML={mardownToHtml(
													content.Description,
												)}
												className="text-sm hidden xl:block leading-[22px]"
											></div>
										</div>
									</div>
								),
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
