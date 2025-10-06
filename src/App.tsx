import { useSmoothScroll } from './hooks/useSmoothScroll';
import { LanguageProvider } from './contexts/LanguageContext';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import PoC from './components/PoC';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  useSmoothScroll();

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0B1220] overflow-x-hidden">
        <LanguageSwitcher />
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <PoC />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
