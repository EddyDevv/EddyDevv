import type { Metadata } from "next";
import { Geist, Inter, Rubik } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import localFont from "next/font/local";
import "@/styles/globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const rubik = Rubik({
	variable: "--font-rubik",
	subsets: ["latin"],
});

const segoe = localFont({
	variable: "--font-segoe-ui",
	src: "../fonts/Segoe-UI.ttf",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://eddydevv.vercel.app"),
	title: "EddyDevv - Software developer, learning more and more about technologies every day",
	description: "Focused on creating web applications that are to your liking and have a positive impact on the public, with best practices and thus grow your website or your community.",
	icons: {
		icon: "/favicon.ico",
	},
	openGraph: {
		images: [
			{
				url: "/banner.png",
				width: 1280,
				height: 720,
				alt: "Preview of the website",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme={"light"}>
			<body className={`${geistSans.variable} ${inter.variable} ${segoe.variable} ${rubik.variable}`}>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
