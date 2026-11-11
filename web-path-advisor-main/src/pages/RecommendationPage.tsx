import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RecommendationForm from "@/components/RecommendationForm";

const RecommendationPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-edu-bg">
      <Header />
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-edu-text">
              Personalized Course Finder
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Tell us your target track, experience level, and weekly study pace to rank the best curated learning paths for you.
            </p>
          </div>

          <RecommendationForm />

          <div className="mt-16 bg-white p-6 md:p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold mb-4 text-edu-text">
              How Our Recommendation Scoring Works
            </h2>
            <p className="text-slate-600 mb-4">
              Your preferences are stored only in your browser and compared against our curated course library across four dimensions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Selected specialization track (Frontend, MERN Stack, Android, or Data Analytics)</li>
              <li>Skill-level alignment (Beginner, Intermediate, or Advanced progression)</li>
              <li>Weekly time commitment relative to course intensity</li>
              <li>Specific learning goals such as portfolio building, fundamentals, or job readiness</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RecommendationPage;
