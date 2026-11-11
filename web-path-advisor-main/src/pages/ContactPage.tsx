import { useState } from "react";
import { ExternalLink, Github, Globe, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const GITHUB_REPO_URL = "https://github.com/Muqtabis/Learnerbay";
const GITHUB_ISSUES_URL = `${GITHUB_REPO_URL}/issues`;
const PORTFOLIO_URL = "https://muqtabis.github.io/";

const ContactPage = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("Course or Roadmap Suggestion");
  const [message, setMessage] = useState("");
  const [issueHref, setIssueHref] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const title = `[${topic}] ${name ? `From ${name}` : "Learnerbay Feedback"}`;
    const body = `**Name:** ${name || "Anonymous"}\n**Topic:** ${topic}\n\n${message}`;
    const url = `${GITHUB_ISSUES_URL}/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
    setIssueHref(url);
    toast({
      title: "Message Prepared",
      description: "Click the GitHub link below to submit your inquiry directly to the maintainers.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-edu-bg">
      <Header />
      <main className="flex-grow py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-edu-text">
              Contact &amp; Feedback
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Suggest a roadmap update, report a broken learning link, or ask questions about Learners B.A.Y.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-edu-text">
                    <Github className="h-5 w-5 text-edu-purple" />
                    GitHub Issues
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600 space-y-3">
                  <p>Track roadmap improvements, resource updates, and bug reports transparently.</p>
                  <a
                    href={GITHUB_ISSUES_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-edu-purple hover:text-edu-darkblue"
                  >
                    Open Issue Tracker <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-edu-text">
                    <Globe className="h-5 w-5 text-edu-purple" />
                    Maintainer Portfolio
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600 space-y-3">
                  <p>Learn more about the maintainer and related open-source educational tools.</p>
                  <a
                    href={PORTFOLIO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-edu-purple hover:text-edu-darkblue"
                  >
                    Visit muqtabis.github.io <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-edu-text">
                    <MessageSquare className="h-5 w-5 text-edu-purple" />
                    Prepare a Message or Resource Suggestion
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Your Name</Label>
                      <Input
                        id="contact-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g., Alex"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-topic">Topic</Label>
                      <select
                        id="contact-topic"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option>Course or Roadmap Suggestion</option>
                        <option>Broken Link Report</option>
                        <option>Privacy or AdSense Inquiry</option>
                        <option>General Feedback</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Message</Label>
                      <Textarea
                        id="contact-message"
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Share the track, resource URL, or question..."
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-edu-purple hover:bg-edu-darkblue">
                      Prepare Inquiry
                    </Button>
                  </form>

                  {issueHref && (
                    <div className="mt-6 p-4 rounded-md bg-slate-50 border border-slate-200 text-sm space-y-2">
                      <p className="font-medium text-edu-text">
                        Your message is formatted and ready to submit on GitHub:
                      </p>
                      <a
                        href={issueHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-edu-purple font-semibold underline hover:text-edu-darkblue"
                      >
                        Submit Inquiry on GitHub Issues <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
