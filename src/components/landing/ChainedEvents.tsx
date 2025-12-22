"use client"

import { motion } from "framer-motion"
import UpcomingEvents from "@/components/events/UpcomingEvents"
import { eventsData } from "@/lib/data"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

export default function ChainedEvents() {
	return (
		<section className='w-full pb-16 md:pb-24 -mt-10 overflow-hidden'>
			<div className='container'>
				<motion.div
					className='text-center mb-12'
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h2 className="font-['Special_Elite'] text-3xl md:text-4xl font-bold tracking-wider">
						UPCOMING EVENTS
					</h2>
				</motion.div>

				<UpcomingEvents events={eventsData.upcoming} />

				<div className='text-center mt-12'>
					<Button className="group px-8 py-6 text-lg">
						View all events
						<ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
					</Button>
				</div>
			</div>
		</section>
	)
}
