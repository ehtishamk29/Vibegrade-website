import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Link, CheckCircle } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: Download,
    title: "Install the Extension",
    description: "Add our Chrome extension to your browser in just a few clicks."
  },
  {
    step: 2,
    icon: Link,
    title: "Connect Your Account",
    description: "Link your Google account to start grading essays instantly."
  },
  {
    step: 3,
    icon: CheckCircle,
    title: "Start Grading",
    description: "Begin grading essays with AI-powered feedback and insights."
  }
];

const Install = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 mb-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-sm font-medium text-gray-700">Quick Setup</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Get Started in <span className="italic text-blue-600">Minutes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Install our Chrome extension and start grading essays with AI-powered feedback in just a few simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform translate-x-1/2"></div>
              )}
              
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group-hover:border-blue-200">
                {/* Step number */}
                <div className="absolute -top-4 left-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg" 
              alt="Chrome" 
              className="h-6 w-6 mr-2 drop-shadow-sm"
            />
            Add to Chrome for Free
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Install; 