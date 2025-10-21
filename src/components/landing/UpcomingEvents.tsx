"use client"

import { ArrowRight, Flower, Sparkles } from "lucide-react"

const events = [
	{
		name: "ADHD കൂട്ടുതാളം - HackARThon",
		icon: <Sparkles className='w-5 h-5 text-orange-500' />,
	},
	{
		name: "Maker Thursday",
		icon: <Flower className='w-5 h-5 text-pink-400' />,
	},
]

export default function UpcomingEvents() {
	return (
		<div className='relative -rotate-3'>
			<div className='bg-black text-white font-black text-2xl md:text-3xl px-6 py-3 rounded-t-lg'>
				UPCOMING EVENTS
			</div>
			<div className='bg-[#FFF1D6] p-4 rounded-b-lg shadow-lg space-y-3'>
				{events.map((event, index) => (
					<div
						key={index}
						className='bg-[#FCEBCF] flex items-center justify-between p-2 rounded-lg border-2 border-dashed border-yellow-800/30'>
						<div className='flex items-center gap-3'>
							{event.icon}
							<span className="font-['Comic_Neue'] font-bold text-lg text-yellow-900">
								{event.name}
							</span>
						</div>
						<div className='bg-white rounded-full p-1'>
							<ArrowRight className='w-4 h-4 text-yellow-900' />
						</div>
					</div>
				))}
				<p className="font-['Rock_Salt'] text-sm text-yellow-900/80 text-center pt-2">
					More events are on the way....
				</p>
			</div>
		</div>
	)
}
