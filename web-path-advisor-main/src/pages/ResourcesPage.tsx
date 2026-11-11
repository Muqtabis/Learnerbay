import { useMemo, useState } from "react";
import { ExternalLink, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { resourcesData } from "@/data/roadmaps";

const TRACK_FILTERS = [
  "All",
  "Frontend",
  "Backend / MERN",
  "Android",
  "Data Analytics",
  "DevOps",
  "AI & ML",
];

const ResourcesPage = () => {
  const [query, setQuery] = useState("");
  const [selectedTrack, setSelectedTrack] = useState("All");

  const filteredResources = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return resourcesData.filter((item) => {
      const trackMatch =
        selectedTrack === "All" ||
        item.track.toLowerCase().includes(selectedTrack.toLowerCase());
      if (!trackMatch) return false;
      if (!normalized) return true;
      return (
        item.technology.toLowerCase().includes(normalized) ||
        item.provider.toLowerCase().includes(normalized) ||
        item.description.toLowerCase().includes(normalized) ||
        item.track.toLowerCase().includes(normalized)
      );
    });
  }, [query, selectedTrack]);

  return (
    <div className="min-h-screen flex flex-col bg-edu-bg">
      <Header />
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-edu-text">
              Curated Learning Resources
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Verified official documentation, interactive coding curricula, and hands-on courses across six software engineering tracks.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-6 relative">
            <Search className="h-4 w-4 text-slate-400 absolute left-3.5 top-3.5" />
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by technology, provider, or keyword (e.g., React, Python, Docker)..."
              className="pl-10 bg-white"
              aria-label="Search curated learning resources"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {TRACK_FILTERS.map((track) => (
              <Button
                key={track}
                type="button"
                size="sm"
                variant={selectedTrack === track ? "default" : "outline"}
                className={selectedTrack === track ? "bg-edu-purple hover:bg-edu-darkblue" : "bg-white"}
                onClick={() => setSelectedTrack(track)}
              >
                {track}
              </Button>
            ))}
          </div>

          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredResources.map((item) => (
                <Card key={item.id} className="border-0 shadow-md flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {item.track}
                      </Badge>
                      <span className="text-xs text-slate-500">{item.type}</span>
                    </div>
                    <CardTitle className="text-lg text-edu-text">{item.technology}</CardTitle>
                    <p className="text-xs font-medium text-edu-purple">{item.provider}</p>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow justify-between gap-4">
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                    <Button asChild variant="outline" className="w-full">
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        Open Resource <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm mb-12">
              <p className="text-slate-600 mb-3">No resources matched &ldquo;{query}&rdquo;.</p>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setQuery("");
                  setSelectedTrack("All");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}

          <section className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 text-edu-text">Study Habits That Stick</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">
              <div>
                <h3 className="font-semibold text-edu-text mb-1">Daily Consistency</h3>
                <p>Focused 45-minute daily practice compounds faster than occasional weekend marathons.</p>
              </div>
              <div>
                <h3 className="font-semibold text-edu-text mb-1">Active Recall &amp; Projects</h3>
                <p>Close the tutorial and rebuild a smaller variation from scratch to test real comprehension.</p>
              </div>
              <div>
                <h3 className="font-semibold text-edu-text mb-1">Read Source Docs</h3>
                <p>Make official documentation your primary reference when debugging errors or checking API syntax.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesPage;
