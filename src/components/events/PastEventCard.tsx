import Image from "next/image"
import { format } from "date-fns"
import { Event } from "./EventCard"
import { Button } from "@/components/ui/button"

export default function PastEventCard({
	event,
	isFeatured = false,
}: {
	event: Event
	isFeatured?: boolean
}) {
	return (
		<div
			className={`bg-[#FDF0D5] rounded-lg shadow-md overflow-hidden ${
				isFeatured ? "border-2 border-blue-500" : ""
			}`}>
			<div className='relative w-full h-48'>
				<Image
					src={event.image}
					alt={event.title}
					fill
					className='object-cover'
				/>
			</div>
			<div className='p-4'>
				<h3 className='text-lg font-semibold text-black'>{event.title}</h3>
				<p className='text-xs text-gray-500 mt-1'>
					{format(new Date(event.date), "dd MMM, yyyy")}
				</p>
				<div className='mt-4 flex justify-between items-end'>
					<div>
						<p className='text-xs text-gray-500'>Organized By</p>
						<p className='text-sm font-semibold text-black'>
							{event.organizer}
						</p>
					</div>
					<Button
						variant='outline'
						className='bg-transparent border-black text-black hover:bg-black hover:text-white text-xs px-3 py-1 h-auto'>
						VIEW NOW
					</Button>
				</div>
			</div>
		</div>
	)
}