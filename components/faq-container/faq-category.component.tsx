import Image from 'next/image';
import * as React from "react";
import dynamicImageLoader from "../../utils/image-loader";
import {useState} from "react";
import FaqAccodion from "./faq-accordion.component";
import {TreeBottom} from "../../icons";

const FaqCategory = ({attributes} : any) => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [showCurrent, setShowCurrent] = useState(false);

    const toggleCurrent = () => {
        if (!showCurrent) {
            setShowCurrent(true);
            return;
        }
    };

    const setCurrent = (index: number) => {
        setCurrentIdx(index);
        toggleCurrent();
    };

    return (
        <>
            <div className="text-center 4xl:max-w-[1920px] 4xl:mx-auto px-6 md:px-12 lg:px-9 xl:px-14 2xl:px-[72px] 3xl:px-36">
                <div className="flex justify-center gap-6 mt-14 pb-16 flex-col md:flex-row">
                {attributes.map(
                    ( attributes: any, index: number) => (
                        <div onClick={() => setCurrent(index)} key={index}
                             className={`basis-1/4 cursor-pointer group bg-white border border-gray rounded-lg px-6 py-7 
                              hover:border-w-dark-pink hover:shadow-light-pink hover:text-w-dark-pink group  
                           ${( showCurrent && currentIdx == index )? 'border-w-dark-pink shadow-light-pink text-w-dark-pink ' : ''}`}>
                            <div className={`group-hover:iconPink  ${( showCurrent && currentIdx == index )? 'iconPink' : ''}`}>
                                <Image
                                    loader={dynamicImageLoader}
                                    src={attributes.attributes.Media.data.attributes.url}
                                    alt={attributes.attributes.Media.data.attributes.alternativeText}
                                    height="41"
                                    width="41"
                                />
                            </div>
                            <div className="mt-5">{attributes.attributes.Category}</div>
                        </div>
                    ),
                )}
                </div>
                <div className="w-full text-right ">
                    <Image src={TreeBottom} alt="tree Bottom" />
                </div>
                <FaqAccodion  attributes={attributes} currentIdx={currentIdx} showCurrent={showCurrent}/>
            </div>
        </>
    );
};

export default FaqCategory;