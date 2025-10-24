"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export interface Event {
	id: number
	title: string
	date: string
	image: string
}

export default function EventCard({ event }: { event: Event }) {
	return (
		<div className='group relative h-full w-full overflow-hidden rounded-2xl bg-gray-100 shadow-md transition-shadow duration-300 hover:shadow-xl'>
			<div className='relative w-full aspect-[16/10] overflow-hidden'>
				<Image
					src={event.image}
					alt={event.title}
					fill
					className='object-cover transition-transform duration-300 group-hover:scale-105'
					data-ai-hint='event photo'
				/>
			</div>
			<div className='p-6 text-center'>
				<h3 className='font-bold text-xl text-gray-900'>{event.title}</h3>
				<p className='mt-1 text-sm text-gray-500'>{event.date}</p>
				<Button className='mt-4 rounded-full bg-gray-900 px-8 text-white shadow-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-md'>
					View Event
				</Button>
			</div>
			<div className='absolute bottom-0 h-20 w-full bg-gradient-to-t from-white/20 to-transparent blur-xl'></div>
		</div>
	)
}