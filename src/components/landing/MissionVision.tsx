"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const MissionIcon = () => (
	<Image
		src='/logos/dart.png'
		alt='Mission Icon'
		width={80}
		height={80}
		className='w-16 h-16 md:w-20 md:h-20'
	/>
)

const VisionIcon = () => (
	<Image
		src='/logos/eye.png'
		alt='Vision Icon'
		width={80}
		height={80}
		className='w-16 h-16 md:w-20 md:h-20'
	/>
)

export default function MissionVision() {
	return (
		<motion.section
			id='mission-vision'
			className='relative !py-16 md:!py-24'
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.8 }}>
			<div className='container max-w-4xl mx-auto'>
				<div className='flex flex-col gap-16'>
					{/* Mission */}
					<motion.div
						className='flex flex-col md:flex-row items-center gap-8 text-center md:text-left'
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						<div className='flex-shrink-0'>
							<MissionIcon />
						</div>
						<div>
							<h2 className="font-['Special_Elite'] text-4xl md:text-5xl font-bold tracking-wider mb-4">
								MISSION
							</h2>
							<p className='font-sans font-bold text-lg md:text-xl text-foreground/80 leading-relaxed'>
								By 2025, we aim to cultivate a thriving maker culture in
								Kerala. Our goal is to ignite creativity and equip 10,000
								young makers with the essential skills to innovate, build, and
								ultimately shape the future of technology.
							</p>
						</div>
					</motion.div>

					{/* Vision */}
					<motion.div
						className='flex flex-col md:flex-row-reverse items-center gap-8 text-center md:text-right'
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.8, delay: 0.4 }}>
						<div className='flex-shrink-0'>
							<VisionIcon />
						</div>
						<div>
							<h2 className="font-['Special_Elite'] text-4xl md:text-5xl font-bold tracking-wider mb-4">
								VISION
							</h2>
							<p className='font-sans font-bold text-lg md:text-xl text-foreground/80 leading-relaxed'>
								We envision a world where everyone, regardless of their
								background, has access to the knowledge and tools required to
								set the course for a better, more innovative future for all.
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.section>
	)
}
