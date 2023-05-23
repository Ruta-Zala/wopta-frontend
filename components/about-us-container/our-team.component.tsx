import * as React from "react";

const OurTeamContainer = ({iterableContent} : any) => {
    return (
        <>
            <div className="text-center mb-[190px] md:mb-[160px] lg:mb-[180px] relative">
                <div className="font-medium text-[38px] md:text-[44px] lg:text-[48px] 4xl:max-w-[1920px] 4xl:mx-auto px-6 md:px-12 lg:px-9 xl:px-14 2xl:px-[72px] 3xl:px-36">
                    <div className="text-sm uppercase text-w-dark-pink font-bold text-centert">
                        {iterableContent(true)?.SectionHeader?.Surtitle}
                    </div>
                    <div className="mt-6 text-[28px] md:text-4xl justify-centerflex flex-wrap font-medium">
                        <span dangerouslySetInnerHTML={{__html: iterableContent()?.SectionHeader?.Title}} />
                    </div>
                    <div className="relative lg:w-[905px] mx-auto">
                        <p className="text-w-dark text-[15.85px] md:text-base mt-14">
                            {iterableContent()?.SectionContent?.Content}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurTeamContainer;
