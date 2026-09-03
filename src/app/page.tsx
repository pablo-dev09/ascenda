import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { StartupExperience } from '@/components/StartupExperience';

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-navy-950 text-white">
      <Navbar />
      <Hero />
      <StartupExperience />
    </main>
  );
}
