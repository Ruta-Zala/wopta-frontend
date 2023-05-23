import * as React from 'react';
import ContactForm from "./contact-form.component";
const ServiceGuarantees = ({ iterableContent }: any) => {
	return (
		<>
			<div id='GoToContactForm' className="text-center relative pt-20 3xl:pt-28 pb-[190px] md:pb-[160px] lg:pb-[180px] bg-w-light-white">
				<div className="font-medium text-[38px] md:text-[44px] lg:text-[48px] 4xl:max-w-[1920px] 4xl:mx-auto px-6 md:px-12 lg:px-9 xl:px-14 2xl:px-[72px] 3xl:px-36">
					<div className="text-sm uppercase text-w-dark-pink font-bold text-center">
						{iterableContent(true)?.SectionHeader.Surtitle}
					</div>
					<div className="mt-6 text-[28px] md:text-4xl justify-center flex flex-wrap font-medium md:w-[577px] mx-auto">
						<span dangerouslySetInnerHTML={{__html: iterableContent()?.SectionHeader.Title}} />
					</div>
					<ContactForm />
				</div>
			</div>
		</>
	);
};

export default ServiceGuarantees;
