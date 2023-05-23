import Image from 'next/image';
import { Underline, Search, SearchIcon } from '../../icons';

const SearchHeader = () => {
    return (
        <>
            <div className="text-center mt-32 mb-20 3xl:mb-28 relative">
                <div className="font-medium text-[38px] md:text-[44px] lg:text-[48px] 4xl:max-w-[1920px] 4xl:mx-auto px-6 md:px-12 lg:px-9 xl:px-14 2xl:px-[72px] 3xl:px-36">
                    <h1 className="relative z-[-1] leading-[2.875rem] md:leading-[3.438rem]">
                        Search
                        <span className="relative">
							<span className="text-w-dark-pink lg:font-semibold">
								&nbsp;results
							</span>
							<span className="w-full absolute left-0 top-14">
								<Image src={Underline} alt="underline" layout="responsive" />
							</span>
						</span>
                    </h1>
                    <div className="relative lg:w-[912px] mx-auto">
                        <div className="flex justify-center relative mt-14">
                            <input type="search"
                                   className="form-control relative flex-auto min-w-0 block w-full pl-3 pr-10 h-[65px] py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 shadow-custom rounded-xl  m-0 focus:text-gray-700 focus:bg-white focus:border-w-dark-pink focus:outline-none"
                                   placeholder="Search for topic. Ex: Car"  />
                            <div className="absolute top-2/4 transform -translate-y-2/4 right-4 flex">
                                 <Image src={SearchIcon} alt="Search Icon"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-intersect bg-no-repeat h-[214px] md:h-[266px] bg-center bg-cover relative">
					<span className="mx-auto absolute bottom-0 left-0 right-0 h-[128px] md:h-[160px]">
						<Image src={Search} alt="Search" layout="fill" />
					</span>
                </div>
            </div>
        </>
    );
};

export default SearchHeader;
