import Image from 'next/image';
import {  Intersect, HouseTree, Welcome, CityBlack } from '../../icons';

const HomeHeaderSection = ({iterableContent} : any) => {

	return (
		<>
			<div className="text-center mt-12 lg:mt-20 relative pt-20">
				<div className="w-4/5 lg:w-8/12 2xl:w-1/2 mx-auto font-medium text-[38px] md:text-[44px] lg:text-[48px]">
					<h1 className="relative z-[-1] leading-[2.875rem] md:leading-[3.438rem]">
					<span
						dangerouslySetInnerHTML={{ __html: iterableContent().Title }}
					></span>
					</h1>
				</div>
				<div className="flex flex-col mt-2 xl:-mt-[60px]">
					<div className="flex justify-between">
						<span className="hidden lg:block lg:h-[204.24px] lg:w-[322.51px] 2xl:h-[278.8px] 2xl:w-[440.25px]">
							<Image src={HouseTree} alt="House tree" />
						</span>
						<span className="hidden lg:block lg:h-[204.24px] lg:w-[322.51px] 2xl:h-[278.8px] 2xl:w-[440.25px]">
							<Image src={Welcome} alt="Welcome" />
						</span>
						<span className="mx-auto mt-4 lg:hidden text-center">
							<Image src={CityBlack} alt="City black" />
						</span>
					</div>
					<div className="w-full text-center -mt-[18px] md:-mt-[60px] 2xl:-mt-[77px]">
						<Image src={Intersect} alt="Intersect" />
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeHeaderSection;
