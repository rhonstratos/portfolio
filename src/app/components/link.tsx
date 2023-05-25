import { motion } from "framer-motion";
export default function Link({
	item,
}: {
	item: { link: string; label: string };
}) {
	return (
		<motion.a
			href={item.link}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}>
			{item.label}
		</motion.a>
	);
}
