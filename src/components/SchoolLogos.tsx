
import { GraduationCap } from "lucide-react";

const schools = [
  { name: "Harvard University", logo: "H" },
  { name: "Stanford University", logo: "S" },
  { name: "MIT", logo: "MIT" },
  { name: "Yale University", logo: "Y" },
  { name: "Princeton University", logo: "P" },
  { name: "Columbia University", logo: "C" },
  { name: "University of Chicago", logo: "UC" },
  { name: "Brown University", logo: "B" }
];

const SchoolLogos = () => {
  return (
    <section className="py-16 px-6 bg-white/30 backdrop-blur-lg border-y border-white/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">Trusted by educators at</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Top Schools Worldwide</h2>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {[...schools, ...schools].map((school, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 group"
              >
                <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 min-w-[180px] h-24 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-sm">{school.logo}</span>
                    </div>
                    <div className="text-xs font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                      {school.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolLogos;
