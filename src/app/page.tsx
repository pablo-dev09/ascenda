import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { MiniIndicators } from '@/components/MiniIndicators';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionsSection } from '@/components/SolutionsSection';
import { WhyAscenda } from '@/components/WhyAscenda';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { TechSection } from '@/components/TechSection';
import { ResultsSection } from '@/components/ResultsSection';
import { AboutSection } from '@/components/AboutSection';
import { ComparisonSection } from '@/components/ComparisonSection';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-navy-950 text-white">
      <Navbar />
      <Hero />
      <MiniIndicators />
      <ProblemSection />
      <SolutionsSection />
      <WhyAscenda />
      <ProcessTimeline />
      <TechSection />
      <ResultsSection />
      <AboutSection />
      <ComparisonSection />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
