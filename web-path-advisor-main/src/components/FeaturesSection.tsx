
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      title: "AI-Powered Recommendations",
      description: "Our machine learning model analyzes your goals, experience level, and learning style to provide personalized course recommendations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-edu-purple">
          <path d="M12 2a8 8 0 0 0-8 8c0 1.4.4 2.5 1 3.5.3.5.7 1 1 1.5.3.4.6.8 1 1.2l4 4 7-7c4-4 0-12-6-12Z"></path>
          <path d="M2 12h2c3.1-3.1 4.1-7.3 3-10"></path>
          <path d="M22 12h-2c-3.1-3.1-4.1-7.3-3-10"></path>
        </svg>
      ),
    },
    {
      title: "Specialized Tracks",
      description: "Whether you're interested in Frontend, MERN Stack, Android or Data Analytics, we have the perfect learning path for you.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-edu-purple">
          <path d="m5 7 5 3 5-3"></path>
          <path d="m5 14 5 3 5-3"></path>
          <rect width="14" height="20" x="5" y="2" rx="2"></rect>
        </svg>
      ),
    },
    {
      title: "Skill Assessment",
      description: "Our platform evaluates your current skills to suggest courses that will help you grow and achieve your professional goals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-edu-purple">
          <path d="m18 2 4 4"></path>
          <path d="m17 7 3-3"></path>
          <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"></path>
          <path d="m9 11 4 4"></path>
          <path d="m5 19-3 3"></path>
        </svg>
      ),
    },
    {
      title: "Python-Powered Backend",
      description: "Our recommendation engine is built with cutting-edge Python machine learning libraries for accurate and effective suggestions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-edu-purple">
          <path d="M18 16h2a2 2 0 0 0 2-2v-3c0-1.1.9-2 2-2h-8a4 4 0 0 0-4 4v2a3 3 0 0 1-3 3v3"></path>
          <path d="M8 15h7"></path>
          <path d="M11 18h4"></path>
          <path d="M6 8h12"></path>
          <path d="M6 12h13"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-edu-text">Why Choose CourseAI</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our platform uses advanced machine learning techniques to help you find the perfect courses for your career path.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-4 w-12 h-12 flex items-center justify-center bg-edu-purple bg-opacity-10 rounded-lg">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl text-edu-text">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
