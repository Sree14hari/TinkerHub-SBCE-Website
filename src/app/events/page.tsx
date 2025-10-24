import Header from "@/components/landing/Header"
import Footer from "@/components/landing/Footer"
import type { Event } from "@/components/events/EventCard"
import EventsGrid from "@/components/events/EventsGrid"
import FeaturedEvents from "@/components/events/FeaturedEvents"

const events: Event[] = [
	{
		id: 1,
		title: "Poster Design Competition",
		date: "2025-06-23",
		image: "https://sbce.ac.in/uploads/medium_POSTER_820aa5e42b.jpg",
	},
	{
		id: 2,
		title: "Workshop on AI",
		date: "2024-11-05",
		image: "https://sbce.ac.in/uploads/medium_POSTER_820aa5e42b.jpg",
	},
	{
		id: 3,
		title: "Networking Gala",
		date: "2024-11-20",
		image: "https://sbce.ac.in/uploads/medium_POSTER_820aa5e42b.jpg",
	},
	{
		id: 4,
		title: "Hackathon 2024",
		date: "2024-12-01",
		image: "https://sbce.ac.in/uploads/medium_POSTER_820aa5e42b.jpg",
	},
	{
		id: 5,
		title: "Student Drone Competition",
		date: "2025-01-10",
		image: "https://sbce.ac.in/uploads/medium_POSTER_820aa5e42b.jpg",
	},
	{
		id: 6,
		title: "Intro to Web Dev",
		date: "2024-10-25",
		image: "https://sbce.ac.in/uploads/medium_POSTER_820aa5e42b.jpg",
	},
]

const featuredEventImages = [
	"https://sbce.ac.in/uploads/medium_POSTER_820aa5e42b.jpg",
    "https://sbce.ac.in/uploads/medium_POSTER_820aa5e42b.jpg",
	"https://sbce.ac.in/uploads/medium_POSTER_820aa5e42b.jpg",
    
]

export default async function EventsPage() {
	return (
		<div className='flex min-h-dvh flex-col bg-background'>
			<Header />
			<main className='flex-1'>
				<div className='py-16 md:py-24'>
					<div className='container max-w-6xl'>
						<FeaturedEvents images={featuredEventImages} />
					</div>
				</div>
				<EventsGrid initialEvents={events} />
			</main>
			<Footer />
		</div>
	)
}
