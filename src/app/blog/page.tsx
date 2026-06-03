import { BlogHero } from '@/components/blog/BlogHero';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & News | BUPEK Finance',
  description: 'Stay informed with financial education, entrepreneurship tips, and BUPEK Finance company updates.',
};

export default function Blog() {
  return (
    <main className="w-full overflow-x-hidden">
      <BlogHero />
      <BlogGrid />
    </main>
  );
}