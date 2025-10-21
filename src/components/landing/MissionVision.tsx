"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

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
        height={200}
        className={`absolute w-7 h-[92%] md:w-8 md:h-[80%] ${className}`}
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
      <div className="class=relative text-center py-24 md:py-32 min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#F7F3EA]">

        <ChainImage className="md:left-[20%] left-[2%]" />
        <ChainImage className="md:left-[800] right-[1%]" />

        <div className="grid md:grid-cols-2 gap-16 md:gap-12 items-start max-w-5xl mx-auto">
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
            <div className="w-[300]">
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
            <div className="w-[340]">
              <p className="relative pl-3 md:pl-28 font-bold font-sans text-lg md:text-left text-foreground/80 leading-relaxed">
                Everyone has access to the knowledge required to set the course for a better future
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}