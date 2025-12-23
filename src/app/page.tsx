import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Marquee from '@/components/landing/Marquee';
import MissionVision from '@/components/landing/MissionVision';
import ChainedEvents from '@/components/landing/ChainedEvents';
import ResourceHubPreview from '@/components/landing/ResourceHubPreview';
import Footer from '@/components/landing/Footer';

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
  "INNOVATE",
  "COLLABORATE",
  "CREATE",
  "LEARN",
  "INNOVATE",
  "COLLABORATE",
  "CREATE",
  "LEARN",
  "INNOVATE",
  "COLLABORATE",
  "CREATE",
  "LEARN",
  "INNOVATE",
  "COLLABORATE",
  "CREATE",
  "LEARN",
];


export default async function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee content={marqueeContent1} className="bg-black text-white -rotate-2" />
        <MissionVision />
        <ResourceHubPreview />
        <Marquee content={marqueeContent2} className="bg-primary text-primary-foreground rotate-2" />
        <ChainedEvents />
      </main>
      <Footer />
    </div>
  );
}
