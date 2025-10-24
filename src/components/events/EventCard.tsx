"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export interface Event {
	id: number
	title: string
	date: string
	image: string
}

export default function EventCard({ event }: { event: Event }) {
	const [rotation, setRotation] = useState(0)

	useEffect(() => {
		// Ensure this only runs on the client
		setRotation(Math.random() * 3 - 1.5)
	}, [])

	return (
		<div className='relative group w-full h-full'>
			<motion.div
				className='relative w-full h-full bg-white p-4 shadow-lg border-t-2 border-gray-100 transform transition-transform duration-300'
				style={{
					transform: `rotate(${rotation}deg)`,
				}}
				whileHover={{ scale: 1.02, y: -5, rotate: rotation }}>
				<div className='absolute -top-4 -left-3 w-16 h-16'>
					<Image
						src='/images/pin.png'
						alt='Pin'
						width={64}
						height={64}
						className='transform -rotate-12'
					/>
				</div>
				<div className='flex flex-col justify-between h-full text-center pt-8 pb-4'>
					<h3
						className='font-["Rock_Salt"] text-lg md:text-xl font-bold text-gray-800 px-4'>
						{event.title}
					</h3>
					<div
						className='text-center mt-auto self-end px-4'>
						<p className='text-sm text-gray-600 font-medium'>{event.date}</p>
					</div>
				</div>
			</motion.div>
		</div>
	)
}
