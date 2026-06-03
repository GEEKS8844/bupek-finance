import { AboutHero } from '@/components/about/AboutHero';
import { MissionVision } from '@/components/about/MissionVision';
import { CoreValues } from '@/components/about/CoreValues';
import { LeadershipTeam } from '@/components/about/LeadershipTeam';
import { GrowthTimeline } from '@/components/about/GrowthTimeline';
import { CorporateResponsibility } from '@/components/about/CorporateResponsibility';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About BUPEK Finance | Our Story, Mission & Values',
  description: 'Learn about BUPEK Finance, our mission to empower businesses, core values, leadership team, and corporate responsibility initiatives across Tanzania.',
};

export default function About() {
  return (
    <main className="w-full overflow-x-hidden">
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <LeadershipTeam />
      <GrowthTimeline />
      <CorporateResponsibility />
    </main>
  );
}