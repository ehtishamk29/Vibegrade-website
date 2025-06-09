import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for trying out our platform",
    features: [
      { text: "1-Click with VibeGrade Agent", included: true },
      { text: "Grade 10 essays/month", included: true },
      { text: "AI Breakdown and Annotations", included: true },
      { text: "Email support", included: true },
      { text: "Custom rubrics", included: false },
      { text: "Bulk upload", included: false },
      { text: "Priority support", included: false }
    ],
    buttonText: "Get Started Free",
    popular: false
  },
  {
    name: "Essential",
    price: "$12.89",
    period: "/month",
    description: "For teachers who want to speed up grading",
    features: [
      { text: "Up to 3000 essays per year", included: true },
      { text: "AI Criteria Breakdown", included: true },
      { text: "Smart Annotations", included: true },
      { text: "AI Writing Detection", included: true },
      { text: "Detailed analytics", included: true },
      { text: "24/7 Support", included: true },
      { text: "Integration with LMS", included: false }
    ],
    buttonText: "Start Free Trial",
    popular: true
  },
  {
    name: "Institution",
    price: "Custom Plan",
    period: "/month",
    description: "For schools and universities",
    features: [
      { text: "Unlimited grading", included: true },
      { text: "Advanced AI with custom models", included: true },
      { text: "Custom rubrics & workflows", included: true },
      { text: "LMS integration", included: true },
      { text: "Advanced analytics & reporting", included: true },
      { text: "Professional Training and Onboarding", included: true },
      { text: "Priority email and video support", included: true }
    ],
    buttonText: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating elements */}
        <div className="absolute top-32 right-1/4 w-4 h-4 bg-blue-400/30 rounded-full animate-bounce delay-200"></div>
        <div className="absolute bottom-40 left-1/4 w-6 h-6 bg-purple-400/30 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-cyan-400/30 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg rounded-full px-4 py-2 mb-6 border border-white/30">
            <span className="text-sm font-medium text-gray-700">Choose Your Plan</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees, cancel anytime.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {plans.map((plan, index) => (
            <div key={index} className={`relative ${plan.popular ? 'transform scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative z-10 group hover:-translate-y-2 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300"></div>
                <div className="relative">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{plan.name}</h3>
                    <div className="text-4xl font-bold text-gray-900 mb-1 group-hover:scale-105 transition-transform duration-300">
                      {plan.price}
                      <span className="text-lg text-gray-600 font-normal">{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl group-hover:scale-105' 
                        : 'bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 group-hover:scale-105'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Need a custom solution for your institution?</p>
          <Button variant="outline" className="rounded-full px-8 py-3 border-2 hover:bg-white/50 backdrop-blur-sm">
            Contact Our Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
