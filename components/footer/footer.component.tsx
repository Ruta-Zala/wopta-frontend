import React, { useContext, useState } from 'react';
import footerLeft from '../../public/footer-left.png';
import footerRight from '../../public/footer-right.png';
import paymentIcon from '../../icons/payment-methods-list.png';
import facebook from '../../icons/facebook.svg';
import linkedIn from '../../icons/linkedin.svg';
import twitter from '../../icons/twitter.svg';
import Image from 'next/image';
import Link from 'next/link';
import { LocaleContext } from '../../context/LocaleContext';
import { mardownToHtml } from '../../utils/markdown-html';
import dynamicImageLoader from '../../utils/image-loader';
import { stripHTML } from '../../utils/iterable';

export function Footer({ content, products }: any) {
	const { locale } = useContext(LocaleContext);
	const [slider, setSlider] = useState(false);
	const [pinned, setPinned] = useState(true);

	if (typeof window !== 'undefined') {
		const footerContainer = document.querySelector('#footer-container-top');
		var observer = new IntersectionObserver(
			function (entries) {
				// no intersection with screen
				if (entries[0].intersectionRatio === 0) setPinned(true);
				// fully intersects with screen
				else if (entries[0].intersectionRatio === 1) setPinned(false);
			},
			{ threshold: [0, 1] },
		);

		footerContainer ? observer.observe(footerContainer) : '';
	}

	return (
		<>
			<div id="footer-container-top"></div>
			<div
				id="footer"
				className={`xl:sticky transition-all ${
					slider ? '-bottom-60' : 'bottom-[-27rem]'
				} z-50`}
			>
				<div
					className={`${
						pinned ? 'block' : 'hidden'
					} text-center cursor-pointer text-white flex items-center h-12 w-12 mx-auto rounded-full bg-[#585A5D] -mb-6 z-10 relative`}
					onClick={() => setSlider(!slider)}
				>
					<svg
						width="15"
						className={`mx-auto -mt-4 transform rotate-180 ${
							slider ? 'rotate-0' : ''
						}`}
						viewBox="0 0 10 6"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							id="Vector 1 (Stroke)"
							fillRule="evenodd"
							clipRule="evenodd"
							d="M9.75592 0.251051C10.0814 0.585786 10.0814 1.1285 9.75592 1.46323L5.58926 5.74895C5.26382 6.08368 4.73618 6.08368 4.41074 5.74895L0.244078 1.46323C-0.081359 1.1285 -0.0813589 0.585786 0.244078 0.251051C0.569514 -0.0836842 1.09715 -0.0836842 1.42259 0.251051L5 3.93067L8.57741 0.251051C8.90285 -0.0836839 9.43049 -0.0836838 9.75592 0.251051Z"
							fill="currentColor"
						/>
					</svg>
				</div>
				<footer className="bg-cover bg-footer bg-top">
					<div className="4xl:max-w-[1920px] 4xl:mx-auto px-6 md:px-12 lg:px-9 xl:px-14 2xl:px-[72px] 3xl:px-[270px]">
						<div className="mx-auto relative font-sans text-white pt-11">
							<div className="hidden 3xl:block">
								<div className="absolute 2xl:-left-44 top-6 3xl:top-6">
									<Image src={footerLeft} height={150} alt="footer left icon" />
								</div>
								<div className="absolute 2xl:-right-44 top-0 3xl:top-3">
									<Image src={footerRight} alt="footer right icon" />
								</div>
							</div>
							<div className="pb-20 pt-8 border-b-2 border-gray">
								<div className="grid grid-flow-row xl:grid-flow-col gap-14 xl:gap-4 grid-cols-1 xl:grid-cols-2">
									<div className="flex flex-col text-white items-center xl:items-start">
										<div className="mb-6 xl:mb-9 cursor-pointer">
											<Link
												href={{
													pathname: '/[locale]/',
													query: { locale: locale },
												}}
												passHref
											>
												<div className="w-[140px] h-[41px]">
													{content?.logo.data.attributes.url && (
														<Image
															loader={dynamicImageLoader}
															src={content?.logo.data.attributes.url}
															width="140"
															height="40"
															alt={
																content?.logo.data.attributes.alternativeText
															}
															layout="responsive"
														/>
													)}
												</div>
											</Link>
										</div>
										<div
											dangerouslySetInnerHTML={mardownToHtml(
												content?.footerDescription,
											)}
											className="mb-3 md:w-[500px]"
										/>
										<div className="mb-9 flex flex-col items-center lg:items-start">
											<span>{content?.address}</span>
											<span>{content?.vat}</span>
										</div>
										<div>
											<Image src={paymentIcon} alt="payment methods" />
										</div>
									</div>
									<div className="flex text-white gap-8 sm:gap-5 xl:gap-10 lg:px-28 xl:px-0 flex-col sm:flex-row text-center sm:text-left">
										<div className="basis-1/3 flex-col flex gap-2">
											<span className="font-bold text-w-dark-pink uppercase mb-2 md:mb-6">
												Agency
											</span>
											<span className="hover:text-w-dark-pink">
												<Link
													href={{
														pathname: '/[locale]/about-us',
														query: { locale: locale },
													}}
												>
													About us
												</Link>
											</span>
											<span className="hover:text-w-dark-pink">
												<Link
													href={{
														pathname: '/[locale]/contact',
														query: { locale: locale },
													}}
												>
													Contacts
												</Link>
											</span>
											<span className="hover:text-w-dark-pink">
												<Link
													href={{
														pathname: '/[locale]/info-help',
														query: { locale: locale },
													}}
												>
													Info & Help
												</Link>
											</span>
										</div>
										<div className="basis-1/3 flex-col flex gap-2">
											<span className="font-bold text-w-dark-pink uppercase mb-2 md:mb-6">
												{locale === 'en' ? 'Products' : 'Prodotti'}
											</span>
											{products &&
												products.map((product: any, index: number) => (
													<span key={index} className="hover:text-w-dark-pink">
														<Link
															href={{
																pathname: '/[locale]/[product_slug]',
																query: {
																	locale: locale,
																	product_slug: product.attributes.slug,
																},
															}}
															passHref
														>
															{stripHTML(
																product.attributes.PageContent[0]?.Title,
															)}
														</Link>
													</span>
												))}
										</div>
										<div className="basis-1/3 flex-col flex gap-2">
											<span className="font-bold text-w-dark-pink uppercase mb-2 md:mb-6">
												Information
											</span>
											<span className="hover:text-w-dark-pink">
												<Link
													href={{
														pathname: '/[locale]/privacy-policy',
														query: { locale: locale },
													}}
													passHref
												>
													Privacy Policy
												</Link>
											</span>
											<span className="hover:text-w-dark-pink">
												<Link
													href={{
														pathname: '/[locale]/terms-of-service',
														query: { locale: locale },
													}}
													passHref
												>
													Terms of service
												</Link>
											</span>
											<span className="hover:text-w-dark-pink">
												<Link
													href={{
														pathname: '/[locale]/cookie-policy',
														query: { locale: locale },
													}}
													passHref
												>
													Cookie policy
												</Link>
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="flex justify-between py-9 flex-col-reverse sm:flex-row items-center">
								<div>© Opta srl</div>
								<div className="flex gap-6 mb-8 sm:mb-0">
									<span>soon on:</span>
									<div className="flex gap-6">
										<Image src={facebook} alt="facebook" />
										<Image src={linkedIn} alt="linkedIn" />
										<Image src={twitter} alt="twitter" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}
