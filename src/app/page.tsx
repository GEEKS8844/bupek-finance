import { HeroSection } from '@/components/home/HeroSection';
import { CompanyIntroduction } from '@/components/home/CompanyIntroduction';
import { WhyChooseBupek } from '@/components/home/WhyChooseBupek';
import { LoanProductsShowcase } from '@/components/home/LoanProductsShowcase';
import { ImpactStatistics } from '@/components/home/ImpactStatistics';
import { SuccessStories } from '@/components/home/SuccessStories';
import { BranchNetwork } from '@/components/home/BranchNetwork';
import { LatestInsights } from '@/components/home/LatestInsights';
import { FinalCTA } from '@/components/home/FinalCTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BUPEK Finance | Premium Fintech Solutions for Growing Businesses',
  description: 'Empowering businesses and communities through accessible financial solutions. Fast loan processing, flexible repayment plans, and dedicated customer support.',
  keywords: 'microfinance, business loans, SME financing, agricultural loans, Tanzania',
};

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />
      <CompanyIntroduction />
      <WhyChooseBupek />
      <LoanProductsShowcase />
      <ImpactStatistics />
      <SuccessStories />
      <BranchNetwork />
      <LatestInsights />
      <FinalCTA />
    </main>
  );
}