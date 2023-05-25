import Image from "next/image";
import logoImg from "../assets/hoshi.gif";
import { motion } from "framer-motion";
import Link from "../components/link";

export default function Navbar({ navTitle }: { navTitle?: string }) {
	// navbar items data
	const items = [
		{ link: "#", label: "About Me" },
		{ link: "#", label: "Portfolio" },
		{ link: "#", label: "Contacts & Resume" },
	];

	// navbar items component
	const navItems = items.map((item, index) => (
		<Link
			key={index}
			item={item}></Link>
	));

	return (
		<nav className='nav-bar leading-tight tracking-tight'>
			<div className='nav-group'>
				<motion.img
					whileHover={{ scale: 1.5 }}
					whileTap={{ scale: 0.9 }}
					src={logoImg.src}
					className='w-10 cursor-pointer'></motion.img>

				<motion.h2
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className='xl:text-3xl lg:text-2xl text-xl font-bold cursor-pointer'
					onClick={() => window.location.reload()}>
					{navTitle ?? "@rhonstratos"}
				</motion.h2>
			</div>

			<div className='nav-group xl:text-2xl lg:text-xl text-lg font-medium'>
				{navItems}
			</div>
		</nav>
	);
}
