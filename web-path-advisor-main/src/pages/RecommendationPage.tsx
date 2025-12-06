
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RecommendationForm from '@/components/RecommendationForm';

const RecommendationPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-edu-bg">
      <Header />
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-edu-text">
              Personalized Course Recommendations
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Fill out the form below and our AI will analyze your preferences to recommend the best courses for you.
            </p>
          </div>
          
          <RecommendationForm />
          
          <div className="mt-16 bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-edu-text">How Our Recommendation Engine Works</h2>
            <p className="text-slate-600 mb-4">
              Our course recommendation system uses a machine learning model built with Python to analyze several factors:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Your selected learning track (Frontend, MERN Stack, Android, or Data Analytics)</li>
              <li>Your current experience level in the selected field</li>
              <li>How much time you can commit to learning each week</li>
              <li>Your specific learning goals and career objectives</li>
            </ul>
            <p className="mt-4 text-slate-600">
              The model then compares your profile against thousands of courses to find the best matches for your unique situation.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RecommendationPage;
