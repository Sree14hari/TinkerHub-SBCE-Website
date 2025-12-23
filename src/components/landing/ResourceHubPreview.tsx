"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import TiltBanner from "@/components/resourceHub/TiltBanner"

export default function ResourceHubPreview() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12">
          
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <TiltBanner
                text='RESOURCE HUB'
                rotate={-2}
                skewX={-4}
                bg='#0a0a0a'
                color='#ffffff'
                px={40}
                py={12}
                radius={2}
                letterStagger={0.04}
                letterPop={1.1}
                className="text-3xl md:text-5xl"
            />
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 max-w-6xl w-full">
            
            {/* Description Text */}
            <motion.div 
                className="flex-1 space-y-6 text-center lg:text-left order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h3 className="font-['Special_Elite'] text-2xl md:text-4xl font-bold leading-tight">
                    Master Key Technologies
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                    Dive into our curated collection of resources. Whether you are looking to master Full Stack Development, explore Machine Learning, or get creative with Design tools, we have structured learning paths for you.
                </p>
                
                <div className="pt-4 flex justify-center lg:justify-start">
                    <Link href="/resourceHub">
                        <button className="px-8 py-3 bg-black text-white font-bold rounded-full text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-xl active:scale-95 border-2 border-transparent hover:border-black hover:bg-white hover:text-black">
                            Explore Resources
                        </button>
                    </Link>
                </div>
            </motion.div>

            {/* Visual/Image */}
            <motion.div 
                className="hidden lg:block flex-1 relative order-1 lg:order-2"
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <div className="relative w-full max-w-[500px] aspect-[4/3] mx-auto">
                     {/* Placeholder for a resource hub representative image */}
                     {/* We can use the collage card style or just a nice image composition */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl transform rotate-3 scale-95 border border-black/10 backdrop-blur-sm z-0"></div>
                    <div className="absolute inset-0 bg-white/50 rounded-3xl transform -rotate-2 scale-100 border border-black/10 backdrop-blur-md z-10 overflow-hidden flex items-center justify-center p-8">
                         <div className="grid grid-cols-2 gap-4 w-full h-full">
                            <div className="bg-yellow-200 rounded-2xl flex items-center justify-center font-['Special_Elite'] text-2xl font-bold shadow-sm transform -rotate-2 hover:rotate-0 transition-transform">JS</div>
                            <div className="bg-blue-200 rounded-2xl flex items-center justify-center font-['Special_Elite'] text-2xl font-bold shadow-sm transform rotate-3 hover:rotate-0 transition-transform">PY</div>
                            <div className="bg-red-200 rounded-2xl flex items-center justify-center font-['Special_Elite'] text-2xl font-bold shadow-sm transform rotate-1 hover:rotate-0 transition-transform">AI</div>
                            <div className="bg-green-200 rounded-2xl flex items-center justify-center font-['Special_Elite'] text-2xl font-bold shadow-sm transform -rotate-3 hover:rotate-0 transition-transform">UX</div>
                         </div>
                    </div>
                </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
