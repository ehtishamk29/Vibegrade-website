import { BarChart3, PieChart, Award, TrendingUp, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const GradeBreakdown = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const categories = [
    { name: "Grammar & Mechanics", score: 85, color: "bg-blue-500", description: "Spelling, punctuation, syntax" },
    { name: "Content & Ideas", score: 92, color: "bg-green-500", description: "Clarity, relevance, depth" },
    { name: "Organization", score: 78, color: "bg-yellow-500", description: "Structure, flow, transitions" },
    { name: "Style & Voice", score: 88, color: "bg-purple-500", description: "Tone, engagement, creativity" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("grade-breakdown");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="grade-breakdown" className="py-24 px-6 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-4 py-2 mb-4 shadow-sm">
            <span className="text-sm font-medium text-gray-700">Detailed Analysis</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Grade <span className="italic text-green-600">Breakdown</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Save time calculating a student's final grade and back it up with a detailed breakdown of your rubric. Instantly get a Grade Estimate with high accuracy using your criteria. Take back control of your time and grading with VibeGrade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Overall Score</h3>
                  <p className="text-gray-600">Based on comprehensive analysis</p>
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-green-600 mb-2 animate-pulse">86</div>
                <div className="text-xl text-gray-600">out of 100</div>
                <div className="text-lg font-semibold text-green-600 mt-2">Grade: B+</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-xl p-4 text-center hover:bg-blue-100 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <BarChart3 className="h-6 w-6 text-blue-600 mx-auto mb-2 animate-bounce" />
                <div className="text-2xl font-bold text-blue-600">92%</div>
                <div className="text-sm text-gray-600">Above Average</div>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 text-center hover:bg-purple-100 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <TrendingUp className="h-6 w-6 text-purple-600 mx-auto mb-2 animate-bounce delay-100" />
                <div className="text-2xl font-bold text-purple-600">+15</div>
                <div className="text-sm text-gray-600">Improvement</div>
              </div>
            </div>
          </div>

          <div className={`space-y-4 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {categories.map((category, index) => (
              <div
                key={index}
                className={`bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-gray-200 shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer ${
                  activeCategory === index ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                }`}
                onMouseEnter={() => setActiveCategory(index)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-800">{category.name}</h4>
                  <span className="text-xl font-bold text-gray-800">{category.score}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2 overflow-hidden">
                  <div 
                    className={`h-3 rounded-full ${category.color} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: isVisible ? `${category.score}%` : '0%',
                      transform: `scaleX(${activeCategory === index ? 1.02 : 1})`,
                      transition: 'width 1s ease-out, transform 0.3s ease-out'
                    }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
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

export default GradeBreakdown; 