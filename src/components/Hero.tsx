import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle, Sparkles } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

const rotatingTexts = [
  "your students will love",
  "works in Google Docs",
  "grades like you do",
  "works in Canvas",
  "saves you hours",
  "provides instant feedback",
  "improves student writing"
];

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = displayText;
    const targetText = text;

    if (isTyping) {
      if (currentText === targetText) {
        setIsPaused(true);
        timeout = setTimeout(() => {
          setIsPaused(false);
          setIsTyping(false);
          setIsDeleting(true);
        }, 2000);
      } else {
        const typingSpeed = Math.max(30, Math.min(100, 100 - (currentText.length * 2)));
        timeout = setTimeout(() => {
          setDisplayText(targetText.slice(0, currentText.length + 1));
        }, typingSpeed);
      }
    } else if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setIsTyping(true);
      } else {
        const deletingSpeed = Math.max(20, Math.min(50, 50 - ((targetText.length - currentText.length) * 2)));
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, -1));
        }, deletingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, text, isTyping, isDeleting]);

  return (
    <span className="relative h-[4em] mt-4 w-[600px] leading-none">
      <span className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap leading-none text-[0.85em] bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
        {displayText}
        <span className={`inline-block w-[2px] h-[1em] align-middle ml-[2px] transition-opacity duration-300 ${isPaused ? 'opacity-0' : 'opacity-100'}`}>
          <span className="animate-smooth-blink">|</span>
        </span>
      </span>
    </span>
  );
};

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Enhanced Background gradient orbs with animation */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      {/* Floating elements for animation */}
      <div className="absolute top-32 right-1/4 w-6 h-6 bg-blue-400/30 rounded-full animate-bounce delay-200"></div>
      <div className="absolute bottom-40 left-1/4 w-8 h-8 bg-purple-400/30 rounded-full animate-bounce delay-700"></div>
      <div className="absolute top-1/3 left-1/3 w-5 h-5 bg-cyan-400/30 rounded-full animate-bounce delay-1000"></div>

      {/* Google Icons */}
      <div className="absolute top-1/2 right-[5%] w-16 h-16 bg-white/10 backdrop-blur-lg rounded-xl p-3 shadow-lg animate-float">
        <img 
          src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png" 
          alt="Google Docs" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute top-1/2 left-[5%] w-16 h-16 bg-white/10 backdrop-blur-lg rounded-xl p-3 shadow-lg animate-float-delayed">
        <img 
          src="https://fonts.gstatic.com/s/i/productlogos/classroom/v7/192px.svg" 
          alt="Google Classroom" 
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* Badge with animation */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg rounded-full px-6 py-3 mb-8 border border-white/30 animate-fade-in">
            <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
            <span className="text-base font-medium text-gray-700">Trusted by 10,000+ educators worldwide</span>
          </div>
          
          {/* Navbar */}
          <nav className="w-full max-w-7xl mx-auto px-6 mb-12">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img 
                  src="https://vibegrade.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FtextLogo.853d7cb2.png&w=3840&q=75&dpl=dpl_Bdt1YrUTBRA3eUrmibrKtv5ZHunj" 
                  alt="VibeGrade Logo" 
                  className="h-8 w-auto"
                />
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">My Rubrics</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Library</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">News</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              </div>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-4">
                <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                  Login
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Sign Up
                </Button>
              </div>
            </div>
          </nav>

          {/* Backer Logos */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="text-gray-500 text-xs font-medium tracking-wide uppercase">Backed by</span>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <img 
                  src="https://purepng.com/public/uploads/large/purepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png" 
                  alt="Microsoft" 
                  className="h-5 w-auto opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105"
                />
                <span className="text-gray-600 text-sm font-medium">Microsoft</span>
              </div>
              <div className="flex items-center gap-2">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/1200px-Y_Combinator_logo.svg.png" 
                  alt="Y Combinator" 
                  className="h-5 w-auto opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105"
                />
                <span className="text-gray-600 text-sm font-medium">Combinator</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold leading-tight animate-fade-in delay-200">
            <div className="flex flex-col items-center">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent pb-4">
                The essay grader that
              </span>
              <TypewriterText text={rotatingTexts[currentTextIndex]} />
            </div>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-400 -mt-40">
            Give your students the best feedback 10x faster. Teachers who vibe grade return full grade breakdowns with actionable feedback to every single student, in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in delay-600">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
              Start Grading for Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="px-10 py-6 rounded-full text-lg font-semibold border-2 hover:bg-white/50 backdrop-blur-sm transition-all duration-300 group hover:scale-105">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Add to Chrome Button */}
          <div className="flex justify-center mb-16 animate-fade-in delay-700">
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
          
          <div className="flex flex-wrap justify-center gap-8 text-gray-600 animate-fade-in delay-800">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-lg">No credit card required</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-lg">Setup in 2 minutes</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-lg">Free plan available</span>
            </div>
          </div>
        </div>
        
        {/* Enhanced Dashboard Preview with animation */}
        <div className="relative animate-fade-in delay-800">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white/40 backdrop-blur-lg rounded-3xl p-6 border border-white/50 shadow-2xl">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              {/* Mock Dashboard UI */}
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-gray-700 text-sm">EssayGrader Dashboard</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Live</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Recent Essays */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Recent Essays</h3>
                    <div className="space-y-3">
                      {[
                        { title: "The Impact of Technology", grade: "A-", progress: 95 },
                        { title: "Climate Change Solutions", grade: "B+", progress: 87 },
                        { title: "Historical Analysis", grade: "A", progress: 98 }
                      ].map((essay, i) => (
                        <div key={i} className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                              <span className="text-white font-semibold text-sm">{essay.grade}</span>
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-gray-800">{essay.title}</div>
                              <div className="flex items-center gap-2">
                                <div className="w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-1000"
                                    style={{ width: `${essay.progress}%` }}
                                  ></div>
                                </div>
                                <span className="text-xs text-gray-500">{essay.progress}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* AI Feedback */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">AI Feedback</h3>
                    <div className="space-y-3">
                      <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <div className="text-sm text-green-700">
                            "Excellent thesis statement and supporting arguments. Consider expanding on the conclusion for maximum impact."
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div className="text-sm text-blue-700">
                            "Strong use of evidence throughout. Grammar and structure are well-developed."
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes smooth-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-smooth-blink {
          animation: smooth-blink 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;

// Add these keyframes at the end of the file, before the export
const styles = `
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(-5deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 6s ease-in-out infinite;
  animation-delay: 1s;
}
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
