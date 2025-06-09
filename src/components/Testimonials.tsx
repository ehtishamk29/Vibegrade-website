
import { Star, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "High School English Teacher",
    rating: 5,
    text: "EssayGrader has completely transformed how I provide feedback to my students. The AI-generated comments are incredibly detailed and help students understand exactly how to improve their writing.",
    school: "Lincoln High School",
    subject: "English Literature",
    years: "12 years experience"
  },
  {
    name: "Dr. Michael Chen",
    role: "University Professor",
    rating: 5,
    text: "I was skeptical at first, but the quality of feedback is outstanding. My students are improving faster than ever, and I'm saving 10+ hours per week on grading.",
    school: "State University",
    subject: "Composition Studies",
    years: "8 years experience"
  },
  {
    name: "Emily Rodriguez",
    role: "Middle School Teacher",
    rating: 5,
    text: "The instant feedback feature is a game-changer. Students can submit drafts and get immediate guidance, which encourages them to revise and improve their work.",
    school: "Washington Middle School",
    subject: "Creative Writing",
    years: "6 years experience"
  },
  {
    name: "James Thompson",
    role: "AP English Teacher",
    rating: 5,
    text: "The consistency in grading is remarkable. Every student gets the same level of detailed feedback, which has improved the overall quality of writing in my classes.",
    school: "Roosevelt High School",
    subject: "AP Literature",
    years: "15 years experience"
  },
  {
    name: "Dr. Lisa Park",
    role: "College Writing Director",
    rating: 5,
    text: "EssayGrader has revolutionized our writing program. The analytics help us identify common issues and tailor our curriculum accordingly.",
    school: "Community College",
    subject: "Academic Writing",
    years: "10 years experience"
  },
  {
    name: "Mark Williams",
    role: "History Teacher",
    rating: 5,
    text: "Even for history essays, the feedback quality is exceptional. Students are learning to write better arguments and support their claims more effectively.",
    school: "Jefferson High School",
    subject: "World History",
    years: "9 years experience"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-50 rounded-full px-4 py-2 mb-6 border border-purple-200">
            <Quote className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            What Educators Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of teachers and professors worldwide
          </p>
        </div>
        
        {/* Scrolling testimonials carousel */}
        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group h-full">
                  <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full relative overflow-hidden">
                    {/* Decorative quote mark */}
                    <div className="absolute top-6 right-6 opacity-10">
                      <Quote className="h-12 w-12 text-gray-400" />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                      <div className="border-t border-gray-200 pt-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-800">{testimonial.name}</div>
                            <div className="text-sm text-gray-600">{testimonial.role}</div>
                            <div className="text-sm text-blue-600 font-medium">{testimonial.school}</div>
                            <div className="text-xs text-gray-500 mt-1">{testimonial.subject} • {testimonial.years}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        
        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-6 border border-white/50 shadow-lg">
              <div className="text-3xl font-bold text-gray-800 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
              <div className="flex items-center justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-6 border border-white/50 shadow-lg">
              <div className="text-3xl font-bold text-gray-800 mb-2">10,000+</div>
              <div className="text-gray-600">Happy Educators</div>
            </div>
            <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-6 border border-white/50 shadow-lg">
              <div className="text-3xl font-bold text-gray-800 mb-2">1M+</div>
              <div className="text-gray-600">Essays Graded</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
