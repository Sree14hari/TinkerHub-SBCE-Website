"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/Tinkerhub-SBCE' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/tinkerhub-sbce/', icon: Linkedin },
];


export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.footer 
      className="w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.0 }}
    >
      <div className="container py-8 text-center">
        <div className="flex justify-center gap-6 mb-4">
          {socialLinks.map((social) => (
            <motion.div
              key={social.name}
              whileHover={{ y: -5, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                <social.icon className="w-8 h-8 text-foreground/70 hover:text-foreground transition-colors" />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="w-24 h-px bg-foreground/20 mx-auto mb-4"></div>
        <div 
          className="relative group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p className="font-['Rock_Salt'] text-sm text-foreground/70 pb-4 transition-opacity duration-300 group-hover:opacity-0">
            made using loads of coffeee...
          </p>
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <p className="font-body text-sm text-foreground/80">
              Looking for footer? It’s 2025.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  ); 
}
