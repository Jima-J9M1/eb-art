import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import ContactSection from '@/components/contact/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-background w-full ">
      <Header />
      <main>
        <Hero />
        <Services />
        <PortfolioGrid />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;