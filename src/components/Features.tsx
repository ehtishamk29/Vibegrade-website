import { BookOpen, Clock, Users, TrendingUp, Shield, Zap, CheckCircle, Target, BarChart3 } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "AI-Powered Grading",
    description: "Advanced AI analyzes essays for grammar, structure, coherence, and provides detailed feedback on writing quality.",
    details: [
      "Grammar and syntax analysis",
      "Structure and flow evaluation", 
      "Coherence and clarity scoring",
      "Citation format checking"
    ]
  },
  {
    icon: Clock,
    title: "Save Hours Weekly",
    description: "Reduce grading time by 90% while providing more comprehensive feedback than traditional manual grading.",
    details: [
      "10+ hours saved per week",
      "Instant essay analysis",
      "Batch processing support",
      "Consistent grading standards"
    ]
  },
  {
    icon: Users,
    title: "Student Engagement",
    description: "Interactive feedback helps students understand their mistakes and improve their writing skills effectively.",
    details: [
      "Personalized improvement suggestions",
      "Interactive feedback system",
      "Progress tracking dashboard",
      "Peer comparison insights"
    ]
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor student improvement over time with detailed analytics and performance insights.",
    details: [
      "Individual student analytics",
      "Class performance overview",
      "Writing skill progression",
      "Detailed reporting tools"
    ]
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is protected with enterprise-grade security. Student information remains completely confidential.",
    details: [
      "End-to-end encryption",
      "FERPA compliant",
      "Regular security audits",
      "Data privacy protection"
    ]
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get comprehensive essay analysis and grades in seconds, not hours or days.",
    details: [
      "Real-time processing",
      "Immediate feedback delivery",
      "Quick turnaround times",
      "24/7 availability"
    ]
  }
];

const Features = () => {
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
          <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-6 border border-blue-200">
            <Target className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Revolutionize Your Essay Grading
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Using VibeGrade is easy, fast and gets your students the best feedback. No need to upload submissions, VibeGrade works directly in Google Docs and Canvas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full relative overflow-hidden">
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                    
                    {/* Feature details */}
                    <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {feature.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600 group-hover:translate-x-1 transition-transform duration-300">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <BarChart3 className="h-8 w-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">90%</div>
              <div className="text-gray-600">Time Saved</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">10,000+</div>
              <div className="text-gray-600">Educators Trust Us</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">95%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
