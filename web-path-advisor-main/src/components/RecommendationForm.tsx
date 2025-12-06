
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

type TrackType = 'frontend' | 'mern' | 'android' | 'data-analytics';

interface UserPreferences {
  track: TrackType;
  experience: number;
  timeCommitment: number;
  goals: string[];
}

const RecommendationForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const [preferences, setPreferences] = useState<UserPreferences>({
    track: 'frontend',
    experience: 1,
    timeCommitment: 10,
    goals: [],
  });

  const goalOptions = [
    { id: 'job-ready', label: 'Become job-ready' },
    { id: 'build-portfolio', label: 'Build a portfolio' },
    { id: 'learn-fundamentals', label: 'Learn fundamentals' },
    { id: 'switch-careers', label: 'Switch careers' },
    { id: 'advance-skills', label: 'Advance existing skills' },
  ];

  const handleTrackChange = (track: TrackType) => {
    setPreferences({ ...preferences, track });
  };

  const handleExperienceChange = (value: number[]) => {
    setPreferences({ ...preferences, experience: value[0] });
  };

  const handleTimeCommitmentChange = (value: number[]) => {
    setPreferences({ ...preferences, timeCommitment: value[0] });
  };

  const handleGoalToggle = (goalId: string) => {
    const updatedGoals = preferences.goals.includes(goalId)
      ? preferences.goals.filter(id => id !== goalId)
      : [...preferences.goals, goalId];
    
    setPreferences({ ...preferences, goals: updatedGoals });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call to ML model
    setTimeout(() => {
      setIsLoading(false);
      
      // Store the preferences in localStorage for the results page
      localStorage.setItem('userPreferences', JSON.stringify(preferences));
      
      toast({
        title: "Recommendations Generated",
        description: "Your personalized course recommendations are ready!",
      });
      
      navigate('/results');
    }, 2000);
  };

  return (
    <Card className="border-0 shadow-lg max-w-3xl mx-auto">
      <CardContent className="p-6 md:p-8">
        <form onSubmit={handleSubmit}>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Select your learning track</h3>
              <RadioGroup 
                defaultValue={preferences.track}
                onValueChange={(value) => handleTrackChange(value as TrackType)}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="frontend" id="frontend" />
                  <Label htmlFor="frontend">Frontend</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mern" id="mern" />
                  <Label htmlFor="mern">MERN Stack</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="android" id="android" />
                  <Label htmlFor="android">Android</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="data-analytics" id="data-analytics" />
                  <Label htmlFor="data-analytics">Data Analytics</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Experience level</h3>
                <span className="text-sm text-slate-500">
                  {preferences.experience === 1 && "Beginner"}
                  {preferences.experience === 2 && "Intermediate"}
                  {preferences.experience === 3 && "Advanced"}
                </span>
              </div>
              <Slider
                defaultValue={[preferences.experience]}
                max={3}
                step={1}
                onValueChange={handleExperienceChange}
                className="mb-6"
              />
              <div className="flex justify-between text-sm text-slate-500">
                <span>Beginner</span>
                <span>Intermediate</span>
                <span>Advanced</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Weekly time commitment (hours)</h3>
                <span className="text-sm text-slate-500">{preferences.timeCommitment} hours</span>
              </div>
              <Slider
                defaultValue={[preferences.timeCommitment]}
                min={1}
                max={20}
                step={1}
                onValueChange={handleTimeCommitmentChange}
                className="mb-6"
              />
              <div className="flex justify-between text-sm text-slate-500">
                <span>1 hour</span>
                <span>10 hours</span>
                <span>20 hours</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Learning goals (select all that apply)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {goalOptions.map((goal) => (
                  <div key={goal.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={goal.id}
                      checked={preferences.goals.includes(goal.id)}
                      onCheckedChange={() => handleGoalToggle(goal.id)}
                    />
                    <Label htmlFor={goal.id}>{goal.label}</Label>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-edu-purple hover:bg-edu-darkblue"
              disabled={isLoading}
            >
              {isLoading ? "Generating Recommendations..." : "Get Recommendations"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default RecommendationForm;
