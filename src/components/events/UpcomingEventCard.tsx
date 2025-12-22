"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Event } from "@/lib/data"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Button } from "../ui/button"
import { Calendar, ArrowRight, Clock } from "lucide-react"

export default function UpcomingEventCard({ event }: { event: Event }) {
	const eventImage = PlaceHolderImages.find(p => p.id === event.image)

	// Helper to attempt parsing the date for the badge
	// Handles standard dates. For ranges or complex strings, it might fallback.
	const getDateParts = (dateStr: string) => {
		const date = new Date(dateStr)
		if (!isNaN(date.getTime())) {
			return {
				day: date.getDate(),
				month: date.toLocaleString("default", { month: "short" }).toUpperCase(),
			}
		}
		// Fallback for "Month Day-Day, Year" or similar if simple parse fails
		// Simple regex to grab the first number and the month name
		const match = dateStr.match(/([a-zA-Z]+)\s+(\d+)/)
		if (match) {
			return {
				day: match[2],
				month: match[1].substring(0, 3).toUpperCase(),
			}
		}
		return { day: "", month: "" }
	}

	const { day, month } = getDateParts(event.date)

	return (
		<motion.div
			className='group relative h-full bg-card hover:bg-card/50 border border-border/50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-primary/50 flex flex-col'
			whileHover={{ y: -8 }}>
			{/* Image Section */}
			<div className='relative w-full aspect-[4/3] overflow-hidden'>
				{eventImage && (
					<Image
						src={eventImage.imageUrl}
						alt={event.title}
						fill
						className='object-cover transition-transform duration-700 group-hover:scale-110'
						data-ai-hint={eventImage.imageHint}
					/>
				)}
				{/* Dark Gradient Overlay */}
				<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500' />

				{/* Floating Date Badge */}
				{(day && month) && (
					<div className='absolute top-4 right-4 bg-background/90 backdrop-blur-md px-3 py-2 rounded-xl border border-border/50 flex flex-col items-center shadow-lg group-hover:scale-110 transition-transform duration-300 z-10'>
						<span className='text-xl font-bold font-mono leading-none text-primary'>
							{day}
						</span>
						<span className='text-[10px] font-bold tracking-wider text-muted-foreground uppercase'>
							{month}
						</span>
					</div>
				)}
			</div>

			{/* Content Section */}
			<div className='p-6 flex flex-col flex-grow relative'>
				{/* Decorative decorative gradient line */}
				<div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />

				<div className='mb-4'>
					<h3 className='text-xl font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300'>
						{event.title}
					</h3>
					<div className='flex items-center gap-3 text-xs text-muted-foreground font-medium'>
						<div className="flex items-center gap-1.5">
							<Calendar className='w-3.5 h-3.5 text-primary/70' />
							<span>{event.date}</span>
						</div>
					</div>
				</div>

				<p className='text-sm text-muted-foreground/80 line-clamp-3 mb-6 flex-grow leading-relaxed'>
					{event.description}
				</p>

				<div className='mt-auto flex items-center justify-between pt-4 border-t border-border/50'>
					<Button
						variant='ghost'
						className='p-0 hover:bg-transparent text-foreground hover:text-primary group/btn w-full justify-between h-auto font-semibold tracking-wide'>
						<span>View Details</span>
						<ArrowRight className='w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 text-primary' />
					</Button>
				</div>
			</div>
		</motion.div>
	)
}
