import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'
import type { Event } from '@/components/events/EventCard'
import UpcomingEvents from '@/components/events/UpcomingEvents'

const events: Event[] = [
	{
		id: 1,
		title: "Poster Design Competition",
		date: "2025-06-23",
		image: "https://i.postimg.cc/kXq2Xd2x/poster-design.png",
	},
	{
		id: 2,
		title: "Workshop on AI",
		date: "2024-11-05",
		image: "https://i.postimg.cc/wMPJ15v9/AI-insight.png",
	},
	{
		id: 3,
		title: "Networking Gala",
		date: "2024-11-20",
		image: "https://i.postimg.cc/9Q6v3d7q/henna-hues.png",
	},
	{
		id: 4,
		title: "Hackathon 2024",
		date: "2024-12-01",
		image: "https://i.postimg.cc/SxsJ30Vz/cineshow.png",
	},
	{
		id: 5,
		title: "Student Drone Competition",
		date: "2025-01-10",
		image: "https://i.postimg.cc/1X7Z1g1Q/drone.png",
	},
	{
		id: 6,
		title: "Intro to Web Dev",
		date: "2024-10-25",
		image: "https://picsum.photos/seed/event1/600/400",
	},
]

export default async function EventsPage() {
	return (
		<div className='flex min-h-dvh flex-col bg-background'>
			<Header />
			<main className='flex-1 py-16 md:py-24'>
				<div className='container'>
					<h1 className='mb-12 text-center font-bold text-4xl tracking-tight text-foreground md:text-5xl'>
						Upcoming Events
					</h1>
					<UpcomingEvents events={events} />
				</div>
			</main>
			<Footer />
		</div>
	)
}