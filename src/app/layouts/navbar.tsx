import Image from "next/image";
import logoImg from "../assets/wdance.gif";

export default function Navbar({ navTitle }: { navTitle?: string }) {
	return (
		<nav className='nav-bar leading-tight tracking-tight'>
			<div className='nav-group'>
				<Image
					src={logoImg.src}
					alt='Logo'
					width={30}
					height={30}></Image>
				<h2 className='xl:text-3xl lg:text-2xl text-xl font-bold'>
					{navTitle ?? "@rhonstratos"}
				</h2>
			</div>

			<div className='nav-group xl:text-2xl lg:text-xl text-lg font-medium'>
				<a href='#'>About Me</a>
				<a href='#'>Portfolio</a>
				<a href='#'>Contacts & Resume</a>
			</div>
		</nav>
	);
}
