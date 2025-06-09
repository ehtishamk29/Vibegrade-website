import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-2">
            <div className="w-40">
              <img
                src="https://vibegrade.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FtextLogo.853d7cb2.png&w=3840&q=75&dpl=dpl_Bdt1YrUTBRA3eUrmibrKtv5ZHunj"
                alt="VibeGrade Logo"
                className="w-full h-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              VibeGrade is the AI that works directly inside Google Classroom, Google Docs, and Canvas to grade papers 10x faster, in the teacher's style.
            </p>
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle2 className="h-5 w-5" />
              <span className="text-sm font-medium">All Systems Operational</span>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-400 mb-2">Backed by</p>
              <p className="text-lg font-semibold text-white"> Y Combinator</p>
            </div>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Product</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Start Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rubrics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Login</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chrome Extension</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compare</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Teacher Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Measures</a></li>
            </ul>
          </div>
        </div>

        {/* Use Cases */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-4">Use Cases</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">AI Essay Grader</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Writing Process Checker</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">AI Grader for Elementary</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">AI Writing Detector</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">AI Grader for Middle School</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">AI Grader for High School</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">AI Grader for College</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Plagiarism Detector</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">AI Grader for Texas STAAR</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">AI Rubric Generator</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">AI Essay Grader Agent</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">AI Grader for NAPLAN Australia</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 VibeGrade. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
