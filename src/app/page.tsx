"use client";
import Image from "next/image";
import Navbar from "./layouts/navbar";
import Layout from "./layouts/app";
import Main from "./pages/index";

export default function Home() {
	return (
		<Layout>
			<Main></Main>
		</Layout>
	);
}

