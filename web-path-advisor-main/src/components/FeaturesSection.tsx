import { BookOpen, Compass, Layers, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      title: "Personalized Course Matching",
      description:
        "Filter and rank courses based on your current skill level, weekly study schedule, and career objectives.",
      icon: <Target className="h-6 w-6 text-edu-purple" />,
    },
    {
      title: "Structured Career Roadmaps",
      description:
        "Follow linear, stage-by-stage learning paths for Frontend, Backend, Android, Data Analytics, DevOps, and AI & ML.",
      icon: <Compass className="h-6 w-6 text-edu-purple" />,
    },
    {
      title: "Vetted Official Resources",
      description:
        "Direct links to MDN, React, freeCodeCamp, Kotlin, Docker, Kaggle, and official university certifications—no dead links.",
      icon: <BookOpen className="h-6 w-6 text-edu-purple" />,
    },
    {
      title: "Project-First Progression",
      description:
        "Every track highlights hands-on topics and practical deliverables so you build real portfolio skills, not passive watch history.",
      icon: <Layers className="h-6 w-6 text-edu-purple" />,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-edu-text">Why Choose Learners B.A.Y</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Cut through scattered tutorials with structured roadmaps, trusted documentation, and clear course progression.
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
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
