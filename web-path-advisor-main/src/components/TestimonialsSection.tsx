import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The course recommendation was spot on! I landed a frontend developer job after completing the suggested learning path.",
      name: "Sarah Johnson",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      quote: "As someone switching careers to tech, CourseAI helped me find the perfect MERN stack courses for my skill level.",
      name: "Michael Chen",
      role: "Full Stack Developer",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      quote: "The Android development track recommendation was exactly what I needed to build my first mobile application.",
      name: "Priya Patel",
      role: "Mobile Developer",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-edu-text">Success Stories</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how our course recommendations have helped students and professionals achieve their career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-edu-purple opacity-20">
                    <path d="M10 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 4.333-4 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 4.333-4 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-slate-600 mb-6 min-h-[100px]">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-edu-text">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;