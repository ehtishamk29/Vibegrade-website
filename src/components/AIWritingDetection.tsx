import { Brain, Scan, AlertCircle, User, Zap, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const AIWritingDetection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMetric, setActiveMetric] = useState<number | null>(null);
  const [progressValues, setProgressValues] = useState([0, 0, 0]);

  const detectionMetrics = [
    { label: "Human-written", percentage: 85, color: "bg-green-500" },
    { label: "AI-assisted", percentage: 10, color: "bg-yellow-500" },
    { label: "AI-generated", percentage: 5, color: "bg-red-500" }
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

    const element = document.getElementById("ai-writing-detection");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timers = detectionMetrics.map((metric, index) => {
        return setTimeout(() => {
          setProgressValues(prev => {
            const newValues = [...prev];
            newValues[index] = metric.percentage;
            return newValues;
          });
        }, index * 500);
      });

      return () => timers.forEach(timer => clearTimeout(timer));
    }
  }, [isVisible]);

  return (
    <section id="ai-writing-detection" className="py-24 px-6 bg-gradient-to-br from-purple-50 to-indigo-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full px-4 py-2 mb-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-sm font-medium text-gray-700">Advanced Detection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            AI Writing <span className="italic text-purple-600">Detection</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Safeguard academic integrity with our built-in AI Writing Detection technology, powered by Pangram Labs. Pangram is state-of-the-art technology to identify AI-generated text. Able to detect the newest AI models, and unbiased against nonnative speakers. Now available directly in VibeGrade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Brain className="h-8 w-8 text-purple-600 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">AI Analysis</h3>
                  <p className="text-gray-600">Content authenticity scan</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {detectionMetrics.map((metric, index) => (
                  <div 
                    key={index} 
                    className="space-y-2 transition-all duration-300 transform hover:-translate-y-1"
                    onMouseEnter={() => setActiveMetric(index)}
                    onMouseLeave={() => setActiveMetric(null)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                      <span className="text-sm font-bold text-gray-800 animate-count">{progressValues[index]}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-3 rounded-full ${metric.color} transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${progressValues[index]}%`,
                          transform: activeMetric === index ? 'scaleY(1.2)' : 'scaleY(1)'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <User className="h-5 w-5 text-green-600 animate-bounce" />
                  <span className="font-semibold text-green-800">Authenticity Score</span>
                </div>
                <div className="text-2xl font-bold text-green-600 mb-1 animate-count">85/100</div>
                <div className="text-sm text-green-700">
                  This essay shows strong indicators of authentic human writing with natural language patterns.
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/60 backdrop-blur-lg rounded-xl p-6 border border-white/50 shadow-lg text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                <Scan className="h-8 w-8 text-blue-600 mx-auto mb-3 animate-pulse" />
                <div className="text-2xl font-bold text-blue-600 animate-count">99.2%</div>
                <div className="text-sm text-gray-600">Detection Accuracy</div>
              </div>
              <div className="bg-white/60 backdrop-blur-lg rounded-xl p-6 border border-white/50 shadow-lg text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                <Zap className="h-8 w-8 text-purple-600 mx-auto mb-3 animate-pulse" />
                <div className="text-2xl font-bold text-purple-600 animate-count">2.3s</div>
                <div className="text-sm text-gray-600">Analysis Time</div>
              </div>
            </div>
          </div>

          <div className={`bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/50 shadow-lg transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Detection Indicators</h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200 transition-all duration-300 transform hover:-translate-x-1 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-green-800">Human Writing Patterns</span>
                </div>
                <ul className="text-sm text-green-700 space-y-1">
                  <li className="transition-all duration-300 hover:translate-x-2">• Natural sentence variation</li>
                  <li className="transition-all duration-300 hover:translate-x-2">• Authentic voice and style</li>
                  <li className="transition-all duration-300 hover:translate-x-2">• Human-like errors and corrections</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200 transition-all duration-300 transform hover:-translate-x-1 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-5 w-5 text-yellow-600 animate-pulse" />
                  <span className="font-semibold text-yellow-800">AI-Assisted Elements</span>
                </div>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li className="transition-all duration-300 hover:translate-x-2">• Some sections show editing assistance</li>
                  <li className="transition-all duration-300 hover:translate-x-2">• Grammar corrections detected</li>
                  <li className="transition-all duration-300 hover:translate-x-2">• Still maintains human authenticity</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 transition-all duration-300 transform hover:-translate-x-1 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="h-5 w-5 text-blue-600 animate-pulse" />
                  <span className="font-semibold text-blue-800">Analysis Confidence</span>
                </div>
                <div className="text-sm text-blue-700">
                  High confidence in detection results based on multiple linguistic and stylistic factors.
                </div>
              </div>
            </div>
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

      <style>{`
        .animate-count {
          animation: count-up 2s ease-out forwards;
        }
        @keyframes count-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default AIWritingDetection; 