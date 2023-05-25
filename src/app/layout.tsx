import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({
	subsets: ["latin"],
});

export const metadata = {
	title: "Rhon Stratos - Portfolio",
	description: "Hi, I'm a full-stack developer",
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

