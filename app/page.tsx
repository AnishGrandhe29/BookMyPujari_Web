'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import PopularServices from '@/components/PopularServices';

import HowItWorks from '@/components/HowItWorks';
import AboutSnippet from '@/components/AboutSnippet';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <PopularServices />
      <HowItWorks />
      <AboutSnippet />
      <ContactForm />
      <Footer />
    </div>
  );
}