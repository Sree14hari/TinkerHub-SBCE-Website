
import PeoplePageLayout from '@/components/people/PeoplePageLayout';
import { coreTeamData } from '@/lib/data';

export default function CoreTeamPage() {
  return (
    <PeoplePageLayout title="Core Team" members={coreTeamData} />
  );
}
