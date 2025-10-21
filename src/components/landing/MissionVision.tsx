"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

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
		width={200}
		height={400}
		className={`absolute top-0 w-8 h-full z-0 select-none pointer-events-none ${className}`}
	/>
)

const Placard = () => (
	<motion.div
		className='hidden md:block absolute bottom-0 right-0 w-80 h-96'
		initial={{ opacity: 0, x: 50, rotate: 10 }}
		whileInView={{ opacity: 1, x: 0, rotate: 0 }}
		transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
		viewport={{ once: true }}>
		<Image
			src='/images/placard.png'
			alt='Hand holding a blank placard'
			fill
			className='object-contain'
		/>
	</motion.div>
)

export default function MissionVision() {
	const upcomingEvents = [
		{
			id: 1,
			name: "ADHD കൂട്ടുതാളം - HackARThon",
			icon: "/logos/adhd.png",
			href: "#",
		},
		{ id: 2, name: "Maker Thursday", icon: "/logos/maker.png", href: "#" },
	]

	return (
		<motion.section
			id='mission-vision'
			className='relative !py-12 md:!py-32 bg-[#F7F3EA] overflow-hidden'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5 }}>
			<div className='container relative max-w-6xl mx-auto'>
				{/* Desktop Layout */}
				<div className='hidden md:grid grid-cols-2 gap-x-24 relative'>
					{/* Mission Column */}
					<motion.div
						className='flex flex-col items-center text-center relative'
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: "easeOut" }}
						viewport={{ once: true }}>
						<div className='flex items-center gap-4 mb-6'>
							<MissionIcon />
							<h2 className="font-['Special_Elite'] text-5xl font-bold tracking-wider">
								MISSION
							</h2>
						</div>
						<p className='text-lg text-foreground/80 leading-relaxed max-w-sm'>
							By 2025, cultivate a thriving maker culture in Kerala to ignite
							creativity and equip 10,000 young makers with the skills to
							innovate and shape the future.
						</p>
						<ChainImage className='left-[6%]' />
						<ChainImage className='right-[6%]' />
					</motion.div>

					{/* Vision Column */}
					<motion.div
						className='flex flex-col items-center text-center'
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
						viewport={{ once: true }}>
						<div className='flex items-center gap-4 mb-6'>
							<VisionIcon />
							<h2 className="font-['Special_Elite'] text-5xl font-bold tracking-wider">
								VISION
							</h2>
						</div>
						<p className='text-lg text-foreground/80 leading-relaxed max-w-sm'>
							Everyone has access to the knowledge required to set the course
							for a better future
						</p>
					</motion.div>
				</div>

				{/* Mobile Layout */}
				<div className='md:hidden flex flex-col gap-16'>
					<motion.div
						className='flex flex-col items-center text-center'
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: "easeOut" }}
						viewport={{ once: true }}>
						<div className='flex items-center gap-4 mb-4'>
							<MissionIcon />
							<h2 className="font-['Special_Elite'] text-4xl font-bold tracking-wider">
								MISSION
							</h2>
						</div>
						<p className='text-base text-foreground/80 leading-relaxed max-w-sm'>
							By 2025, cultivate a thriving maker culture in Kerala to ignite
							creativity and equip 10,000 young makers with the skills to
							innovate and shape the future.
						</p>
					</motion.div>
					<motion.div
						className='flex flex-col items-center text-center'
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
						viewport={{ once: true }}>
						<div className='flex items-center gap-4 mb-4'>
							<VisionIcon />
							<h2 className="font-['Special_Elite'] text-4xl font-bold tracking-wider">
								VISION
							</h2>
						</div>
						<p className='text-base text-foreground/80 leading-relaxed max-w-sm'>
							Everyone has access to the knowledge required to set the course
							for a better future
						</p>
					</motion.div>
				</div>

				{/* Events Board - Shared between layouts */}
				<motion.div
					className='relative mt-16 md:absolute md:mt-0 md:top-[60%] md:left-1/2 md:-translate-x-1/2 md:w-[45%]'
					initial={{ opacity: 0, y: 50, scale: 0.9 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
					viewport={{ once: true, amount: 0.5 }}>
					<div
						className='bg-black text-white py-3 -rotate-[4deg] rounded-md shadow-2xl'
						style={{
							clipPath:
								"polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px))",
						}}>
						<h3 className='font-black text-3xl tracking-wider text-center'>
							UPCOMING EVENTS
						</h3>
					</div>
					<div className='-mt-2 -rotate-[4deg] space-y-3'>
						{upcomingEvents.map((event) => (
							<Link href={event.href} key={event.id}>
								<div className='flex items-center justify-between bg-[#FFF1D6] p-3 rounded-lg shadow-lg border border-black/10 hover:bg-yellow-100 transition-colors'>
									<div className='flex items-center gap-3'>
										<Image
											src={event.icon}
											alt=''
											width={24}
											height={24}
											className='w-6 h-6'
										/>
										<span className='font-bold text-foreground/80'>
											{event.name}
										</span>
									</div>
									<div className='w-6 h-6 rounded-full border-2 border-black/50 flex items-center justify-center'>
										<ArrowRight className='w-4 h-4 text-black/50' />
									</div>
								</div>
							</Link>
						))}
						<p className="font-['Rock_Salt'] text-sm text-center text-foreground/70 pt-2">
							More events are on the way....
						</p>
					</div>
				</motion.div>

				<Placard />

				<p className="font-['Rock_Salt'] text-sm text-foreground/70 text-center mt-24 md:absolute md:bottom-[-4rem] md:left-1/2 md:-translate-x-1/2">
					made using loads of coffeee...
				</p>
			</div>
		</motion.section>
	)
}