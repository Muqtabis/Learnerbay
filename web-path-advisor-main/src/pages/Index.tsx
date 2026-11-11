import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TracksOverviewSection from "@/components/TracksOverviewSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-edu-bg">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <TracksOverviewSection />

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-edu-text">
              Ready to Find Your Next Course?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Answer four quick questions about your experience level, weekly availability, and career goals to see tailored course recommendations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/recommendation"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-edu-purple hover:bg-edu-darkblue transition-colors"
              >
                Start Course Finder
              </Link>
              <Link
                to="/resources"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-edu-text bg-white hover:bg-slate-50 transition-colors"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
