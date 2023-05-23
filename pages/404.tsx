import { NextPage } from 'next';
import Head from 'next/head';

const NotFound: NextPage = () => {
	return (
		<>
			<Head>
				<title>Page not found</title>
			</Head>
			<div className="text-center my-40">
				<b>404</b> | This page could not be found.
			</div>
		</>
	);
};
export default NotFound;
