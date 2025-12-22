"use client"

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Facebook, Linkedin, Twitter, Github, Mail } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    twitter: string;
    facebook: string;
    linkedin: string;
  }
}

interface PeoplePageLayoutProps {
  title: string;
  members: Member[];
}

export const MemberCard = ({ member, index }: { member: Member; index: number }) => {
  const memberImage = PlaceHolderImages.find(p => p.id === member.image);
  const initials = member.name.split(' ').map(n => n[0]).join('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-card/50 hover:shadow-2xl hover:border-primary/20 hover:-translate-y-2 flex flex-col items-center text-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative mb-6">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full opacity-0 group-hover:opacity-75 blur transition-opacity duration-300" />
        <Avatar className="h-32 w-32 relative border-4 border-background ring-2 ring-transparent group-hover:ring-primary/50 transition-all duration-300 shadow-xl">
          {memberImage && (
            <AvatarImage src={memberImage.imageUrl} alt={member.name} data-ai-hint={memberImage.imageHint} className="object-cover" />
          )}
          <AvatarFallback className="text-2xl font-bold bg-muted">{initials}</AvatarFallback>
        </Avatar>
      </div>

      <div className="relative z-10 w-full">
        <h3 className="font-bold text-xl mb-1 text-foreground group-hover:text-primary transition-colors">{member.name}</h3>
        <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-4">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider">{member.role}</p>
        </div>
        
        <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
            {member.bio}
        </p>

        <div className="flex justify-center gap-4 pt-4 border-t border-white/5">
          {member.socials.twitter !== "#" && (
              <Link href={member.socials.twitter} className="text-muted-foreground hover:text-blue-400 hover:scale-110 transition-all">
                <Twitter className="h-5 w-5" />
              </Link>
          )}
          {member.socials.linkedin !== "#" && (
              <Link href={member.socials.linkedin} className="text-muted-foreground hover:text-blue-600 hover:scale-110 transition-all">
                <Linkedin className="h-5 w-5" />
              </Link>
          )}
          {member.socials.facebook !== "#" && (
             <Link href={member.socials.facebook} className="text-muted-foreground hover:text-blue-500 hover:scale-110 transition-all">
                 <Facebook className="h-5 w-5" />
             </Link>
          )}
           <Link href="#" className="text-muted-foreground hover:text-primary hover:scale-110 transition-all">
             <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default function PeoplePageLayout({ title, members }: PeoplePageLayoutProps) {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Dynamic Hero Section */}
        <section className="relative pt-32 pb-10 md:pt-40 md:pb-14 overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -z-10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto flex flex-col items-center gap-4"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-xs font-bold tracking-wider uppercase">Community First</span>
                    </div>
                    
                    <h1 className="font-['Special_Elite'] text-4xl md:text-5xl font-bold tracking-wider relative inline-block">
                        {title.toUpperCase()}
                        <span className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-sm"></span>
                    </h1>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Meet the passionate individuals who are driving our community forward. A mix of students, creators, and innovators building the future together.
                    </p>
                </motion.div>
            </div>
        </section>

        <section className="py-8 md:py-12 bg-gradient-to-b from-background to-secondary/20">
          <div className="container">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {members.map((member, index) => (
                <MemberCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
