import * as React from "react";
import FaqCategory from "../../components/faq-container/faq-category.component"
import Accordion from "../accordion/accordion.component";

const FaqCategoryMain = ({attributes, iterableContent, result}: any) =>  {
    return (
        <>
            <div className="text-center relative">
                <div className="text-center 4xl:max-w-[1920px] 4xl:mx-auto px-6 md:px-12 lg:px-9 xl:px-14 2xl:px-[72px] 3xl:px-36">
                    {result.length > 0 ?
                        <div className="pb-16">
                        {result.map(
                            ( result: any, index: number) => (
                                <div key={index}>
                                    <Accordion content={result.Answer}
                                               title={result.Question}
                                               key={result.id}/>
                                </div>
                            ))}
                         </div>
                        :
                        <>
                            <div className="font-semibold">{iterableContent(true).Title}</div>
                            <FaqCategory attributes={attributes}/>
                        </>
                    }
                    </div>
            </div>
        </>
    );
};

export default FaqCategoryMain;
