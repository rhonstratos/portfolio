import { Metadata } from 'next';
import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import metaImage from './assets/hoshi.gif';

const font = Plus_Jakarta_Sans({
	subsets: ['latin'],
});

const title = 'Rhon Stratos - Portfolio';
const description = "Hi, I'm a full-stack developer";
const url = 'https://rhonstratos-portfolio.web.app/';

export const metadata: Metadata = {
	metadataBase: new URL(url),
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 1,
	},
	title: title,
	description: description,
	category: 'portfolio',
	openGraph: {
		title: title,
		description: description,
		url: url,
		siteName: title,
		images: [
			{
				url: metaImage.src,
				width: 500,
				height: 500,
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#bde4a8ff' },
		{ media: '(prefers-color-scheme: dark)', color: '#9cc69bff' },
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={font.className}>{children}</body>
		</html>
	);
}

