import Image from 'next/image';
import Link from 'next/link';
import {
	PolygonSubmenu,
	Handshake,
	Deposit,
	MultiRisk,
	ThirdParty,
	Engineering,
	ForwardArrow,
} from '../../icons/index';
import * as React from 'react';
import getPathSlugs from '../../utils/path-slug';
import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import { useRouter } from 'next/router';
import { stripHTML } from '../../utils/iterable';
import dynamicImageLoader from '../../utils/image-loader';

const Submenu = ({ products }: any) => {
	const { locale } = useContext(LocaleContext);
	const router = useRouter();
	const currentRoute = router.query.product_slug;

	const subMenuStyle = {
		filter: 'drop-shadow(0px 10px 69px rgba(106, 128, 169, 0.3))',
	};
	return (
		<div className="z-10">
			<div className="absolute z-10 top-[2.6rem] left-[10px]">
				<Image src={PolygonSubmenu} alt="upper icon" />
			</div>

			<div
				style={subMenuStyle}
				className="absolute bg-white w-[336px] left-[-1.5rem] top-[3.5rem] rounded-2xl text-[#2D2C4C]"
			>
				<ul className="py-6 font-medium	text-sm">
					{products &&
						products.map((product: any, index: number) => (
							<li
								key={index}
								className={`py-2 hover:bg-w-light-grey cursor-pointer group ${
									currentRoute == product.attributes.slug
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
									<div className="flex align-middle px-8">
										<span
											className={`flex ${
												currentRoute == product.attributes.slug
													? 'iconPink'
													: ''
											}`}
										>
											<Image
												loader={dynamicImageLoader}
												src={
													product.attributes.PageContent[0]?.Media.data.attributes.url
												}
												alt={
													product.attributes.PageContent[0]?.Media.data.attributes
														.alternativeText
												}
												height="32"
												width="32"
											/>
										</span>
										<span className="ml-4 mt-[5px]">
											{stripHTML(product.attributes.PageContent[0]?.Title)}
										</span>
										<span
											className={`flex-grow justify-end opacity-0 flex transform transition duration-300 group-hover:translate-x-2 group-hover:opacity-100 ${
												currentRoute == product.attributes.slug
													? 'iconPink'
													: ''
											}`}
										>
											<Image src={ForwardArrow} alt="forward arrow" />
										</span>
									</div>
								</Link>
							</li>
						))}

					{/* <li className="py-2 hover:bg-w-light-grey cursor-pointer group">
						<Link href="/" passHref>
							<div className="flex align-middle px-8">
								<Image src={MultiRisk} alt="Multi-risk" />
								<span className="ml-4 mt-[5px]">Multi-risk</span>
								<span className="flex-grow justify-end opacity-0 flex transform transition duration-300 group-hover:translate-x-2 group-hover:opacity-100	">
									<Image src={ForwardArrow} alt="forward arrow" />
								</span>
							</div>
						</Link>
					</li>
					<li className="py-2 hover:bg-w-light-grey cursor-pointer group">
						<Link href="/" passHref>
							<div className="flex align-middle px-8 ">
								<Image src={ThirdParty} alt="3º Party" />
								<span className="ml-4 mt-[5px]">3º Party Liability</span>
								<span className="flex-grow justify-end opacity-0 flex transform transition duration-300 group-hover:translate-x-2 group-hover:opacity-100	">
									<Image src={ForwardArrow} alt="forward arrow" />
								</span>
							</div>
						</Link>
					</li>
					<li className="py-2 hover:bg-w-light-grey cursor-pointer group">
						<Link href="/" passHref>
							<div className="flex align-middle px-8 ">
								<Image src={Engineering} alt="Engineering" />
								<span className="ml-4 mt-[5px]">
									Engineering & <br /> Construction
								</span>
								<span className="flex-grow justify-end opacity-0 flex transform transition duration-300 group-hover:translate-x-2 group-hover:opacity-100	">
									<Image src={ForwardArrow} alt="forward arrow" />
								</span>
							</div>
						</Link>
					</li> */}
				</ul>
			</div>
		</div>
	);
};

export default Submenu;

export async function getStaticProps({ params }: any) {
	return {
		props: {
			...params,
		},
	};
}

export async function getStaticPaths() {
	const pathsWithLocale = getPathSlugs();
	return {
		paths: pathsWithLocale,
		fallback: false,
	};
}
