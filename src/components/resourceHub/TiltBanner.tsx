"use client"

import { motion, Variants } from "framer-motion"
import { CSSProperties, useMemo } from "react"

type Align = "left" | "center" | "right"

export interface TiltBannerProps {
	text: string
	
	rotate?: number 
	
	skewX?: number 
	bg?: string 
	color?: string 

	px?: number 
	py?: number 
	radius?: number
	align?: Align 
	className?: string

	letterStagger?: number 
	
	letterPop?: number 
}

const containerVariants: Variants = {
	hidden: { opacity: 0, y: -10, rotate: 0.5 },
	show: {
		opacity: 1,
		y: 0,
		rotate: 0,
		transition: {
			type: "spring",
			stiffness: 120,
			damping: 16,
			mass: 0.6,
		},
	},
}

export default function TiltBanner({
	text,
	rotate = -6,
	skewX = -4,
	bg = "#000",
	color = "#fff",
	px = 28,
	py = 14,
	radius = 4,
	align = "center",
	className = "",
	letterStagger = 0.035,
	letterPop = 1.08,
}: TiltBannerProps) {

	const chars = useMemo(
		() => Array.from(text).map((ch) => (ch === " " ? "\u00A0" : ch)),
		[text]
	)

	const letterVariants: Variants = {
		hidden: { opacity: 0, y: 10, scale: 0.9, rotate: -2 },
		show: (i: number) => ({
			opacity: 1,
			y: 0,
			scale: letterPop,
			rotate: 0,
			transition: {
				delay: i * letterStagger,
				type: "spring",
				stiffness: 400,
				damping: 18,
				mass: 0.6,
			},
		}),
		rest: { scale: 1 },
		hover: { scale: 1.06, y: -1 }, 
	}

	const style: CSSProperties = {
		transform: `rotate(${rotate}deg) skewX(${skewX}deg)`,
		background: bg,
		color,
		padding: `${py}px ${px}px`,
		borderRadius: radius,
	}

	const alignment =
		align === "left"
			? "justify-start"
			: align === "right"
			? "justify-end"
			: "justify-center"

	return (
		<motion.div
			className={`w-full flex ${alignment} pointer-events-none ${className}`}
			initial='hidden'
			animate='show'
			variants={containerVariants}
			aria-label={text}
			role='img'>
			<motion.div
				className='inline-flex'
				style={style}
				initial='rest'
				whileHover='hover'
				whileTap={{
					scale: 0.99,
					rotate: rotate + (rotate > 0 ? 0.5 : -0.5),
				}}>
				<div className='pointer-events-auto select-none leading-none tracking-wide'>
					{chars.map((ch, i) => (
						<motion.span
							key={`${ch}-${i}`}
							custom={i}
							variants={letterVariants}
							className='inline-block text-[28px] md:text-[34px] font-semibold'>
							{ch}
						</motion.span>
					))}
				</div>
			</motion.div>
		</motion.div>
	)
}
