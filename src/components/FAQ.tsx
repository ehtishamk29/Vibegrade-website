
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is VibeGrade?",
    answer: "VibeGrade is the AI essay grader that works directly in Google Docs, Canvas, and other LMS platforms with your own customized rubric criteria to deliver personalized feedback and a final grade breakdown while checking for plagiarism and AI writing on essays."
  },
  {
    question: "How is it different from ChatGPT?",
    answer: "VibeGrade is an AI essay grader specially designed to help educators grade essays with responsible and secure use of AI, whereas ChatGPT is a general purpose chatbot.Although ChatGPT can provide general feedback on essays, it makes it hard to pinpoint specific areas for improvement. ChatGPT's performance is inconsistent and often requires tweaking prompts, leading to varied results. VibeGrade offers consistent outcomes instantly without any complicated setup and annotations so teachers can instantly see successes and issues, saving hours of time.Unlike ChatGPT, which lacks built-in plagiarism and AI writing detection, VibeGrade includes these features to ensure academic integrity so teachers don't have to pay for other expensive tools."
  },
  {
    question: "How does it know the criteria?",
    answer: "VibeGrade adapts to your unique rubric, analyzing student work solely based on the criteria you provide, ensuring accurate, personalized grading. Simply provide the level 4 section of your rubric, and VibeGrade will take care of the rest!"
  },
  {
    question: "How accurate is the grade estimate?",
    answer: "Our grade estimates are designed for precision, typically within ±3% of the final grade."
  },
  {
    question: "Doesn't AI introduce more bias?",
    answer: "We take pride in VibeGrade being the most fair and objective grading tool available. We believe that the professional judgement of teachers is key to fair grading, which is why our tools only use the criteria and grade level provided by the teacher to evaluate work.We acknowledge the biases that generative AI technology may introduce, which is why we rigourously test our systems, and always remind our users that teachers are in the driver's seat."
  },
  {
    question: "Will VibeGrade replace teachers?",
    answer: "Absolutely not. VibeGrade enhances your ability to provide fair and efficient grading, reinforcing the essential role of teachers in education."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Vibegrade
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/50 backdrop-blur-lg rounded-2xl border border-white/50 shadow-lg overflow-hidden">
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/30 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-800 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="text-blue-600 hover:text-blue-700 font-semibold">
            Contact our support team →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
