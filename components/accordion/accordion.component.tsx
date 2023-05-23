import React, { useState } from 'react';
import Image from "next/image";
import {ClearIcon, PlusIcon} from "../../icons";

const Accordion: ({title, content}: { title: string; content: string }) => any = ({title, content}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div className="accordion-item flex flex-col px-6 py-8">
                <div className="flex items-center cursor-pointer" onClick={() => setIsActive(!isActive)}>
                    <div
                        className={`mr-1 flex-1 text-base text-left font-semibold ${isActive ? "text-w-dark-pink" : "text-w-dark"}`}>
                        {title}
                    </div>
                    <div className="cursor-pointer">
                        <div className={`text-base text-left ${isActive ? "hidden" : "flex"}`}>
                            <Image src={PlusIcon} alt="plus icon"/>
                        </div>
                        <div className={`text-base text-left ${isActive ? "flex" : "hidden"}`}>
                            <Image src={ClearIcon} alt="clear icon"/>
                        </div>
                    </div>
                </div>
                {isActive && <div className="mt-8 text-base text-left">{content}</div>}

            </div>
            <hr className="border-t-2 border-gray"/>
        </>
    );
};
export default Accordion;