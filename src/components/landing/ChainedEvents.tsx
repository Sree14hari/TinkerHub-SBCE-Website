"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const AdhdIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L9.41 9.41L2 12L9.41 14.59L12 22L14.59 14.59L22 12L14.59 9.41L12 2Z" fill="#FF9900"/>
    </svg>
);

const MakerIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C11.12 4.49 9.17 6.44 6.69 7.32C4.21 8.2 1.56 8.16 0 7C0.88 9.49 2.83 11.44 5.31 12.32C7.79 13.2 10.44 13.16 12 14C12.88 11.51 14.83 9.56 17.31 8.68C19.79 7.8 22.44 7.84 24 9C23.12 6.51 21.17 4.56 18.69 3.68C16.21 2.8 13.56 2.84 12 2Z" fill="#D946EF"/>
    </svg>
);


const eventItems = [
  { icon: AdhdIcon, text: "ADHD കൂട്ടായ്മ - HackARThon" },
  { icon: MakerIcon, text: "Maker Thursday" },
];

export default function ChainedEvents() {
  return (
    <section className="relative w-full pb-32 md:pb-48 -mt-1 overflow-hidden">
      <div className="container relative">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-16 lg:gap-24 relative pt-24 md:pt-32">
          
          {/* Main content block - moved to the left */}
          <motion.div
              className="relative w-full max-w-lg lg:max-w-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
          >
              {/* Chains */}
              <div className="absolute top-0 left-[15%] md:left-[-10%] w-8 h-24 md:h-32 -translate-y-full">
                  <Image src="/images/chain.png" layout="fill" objectFit="contain" alt="chain" className="transform -rotate-6"/>
              </div>
              <div className="absolute top-0 right-[15%] md:right-[40%] w-8 h-24 md:h-32 -translate-y-full">
                  <Image src="/images/chain.png" layout="fill" objectFit="contain" alt="chain" className="transform rotate-6"/>
              </div>

              {/* Event Board */}
              <div className="relative bg-black text-white p-4 md:p-5 rounded-lg shadow-2xl z-10">
                  <h2 className="font-sans text-xl md:text-2xl text-center font-bold tracking-wider">
                      UPCOMING EVENTS
                  </h2>
              </div>

              {/* Events List */}
              <div className="mt-4 space-y-3">
                  {eventItems.map((item, index) => (
                      <motion.div
                          key={index}
                          className="flex items-center justify-between bg-[#FDF0D5] p-3 rounded-lg shadow-md border border-gray-200 cursor-pointer hover:shadow-lg transition-shadow"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      >
                          <div className="flex items-center gap-3">
                              <item.icon />
                              <span className="font-sans font-bold text-base text-gray-800">{item.text}</span>
                          </div>
                          <div className="w-7 h-7 rounded-full border border-gray-400 flex items-center justify-center">
                              <ArrowUpRight className="w-4 h-4 text-gray-600"/>
                          </div>
                      </motion.div>
                  ))}
              </div>

              <p className="font-['Rock_Salt'] text-lg text-foreground/80 text-center mt-8">
                  More events are on the way....
              </p>
          </motion.div>

           {/* Placard Image - moved to the right */}
          <motion.div
            className="hidden lg:block relative w-96 h-96 mt-16 self-end"
            initial={{ opacity: 0, x: 100, rotate: 15 }}
            whileInView={{ opacity: 1, x: 0, rotate: 5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <Image src="/images/board.svg" layout="fill" objectFit="contain" alt="Placard"/>
          </motion.div>
        </div>
        
        <p className="font-['Rock_Salt'] text-sm text-foreground/70 text-center absolute bottom-8 left-1/2 -translate-x-1/2 w-full">
            made using loads of coffeee...
        </p>
      </div>
    </section>
  );
}
