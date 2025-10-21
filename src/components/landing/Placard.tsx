"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const Placard = () => (
    <motion.div
      className="absolute bottom-10 md:bottom-20 right-0 md:right-[5%] w-48 h-64 md:w-64 md:h-80"
      initial={{ opacity: 0, x: 100, rotate: 15 }}
      whileInView={{ opacity: 1, x: 0, rotate: 5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.5, type: 'spring' }}
    >
        <Image
            src="/images/board.svg"
            alt="Hand holding a placard"
            fill
            className="object-contain"
            data-ai-hint="hand holding sign"
        />
    </motion.div>
);

export default Placard;
