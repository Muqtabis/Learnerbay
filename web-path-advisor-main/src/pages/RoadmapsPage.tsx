import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CheckCircle2, Clock, Compass } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { roadmapsData } from "@/data/roadmaps";

const RoadmapsPage = () => {
  const { hash } = useLocation();
  const [selectedId, setSelectedId] = useState<string>(roadmapsData[0].id);

  useEffect(() => {
    const targetId = hash.replace("#", "");
    if (targetId && roadmapsData.some((track) => track.id === targetId)) {
      setSelectedId(targetId);
    }
  }, [hash]);

  const activeTrack =
    roadmapsData.find((track) => track.id === selectedId) ?? roadmapsData[0];

  return (
    <div className="min-h-screen flex flex-col bg-edu-bg">
      <Header />
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-edu-text">
              Structured Developer Roadmaps
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Follow clear, stage-by-stage learning milestones designed to take you from core fundamentals to production projects.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Career roadmaps">
            {roadmapsData.map((track) => {
              const isSelected = track.id === activeTrack.id;
              return (
                <Button
                  key={track.id}
                  type="button"
                  variant={isSelected ? "default" : "outline"}
                  className={isSelected ? "bg-edu-purple hover:bg-edu-darkblue" : "bg-white"}
                  onClick={() => setSelectedId(track.id)}
                >
                  {track.title}
                </Button>
              );
            })}
          </div>

          <Card className="border-0 shadow-lg mb-10">
            <CardHeader className="border-b border-slate-100 pb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Compass className="h-5 w-5 text-edu-purple" />
                    <Badge variant="secondary">{activeTrack.level}</Badge>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="h-3.5 w-3.5" />
                      {activeTrack.timeframe}
                    </span>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl text-edu-text">
                    {activeTrack.title} Roadmap
                  </CardTitle>
                  <p className="text-slate-600 mt-2">{activeTrack.subtitle}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-edu-purple hover:bg-edu-darkblue">
                    <Link to="/recommendation">Find Courses for This Track</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/resources">Browse Study Resources</Link>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeTrack.steps.map((step) => (
                  <div
                    key={step.title}
                    className="rounded-lg border border-slate-200 bg-slate-50/70 p-5 hover:border-edu-purple/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-edu-purple mt-0.5 shrink-0" />
                      <div>
                        <h2 className="font-semibold text-lg text-edu-text mb-1">
                          {step.title}
                        </h2>
                        <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                          {step.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {step.keyTopics.map((topic) => (
                            <Badge key={topic} variant="outline" className="bg-white text-xs font-normal">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <section className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 text-edu-text">
              How to Use These Roadmaps Effectively
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">
              <div>
                <h3 className="font-semibold text-edu-text mb-1">Focus on One Stage at a Time</h3>
                <p>
                  Resist jumping ahead to complex frameworks before mastering core language syntax, problem-solving, and debugging habits.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-edu-text mb-1">Build After Every Milestone</h3>
                <p>
                  Pair each stage with one small, self-contained project—such as a responsive landing page, REST API, or data dashboard—and push it to GitHub.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-edu-text mb-1">Use Official Documentation Early</h3>
                <p>
                  Video walkthroughs help you start, while MDN, React, Kotlin, Docker, and Python docs build lasting engineering independence.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RoadmapsPage;
