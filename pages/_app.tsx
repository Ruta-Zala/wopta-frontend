import React, { useEffect, useState } from 'react';
import { wrapper, store } from '../redux/store';
import { Provider, RootStateOrAny, useSelector } from 'react-redux';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import Header from '../components/header/header.component';
import { Footer } from '../components/footer/footer.component';
import { LocaleProvider } from '../context/LocaleContext';
import { useRouter } from 'next/router';
import { defaultLocale, locales } from '../locales';
import NotFound from './404';
import { ProductList, ThemeService } from '../plugins/api-service';
import { FooterContent } from '../types/FooterContent';
import Login from '../components/login/login.component';

function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const [footerContent, setFooterContent] = useState<FooterContent | null>(
		null,
	);
	const [products, setProducts] = useState<any>();

	const locale =
		router.query.locale || locales.includes(router.asPath.split('/')[1])
			? router.asPath.split('/')[1]
			: defaultLocale;

	const user = useSelector((state: RootStateOrAny) => state.user.data);

	useEffect(() => {
		if (router.pathname == '/') {
			router.push(`/${defaultLocale}`);
		} else if (router.pathname == '/_error') {
			router.push(`/404`);
		} else if (locale) {
			ThemeService(locale as string).then((response: FooterContent) =>
				setFooterContent(response),
			);
			ProductList(locale as string).then((response: FooterContent) =>
				setProducts(response),
			);
		}
	}, [router, locale]);
	return process.env.AUTH_ENABLED === 'true' && user === null ? (
		<>
			<title>Login</title> <Login></Login>
		</>
	) : locale && router.query.locale ? (
		<LocaleProvider lang={locale as string}>
			<Header
				logo={footerContent?.logo.data.attributes}
				products={products}
			></Header>
			<div>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</div>
			<Footer content={footerContent} products={products}></Footer>
		</LocaleProvider>
	) : router.pathname === '/404' ? (
		<>
			<Header
				logo={footerContent?.logo.data.attributes}
				products={products}
			></Header>
			<NotFound />
			<Footer content={footerContent} products={products}></Footer>
		</>
	) : (
		<h1>{'Loading...'}</h1>
	);
}

export default wrapper.withRedux(App);
