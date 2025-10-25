
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

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

export const MemberCard = ({ member }: { member: Member }) => {
  const memberImage = PlaceHolderImages.find(p => p.id === member.image);
  const initials = member.name.split(' ').map(n => n[0]).join('');

  return (
    <div className="text-center transition-transform duration-300 hover:scale-105 group">
      <Avatar className="h-32 w-32 mx-auto mb-4 border-4 border-transparent rounded-full shadow-lg group-hover:shadow-xl transition-shadow">
        {memberImage && (
          <AvatarImage src={memberImage.imageUrl} alt={member.name} data-ai-hint={memberImage.imageHint} className="object-cover" />
        )}
        <AvatarFallback className="text-3xl">{initials}</AvatarFallback>
      </Avatar>
      <h3 className="font-bold text-lg">{member.name}</h3>
      <p className="text-primary font-medium">{member.role}</p>
      <p className="text-sm text-muted-foreground mt-2 max-w-xs mx-auto">{member.bio}</p>
      <div className="flex justify-center gap-4 mt-4">
        <Link href={member.socials.twitter}><Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" /></Link>
        <Link href={member.socials.facebook}><Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" /></Link>
        <Link href={member.socials.linkedin}><Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" /></Link>
      </div>
    </div>
  );
};

export default function PeoplePageLayout({ title, members }: PeoplePageLayoutProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <p className="text-primary font-semibold mb-2">We're Hiring!</p>
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Let's Meet Our Team</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Gravida in fermentum et sollicitudin ac orci phasellus egestas. Molestie a iaculis at erat pellentesque adipiscing commodo.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {members.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
