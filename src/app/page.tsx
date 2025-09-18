import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
    </Layout>
  );
}