import Header from "@/components/landing/Header"
import Footer from "@/components/landing/Footer"
import FeaturedEvents from "@/components/events/FeaturedEvents"
import PastEvents from "@/components/events/PastEvents"
import { eventsData } from "@/lib/data"

export default async function EventsPage() {
	return (
		<div className='flex min-h-dvh flex-col bg-background'>
			<Header />
			<main className='flex-1'>
				{/* Hero Section */}
				<section className="relative pt-32 pb-12 md:pt-40 md:pb-20 overflow-hidden">
					<div className="absolute inset-0 bg-primary/5 -z-10" />
					<div className="container px-4 md:px-6 relative z-10">
						<div className="max-w-3xl mx-auto text-center space-y-4">
							<h1 className="font-['Special_Elite'] text-4xl md:text-6xl font-bold tracking-wider relative inline-block">
								OUR EVENTS
								<span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-70"></span>
							</h1>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
								Discover our latest workshops, hackathons, and tech talks designed to inspire and upskill.
							</p>
						</div>
					</div>
					
					{/* Decorative Elements */}
					<div className="absolute top-0 right-0 p-12 opacity-10 blur-3xl">
						<div className="w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
					</div>
					<div className="absolute bottom-0 left-0 p-12 opacity-10 blur-3xl">
						<div className="w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
					</div>
				</section>

				{/* Featured Events Carousel */}
				{eventsData.upcoming.length > 0 && (
					<section className='pb-16 md:pb-24 -mt-10'>
						<div className='container max-w-7xl px-4 md:px-6'>
							<FeaturedEvents events={eventsData.upcoming} />
						</div>
					</section>
				)}

				{/* Divider */}
				<div className="container px-4 md:px-6">
					<div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
				</div>

				{/* Past Events Grid */}
				{eventsData.past.length > 0 && (
					<PastEvents events={eventsData.past} />
				)}
			</main>
			<Footer />
		</div>
	)
}
