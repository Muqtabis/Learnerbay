import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { roadmapsData } from "@/data/roadmaps";

const TracksOverviewSection = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-edu-text">Explore Career Roadmaps</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Each roadmap breaks a modern engineering discipline into clear milestones, prerequisites, and recommended resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapsData.map((track) => (
            <Card key={track.id} className="border-0 shadow-md hover:shadow-lg transition-shadow flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {track.level}
                  </Badge>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                    <Clock className="h-3.5 w-3.5" />
                    {track.timeframe}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-edu-text mb-2">{track.title}</h3>
                <p className="text-sm text-slate-600 mb-4 flex-grow">{track.subtitle}</p>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-sm">
                  <span className="text-slate-500">{track.steps.length} Core Stages</span>
                  <Link
                    to={`/roadmaps#${track.id}`}
                    className="inline-flex items-center gap-1 font-medium text-edu-purple hover:text-edu-darkblue"
                  >
                    View Roadmap <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksOverviewSection;
