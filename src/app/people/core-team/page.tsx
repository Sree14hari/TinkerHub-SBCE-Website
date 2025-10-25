
import PeoplePageLayout, { MemberCard } from '@/components/people/PeoplePageLayout';
import { coreTeamData } from '@/lib/data';
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export default function CoreTeamPage() {
  const leadMember = coreTeamData.length > 0 ? coreTeamData[0] : null;
  const otherMembers = coreTeamData.slice(1);

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Core Team</h1>
            </div>
            
            {leadMember && (
              <div className="mb-12 flex justify-center">
                <MemberCard member={leadMember} />
              </div>
            )}
            
            {otherMembers.length > 0 && (
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {otherMembers.map((member) => (
                  <MemberCard key={member.id} member={member} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
