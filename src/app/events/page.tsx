import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import type { Event } from '@/components/events/EventCard';
import UpcomingEvents from '@/components/events/UpcomingEvents';
import { Bot } from 'lucide-react';
import { motion } from 'framer-motion';


const events: Event[] = [
  { id: 1, title: 'Intro to Web Dev', image: 'https://picsum.photos/seed/event1/600/400' },
  { id: 2, title: 'Design Workshop', image: 'https://picsum.photos/seed/event2/600/400' },
  { id: 3, title: 'Hackathon 2024', image: 'https://picsum.photos/seed/event3/600/400' },
  { id: 4, title: 'AI/ML Talk', image: 'https://picsum.photos/seed/event4/600/400' },
  { id: 5, title: 'Capture The Flag', image: 'https://picsum.photos/seed/event5/600/400' },
  { id: 6, title: 'Community Meetup', image: 'https://picsum.photos/seed/event6/600/400' },
];

export default async function EventsPage() {
  return (
    <div className="flex min-h-dvh flex-col crumpled-paper">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container">
          <div
              className="flex items-center justify-center gap-4 md:gap-8 mb-12"
            >
              <Bot className="w-12 h-12 md:w-16 md:h-16 text-foreground/80 transform -scale-x-100" />
              <h1 className="font-black text-4xl md:text-6xl tracking-wider">UPCOMING EVENTS</h1>
              <Bot className="w-12 h-12 md:w-16 md:h-16 text-foreground/80" />
          </div>
          <UpcomingEvents events={events} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
