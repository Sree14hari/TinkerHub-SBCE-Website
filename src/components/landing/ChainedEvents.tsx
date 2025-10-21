"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { FileText, Calendar, Users } from 'lucide-react';

const eventItems = [
  { icon: FileText, text: "Resume Building Session" },
  { icon: Calendar, text: "Ideathon" },
  { icon: Users, text: "Find your Flock" },
];

export default function ChainedEvents() {
  return (
    <section className="relative w-full bg-[#F7F3EA] pt-12 md:pt-20 pb-24 md:pb-32 -mt-1 overflow-hidden">
      <div className="container relative">

        {/* Chains for desktop */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-12 md:h-20 hidden md:flex justify-between px-16">
            <div className="relative h-full w-8">
                <Image src="/images/chain.png" layout="fill" objectFit="contain" alt="chain" />
            </div>
            <div className="relative h-full w-8">
                 <Image src="/images/chain.png" layout="fill" objectFit="contain" alt="chain" />
            </div>
        </div>

        {/* Chains for mobile */}
        <div className="absolute top-0 left-1/4 w-8 h-12 md:hidden">
            <Image src="/images/chain.png" layout="fill" objectFit="contain" alt="chain" />
        </div>
        <div className="absolute top-0 right-1/4 w-8 h-12 md:hidden">
            <Image src="/images/chain.png" layout="fill" objectFit="contain" alt="chain" />
        </div>

        {/* Event Board */}
        <motion.div
          className="relative mt-8 md:mt-16 bg-black text-white p-6 md:p-10 rounded-2xl max-w-lg mx-auto shadow-2xl"
          initial={{ opacity: 0, y: -20, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="font-['Special_Elite'] text-3xl md:text-4xl text-center font-bold tracking-wider mb-6">
            UPCOMING EVENTS
          </h2>
          <ul className="space-y-4 mb-6">
            {eventItems.map((item, index) => (
              <li key={index} className="flex items-center">
                <div className="w-6 h-6 mr-4 bg-white rounded-full flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-black" />
                </div>
                <span className="font-sans font-semibold text-lg">{item.text}</span>
              </li>
            ))}
          </ul>
          <p className="text-center font-['Rock_Salt'] text-sm text-gray-400">
            More events are on the way...
          </p>
        </motion.div>

         {/* Placard Image */}
        <motion.div
          className="absolute hidden lg:block bottom-[-4rem] right-[10%] w-60 h-60 z-20"
          initial={{ opacity: 0, x: 100, rotate: 15 }}
          whileInView={{ opacity: 1, x: 0, rotate: 5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <Image src="/images/placard.png" layout="fill" objectFit="contain" alt="Placard"/>
        </motion.div>
      </div>
    </section>
  );
}
