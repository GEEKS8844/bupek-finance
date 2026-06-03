import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactMap } from '@/components/contact/ContactMap';
import { FAQSection } from '@/components/contact/FAQSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact BUPEK Finance | Get in Touch',
  description: 'Reach out to BUPEK Finance. Phone, email, WhatsApp, or visit one of our branches across Tanzania.',
};

export default function Contact() {
  return (
    <main className="w-full overflow-x-hidden">
      <ContactInfo />
      <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <ContactForm />
        <ContactMap />
      </div>
      <FAQSection />
    </main>
  );
}