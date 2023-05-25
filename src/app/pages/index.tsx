export default function Main() {
	const section = {
		class: "w-full h-full lg:max-h-96 flex items-center justify-center",
	};

	return (
		<div className='w-full h-[650px] mt-20 flex lg:flex-row flex-col justify-center items-center gap-6'>
			<section className={section.class}>test</section>
			<section className={section.class}>
				<header>
					<h1>header</h1>
				</header>
			</section>
		</div>
	);
}
