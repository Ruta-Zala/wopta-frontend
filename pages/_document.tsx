import Document, { Html, Head, Main, NextScript } from 'next/document';

class DocumentWrapper extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap"
						rel="stylesheet"
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/favicon/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon/favicon-16x16.png"
					/>
					<link rel="manifest" href="/favicon/site.webmanifest" />
					<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#e50075" />
					<meta name="msapplication-TileColor" content="#e50075" />
					<meta name="theme-color" content="#ffffff"></meta>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default DocumentWrapper;
