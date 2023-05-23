import Image from 'next/image';
import { Intersect, HeadingBorder, Locker } from '../../icons';

const TermsServiceSection = (props: any) => {
	return (
		<div>
			<div className="text-center pt-32">
				<h1 className="relative z-[-1] text-[38px] md:text-[44px] lg:text-[48px] font-medium">
					{props.header}
				</h1>
			</div>
			<div className="flex flex-col mt-2 xl:-mt-[60px]">
				<div className="flex justify-between">
					<span className="mx-auto lg:-mb-4 lg:mt-4 xl:mt-24">
						<Image src={Locker} alt="Car tree" />
					</span>
				</div>
				<div className="w-full z-[-1] text-center -mt-[18px] md:-mt-[60px] xl:-mt-20 2xl:-mt-28 3xl:-mt-36 4xl:-mt-48">
					<Image src={Intersect} alt="Intersect" />
				</div>
			</div>
			<div className="relative text-w-dark pt-8 4xl:max-w-[1920px] 4xl:mx-auto px-6 md:px-12 lg:px-9 xl:px-14 2xl:px-[72px] 3xl:px-36">
				{props.content}
			</div>
		</div>
	);
};

export default TermsServiceSection;
