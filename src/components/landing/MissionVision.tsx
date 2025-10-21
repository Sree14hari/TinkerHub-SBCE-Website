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

const ChainImage = ({ className }: { className?: string }) => (
	<Image
		src='/images/chain.png'
		alt='Chain Decoration'
		width={64}
		height={300}
		className={`absolute top-0 w-16 h-[300px] z-0 ${className}`}
	/>
)

const BulletPoint = ({ iconSrc }: { iconSrc: string }) => (
	<Image
		src={iconSrc}
		alt='Bullet Point'
		width={24}
		height={24}
		className='w-6 h-6'
	/>
)
const ArrowIcon = () => (
	<Image
		src='/images/resource_hub/arrow.svg'
		alt='arrow'
		width={24}
		height={24}
		className='w-6 h-6'
	/>
)

export default function MissionVision() {
	const upcomingEvents = [
		{
			id: 1,
			name: "ADHD കൂട്ടുതാളം - HackARThon",
			icon: "/images/adhd.png",
		},
		{
			id: 2,
			name: "Maker Thursday",
			icon: "/images/maker.png",
		},
	]

	return (
		<motion.section
			id='mission-vision-events'
			className='relative !py-12 md:!py-24 overflow-hidden'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.1 }}
			transition={{ duration: 0.8 }}>
			<div className='container relative'>
				<div className='grid md:grid-cols-2 gap-x-8 gap-y-16 items-start max-w-6xl mx-auto'>
					{/* MISSION */}
					<motion.div
						className='flex flex-col items-center md:items-start text-center md:text-left z-10'
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						<div className='flex flex-col items-center gap-4 mb-6 md:flex-row'>
							<MissionIcon />
							<h2 className="font-['Special_Elite'] text-4xl md:text-5xl font-bold tracking-wider relative">
								MISSION
								<ChainImage className='-bottom-44 left-1/2 -translate-x-1/2' />
							</h2>
						</div>
						<div className='max-w-md'>
							<p className='text-lg font-bold font-sans text-foreground/80 leading-relaxed'>
								By 2025, cultivate a thriving maker culture in Kerala to
								ignite creativity and equip 10,000 young makers with the
								skills to innovate and shape the future.
							</p>
						</div>
					</motion.div>

					{/* VISION */}
					<motion.div
						className='flex flex-col items-center md:items-start text-center md:text-left z-10'
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8, delay: 0.4 }}>
						<div className='flex flex-col items-center gap-4 mb-6 md:flex-row'>
							<VisionIcon />
							<h2 className="font-['Special_Elite'] text-4xl md:text-5xl font-bold tracking-wider relative">
								VISION
								<ChainImage className='-bottom-44 left-1/2 -translate-x-1/2' />
							</h2>
						</div>
						<div className='max-w-md'>
							<p className='text-lg font-bold font-sans text-foreground/80 leading-relaxed'>
								Everyone has access to the knowledge required to set the
								course for a better future
							</p>
						</div>
					</motion.div>
				</div>

				<div className="mt-24 md:mt-40 max-w-2xl mx-auto relative z-10">
					<motion.div
							className='relative'
							initial={{ opacity: 0, y: -20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.6, type: "spring" }}>
						<div className='bg-black text-background font-black text-2xl md:text-4xl px-8 py-4 text-center -rotate-2 shadow-[4px_4px_10px_rgba(0,0,0,0.3)]'>
							UPCOMING EVENTS
						</div>
						<div className='mt-4 space-y-3'>
							{upcomingEvents.map((event) => (
								<div
									key={event.id}
									className='flex items-center justify-between bg-[#FFF1D6] p-3 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.2)] text-foreground/90 font-bold'>
									<div className='flex items-center gap-3'>
										<BulletPoint iconSrc={event.icon} />
										<span className="font-['Comic_Neue'] text-lg">
											{event.name}
										</span>
									</div>
									<ArrowIcon />
								</div>
							))}
						</div>
						<p className="font-['Rock_Salt'] text-center text-sm text-foreground/70 mt-4">
							More events are on the way....
						</p>
					</motion.div>

					<motion.div
						className="absolute bottom-[-100px] md:bottom-[-200px] right-[-100px] md:right-[-250px] w-[250px] h-[300px] md:w-[450px] md:h-[500px] z-20"
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1.0, delay: 0.5 }}
					>
						<Image
							src="/images/board.svg"
							alt="Hand holding a placard"
							fill
							style={{ objectFit: 'contain' }}
						/>
					</motion.div>
				</div>
				
				<p className="font-['Rock_Salt'] text-sm text-foreground/70 text-center mt-12 md:mt-24">
					made using loads of coffeee...
				</p>
			</div>
		</motion.section>
	)
}