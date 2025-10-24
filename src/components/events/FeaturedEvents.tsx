"use client"

import * as React from "react"
import useEmblaCarousel, {
	type UseEmblaCarouselType,
} from "embla-carousel-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type CarouselApi = UseEmblaCarouselType[1]

export default function FeaturedEvents({ images }: { images: string[] }) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
	const [selectedIndex, setSelectedIndex] = React.useState(0)

	React.useEffect(() => {
		if (!emblaApi) return
		const onSelect = (api: NonNullable<CarouselApi>) => {
			setSelectedIndex(api.selectedScrollSnap())
		}
		emblaApi.on("select", onSelect)
		return () => {
			emblaApi.off("select", onSelect)
		}
	}, [emblaApi])

	return (
		<div className='flex flex-col items-center w-full'>
			<h1 className="font-['Rock_Salt'] text-4xl md:text-5xl font-bold tracking-wider mb-8 text-center">
				FEATURED EVENTS
			</h1>
			<div className='overflow-hidden w-full' ref={emblaRef}>
				<div className='flex'>
					{images.map((src, index) => (
						<div
							className='flex-shrink-0 flex-grow-0 basis-full min-w-0'
							key={index}>
							<div className='aspect-[16/9] relative'>
								<Image
									src={src}
									alt={`Featured event ${index + 1}`}
									fill
									className='object-cover rounded-lg'
								/>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='flex justify-center gap-2 mt-4'>
				{images.map((_, index) => (
					<button
						key={index}
						onClick={() => emblaApi?.scrollTo(index)}
						className={cn(
							"w-2.5 h-2.5 rounded-full transition-all duration-300",
							selectedIndex === index
								? "bg-foreground/80 w-6"
								: "bg-foreground/30"
						)}
					/>
				))}
			</div>
		</div>
	)
}
