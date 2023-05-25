import Img from '../../assets/wdance.gif';

export default function HeroSection({ section }: { section: any }) {
	return (
		<div className='w-full h-[650px] mt-20 flex lg:flex-row flex-col justify-center items-center gap-6'>
			<section className={section.class + ' justify-center'}>
				{[1, 2, 3].map((e, index) => (
					<img
						key={index}
						src={Img.src}
						alt='Image'
						placeholder='blur'
						className='w-52 h-52'></img>
				))}
			</section>

			<section className={section.class + ' justify-end'}>
				<header className='text-5xl text-right font-semibold '>
					<p>
						Hi! I am <strong>Ronald Dy Tioco Jr</strong>,
					</p>
					<p>
						a <strong>full-stack web</strong> developer
					</p>
				</header>
			</section>
		</div>
	);
}
