import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { courseData } from "@/data/courses";
import { rankCourses, UserPreferences } from "@/lib/recommend";

const TRACK_LABELS: Record<string, string> = {
  frontend: "Frontend Development",
  mern: "MERN Stack",
  android: "Android Development",
  "data-analytics": "Data Analytics",
};

const ResultsPage = () => {
  const navigate = useNavigate();
  const [userPreferences, setUserPreferences] = useState<UserPreferences | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("recommended");

  useEffect(() => {
    const storedPreferences = localStorage.getItem("userPreferences");
    if (!storedPreferences) {
      navigate("/recommendation");
      return;
    }

    try {
      setUserPreferences(JSON.parse(storedPreferences) as UserPreferences);
    } catch {
      navigate("/recommendation");
      return;
    }
    setIsLoading(false);
  }, [navigate]);

  const rankedCourses = useMemo(() => {
    if (!userPreferences) return [];
    const baseCourses = courseData[userPreferences.track] || [];
    return rankCourses(baseCourses, userPreferences);
  }, [userPreferences]);

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

  const filterByLevel = (level: string) => {
    if (level === "recommended") return rankedCourses;
    return rankedCourses.filter((course) =>
      course.level.toLowerCase().includes(level.toLowerCase())
    );
  };

  const filteredCourses = filterByLevel(activeTab);
  const trackLabel = TRACK_LABELS[userPreferences.track] ?? userPreferences.track;

  return (
    <div className="min-h-screen flex flex-col bg-edu-bg">
      <Header />
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-edu-text">
              Your {trackLabel} Recommendations
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ranked using your experience level, {userPreferences.timeCommitment} hrs/week availability, and selected learning goals.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="recommended">Recommended</TabsTrigger>
                <TabsTrigger value="beginner">Beginner</TabsTrigger>
                <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
              </TabsList>
            </div>

            {["recommended", "beginner", "intermediate", "advanced"].map((tab) => (
              <TabsContent key={tab} value={tab} className="mt-6">
                {filteredCourses.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredCourses.map((course) => (
                      <div key={course.id} className="flex flex-col">
                        <CourseCard course={course} />
                        <p className="mt-2 px-1 text-xs text-slate-600">
                          {course.matchReasons[0]}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-slate-600">
                      No courses found for this filter in {trackLabel}.
                    </p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6">Want to explore another track or change your pace?</p>
            <Button asChild variant="outline">
              <Link to="/recommendation">Update Your Preferences</Link>
            </Button>
          </div>

          <div className="mt-16 bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-edu-text">How Your Match Score Is Calculated</h2>
            <p className="text-slate-600">
              Each curated course is scored locally in your browser by comparing your chosen specialization track, experience level (Beginner, Intermediate, or Advanced), weekly time budget, and learning goals against each resource&apos;s depth and syllabus focus.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResultsPage;
