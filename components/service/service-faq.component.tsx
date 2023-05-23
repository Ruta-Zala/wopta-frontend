import Image from 'next/image';
import * as React from 'react';
import faqLeft from '../../public/about-left.png';
import { ChevronRight } from '../../icons';
import Button from '../button/button.component';
import Accordion from '../accordion/accordion.component';
import Link from 'next/link';
import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';

const ServiceFaq = ({ iterableContent }: any) => {
	const { locale } = useContext(LocaleContext);
	const accordionData = [
		{
			id: 1,
			title:
				'What is the difference between health insurance and provident insurance?',
			content: `Subscription to health insurance makes it possible to supplement reimbursements from
                Social Security. Provident contracts have a completely different objective since they
                aim to maintain the income of the person and their family in the event of work stoppage,
                disability or death.`,
		},
		{
			id: 2,
			title:
				'What is the difference between health insurance and provident insurance?',
			content: `Subscription to health insurance makes it possible to supplement reimbursements from
                Social Security. Provident contracts have a completely different objective since they
                aim to maintain the income of the person and their family in the event of work stoppage,
                disability or death.`,
		},
		{
			id: 3,
			title:
				'What is the difference between health insurance and provident insurance?',
			content: `Subscription to health insurance makes it possible to supplement reimbursements from
                Social Security. Provident contracts have a completely different objective since they
                aim to maintain the income of the person and their family in the event of work stoppage,
                disability or death.`,
		},
		{
			id: 4,
			title:
				'What is the difference between health insurance and provident insurance?',
			content: `Subscription to health insurance makes it possible to supplement reimbursements from
                Social Security. Provident contracts have a completely different objective since they
                aim to maintain the income of the person and their family in the event of work stoppage,
                disability or death.`,
		},
		{
			id: 5,
			title:
				'What is the difference between health insurance and provident insurance?',
			content: `Subscription to health insurance makes it possible to supplement reimbursements from
                Social Security. Provident contracts have a completely different objective since they
                aim to maintain the income of the person and their family in the event of work stoppage,
                disability or death.`,
		},
	];

	return (
		<>
			<div className="text-center relative pt-[176px] md:pt-36 pb-[190px] md:pb-[160px] lg:pb-[180px]">
				<div className="absolute left-0 z-[-1] hidden md:block">
					<Image src={faqLeft} alt="about us" />
				</div>
				<div className="absolute left-0 right-0 -top-32 md:-top-20 flex flex-col md:flex-row py-14 md:py-0 px-6 md:px-8 items-center bg-join-sm md:bg-join bg-no-repeat md:h-[155px] lg:w-[915px] mx-6 md:mx-12 lg:mx-auto justify-between bg-center bg-contain">
					<span className="text-white text-[22px] w-[227px] md:w-auto">
						{iterableContent(true)?.SectionHeader.Title}
					</span>
					<Link
						href={{
							pathname: `/[locale]${
								iterableContent()?.SectionButtons[0].Target
							}`,
							query: { locale: locale },
						}}
						passHref
					>
						<button className="mt-6 md:mt-0 w-[227px] md:w-auto rounded-xl text-w-dark-pink bg-white px-8 py-4 font-semibold">
							{iterableContent()?.SectionButtons[0].Label}
						</button>
					</Link>
				</div>
				<div className="font-medium text-[38px] md:text-[44px] lg:text-[48px] 4xl:max-w-[1920px] 4xl:mx-auto px-6 md:px-12 lg:px-9 xl:px-14 2xl:px-[72px] 3xl:px-36">
					<div className="text-sm uppercase text-w-dark-pink font-bold text-center">
						{iterableContent(true)?.SectionHeader.Surtitle}
					</div>
					<div className="mt-6 text-[28px] md:text-4xl justify-center flex flex-wrap font-medium md:w-[577px] mx-auto">
						<span>{iterableContent()?.SectionHeader.Title}</span>
					</div>
					<div className="xl:mx-56 mt-24 text-w-dark">
						{accordionData.map(({ id, title, content }) => (
							<Accordion title={title} content={content} key={id} />
						))}
					</div>
					<Link
						href={{
							pathname: `/[locale]${
								iterableContent()?.SectionButtons[0].Target
							}`,
							query: { locale: locale },
						}}
						passHref
					>
						<div>
							<Button
								className="mt-16 border-w-dark-pink text-w-dark-pink h-[52px] w-48 font-semibold hover:shadow-lgp-4 text-center rounded-xl flex flex-row-reverse"
								default={
									<span className="block text-w-dark-pink text-sm font-semibold">
										{iterableContent()?.SectionButtons[0].Label}
									</span>
								}
								icon={
									<div className="flex items-center">
										<Image src={ChevronRight} alt="arrow-icon" height="10px" />
									</div>
								}
							/>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default ServiceFaq;
