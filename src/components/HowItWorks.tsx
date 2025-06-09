
import { Upload, Brain, FileText, Star } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload Essays",
    description: "Simply upload student essays in any format - PDF, Word, or plain text. Bulk uploads supported."
  },
  {
    icon: Brain,
    number: "02", 
    title: "AI Analysis",
    description: "Our advanced AI analyzes grammar, structure, coherence, argument strength, and writing style."
  },
  {
    icon: FileText,
    number: "03",
    title: "Detailed Feedback",
    description: "Receive comprehensive feedback with specific suggestions for improvement and areas of strength."
  },
  {
    icon: Star,
    number: "04",
    title: "Generate Grades",
    description: "Get consistent, fair grades with detailed rubric breakdown and personalized comments."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes with our simple, intuitive grading process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="bg-white/60 backdrop-blur-lg w-24 h-24 rounded-full flex items-center justify-center mx-auto border border-white/50 shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-10 w-10 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform translate-x-4"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
