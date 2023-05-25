import Navbar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<header className='fixed top-0 w-full'>
				<Navbar></Navbar>
			</header>
			<main className="px-6">{children}</main>
			<footer></footer>
		</>
	);
}
