import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Achievements } from '@/components/Achievements';
import { Contact } from '@/components/Contact';

export default function Index() {
  return (
    <main className="w-full bg-white dark:bg-slate-950">
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  );
}
