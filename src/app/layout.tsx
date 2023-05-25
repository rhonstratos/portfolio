import { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import metaImage from "./assets/hoshi.gif";

const font = Plus_Jakarta_Sans({
	subsets: ["latin"],
});

const title = "Rhon Stratos - Portfolio";
const description = "Hi, I'm a full-stack developer";
const url = "https://rhonstratos-portfolio.web.app/";

export const metadata: Metadata = {
	title: title,
	description: description,
	openGraph: {
		type: "website",
		url: url,
		title: title,
		description: description,
		siteName: title,
		images: [
			{
				url: metaImage.src,
			},
		],
	},
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

