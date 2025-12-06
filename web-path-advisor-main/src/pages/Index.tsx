
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-edu-bg">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-edu-text">Ready to Find Your Perfect Course?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Learners-Bay Course Recommendation Model will analyze your preferences and suggest the best learning path for you.
            </p>
            <a 
              href="/recommendation" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-edu-purple hover:bg-edu-darkblue transition-colors"
            >
              Get Started Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
