
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-edu-bg py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaC00djFoNHYtMXptNiAwaC00djFoNHYtMXptLTYtM2gtNHYxaDR2LTF6bTYgMGgtNHYxaDR2LTF6bS02LTNoLTR2MWg0di0xem0tNi0xaC00djFoNHYtMXptMTIgMGgtNHYxaDR2LTF6bS02LTJoLTR2MWg0di0xem02IDBoLTR2MWg0di0xem0tMTIgMGgtNHYxaDR2LTF6bTYtM2gtNHYxaDR2LTF6bTYgMGgtNHYxaDR2LTF6bS02LTJoLTR2MWg0di0xem0tNi0xaC00djFoNHYtMXptMTIgMGgtNHYxaDR2LTF6bS02LTJoLTR2MWg0di0xem02IDBoLTR2MWg0di0xem0tMTIgMGgtNHYxaDR2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-edu-text">
            Find Your Perfect <span className="text-transparent bg-clip-text bg-hero-gradient animate-gradient-flow">Learning Path</span> Learners-Bay Course Recommendation Model
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8">
            Our machine learning algorithm analyzes your skills, goals, and learning style to recommend the best courses in Frontend, MERN Stack, Android, and Data Analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-edu-purple hover:bg-edu-darkblue text-white">
              <Link to="/recommendation">Get Course Recommendations</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="relative bg-white p-6 rounded-xl shadow-lg">
            <div className="absolute -top-4 -right-4 bg-edu-purple text-white text-sm font-medium px-3 py-1 rounded-full">
              Demo
            </div>
            <div className="mb-6 border-b border-gray-200 pb-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-100 p-3 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm font-medium text-slate-700">Frontend Development</div>
                  <div className="text-xs bg-slate-200 px-2 py-1 rounded-full">98% Match</div>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-edu-blue to-edu-purple w-[98%]"></div>
                </div>
              </div>
              <div className="bg-slate-100 p-3 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm font-medium text-slate-700">MERN Stack</div>
                  <div className="text-xs bg-slate-200 px-2 py-1 rounded-full">87% Match</div>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-edu-blue to-edu-purple w-[87%]"></div>
                </div>
              </div>
              <div className="bg-slate-100 p-3 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm font-medium text-slate-700">Android Development</div>
                  <div className="text-xs bg-slate-200 px-2 py-1 rounded-full">76% Match</div>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-edu-blue to-edu-purple w-[76%]"></div>
                </div>
              </div>
              <div className="bg-slate-100 p-3 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm font-medium text-slate-700">Data Analytics</div>
                  <div className="text-xs bg-slate-200 px-2 py-1 rounded-full">92% Match</div>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-edu-blue to-edu-purple w-[92%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
