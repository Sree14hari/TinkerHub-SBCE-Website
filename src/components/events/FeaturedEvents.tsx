"use client"

import * as React from "react"
import useEmblaCarousel, {
	type UseEmblaCarouselType,
} from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Event } from "@/lib/data"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Button } from "../ui/button"
import { Calendar, MapPin, ArrowRight } from "lucide-react"

type CarouselApi = UseEmblaCarouselType[1]

export default function FeaturedEvents({ events }: { events: Event[] }) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay: 5000, stopOnInteraction: true })
	])
	const [selectedIndex, setSelectedIndex] = React.useState(0)
	const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

	const onSelect = React.useCallback((api: NonNullable<CarouselApi>) => {
		setSelectedIndex(api.selectedScrollSnap())
	}, [])

	React.useEffect(() => {
		if (!emblaApi) return
		onSelect(emblaApi)
		setScrollSnaps(emblaApi.scrollSnapList())
		emblaApi.on("select", onSelect)
		return () => {
			emblaApi.off("select", onSelect)
		}
	}, [emblaApi, onSelect])

	if (!events || events.length === 0) return null

	return (
		<div className='relative w-full overflow-hidden rounded-2xl shadow-2xl bg-black'>
			{/* Carousel Viewport */}
			<div className='overflow-hidden' ref={emblaRef}>
				<div className='flex'>
					{events.map((event, index) => {
						const eventImage = PlaceHolderImages.find(p => p.id === event.image)
						return (
							<div
								className='relative flex-[0_0_100%] min-w-0 h-[450px] md:h-[500px] lg:h-[600px]'
								key={event.id}>
								{/* Background Image */}
								{eventImage && (
									<Image
										src={eventImage.imageUrl}
										alt={event.title}
										fill
										className='object-cover opacity-80'
										priority={index === 0}
									/>
								)}
								{/* Gradient Overlays */}
								<div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent' />
								<div className='absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent' />

								{/* Content */}
								<div className='absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16 max-w-4xl'>
									<div className={`transition-all duration-700 delay-100 transform ${selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
										<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary backdrop-blur-sm mb-4">
											<span className="relative flex h-2 w-2">
												<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
												<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
											</span>
											<span className="text-xs font-bold tracking-wider uppercase">Featured Event</span>
										</div>

										<h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight'>
											{event.title}
										</h1>

										<div className='flex flex-wrap items-center gap-6 text-white/90 mb-8 font-medium'>
											<div className='flex items-center gap-2'>
												<Calendar className='w-5 h-5 text-primary' />
												<span>{event.date}</span>
											</div>
											{event.organizer && (
												<div className='flex items-center gap-2'>
													<MapPin className='w-5 h-5 text-primary' />
													<span>{event.organizer}</span>
												</div>
											)}
										</div>

										<p className='text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl line-clamp-3'>
											{event.description}
										</p>

										<div className="flex flex-wrap gap-4">
											<Button size="lg" className="text-base font-semibold px-8 h-12">
												Register Now
											</Button>
											<Button size="lg" variant="outline" className="text-base font-semibold px-8 h-12 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white">
												Learn More <ArrowRight className="ml-2 w-5 h-5" />
											</Button>
										</div>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>

			{/* Navigation Dots */}
			<div className='absolute bottom-8 right-8 flex gap-3 z-10'>
				{scrollSnaps.map((_, index) => (
					<button
						key={index}
						onClick={() => emblaApi?.scrollTo(index)}
						className={cn(
							"h-1.5 rounded-full transition-all duration-300",
							selectedIndex === index
								? "bg-primary w-8"
								: "bg-white/30 w-4 hover:bg-white/50"
						)}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	)
}
