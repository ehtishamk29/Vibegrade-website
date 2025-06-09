import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle, MessageSquare } from "lucide-react";

type Platform = 'classroom' | 'docs' | 'canvas';

const platformConfig = {
  classroom: {
    color: 'green',
    description: "Enhance your Google Classroom grading experience with Smart Annotations. VibeGrade seamlessly integrates with Google Classroom to provide intelligent, rubric-based feedback directly on student assignments.",
    gradient: 'from-green-600 to-green-400',
    hoverGradient: 'hover:from-green-700 hover:to-green-500'
  },
  docs: {
    color: 'blue',
    description: "Save time grading while providing even richer feedback using Smart Annotations. VibeGrade analyzes the text with precision using the teacher's rubric to pinpoint successes and areas for improvement.",
    gradient: 'from-blue-600 to-blue-400',
    hoverGradient: 'hover:from-blue-700 hover:to-blue-500'
  },
  canvas: {
    color: 'red',
    description: "Grade assignments directly within Canvas using VibeGrade's powerful AI-powered grading tools. Streamline your workflow with our seamless Canvas integration that brings advanced grading capabilities right to your familiar Canvas environment.",
    gradient: 'from-red-600 to-red-400',
    hoverGradient: 'hover:from-red-700 hover:to-red-500'
  }
};

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Analysis",
    description: "Our AI analyzes student work against your rubric criteria, providing detailed feedback and suggestions."
  },
  {
    icon: CheckCircle,
    title: "Rubric Integration",
    description: "Seamlessly integrate your existing rubrics or use our pre-built templates for consistent grading."
  },
  {
    icon: MessageSquare,
    title: "Smart Comments",
    description: "Get intelligent comment suggestions based on common patterns and best practices in student work."
  }
];

const SmartAnnotations = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>('classroom');
  const config = platformConfig[selectedPlatform];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className={`absolute top-20 right-20 w-72 h-72 bg-${config.color}-400/10 rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-20 left-20 w-96 h-96 bg-${config.color}-400/10 rounded-full blur-3xl animate-pulse delay-1000`}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Platform Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-200">
            <div className="flex gap-2">
              {(['classroom', 'docs', 'canvas'] as Platform[]).map((platform) => (
                <button
                  key={platform}
                  onClick={() => setSelectedPlatform(platform)}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    selectedPlatform === platform 
                      ? `bg-${config.color}-100 shadow-md` 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <img
                    src={
                      platform === 'classroom' 
                        ? 'https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png'
                        : platform === 'docs'
                        ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google_Docs_logo_%282014-2020%29.svg/1481px-Google_Docs_logo_%282014-2020%29.svg.png'
                        : 'https://www.instructure.com/sites/default/files/image/2021-12/Canvas_logo_single_mark.png'
                    }
                    alt={`${platform} logo`}
                    className="w-8 h-8 object-contain"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <div className={`inline-block bg-gradient-to-r from-${config.color}-100 to-${config.color}-50 rounded-full px-4 py-2 mb-4 shadow-sm hover:shadow-md transition-shadow duration-300`}>
            <span className={`text-sm font-medium text-${config.color}-700`}>Smart Annotations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Grade Smarter, Not <span className={`italic text-${config.color}-600`}>Harder</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {config.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group-hover:border-${config.color}-200">
                <div className={`w-16 h-16 bg-gradient-to-br from-${config.color}-100 to-${config.color}-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 text-${config.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className={`bg-gradient-to-r ${config.gradient} ${config.hoverGradient} text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105`}
          >
            Try Smart Annotations
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SmartAnnotations; 