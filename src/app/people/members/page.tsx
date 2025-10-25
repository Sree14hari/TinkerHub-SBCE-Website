
import PeoplePageLayout from '@/components/people/PeoplePageLayout';
import { membersData } from '@/lib/data';

export default function MembersPage() {
  return (
    <PeoplePageLayout title="Members" members={membersData} />
  );
}
