import Image from 'next/image';
import {Arrow} from '../../icons';
import * as React from "react";
import dynamicImageLoader from "../../utils/image-loader";

const OurVision = ({iterableContent}: any) => {
    return (
        <>
            <div className="font-medium text-[38px] md:text-[44px] lg:text-[48px] 4xl:max-w-[1920px] 4xl:mx-auto px-6 md:px-12 lg:px-9 xl:px-14 2xl:px-[72px] 3xl:px-36">
                <div className="text-sm uppercase text-w-dark-pink font-bold text-centert">
                    {iterableContent(true)?.SectionHeader?.Surtitle}
                </div>
                <div className="mt-6 text-[28px] md:text-4xl justify-centerflex flex-wrap font-medium md:w-[577px] mx-auto">
                    <span dangerouslySetInnerHTML={{__html: iterableContent()?.SectionHeader?.Title}} />
                </div>
                <div className="relative lg:w-[905px] mx-auto">
                    <p className="text-w-dark text-[15.85px] md:text-base mt-14">
                        {iterableContent()?.SectionContent?.Content}
                    </p>
                </div>
                <div className="flex gap-10 justify-center items-center flex-col lg:flex-row mt-14">
                    <div className="shadow-custom rounded-[54px] p-6 flex flex-col">
                        <Image
                            loader={dynamicImageLoader}
                            src={iterableContent()?.SectionList[0]?.Media.data?.attributes.url}
                            alt={iterableContent()?.SectionList[0]?.Media.data?.attributes.alternativeText}
                            height="92"
                            width="182"
                        />
                        <span className="text-base font-semibold mt-2 w-[185px]">{iterableContent()?.SectionList[0]?.Title}</span>
                    </div>
                    <div className="transform lg:-rotate-90 flex">
                        <Image src={Arrow} alt="Arrow"/>
                    </div>
                    <div className="shadow-custom rounded-[54px] p-6 flex flex-col">
                        <Image
                            loader={dynamicImageLoader}
                            src={iterableContent()?.SectionList[1]?.Media.data?.attributes.url}
                            alt={iterableContent()?.SectionList[1]?.Media.data?.attributes.alternativeText}
                            height="92"
                            width="182"
                        />
                        <span className="text-base font-semibold mt-2 w-[185px]">{iterableContent()?.SectionList[1]?.Title}</span>
                    </div>
                    <div className="transform lg:-rotate-90 flex">
                        <Image src={Arrow} alt="Arrow"/>
                    </div>
                    <div className="shadow-custom rounded-[54px] p-6 flex flex-col">
                        <Image
                            loader={dynamicImageLoader}
                            src={iterableContent()?.SectionList[2]?.Media.data?.attributes.url}
                            alt={iterableContent()?.SectionList[2]?.Media.data?.attributes.alternativeText}
                            height="92"
                            width="182"
                        />
                        <span className="text-base font-semibold mt-2 w-[185px]">{iterableContent()?.SectionList[2]?.Title}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurVision;
