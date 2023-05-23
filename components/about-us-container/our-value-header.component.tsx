import Image from 'next/image';
import { DepositPink, ValueBg } from '../../icons';
import * as React from "react";

const OurValueS = ({iterableContent}: any) => {
    return (
        <>
            <div className="absolute text-white left-0 right-0 -top-[36rem] md:-top-[25rem] lg:-top-[20rem] 4xl:max-w-[1920px] 4xl:mx-auto px-6 md:px-12 lg:px-9 xl:px-14 2xl:px-[72px] 3xl:px-36">
                <div className="overflow-hidden bg-w-dark relative rounded-[32px] px-8 xl:px-[115px] 2xl:px-[169px] pt-[69px] pb-[45px] md:pb-24 lg:pb-20 xl:pb-[88px] shadow-light-pink">
                    <div className="absolute -bottom-2 right-0">
                        <Image src={ValueBg} alt="ValueBg" layout="fixed" />
                    </div>
                    <div className="flex flex-col mb-12">
                        <div className="mb-5 text-2xl md:text-[28px] xl:text-[34px] font-medium">
                            {iterableContent(true)?.SectionHeader?.Title}
                        </div>
                        <div className="md:w-[605px] mx-auto">{iterableContent()?.SectionHeader?.Subtitle}</div>
                    </div>
                    <div className="grid grid-cols-1 text-left gap-[38px] lg:grid-cols-2 xl:grid-cols-3 mb-[78px] md:mb-16 2xl:mb-[85px]">
                        <div className="pl-6 lg:pl-0 border-l-[3px] lg:border-none border-w-dark-pink">
                            <div className="mb-4 font-medium text-[22px] xl:text-[26px]">{iterableContent()?.SectionList[0]?.Title}</div>
                            <div className="text-sm">Individuals that are looking for a affordable insurance agency with a direct and human connection</div>
                        </div>
                        <div className="xl:border-l-[3px] border-l-[3px] border-w-dark-pink pl-6 lg:pl-[38px]">
                            <div className="mb-4 font-medium text-[22px] xl:text-[26px]">{iterableContent()?.SectionList[1]?.Title}</div>
                            <div className="text-sm">Individuals that are looking for a affordable insurance agency with a direct and human connection </div>
                        </div>
                        <div className="xl:border-l-[3px] border-l-[3px] lg:border-l-0 border-w-dark-pink pl-6 lg:pl-0 xl:pl-[38px]">
                            <div className="mb-4 font-medium text-[22px] xl:text-[26px]">{iterableContent()?.SectionList[2]?.Title}</div>
                            <div className="text-sm">Individuals that are looking for a affordable insurance agency with a direct and human connection </div>
                        </div>
                    </div>
                    <div className="border rounded-2xl border-w-dark-pink text-w-dark-pink flex items-center py-3 px-7 text-left">
                        <div className="w-9 h-9">
                            <Image src={DepositPink} alt="DepositPink" height={34} width={34} layout="fixed" />
                        </div>
                        <div className="ml-5 md:ml-7">{iterableContent()?.SectionButtons[0]?.Label}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurValueS;
