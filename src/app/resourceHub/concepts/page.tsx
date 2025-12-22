

"use client"

import { useState } from "react"
import Image from "next/image"
import TiltBanner from "@/components/resourceHub/TiltBanner"
import { Search, SlidersHorizontal, Menu } from "lucide-react"
import { motion } from "framer-motion"

const concepts = [
  { id: 1, title: "CHECKOUT UI/UX", image: "/images/image.png" },
  { id: 2, title: "CHECKOUT UI/UX", image: "/images/image.png" },
  { id: 3, title: "CHECKOUT UI/UX", image: "/images/image.png" },
  { id: 4, title: "CHECKOUT UI/UX", image: "/images/image.png" },
  { id: 5, title: "CHECKOUT UI/UX", image: "/images/image.png" },
  { id: 6, title: "CHECKOUT UI/UX", image: "/images/image.png" },
]

const filters = [
  { label: "Filter", color: "bg-gray-300" },
  { label: "Language", color: "bg-red-500 text-white" },
  { label: "Latest", color: "bg-blue-500 text-white" },
  { label: "Oldest", color: "bg-teal-700 text-white" },
  { label: "Most viewed", color: "bg-yellow-400" },
  { label: "Top", color: "bg-blue-600 text-white" },
]

const ConceptCard = ({ title, image }: { title: string; image: string }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="relative aspect-square w-full max-w-md mx-auto flex items-center justify-center"
  >
    {/* Content Layer (Behind the overlay) */}
    <div className="absolute inset-6 z-0 bg-white/80 overflow-hidden">
        <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover opacity-90 mix-blend-multiply transition-transform duration-500 hover:scale-110" 
        />
    </div>

    {/* Overlay Image (The Torn Paper Frame) */}
    <div className="absolute inset-0 z-10 pointer-events-none">
        <Image 
            src="/images/resource_hub/domain/overlay.png" 
            alt="Paper Overlay" 
            fill 
            className="object-contain drop-shadow-2xl" 
        />
    </div>

    {/* Label Layer */}
    <div className="absolute bottom-[18%] left-0 right-0 z-20 flex justify-center">
       <div className="bg-black/95 text-white px-4 py-1.5 transform -rotate-2 shadow-xl border border-white/10 max-w-[85%] text-center backdrop-blur-sm">
         <span className="font-['Special_Elite'] font-bold tracking-widest text-base md:text-lg uppercase truncate block">
           {title}
         </span>
       </div>
    </div>
  </motion.div>
)


export default function ConceptsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 container mx-auto px-4 md:px-8">
      
      {/* Header Banner */}
      <div className="flex justify-center mb-12">
        <TiltBanner
          text="CONCEPT"
          rotate={-2}
          bg="#000"
          color="#fff"
          px={60}
          py={20}
          className="font-['Special_Elite'] text-4xl"
        />
      </div>

      {/* Search Bar Section */}
      <div className="max-w-4xl mx-auto mb-8 relative z-10">
        <div className="relative flex items-center">
            {/* Robot Icon */}
            <div className="absolute -left-4 md:-left-16 -top-12 md:-top-16 w-24 h-24 md:w-32 md:h-32 pointer-events-none z-20">
                 <Image src="/images/tinker.png" alt="Robot" fill className="object-contain" />
            </div>

            {/* Search Input Container */}
            <div className="w-full bg-gray-200/80 backdrop-blur-sm rounded-full pl-16 md:pl-20 pr-4 py-3 md:py-4 flex items-center shadow-inner border border-white/50">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500 font-medium" 
                />
                <Search className="w-6 h-6 text-gray-600 mr-4 cursor-pointer" />
                <div className="border-l border-gray-400 h-6 mx-2" />
                <Menu className="w-6 h-6 text-black cursor-pointer ml-2" />
            </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto">
        {filters.map((filter, idx) => (
            <button 
                key={idx}
                className={`px-6 py-1.5 rounded-full text-sm font-bold shadow-md border border-white/20 transition-transform hover:scale-105 active:scale-95 ${filter.color}`}
            >
                {filter.label}
            </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-20 max-w-5xl mx-auto">
        {concepts.map((concept) => (
            <ConceptCard key={concept.id} title={concept.title} image={concept.image} />
        ))}
      </div>
      
    </div>
  )
}
