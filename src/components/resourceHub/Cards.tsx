"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useMemo, useState } from "react"

type HandDirection = "left" | "right"

export interface ResourceHubCardProps {
	title: string
	description: string
	handDirection?: HandDirection
	cardSrc?: string
	handSrc?: string
	width?: number
	height?: number
	className?: string
}

export default function Cards({
	title,
	description,
	handDirection = "left",
	cardSrc = "/images/resource_hub/resource_hub.svg",
	handSrc,
	width = 358,
	height = 370,
	className = "",
}: ResourceHubCardProps) {
	const [hovered, setHovered] = useState(false)

	const resolvedHandSrc = useMemo(() => {
		if (handSrc) return handSrc
		return handDirection === "right"
			? "/images/resource_hub/resource_hub_right_animation.svg"
			: "/images/resource_hub/resource_hub_left_animation.svg"
	}, [handDirection, handSrc])

	const isRight = handDirection === "right"

	return (
		<motion.div
			className={`relative cursor-pointer ${className} max-sm:!h-[340px]`}
			style={{ width, height }}
			onHoverStart={() => setHovered(true)}
			onHoverEnd={() => setHovered(false)}
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.6 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			aria-label={`${title} card`}
			role='group'>
			<motion.div
				className='absolute inset-0 rounded-[40px] '
				animate={{
					rotate: hovered ? (isRight ? 1.6 : -1.6) : 0,
					scale: hovered ? 1.02 : 1,
					y: hovered ? -4 : 0,
					boxShadow: hovered
						? "0 14px 30px rgba(0,0,0,0.25)"
						: "0 6px 14px rgba(0,0,0,0.18)",
				}}
				transition={{ duration: 0.28, ease: "easeOut" }}>
				<Image
					src={cardSrc}
					alt=''
					width={width}
					height={height}
					priority={false}
					className='object-contain select-none pointer-events-none'
				/>
			</motion.div>

			<motion.div
				className='absolute inset-0 flex items-center justify-center text-center px-4'
				animate={{ opacity: hovered ? 0 : 1, y: hovered ? -8 : 0 }}
				transition={{ duration: 0.22 }}>
				<h3 className='text-white text-4xl font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)]'>
					{title}
				</h3>
			</motion.div>

			<motion.div
				className='absolute inset-0 flex items-center justify-center text-center px-6'
				animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
				transition={{ duration: 0.22 }}>
				<p className='text-white text-sm md:text-base font-medium bg-black/55 p-3 rounded-lg leading-relaxed backdrop-blur-[2px]'>
					{description}
				</p>
			</motion.div>

			<motion.div
				className={`absolute -translate-y-1/2 w-[150px] md:w-[265px] hidden lg:block ${
					isRight
						? "right-[-232px] rotate-6  top-1/2"
						: "left-[-232px] -rotate-6 "
				} z-[-1]`}
				initial={{
					opacity: 0,
					rotate: isRight ? 18 : -18,
					x: isRight ? 12 : -12,
				}}
				whileInView={{ opacity: 1, rotate: 0, x: 0 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				aria-hidden>
				<Image
					src={resolvedHandSrc}
					alt=''
					width={265}
					height={265}
					className='object-contain select-none pointer-events-none'
				/>
			</motion.div>
		</motion.div>
	)
}
