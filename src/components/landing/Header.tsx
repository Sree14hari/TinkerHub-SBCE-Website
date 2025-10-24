"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ChevronDown, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Events', href: '/events' },
  { label: 'ResourceHub', href: '/resourceHub' },
];

const peopleLinks = [
  { label: 'Core Team', href: '#' },
  { label: 'Members', href: '#' },
  { label: 'Participants', href: '#' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isPeopleMenuOpen, setIsPeopleMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/images/nav.png" alt="TinkerHub Logo" width={150} height={40} />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.label)}
              onMouseLeave={() => setHoveredLink(null)}
              className={cn(
                "relative text-lg font-bold text-foreground transition-colors",
                link.label === 'Events'
                  ? "hover:text-red-500"
                  : link.label === 'ResourceHub'
                  ? "hover:text-green-500"
                  : "hover:text-primary/80"
              )}
            >
              {link.label}
              {hoveredLink === link.label && (
                <motion.div
                  className={cn(
                    "absolute bottom-[-4px] left-0 h-0.5 w-full",
                    link.label === 'Events' ? "bg-red-500" :
                    link.label === 'ResourceHub' ? "bg-green-500" :
                    "bg-primary"
                  )}
                  layoutId="underline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </Link>
          ))}
          <DropdownMenu open={isPeopleMenuOpen} onOpenChange={setIsPeopleMenuOpen}>
            <DropdownMenuTrigger asChild>
              <div 
                className="relative flex items-center gap-1 cursor-pointer"
                onMouseEnter={() => { setHoveredLink('People'); setIsPeopleMenuOpen(true); }}
                onMouseLeave={() => { setHoveredLink(null); setIsPeopleMenuOpen(false); }}
              >
                <span className="text-lg font-bold text-foreground transition-colors hover:text-blue-500">
                  People
                </span>
                <ChevronDown className={cn("h-5 w-5 text-foreground transition-transform duration-200", isPeopleMenuOpen && "rotate-180")} />
                {hoveredLink === 'People' && (
                  <motion.div
                    className="absolute bottom-[-4px] left-0 h-0.5 w-full bg-blue-500"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              className="bg-white"
              onMouseEnter={() => setIsPeopleMenuOpen(true)}
              onMouseLeave={() => setIsPeopleMenuOpen(false)}
            >
              {peopleLinks.map((link) => (
                <DropdownMenuItem key={link.label} asChild>
                  <Link href={link.href} className="text-foreground hover:bg-gray-100">{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
           <Link
              href="#"
              onMouseEnter={() => setHoveredLink('Join Us')}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative text-lg font-bold text-foreground transition-colors hover:text-cyan-500"
            >
              Join Us
              {hoveredLink === 'Join Us' && (
                <motion.div
                  className="absolute bottom-[-4px] left-0 h-0.5 w-full bg-cyan-500"
                  layoutId="underline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </Link>
        </nav>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full h-full bg-background/80 backdrop-blur-lg border-0 flex flex-col items-center justify-center p-0">
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <div className="flex h-full flex-col items-center justify-center p-6">
                <nav className="flex flex-col gap-8 text-center">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={cn(
                        "text-4xl font-black text-foreground transition-colors",
                        link.label === 'Events'
                          ? "hover:text-red-500"
                          : link.label === 'ResourceHub'
                          ? "hover:text-green-500"
                          : "hover:text-primary/80"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="text-4xl font-black text-foreground">People</div>
                   {peopleLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="text-2xl font-bold text-muted-foreground hover:text-blue-500"
                    >
                      {link.label}
                    </Link>
                  ))}
                   <Link
                      href="#"
                      onClick={closeMobileMenu}
                      className="text-4xl font-black text-foreground transition-colors hover:text-cyan-500"
                    >
                      Join Us
                    </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
