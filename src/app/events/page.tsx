import Header from "@/components/landing/Header"
import Footer from "@/components/landing/Footer"
import type { Event } from "@/components/events/EventCard"
import FeaturedEvents from "@/components/events/FeaturedEvents"
import PastEvents from "@/components/events/PastEvents"

const events: Event[] = [
	{
		id: 1,
		title: "Talk Session",
		date: "2025-09-15",
		image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop",
		organizer: "Organizer Name",
	},
	{
		id: 2,
		title: "Talk Session",
		date: "2025-09-15",
		image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop",
		organizer: "Organizer Name",
	},
	{
		id: 3,
		title: "Talk Session",
		date: "2025-09-15",
		image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop",
		organizer: "Organizer Name",
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
					<div className='container max-w-4xl'>
						<FeaturedEvents images={featuredEventImages} />
					</div>
				</div>
				<PastEvents events={events} />
			</main>
			<Footer />
		</div>
	)
}