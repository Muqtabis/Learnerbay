
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-edu-bg">
      <Header />
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-edu-text">
              About Learners-Bay Course Recommendation Model
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Using machine learning to find the perfect educational path for your career goals.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-edu-text">Our Mission</h2>
            <p className="text-slate-600 mb-6">
            Learners-Bay Course Recommendation Model was created with a simple mission: to help learners navigate the overwhelming world of online education by providing personalized course recommendations that truly match their needs, goals, and learning styles.
            </p>
            <p className="text-slate-600">
              We believe that the right education can transform careers and lives, but finding the perfect courses shouldn't require hours of research. Our AI-powered recommendation engine streamlines this process, connecting you with the best learning resources in Frontend Development, MERN Stack, Android Development, and Data Analytics.
            </p>
          </div>
          
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4 text-edu-text">How We Select Courses</h2>
              <p className="text-slate-600 mb-4">
                We maintain a curated database of thousands of courses that are evaluated based on:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
                <li>Content quality and comprehensiveness</li>
                <li>Instructor expertise and teaching ability</li>
                <li>Course structure and learning approach</li>
                <li>Student reviews and success outcomes</li>
                <li>Value relative to cost and time investment</li>
              </ul>
              <p className="text-slate-600">
                This ensures that our recommendations always include high-quality learning resources.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-edu-blue to-edu-purple rounded-lg shadow-md p-8 text-white text-center mb-12">
            <h2 className="text-2xl font-semibold mb-4">Ready to Find Your Perfect Learning Path?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Let our AI-powered recommendation engine analyze your preferences and suggest the best courses for your goals and experience level.
            </p>
            <Button asChild size="lg" className="bg-white text-edu-purple hover:bg-slate-100">
              <Link to="/recommendation">Get Personalized Recommendations</Link>
            </Button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-6 text-edu-text">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2 text-edu-text">How does the recommendation system work?</h3>
                <p className="text-slate-600">
                  Our Python-based machine learning model analyzes your inputs regarding experience level, time availability, learning goals, and preferred track. It then compares these factors against our course database to find the best matches for your specific situation.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2 text-edu-text">Are the course recommendations free?</h3>
                <p className="text-slate-600">
                  Yes, our recommendation service is completely free. We do not charge for suggesting courses. However, the courses themselves may be free or paid depending on the provider.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2 text-edu-text">How often are course recommendations updated?</h3>
                <p className="text-slate-600">
                  We regularly update our course database and refine our recommendation algorithm to ensure you receive the most current and relevant suggestions.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2 text-edu-text">Can I get recommendations for other fields beyond the four tracks offered?</h3>
                <p className="text-slate-600">
                  Currently, we specialize in Frontend Development, MERN Stack, Android Development, and Data Analytics. We plan to expand to more fields in the future based on user demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
