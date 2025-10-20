import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Marquee from '@/components/landing/Marquee';
import MissionVision from '@/components/landing/MissionVision';
import Events from '@/components/landing/Events';
// import Footer from '@/components/landing/Footer';

const marqueeContent1 = [
  "don't fly solo",
  "be kind",
  "skills pay the bills",
  "coding is a superpower",
  "don't fly solo",
  "be kind",
  "skills pay the bills",
  "coding is a superpower",
  "don't fly solo",
  "be kind",
  "skills pay the bills",
  "coding is a superpower",
  "don't fly solo",
  "be kind",
  "skills pay the bills",
  "coding is a superpower",

];

const marqueeContent2 = [
  "tinkerhub",
  "a decade of impact",
  "tinkerhub",
  "a decade of impact",
  "tinkerhub",
  "a decade of impact",
  "tinkerhub",
  "a decade of impact",
  "tinkerhub",
  "a decade of impact",
  "tinkerhub",
  "a decade of impact",
  "tinkerhub",
  "a decade of impact",
  "tinkerhub",
  "a decade of impact",
];

// Mock data to replace Supabase fetch
const upcomingEvent = [{
    id: 1,
    name: 'Event 1',
    image: 'https://picsum.photos/seed/upcoming/360/270'
},{
    id: 2,
    name: 'Event 2',
    image: 'https://picsum.photos/seed/upcoming2/360/270'
},
{
    id: 3,
    name: 'Event 3',
    image: 'https://picsum.photos/seed/upcoming3/360/270'
}];

export default async function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee content={marqueeContent1} className="bg-black text-white -rotate-2" />
        <MissionVision />
        {/* <Marquee content={marqueeContent2} className="bg-yellow-400 text-black rotate-2" /> */}
        <Events initialUpcomingEvents={upcomingEvent} />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
