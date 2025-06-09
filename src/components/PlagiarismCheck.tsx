import { Shield, Search, AlertTriangle, CheckCircle, Globe, Database, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const PlagiarismCheck = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSource, setActiveSource] = useState<number | null>(null);
  const [scanProgress, setScanProgress] = useState(0);

  const sources = [
    { name: "Academic Databases", count: "50M+ papers", icon: Database },
    { name: "Web Content", count: "100B+ pages", icon: Globe },
    { name: "Published Works", count: "25M+ books", icon: CheckCircle }
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

    const element = document.getElementById("plagiarism-check");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setScanProgress(94);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section id="plagiarism-check" className="py-24 px-6 bg-gradient-to-br from-red-50 to-orange-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block bg-gradient-to-r from-red-100 to-orange-100 rounded-full px-4 py-2 mb-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-sm font-medium text-gray-700">Academic Integrity</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Plagiarism <span className="italic text-red-600">Check</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Promote academic integrity by leveraging our built-in Plagiarism Check and Citation technology. With VibeGrade, you have all the necessary tools integrated into your grading co-pilot for seamless plagiarism check.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Scan Results</h3>
                  <p className="text-gray-600">Comprehensive integrity check</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-colors duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 animate-pulse" />
                    <span className="font-semibold text-green-800">Original Content</span>
                  </div>
                  <span className="text-2xl font-bold text-green-600 animate-count">{scanProgress}%</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200 hover:bg-yellow-100 transition-colors duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 animate-pulse" />
                    <span className="font-semibold text-yellow-800">Similar Content</span>
                  </div>
                  <span className="text-2xl font-bold text-yellow-600 animate-count">{100 - scanProgress}%</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="text-sm text-green-700">
                  <strong className="animate-pulse">✓ Integrity Score: Excellent</strong><br />
                  Minor similarities found are properly cited quotes and common phrases.
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {sources.map((source, index) => (
                <div 
                  key={index} 
                  className={`bg-white/60 backdrop-blur-lg rounded-xl p-4 border border-white/50 shadow-lg text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer ${
                    activeSource === index ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                  }`}
                  onMouseEnter={() => setActiveSource(index)}
                  onMouseLeave={() => setActiveSource(null)}
                >
                  <source.icon className={`h-6 w-6 text-blue-600 mx-auto mb-2 transition-transform duration-300 ${
                    activeSource === index ? 'scale-125' : ''
                  }`} />
                  <div className="text-sm font-semibold text-gray-800">{source.name}</div>
                  <div className="text-xs text-gray-600">{source.count}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/50 shadow-lg transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="flex items-center gap-3 mb-6">
              <Search className="h-6 w-6 text-blue-600 animate-spin-slow" />
              <h3 className="text-xl font-semibold text-gray-800">Detected Similarities</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-x-1">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm font-semibold text-yellow-800">Match Found</span>
                  <span className="text-xs text-yellow-600">3% similarity</span>
                </div>
                <p className="text-sm text-gray-700 italic mb-2">
                  "Climate change is one of the most pressing issues of our time..."
                </p>
                <div className="text-xs text-yellow-700">
                  Source: Wikipedia - Climate Change Article
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-x-1">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm font-semibold text-green-800">Properly Cited</span>
                  <span className="text-xs text-green-600">2% similarity</span>
                </div>
                <p className="text-sm text-gray-700 italic mb-2">
                  "According to Smith (2023), the data suggests..."
                </p>
                <div className="text-xs text-green-700">
                  Source: Academic Journal - Correctly attributed
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-x-1">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm font-semibold text-blue-800">Common Phrase</span>
                  <span className="text-xs text-blue-600">1% similarity</span>
                </div>
                <p className="text-sm text-gray-700 italic mb-2">
                  "In conclusion, it is clear that..."
                </p>
                <div className="text-xs text-blue-700">
                  Common academic language - No action needed
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
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
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

export default PlagiarismCheck; 