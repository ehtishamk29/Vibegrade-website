import { Shield, Lock, Database, ShieldCheck, Eye, FileCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DataSecurity = () => {
  const features = [
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "All student data is encrypted during transmission and storage using industry-standard AES-256 encryption"
    },
    {
      icon: Lock,
      title: "FERPA Compliant",
      description: "Fully compliant with educational privacy regulations to protect student information and academic records"
    },
    {
      icon: Database,
      title: "Secure Cloud Storage",
      description: "Data stored in SOC 2 certified data centers with redundant backups and 99.9% uptime guarantee"
    },
    {
      icon: ShieldCheck,
      title: "Zero Data Sharing",
      description: "We never share, sell, or use your student data for any purpose other than providing our grading service"
    },
    {
      icon: Eye,
      title: "Privacy by Design",
      description: "Built with privacy at the core - minimal data collection with automatic deletion of processed essays"
    },
    {
      icon: FileCheck,
      title: "Audit Trail",
      description: "Complete audit logs for all data access and processing activities for transparency and compliance"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-blue-900/90 to-purple-900/90 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-6 shadow-lg border border-white/10">
            <Shield className="h-5 w-5 text-blue-400" />
            <span className="text-sm font-medium text-gray-200">Enterprise-Grade Security</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            We will keep your data{" "}
            <span className="italic bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              safe and sound
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trust is our priority. We've built comprehensive security measures to protect student privacy and ensure educational data remains confidential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-lg mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Trusted by Educational Institutions</h3>
            <p className="text-gray-300">Certified and compliant with the highest security standards</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">SOC 2</span>
              </div>
              <p className="text-sm font-medium text-gray-300">SOC 2 Type II</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">FERPA</span>
              </div>
              <p className="text-sm font-medium text-gray-300">FERPA Compliant</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">GDPR</span>
              </div>
              <p className="text-sm font-medium text-gray-300">GDPR Ready</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xs">ISO 27001</span>
              </div>
              <p className="text-sm font-medium text-gray-300">ISO 27001</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-4">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 mr-4"
          >
            Partner with Us
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
          >
            Visit Privacy Center
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DataSecurity; 