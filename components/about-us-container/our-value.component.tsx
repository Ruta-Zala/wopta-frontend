import Image from 'next/image';
import * as React from "react";
import dynamicImageLoader from "../../utils/image-loader";
import {mardownToHtml} from "../../utils/markdown-html";

const OurValue = ({iterableContent}: any) => {
    return (
        <>
            <div className="font-medium text-[38px] md:text-[44px] lg:text-[48px] 4xl:max-w-[1920px] 4xl:mx-auto px-6 md:px-12 lg:px-9 xl:px-14 2xl:px-[72px] 3xl:px-36">
                <div className="text-sm uppercase text-w-dark-pink font-bold text-center">
                    {iterableContent(true)?.SectionHeader?.Surtitle}
                </div>
                <div className="mt-6 text-[28px] md:text-4xl justify-centerflex flex-wrap font-medium md:w-[577px] mx-auto">
                    <span dangerouslySetInnerHTML={{__html: iterableContent()?.SectionHeader?.Title}} />
                </div>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-20">
                    {iterableContent().SectionList.map(
                        (content: any, index: number) => (
                            <div
                                className="shadow-custom bg-white px-6 py-[38px] rounded-2xl text-left"
                                key={index}
                            >
                                <div className="flex">
                                    <Image
                                        loader={dynamicImageLoader}
                                        src={content.Media.data.attributes.url}
                                        alt={content.Media.data.attributes.alternativeText}
                                        height="41"
                                        width="41"
                                    />
                                </div>
                                <div className="text-base font-semibold mt-5">
                                    {content.Title}
                                </div>
                                <div
                                    dangerouslySetInnerHTML={mardownToHtml(
                                        content.Description,
                                    )}
                                    className="text-sm mt-2"
                                />
                            </div>
                        ),
                    )}
                </div>
            </div>
        </>
    );
};

export default OurValue;
