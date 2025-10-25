
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
}

interface PeoplePageLayoutProps {
  title: string;
  members: Member[];
}

export const MemberCard = ({ member }: { member: Member }) => {
  const memberImage = PlaceHolderImages.find(p => p.id === member.image);
  const initials = member.name.split(' ').map(n => n[0]).join('');

  return (
    <div className="text-center transition-transform duration-300 hover:scale-105">
      <Avatar className="h-32 w-32 mx-auto mb-4 border-4 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        {memberImage && (
          <AvatarImage src={memberImage.imageUrl} alt={member.name} data-ai-hint={memberImage.imageHint} className="object-cover" />
        )}
        <AvatarFallback className="text-3xl">{initials}</AvatarFallback>
      </Avatar>
      <h3 className="font-bold text-lg">{member.name}</h3>
      <p className="text-primary font-medium">{member.role}</p>
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
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
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
