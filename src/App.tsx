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
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white overflow-x-hidden">
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
