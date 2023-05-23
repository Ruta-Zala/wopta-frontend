import Image from 'next/image';
import { useContext, useState } from 'react';
import { Disclosure, Popover, Transition } from '@headlessui/react';
import { UserIcon, Hamburger, CloseMenu } from '../../icons/index';
import Button from '../button/button.component';
import Submenu from './submenu.component';
import Link from 'next/link';
import LanguageSwitcher from './language-switcher.component';
import { useRouter } from 'next/router';
import { LocaleContext } from '../../context/LocaleContext';
import dynamicImageLoader from '../../utils/image-loader';
import { stripHTML } from '../../utils/iterable';

const Header = ({ logo, products }: any) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSubmenuShowing, setSubmenuIsShowing] = useState(false);
	const router = useRouter();
	const currentRoute = router.pathname;
	const routeQuery = router.query.product_slug;
	const { locale } = useContext(LocaleContext);

	if (typeof document !== 'undefined') {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}
	}
	return (
		<div className="bg-white fixed left-0 top-0 z-10 right-0 w-full">
			<div className="4xl:max-w-[1920px] 4xl:mx-auto px-6 md:px-12 lg:px-9 xl:px-14 2xl:px-[72px] 3xl:px-36">
				<nav className="bg-white border-gray-200 sm:px-4 py-2.5">
					<div className="flex flex-wrap justify-between items-center mx-auto">
						<Link
							href={{
								pathname: '/[locale]/',
								query: { locale: locale },
							}}
							passHref
						>
							<div
								className="flex items-center relative h-[34px] w-[120px] xl:w-[140px] xl:h-[41px] cursor-pointer"
								onClick={(e) => setIsMenuOpen(false)}
							>
								{logo?.url && (
									<Image
										loader={dynamicImageLoader}
										src={logo?.url}
										alt={logo?.alternativeText}
										width="140"
										height="40"
									/>
								)}
							</div>
						</Link>
						<div className="hidden w-full lg:block ml-auto md:w-auto">
							<ul className="text-w-dark flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
								<li
									className={`hover:text-w-dark-pink px-1 ${
										currentRoute == '/[locale]/about-us'
											? 'text-w-dark-pink font-bold'
											: ''
									}`}
								>
									<Link
										href={{
											pathname: '/[locale]/about-us',
											query: { locale: locale },
										}}
										passHref
									>
										<span className="block py-2 pr-4 pl-3 md:p-0 cursor-pointer">
											WOPTA
										</span>
									</Link>
								</li>
								<li
									className={`hover:text-w-dark-pink pl-1 pr-5 ${
										currentRoute == '/[locale]/[product_slug]'
											? 'text-w-dark-pink font-bold'
											: ''
									}`}
									onMouseEnter={() => setSubmenuIsShowing(true)}
									onMouseLeave={() => setSubmenuIsShowing(false)}
								>
									<Popover className="relative">
										<Popover.Button>
											<span className="block py-2 pr-4 pl-3 md:p-0 md:text-sm md:font-medium group">
												{locale === 'en' ? 'Products' : 'Prodotti'}
												<span className="ml-1">
													<svg
														height="20"
														width="10"
														className={`absolute inline ml-1 justify-end ${
															isSubmenuShowing
																? 'rotate-180 transform'
																: 'delay-150'
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
												</span>
											</span>
										</Popover.Button>
										<Transition
											show={isSubmenuShowing}
											leave="transition duration-300 ease-out"
											onMouseEnter={() => setSubmenuIsShowing(true)}
											onMouseLeave={() => setSubmenuIsShowing(false)}
										>
											<Popover.Panel onClick={() => setSubmenuIsShowing(false)}>
												<div onClick={() => setSubmenuIsShowing(false)}>
												<Submenu products={products} />
												</div>
											</Popover.Panel>
										</Transition>
									</Popover>
								</li>
								<li
									className={`hover:text-w-dark-pink px-1 ${
										currentRoute == '/[locale]/info-help' ||
										currentRoute == '/[locale]/search'
											? 'text-w-dark-pink font-bold'
											: ''
									}`}
								>
									<Link
										href={{
											pathname: '/[locale]/info-help',
											query: { locale: locale },
										}}
										passHref
									>
										<span className="block py-2 pr-4 pl-3  md:p-0 cursor-pointer">
											Info & Help
										</span>
									</Link>
								</li>
								<li
									className={`hover:text-w-dark-pink px-1 ${
										currentRoute == '/[locale]/contact'
											? 'text-w-dark-pink font-bold'
											: ''
									}`}
								>
									<Link
										href={{
											pathname: '/[locale]/contact',
											query: { locale: locale },
										}}
										passHref
									>
										<span className="block py-2 pr-4 pl-3  md:p-0 cursor-pointer">
											Contact
										</span>
									</Link>
								</li>
							</ul>
						</div>
						<Link
							href={{
								pathname: '/[locale]/reserved-area',
								query: { locale: locale },
							}}
							passHref
						>
							<span
								className="lg:mx-4 ml-auto relative px-1 cursor-pointer"
								onClick={(e) => setIsMenuOpen(false)}
							>
								<Button
									className="bg-w-dark-pink h-[46px] w-[46px] lg:w-[219px] text-white font-semibold hover:shadow-lg bg-gradient-to-l
					from-[#E50075]
					to-[#FF2897] p-4 text-center rounded-xl"
									default={
										<span className="hidden lg:block">Reserved Area</span>
									}
									icon={
										<div className="mt-1">
											<Image
												src={UserIcon}
												alt="user icon"
												layout="fixed"
												height="21"
												width="21"
											/>
										</div>
									}
								/>
							</span>
						</Link>
						<div className="hidden lg:block">
							<LanguageSwitcher />
						</div>
						<button
							type="button"
							className="inline-flex items-center p-2 ml-3 relative h-[42px] w-[42px] text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none"
							onClick={(e) => setIsMenuOpen(!isMenuOpen)}
						>
							<span className="sr-only">Open main menu</span>
							{isMenuOpen ? (
								<Image src={CloseMenu} layout="fill" alt="close icon" />
							) : (
								<Image src={Hamburger} layout="fill" alt="hamburger icon" />
							)}
						</button>
					</div>
					{isMenuOpen && (
						<div className="absolute h-screen bg-white z-10 w-full left-0 mt-2 font-medium text-sm">
							<ul>
								<li
									className={`cursor-pointer ${
										currentRoute == '/[locale]/about-us'
											? 'text-w-dark-pink font-bold'
											: ''
									}`}
								>
									<Link
										href={{
											pathname: '/[locale]/about-us',
											query: { locale: locale },
										}}
										passHref
									>
										<span
											onClick={(e) => setIsMenuOpen(false)}
											className="block px-8 py-3 w-full hover:bg-w-dark-pink hover:text-white"
										>
											Wopta
										</span>
									</Link>
								</li>
								<li className="hover:bg-w-dark-pink hover:text-white py-0.5 px-8 group">
									<Disclosure>
										{({ open }) => (
											<>
												<Disclosure.Button className="flex justify-between w-full font-medium text-sm">
													<div
														className={`flex w-full group-hover:text-white justify-between ${
															currentRoute == '/[locale]/[product_slug]'
																? 'text-w-dark-pink font-bold'
																: ''
														}`}
													>
														<span className="block py-2">
															{locale === 'en' ? 'Products' : 'Prodotti'}
														</span>
														<span className="flex md:mr-4 mt-2">
															<svg
																height="20"
																width="10"
																className={open ? 'rotate-180' : ''}
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
														</span>
													</div>
												</Disclosure.Button>
												<Disclosure.Panel className="py-1">
													<ul>
														{products &&
															products.map((product: any, index: number) => (
																<li
																	key={index}
																	className={`py-2 group-hover:text-white ${
																		routeQuery == product.attributes.slug
																			? 'text-w-dark-pink font-bold'
																			: ''
																	}`}
																>
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
																		<span onClick={(e) => setIsMenuOpen(false)}>
																			{stripHTML(
																				product.attributes.PageContent[0]
																					?.Title,
																			)}
																		</span>
																	</Link>
																</li>
															))}
													</ul>
												</Disclosure.Panel>
											</>
										)}
									</Disclosure>
								</li>
								<li
									className={`hover:text-w-dark-pink cursor-pointer ${
										currentRoute == '/[locale]/info-help' ||
										currentRoute == '/[locale]/search'
											? 'text-w-dark-pink font-bold'
											: ''
									}`}
								>
									<Link
										href={{
											pathname: '/[locale]/info-help',
											query: { locale: locale },
										}}
										passHref
									>
										<span
											onClick={(e) => setIsMenuOpen(false)}
											className="block px-8 py-3 w-full hover:bg-w-dark-pink hover:text-white"
										>
											Info & Help
										</span>
									</Link>
								</li>
							</ul>
							<div className="border-w-dark-pink w-[95%] my-3 mx-auto border-t" />
							<div className="px-8">
								<LanguageSwitcher />
								<span className="text-w-dark text-[12px] font-normal ml-2">
									Language
								</span>
							</div>
						</div>
					)}
				</nav>
			</div>
			<hr className="border-t-2 border-gray" />
		</div>
	);
};

export default Header;
