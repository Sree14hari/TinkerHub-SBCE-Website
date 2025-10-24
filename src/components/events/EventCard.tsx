"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export interface Event {
  id: number;
  title: string;
  image: string;
}

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="relative group w-full h-full">
      <motion.div
        className="relative w-full h-full bg-white p-4 shadow-lg border-t-2 border-gray-200 transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
        style={{ 
          backgroundImage: "url('/images/notebook-paper.svg')", 
          backgroundSize: 'cover',
          rotate: Math.random() > 0.5 ? 1.5 : -1.5,
        }}
        whileHover={{
          scale: 1.02,
          rotate: 0
        }}
      >
        <div className="relative w-full aspect-[16/9] overflow-hidden border-2 border-gray-200">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint="event photo"
          />
        </div>
        <h3 className="font-['Rock_Salt'] text-center text-lg mt-4 text-gray-800">{event.title}</h3>
      </motion.div>
    </div>
  );
};
