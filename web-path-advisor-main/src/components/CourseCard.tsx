
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export interface Course {
  id: string;
  title: string;
  provider: string;
  level: string;
  duration: string;
  rating: number;
  matchPercentage: number;
  tags: string[];
  url: string;
  image: string;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-0 shadow-md">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <Badge className="bg-edu-purple hover:bg-edu-purple">
            {course.matchPercentage}% Match
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="outline" className="text-xs font-normal">
            {course.provider}
          </Badge>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span className="text-sm ml-1">{course.rating.toFixed(1)}</span>
          </div>
        </div>
        
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{course.title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {course.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
              <path d="M12 6v6l4 2"></path>
            </svg>
            {course.duration}
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <path d="M6 9H4.5a2.5 2.5 0 0 0 0 5H6"></path>
              <path d="M18 9h1.5a2.5 2.5 0 0 1 0 5H18"></path>
              <path d="M8 9h8"></path>
              <path d="M8 15h8"></path>
            </svg>
            {course.level}
          </div>
        </div>
        
        <Button asChild variant="outline" className="w-full">
          <a href={course.url} target="_blank" rel="noopener noreferrer">View Course</a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
