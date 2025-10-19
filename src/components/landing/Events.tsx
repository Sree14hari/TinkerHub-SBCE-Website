"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';

const BoardImage = () => (
    <Image 
        src="/images/board.png" 
        alt="Board Image" 
        width={80} 
        height={80} 
        className="relative md:absolute right-[-50] w-[560px] h-[429px] md:w-[450px] md:h-[600px] md:right-[-300] md:top-[-510] "
    />
);

interface UpcomingEvent {
    id: number;
    name: string;
    image: string;
}

export default function Events({ initialUpcomingEvent }: { initialUpcomingEvent: UpcomingEvent | null }) {
  const upcomingEvent = initialUpcomingEvent;
  const loading = !initialUpcomingEvent;


  return (
    <motion.section
      id="events"
      className="relative !py-12 md:!py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container max-w-5xl mx-auto relative">
        <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
          <motion.div
            className="text-center md:text-left flex flex-col items-center md:items-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute -rotate-[5deg] top-[-120] w-[1000] overflow-hidden md:w-[550] whitespace-nowrap md:overflow-visible md:-rotate-[5deg] md:top-[-220] md:left-10 text-center">
              <div className="bg-black text-background font-black text-[25px] px-8 py-4 md:text-4xl md:px-8 md:py-4">
                UPCOMING EVENTS
              </div>
            </div>
            {loading ? (
              <div className="space-y-4 w-full max-w-sm mx-auto md:mx-0">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-5/6" />
                <Skeleton className="h-6 w-3/4" />
              </div>
            ) : upcomingEvent ? (
              <div className="relative font-['Comic_Neue'] text-2xl shadow-[0_5px_10px_rgba(0,0,0,0.3)] text-foreground/80 leading-relaxed space-y-2 bg-[#FFF1D6] w-[900] -rotate-[5deg] top-[-40] md:top-[-140] md:left-[12] md:w-[552] rounded-[5]">
                  <p className="md:pl-[50] text-bold">{upcomingEvent.name}</p>
              </div>
            ) : (
              <div className="font-['Comic_Neue'] text-2xl text-foreground/80 leading-relaxed space-y-2">
                <p>No upcoming events scheduled.</p>
                <p>Please check back soon!</p>
              </div>
            )}
          </motion.div>

          <motion.div
            className="relative mt-16 md:mt-0 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* <div className="relative w-[300px] h-[225px] md:w-[360px] md:h-[270px] bg-[#F0EAD6] p-4 border-2 border-black/10 shadow-[8px_8px_0px_#00000020] -rotate-3">
              <Paperclip />
              <div className="relative w-full h-full">
                {loading ? (
                  <Skeleton className="w-full h-full" />
                ) : upcomingEvent ? (
                  <Image
                    src={upcomingEvent.image}
                    alt={upcomingEvent.name}
                    fill
                    className="object-cover rounded-sm border-2 border-white/50"
                    data-ai-hint="event photo"
                  />
                ) : (
                   <Image
                    src='/images/eve.png'
                    alt="Upcoming event photo"
                    fill
                    className="object-cover rounded-sm border-2 border-white/50"
                    data-ai-hint="event photo"
                  />
                )}
              </div>
            </div> */}
          </motion.div>
        </div>
      <motion.div 
            className="relative flex flex-col items-center text-center md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            >
            {/* <div className="right-0"> */}
              <BoardImage />
            {/* </div> */}
            </motion.div>
        <p className="font-['Rock_Salt'] text-sm text-foreground/70 text-center mt-12">
            made using loads of coffeee...
        </p>
      </div>
    </motion.section>
  );
}
