import Image from 'next/image';
import { Contact } from '../../icons';

const ContactHeader = ({iterableContent} : any) => {
    return (
        <>
            <div className="text-center mt-32 mb-20 3xl:mb-28 relative">
                <div className="font-medium text-[38px] md:text-[44px] lg:text-[48px] 4xl:max-w-[1920px] 4xl:mx-auto px-6 md:px-12 lg:px-9 xl:px-14 2xl:px-[72px] 3xl:px-36">
                    <h1 className="relative z-[-1] leading-[2.875rem] md:leading-[3.438rem]">
                    <span dangerouslySetInnerHTML={{__html: iterableContent().Title}}/>
                    </h1>
                </div>
                <div className="bg-intersect bg-no-repeat h-[214px] md:h-[266px] bg-center bg-cover relative">
					<span className="mx-auto absolute bottom-16 left-0 right-0 h-[128px] md:h-[160px]">
						<Image src={Contact} alt="Contact" layout="fill" />
					</span>
                </div>
            </div>
        </>
    );
};

export default ContactHeader;
