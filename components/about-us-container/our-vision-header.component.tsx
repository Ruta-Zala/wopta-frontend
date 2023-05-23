import * as React from "react";
import Button from "../button/button.component";
import Link from "next/link";
import {useContext} from "react";
import {LocaleContext} from "../../context/LocaleContext";

const OurVisionHeader = ({iterableContent}: any) => {
    const { locale } = useContext(LocaleContext);
    return (
        <>
            <div className="absolute left-0 right-0 -top-32 md:-top-20 flex flex-col md:flex-row py-14 md:py-0 px-6 md:px-8 items-center bg-join-sm md:bg-join bg-no-repeat md:h-[155px] lg:w-[915px] mx-6 md:mx-12 lg:mx-auto justify-between bg-center bg-contain">
                <span className="text-white text-[22px] w-[227px] md:w-auto">  {iterableContent(true)?.SectionHeader?.Title}</span>
                <Link href={{
                    pathname: `/[locale]${iterableContent()?.SectionButtons[0]?.Target}`,
                    query: {locale: locale},
                }}
                      passHref>
                    <div>
                        <Button
                            className="mt-6 md:mt-0 w-[227px] md:w-auto rounded-xl text-w-dark-pink bg-white px-8 py-4 font-semibold"
                            default={<span className="block text-w-dark-pink text-sm font-semibold">{iterableContent()?.SectionButtons[0]?.Label}</span>}
                        />
                    </div>
                </Link>
            </div>
        </>
    );
};

export default OurVisionHeader;
