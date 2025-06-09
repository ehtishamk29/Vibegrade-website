import { Play, Pause, RotateCcw, Clock, Eye } from "lucide-react";
import { useState, useEffect } from "react";

const PlaybackWriting = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeEvent, setActiveEvent] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState("0:00");

  const timelineEvents = [
    { time: "0:00", action: "Started essay", type: "start" },
    { time: "0:45", action: "Added introduction", type: "add" },
    { time: "2:30", action: "Deleted paragraph", type: "delete" },
    { time: "4:15", action: "Revised thesis", type: "edit" },
    { time: "6:00", action: "Added conclusion", type: "add" },
    { time: "7:30", action: "Final review", type: "review" }
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

    const element = document.getElementById("playback-writing");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      let currentIndex = 0;
      interval = setInterval(() => {
        if (currentIndex < timelineEvents.length) {
          setCurrentTime(timelineEvents[currentIndex].time);
          setActiveEvent(currentIndex);
          currentIndex++;
        } else {
          setIsPlaying(false);
          setCurrentTime("0:00");
          setActiveEvent(null);
        }
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section id="playback-writing" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2 mb-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-sm font-medium text-gray-700">Writing Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Playback <span className="italic text-purple-600">Writing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Rewind and replay the student's writing process to see how they crafted their essay. Identify revisions, struggles, and potential AI assistance to provide more insightful feedback.



          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/50 shadow-lg transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </button>
              <div className="flex-1">
                <div className="text-lg font-semibold text-gray-800">Writing Session Playback</div>
                <div className="text-sm text-gray-600">Total time: 7:30 minutes</div>
              </div>
              <button 
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentTime("0:00");
                  setActiveEvent(null);
                }}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors hover:rotate-180 duration-500"
              >
                <RotateCcw className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3 max-h-64 overflow-y-auto custom-scrollbar">
              {timelineEvents.map((event, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 transform hover:-translate-x-1 ${
                    activeEvent === index 
                      ? 'bg-purple-50 border-l-4 border-purple-500' 
                      : 'hover:bg-gray-50'
                  }`}
                  onMouseEnter={() => setActiveEvent(index)}
                  onMouseLeave={() => setActiveEvent(null)}
                >
                  <div className="flex-shrink-0 w-16 text-sm font-mono text-gray-500">{event.time}</div>
                  <div className={`w-2 h-2 rounded-full transition-transform duration-300 ${
                    event.type === 'start' ? 'bg-green-500' :
                    event.type === 'add' ? 'bg-blue-500' :
                    event.type === 'delete' ? 'bg-red-500' :
                    event.type === 'edit' ? 'bg-yellow-500' :
                    'bg-purple-500'
                  } ${activeEvent === index ? 'scale-150' : ''}`}></div>
                  <div className="text-gray-700">{event.action}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="h-5 w-5 text-purple-600 animate-pulse" />
                <span className="font-semibold text-purple-800">Process Insights</span>
              </div>
              <div className="text-sm text-purple-700">
                Student spent 65% of time on content creation and 35% on revision - excellent writing process balance!
              </div>
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-white/60 backdrop-blur-lg rounded-xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-blue-600 animate-spin-slow" />
                <h3 className="text-xl font-semibold text-gray-800">Writing Analytics</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300 transform hover:-translate-y-1">
                  <div className="text-2xl font-bold text-blue-600 animate-count">7:30</div>
                  <div className="text-sm text-gray-600">Total Time</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300 transform hover:-translate-y-1">
                  <div className="text-2xl font-bold text-green-600 animate-count">43</div>
                  <div className="text-sm text-gray-600">Revisions</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300 transform hover:-translate-y-1">
                  <div className="text-2xl font-bold text-purple-600 animate-count">28</div>
                  <div className="text-sm text-gray-600">WPM</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors duration-300 transform hover:-translate-y-1">
                  <div className="text-2xl font-bold text-yellow-600 animate-count">92%</div>
                  <div className="text-sm text-gray-600">Focus Score</div>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-lg rounded-xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className="font-semibold text-gray-800 mb-3">Process Strengths</h4>
              <ul className="space-y-2">
                {[
                  "Consistent writing pace throughout session",
                  "Good balance of creation and revision",
                  "Minimal distractions and interruptions"
                ].map((strength, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </section>
  );
};

export default PlaybackWriting; 