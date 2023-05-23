import Image from 'next/image';
import * as React from "react";
import faqLeft from "../../public/about-left.png";
import Accordion from "../accordion/accordion.component";

const FaqAccordion = ({attributes, currentIdx,showCurrent} : any) => {

    return (
        <>
            <div className="text-center pb-16">
                <div className="absolute left-0 bottom-0 z-[-1] hidden md:block">
                    <Image src={faqLeft} alt="about us"/>
                </div>
                <div className="font-medium text-[38px] md:text-[44px] lg:text-[48px] 4xl:max-w-[1920px] 4xl:mx-auto px-6 md:px-12 lg:px-9 xl:px-14 2xl:px-[72px] 3xl:px-36">
                    <div className="xl:mx-56 mt-24 text-w-dark">
                        {attributes.map(
                            ( attributes: any, index: number) => (
                                <div key={index}>
                                    {showCurrent && (index === currentIdx) ?
                                        <div>
                                            { attributes.attributes.Faqs.data.map(
                                                (content: any) => (
                                                    <Accordion content={content.attributes.Answer}
                                                               title={content.attributes.Question}
                                                               key={content.attributes.id}/>
                                                ),
                                            )}
                                        </div>
                                        : null
                                    }
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqAccordion;
