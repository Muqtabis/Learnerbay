import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-edu-bg">
      <Header />
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-edu-text">
              About Learners B.A.Y
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Helping aspiring engineers move past tutorial overload with structured roadmaps, vetted documentation, and tailored course paths.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-edu-text">Our Mission</h2>
            <p className="text-slate-600 mb-4">
              Self-taught developers rarely struggle because of a lack of free tutorials—they struggle because resources are scattered and unsequenced. Beginners frequently get stuck watching disconnected videos without knowing how foundational concepts build toward job-ready projects.
            </p>
            <p className="text-slate-600">
              Learners B.A.Y (Learnerbay) combines linear, stage-by-stage career roadmaps with a preference-based course advisor across Frontend Development, MERN Stack, Android Development, Data Analytics, DevOps, and AI &amp; Machine Learning.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-10">
            <h2 className="text-xl font-semibold mb-4 text-edu-text">How We Curate Courses &amp; Resources</h2>
            <p className="text-slate-600 mb-4">
              Every course and official guide featured on Learners B.A.Y is reviewed against five practical standards:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li>Up-to-date alignment with current industry tooling and frameworks</li>
              <li>Clear progression from core fundamentals to real portfolio projects</li>
              <li>Credible authorship (official docs, university programs, and established engineering educators)</li>
              <li>Transparent difficulty levels and realistic weekly time expectations</li>
              <li>Accessible free or audit-friendly entry options wherever possible</li>
            </ul>
            <p className="text-slate-600">
              Links open directly on official learning platforms so you always verify current pricing, syllabus updates, and enrollment options at the source.
            </p>
          </div>

          <div className="bg-gradient-to-r from-edu-blue to-edu-purple rounded-lg shadow-md p-8 text-white text-center mb-10">
            <h2 className="text-2xl font-semibold mb-4">Ready to Plan Your Study Path?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Use the Course Finder to rank vetted courses by experience and weekly availability, or browse our six complete career roadmaps.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-edu-purple hover:bg-slate-100">
                <Link to="/recommendation">Get Personalized Recommendations</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/roadmaps">Explore All Roadmaps</Link>
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-6 text-edu-text">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2 text-edu-text">
                  How does the recommendation system work?
                </h3>
                <p className="text-slate-600">
                  Our Course Finder evaluates your chosen career track, current experience level (Beginner, Intermediate, or Advanced), weekly study hours, and learning goals locally in your browser to rank curated courses that best fit your schedule and depth requirements.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 text-edu-text">
                  Is Learners B.A.Y free to use?
                </h3>
                <p className="text-slate-600">
                  Yes. Browsing roadmaps, filtering curated resources, and generating course path recommendations are completely free. External course providers may offer free certificates, free audit tracks, or paid options depending on their platform.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 text-edu-text">
                  Which career tracks are covered?
                </h3>
                <p className="text-slate-600">
                  Interactive course recommendations cover Frontend Development, MERN Stack, Android Development, and Data Analytics, while our Developer Roadmaps section additionally covers DevOps &amp; Cloud Engineering and AI &amp; Machine Learning.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 text-edu-text">
                  How can I suggest a resource or report a broken link?
                </h3>
                <p className="text-slate-600">
                  Visit our{" "}
                  <Link to="/contact" className="text-edu-purple underline hover:text-edu-darkblue">
                    Contact &amp; Feedback page
                  </Link>{" "}
                  to submit feedback or open a topic directly on the GitHub repository.
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
