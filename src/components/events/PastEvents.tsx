"use client"
import { motion } from "framer-motion"
import type { Event } from "./EventCard"
import PastEventCard from "./PastEventCard"

export default function PastEvents({ events }: { events: Event[] }) {
	return (
		<section className='py-16 md:py-24'>
			<div className='container'>
				<motion.div
					className='text-center mb-12'
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h1 className="font-['Special_Elite'] text-3xl md:text-4xl font-bold tracking-wider">
						PAST EVENTS
					</h1>
				</motion.div>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
					{events.map((event, index) => (
						<PastEventCard
							key={event.id}
							event={event}
							isFeatured={index === 1}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
