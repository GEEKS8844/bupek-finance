import { CalculatorSection } from '@/components/calculator/CalculatorSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loan Calculator | BUPEK Finance',
  description: 'Calculate your monthly loan payments. Enter loan amount, interest rate, and duration to see detailed breakdown.',
};

export default function Calculator() {
  return (
    <main className="w-full overflow-x-hidden bg-[#F8FAFC] min-h-screen">
      <CalculatorSection />
    </main>
  );
}