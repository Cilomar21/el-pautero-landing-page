
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemsSolutions from '@/components/ProblemsSolutions';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <ProblemsSolutions />
      <Services />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
