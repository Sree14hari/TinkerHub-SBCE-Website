"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Event } from "@/lib/data"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Button } from "../ui/button"
import { Calendar } from "lucide-react"

export default function UpcomingEventCard({ event }: { event: Event }) {
	const eventImage = PlaceHolderImages.find(p => p.id === event.image)

	return (
		<motion.div
			className='relative group w-full h-full bg-card text-card-foreground rounded-xl shadow-lg overflow-hidden border border-border/10 transition-all duration-300 hover:shadow-2xl'
			whileHover={{ y: -5 }}>
			<div className='relative w-full aspect-[16/10]'>
				{eventImage && (
					<Image
						src={eventImage.imageUrl}
						alt={event.title}
						fill
						className='object-cover'
						data-ai-hint={eventImage.imageHint}
					/>
				)}
				<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
			</div>

			<div className='p-4 md:p-5 flex flex-col'>
				<h3 className='text-lg font-bold text-foreground mb-2 truncate'>
					{event.title}
				</h3>
				<div className='flex items-center text-sm text-muted-foreground mb-4'>
					<Calendar className='w-4 h-4 mr-2' />
					<span>{event.date}</span>
				</div>
				<p className='text-sm text-muted-foreground/80 flex-grow mb-4 line-clamp-2'>
					{event.description}
				</p>
				<Button
					variant='secondary'
					className='w-full'>
					View Event
				</Button>
			</div>
		</motion.div>
	)
}
