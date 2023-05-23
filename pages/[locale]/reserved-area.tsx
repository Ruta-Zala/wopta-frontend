import { NextPage } from 'next';
import Head from 'next/head';
import PolicySection from '../../components/policy-section/policy-section.component'
import getPathSlugs from '../../utils/path-slug';

const ReservedAreaPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Wopta - Reserved Area</title>
			</Head>
			<PolicySection
				header={'Reserved Area'}
				content={
					<>
						<h1 className="font-medium text-[26px] mb-3 text-center">Reserved Area</h1>
					</>
				}
			/>
		</>
	);
};

export default ReservedAreaPage;

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