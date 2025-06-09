import { useState, useEffect } from "react";
import { Clock, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Set finals date to 7 days from now
    const finalsDate = new Date();
    finalsDate.setDate(finalsDate.getDate() + 7);
    finalsDate.setHours(23, 59, 59, 999);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = finalsDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        
        // Trigger animation when seconds change
        if (seconds !== timeLeft.seconds) {
          setIsAnimating(true);
          setTimeout(() => setIsAnimating(false), 500);
        }
      } else {
        // Reset countdown when it reaches zero
        finalsDate.setDate(finalsDate.getDate() + 7);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft.seconds]);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white py-3 px-6 overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce delay-500"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-300 animate-pulse" />
              <span className="font-bold text-lg">Vibegrade FREE for Finals!</span>
              <Clock className="h-4 w-4 text-white/80" />
            </div>
            
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <span className="text-white/80">Ends in:</span>
              <div className="flex gap-2">
                <div className={`bg-white/20 backdrop-blur-sm rounded px-2 py-1 min-w-[40px] text-center transition-all duration-300 ${isAnimating ? 'scale-110' : 'scale-100'}`}>
                  <span className="font-mono font-bold">{String(timeLeft.days).padStart(2, '0')}</span>
                  <div className="text-xs text-white/70">days</div>
                </div>
                <div className={`bg-white/20 backdrop-blur-sm rounded px-2 py-1 min-w-[40px] text-center transition-all duration-300 ${isAnimating ? 'scale-110' : 'scale-100'}`}>
                  <span className="font-mono font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <div className="text-xs text-white/70">hrs</div>
                </div>
                <div className={`bg-white/20 backdrop-blur-sm rounded px-2 py-1 min-w-[40px] text-center transition-all duration-300 ${isAnimating ? 'scale-110' : 'scale-100'}`}>
                  <span className="font-mono font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <div className="text-xs text-white/70">min</div>
                </div>
                <div className={`bg-white/20 backdrop-blur-sm rounded px-2 py-1 min-w-[40px] text-center transition-all duration-300 ${isAnimating ? 'scale-110' : 'scale-100'}`}>
                  <span className="font-mono font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <div className="text-xs text-white/70">sec</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button 
              size="sm" 
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-semibold transition-all duration-300 hover:scale-105"
            >
              Get Finals Free
            </Button>
            <button 
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Mobile countdown */}
        <div className="sm:hidden mt-2 flex justify-center">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-white/80">Ends in:</span>
            <div className="flex gap-1">
              <span className={`bg-white/20 backdrop-blur-sm rounded px-1.5 py-0.5 font-mono font-bold transition-all duration-300 ${isAnimating ? 'scale-110' : 'scale-100'}`}>
                {String(timeLeft.days).padStart(2, '0')}d
              </span>
              <span className={`bg-white/20 backdrop-blur-sm rounded px-1.5 py-0.5 font-mono font-bold transition-all duration-300 ${isAnimating ? 'scale-110' : 'scale-100'}`}>
                {String(timeLeft.hours).padStart(2, '0')}h
              </span>
              <span className={`bg-white/20 backdrop-blur-sm rounded px-1.5 py-0.5 font-mono font-bold transition-all duration-300 ${isAnimating ? 'scale-110' : 'scale-100'}`}>
                {String(timeLeft.minutes).padStart(2, '0')}m
              </span>
              <span className={`bg-white/20 backdrop-blur-sm rounded px-1.5 py-0.5 font-mono font-bold transition-all duration-300 ${isAnimating ? 'scale-110' : 'scale-100'}`}>
                {String(timeLeft.seconds).padStart(2, '0')}s
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownBanner;
