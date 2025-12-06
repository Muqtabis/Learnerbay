
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseCard, { Course } from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { courseData } from '@/data/courses';

const ResultsPage = () => {
  const navigate = useNavigate();
  const [userPreferences, setUserPreferences] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('recommended');
  
  useEffect(() => {
    // Get the user preferences from localStorage
    const storedPreferences = localStorage.getItem('userPreferences');
    
    if (!storedPreferences) {
      // If no preferences found, redirect to the recommendation form
      navigate('/recommendation');
      return;
    }
    
    setUserPreferences(JSON.parse(storedPreferences));
    setIsLoading(false);
  }, [navigate]);
  
  if (isLoading || !userPreferences) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-edu-bg">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-48 h-6 bg-slate-200 rounded mb-4"></div>
          <div className="w-64 h-4 bg-slate-200 rounded"></div>
        </div>
      </div>
    );
  }
  
  const { track } = userPreferences;
  const recommendedCourses = courseData[track] || [];
  
  // Function to filter courses by level
  const filterByLevel = (level: string) => {
    if (level === 'recommended') return recommendedCourses;
    
    return recommendedCourses.filter(course => 
      course.level.toLowerCase().includes(level.toLowerCase())
    );
  };
  
  const filteredCourses = filterByLevel(activeTab);
  
  return (
    <div className="min-h-screen flex flex-col bg-edu-bg">
      <Header />
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-edu-text">
              Your Course Recommendations
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Based on your preferences, we've found these courses that match your learning goals.
            </p>
          </div>
          
          <Tabs defaultValue="recommended" value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="recommended">Recommended</TabsTrigger>
                <TabsTrigger value="beginner">Beginner</TabsTrigger>
                <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="recommended" className="mt-6">
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-slate-600">No courses found for this filter.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="beginner" className="mt-6">
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-slate-600">No beginner courses found.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="intermediate" className="mt-6">
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-slate-600">No intermediate courses found.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="advanced" className="mt-6">
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-slate-600">No advanced courses found.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6">Not seeing what you're looking for?</p>
            <Button asChild variant="outline">
              <a href="/recommendation">Update Your Preferences</a>
            </Button>
          </div>
          
          <div className="mt-16 bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-edu-text">About Our Recommendations</h2>
            <p className="text-slate-600">
              These recommendations are generated by our Python-based machine learning model. In a full implementation, the model would use collaborative filtering and content-based filtering to provide highly personalized course suggestions based on your preferences and the success patterns of similar learners.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResultsPage;
