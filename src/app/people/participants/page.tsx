
import PeoplePageLayout from '@/components/people/PeoplePageLayout';
import { participantsData } from '@/lib/data';

export default function ParticipantsPage() {
  return (
    <PeoplePageLayout title="Participants" members={participantsData} />
  );
}
