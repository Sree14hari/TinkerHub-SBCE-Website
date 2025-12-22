"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X, ChevronDown, User, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Events', href: '/events' },
  { label: 'ResourceHub', href: '/resourceHub' },
]

const peopleLinks = [
  { label: 'Core Team', href: '/people/core-team', icon: Star },
  { label: 'Members', href: '/people/members', icon: User },
  { label: 'Participants', href: '/people/participants', icon: Users },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null)
  const [isPeopleOpen, setIsPeopleOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] flex justify-center transition-all duration-300 pointer-events-none",
          isScrolled ? "pt-4" : "pt-6"
        )}
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={cn(
            "pointer-events-auto relative flex items-center justify-between px-3 pr-2 rounded-full border border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-500 ease-in-out",
            isScrolled 
                ? "bg-black/60 w-[90%] md:w-[700px] h-14 py-2" 
                : "bg-black/40 w-[95%] md:w-[1000px] h-16 py-3"
          )}
        >
            {/* Logo Section */}
          <Link href="/" className="ml-4 flex items-center gap-2 group">
            <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/images/logo.png" 
                alt="Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <span className="font-['Special_Elite'] font-bold text-lg md:text-xl text-white tracking-wider group-hover:text-primary transition-colors">
                TinkerHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 mx-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.label)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                {hoveredLink === link.label && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.label}
              </Link>
            ))}

            {/* People Dropdown */}
            <div
              className="relative px-4 py-2"
              onMouseEnter={() => {
                setHoveredLink('People')
                setIsPeopleOpen(true)
              }}
              onMouseLeave={() => {
                setHoveredLink(null)
                setIsPeopleOpen(false)
              }}
            >
               {hoveredLink === 'People' && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              <div className="relative z-10 flex items-center gap-1 cursor-pointer text-sm font-medium text-white/90">
                People
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isPeopleOpen && "rotate-180")} />
              </div>

              <AnimatePresence>
                {isPeopleOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-48 p-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden"
                  >
                    {peopleLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="flex items-center gap-3 w-full px-3 py-2 text-sm text-white/80 rounded-xl hover:bg-white/10 hover:text-white transition-all"
                      >
                         <link.icon className="w-4 h-4 text-primary" />
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block mr-1">
             <Button 
                size="sm" 
                className="rounded-full px-6 bg-white text-black hover:bg-white/90 font-bold transition-all hover:scale-105"
             >
                Join Us
             </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors mr-1"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xl md:hidden flex flex-col pt-32 px-6"
          >
            <nav className="flex flex-col gap-6 items-center">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-bold text-white hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
               
               <div className="w-full h-px bg-white/10 my-2" />
               
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col items-center gap-4"
                >
                   <span className="text-sm uppercase tracking-widest text-white/50">People</span>
                   {peopleLinks.map((link) => (
                       <Link
                        key={link.label}
                        href={link.href}
                         onClick={() => setIsMobileMenuOpen(false)}
                        className="text-xl font-medium text-white/80 hover:text-primary"
                       >
                           {link.label}
                       </Link>
                   ))}
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
               >
                   <Button size="lg" className="rounded-full px-8 text-lg">
                       Join the Community
                   </Button>
               </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
