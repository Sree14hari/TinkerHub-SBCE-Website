import Image from "next/image"
import { format } from "date-fns"
import { motion } from "framer-motion"
import { Event } from "@/lib/data"
import { PlaceHolderImages } from "@/lib/placeholder-images" // Added import
import { Button } from "@/components/ui/button"
import { Calendar, Users } from "lucide-react"

export default function PastEventCard({
	event,
	isFeatured = false,
}: {
	event: Event
	isFeatured?: boolean
}) {
	const eventImage = PlaceHolderImages.find(p => p.id === event.image)

	return (
		<motion.div
			className='group relative h-full bg-card/40 backdrop-blur-sm border border-border/40 rounded-xl overflow-hidden hover:bg-card/60 transition-all duration-300 hover:shadow-xl hover:border-primary/20'
			whileHover={{ y: -4 }}>
			<div className='relative w-full aspect-video overflow-hidden'>
				{eventImage && (
					<Image
						src={eventImage.imageUrl}
						alt={event.title}
						fill
						className='object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0'
						data-ai-hint={eventImage.imageHint}
					/>
				)}
				<div className='absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300' />
				
				{/* Date Badge */}
				<div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs px-2 py-1 rounded flex items-center gap-1.5 border border-white/10">
					<Calendar className="w-3 h-3" />
					<span>{format(new Date(event.date), "MMM dd, yyyy")}</span>
				</div>
			</div>

			<div className='p-5 flex flex-col h-[calc(100%-aspect-video)]'>
				<h3 className='text-lg font-bold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors'>
					{event.title}
				</h3>
				
				{event.organizer && (
					<div className='flex items-center text-xs text-muted-foreground mb-3'>
						<Users className='w-3.5 h-3.5 mr-1.5' />
						<span>{event.organizer}</span>
					</div>
				)}

				<p className="text-sm text-muted-foreground/80 line-clamp-2 mb-4 flex-grow">
					{event.description}
				</p>

				<Button
					variant='outline'
					size="sm"
					className='w-full bg-transparent border-primary/20 hover:bg-primary/5 text-foreground hover:text-primary transition-all duration-300'>
					View Recap
				</Button>
			</div>
		</motion.div>
	)
}