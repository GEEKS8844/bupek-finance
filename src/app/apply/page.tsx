import { ApplicationWizard } from '@/components/application/ApplicationWizard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loan Application | BUPEK Finance',
  description: 'Apply for a loan with our simple multi-step application form. Quick, secure, and transparent process.',
};

export default function Apply() {
  return (
    <main className="w-full overflow-x-hidden bg-[#F8FAFC] min-h-screen pt-20">
      <ApplicationWizard />
    </main>
  );
}