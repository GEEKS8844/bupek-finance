import { ProductsHero } from '@/components/products/ProductsHero';
import { ProductComparison } from '@/components/products/ProductComparison';
import { ProductDetails } from '@/components/products/ProductDetails';
import { EligibilityGuide } from '@/components/products/EligibilityGuide';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loan Products | BUPEK Finance',
  description: 'Explore our diverse loan products: Business Loans, SME Financing, Agricultural Loans, Emergency Loans, Group Lending, and Asset Financing.',
};

export default function Products() {
  return (
    <main className="w-full overflow-x-hidden">
      <ProductsHero />
      <ProductDetails />
      <ProductComparison />
      <EligibilityGuide />
    </main>
  );
}