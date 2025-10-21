"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import UpcomingEvents from './UpcomingEvents';
import Placard from './Placard';


type ChainImageProps = {
    className?: string;
};

const MissionIcon = () => (
    <Image 
        src="/logos/dart.png" 
        alt="Mission Icon" 
        width={80} 
        height={80} 
        className="w-16 h-16 md:w-20 md:h-20"
    />
);

const VisionIcon = () => (
    <Image 
        src="/logos/eye.png" 
        alt="Vision Icon" 
        width={80} 
        height={80} 
        className="w-16 h-16 md:w-20 md:h-20"
    />
);

const ChainImage = ({className}: ChainImageProps) => (
    <Image
        src="/images/chain.png"
        alt="Chain Decoration"
        width={200}
        height={400}
        className={`absolute hidden md:block w-8 ${className}`}
    />
);

export default function MissionVision() {
  return (
    <motion.section 
      id="mission-vision"
      className="relative !py-12 md:!py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative text-center py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden bg-[#F7F3EA]">

        <div className="relative max-w-5xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-16 md:gap-12 items-start">
            <motion.div 
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="flex flex-col items-center gap-4 mb-6 md:flex-row">
                <MissionIcon />
                <h2 className="font-['Special_Elite'] text-4xl md:text-5xl font-bold tracking-wider">MISSION</h2>
                </div>
                <div className="w-full md:w-[300px]">
                <p className="relative md:pl-24 mb-6 font-sans font-bold text-lg md:text-left text-foreground/80 leading-relaxed">
                    By 2025, cultivate a thriving maker  culture in Kerala to ignite creativity and equip 10,000 young makers with the skills to innovate and shape the future.
                </p>
                </div>
            </motion.div>
            
            <motion.div 
                className="relative flex flex-col items-center text-center md:pl-12"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                >
                <div className="flex flex-col items-center gap-4 mb-6 md:flex-row">
                <VisionIcon />
                <h2 className="font-['Special_Elite'] text-4xl md:text-5xl font-bold tracking-wider">VISION</h2>
                </div>
                <div className="w-full md:w-[340px]">
                <p className="relative pl-3 md:pl-28 font-bold font-sans text-lg md:text-left text-foreground/80 leading-relaxed">
                    Everyone has access to the knowledge required to set the course for a better future
                </p>
                </div>
            </motion.div>
            </div>
            
            {/* Chains and Events Section */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-full max-w-xl md:max-w-2xl lg:max-w-4xl px-4 md:px-0">
                <div className="relative mt-8 md:mt-0">
                    <ChainImage className="left-[10%] md:left-[15%] top-[-250px] h-[260px]" />
                    <ChainImage className="right-[10%] md:right-[15%] top-[-250px] h-[260px]" />
                    <UpcomingEvents />
                </div>
            </div>
        </div>

        <Placard />

        <p className="font-['Rock_Salt'] text-sm text-foreground/70 text-center mt-64 md:mt-72">
            made using loads of coffeee...
        </p>
      </div>
    </motion.section>
  );
}
