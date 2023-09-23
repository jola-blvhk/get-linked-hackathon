import { Button, LPFirstSection } from '@/components';
import Footer from '@/components/Footer';
import { LPSecondSection } from '@/components/LPSecondSection';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <LPFirstSection />
      <LPSecondSection />
      <Footer />
    </>
  );
}
