import HeroSection from './partials/HeroSection';

export default function Main() {
	const section = {
		class: 'w-full h-full lg:max-h-96 flex items-center',
	};

	return (
		<>
			{[1, 2, 3].map((e, index) => (
				<HeroSection
					key={index}
					section={section}
				/>
			))}
		</>
	);
}
