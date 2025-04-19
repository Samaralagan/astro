import { useState, useEffect, useRef } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "How does it help my business?",
      answer:
        "Our AI-powered marketing agent uses advanced algorithms to automate tasks like social media management, email marketing, customer support, and competitor analysis saving time and boosting results with data-driven decisions.",
    },
    {
      question: "Can I customize campaigns based on my business goals?",
      answer:
        "Absolutely! You can define specific objectives like increasing sales, engagement, or leads, and the platform will adapt strategies, content, and analytics to meet your goals.",
    },
    {
      question: "How does social media automation work?",
      answer:
        "Our platform schedules and publishes content, tracks real-time trends, and engages your audience intelligently helping you stay active and relevant across all platforms without manual effort.",
    },
    {
      question: "Will the AI handle customer support too? ",
      answer:
        "Yes, our built-in AI chatbot offers 24/7 support, answers common queries, and guides visitors enhancing user experience while freeing up your team.",
    },
    {
      question: "How does the platform help with email marketing?",
      answer:
        "We use AI to analyze user behavior and segment your audience, sending highly personalized emails that improve open rates, engagement, and conversions.",
    },
    {
      question: "Can I monitor what my competitors are doing?",
      answer:
        "Definitely. Our competitor analysis tool tracks your rivals campaigns, social presence, and market strategies so you can identify gaps, trends, and new opportunities in real time.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Effect to set up Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // When the section enters the viewport
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset animation when section leaves viewport
          setIsVisible(false);
        }
      },
      {
        // Adjust threshold as needed (0.1 means when 10% of the element is visible)
        threshold: 0.1,
        // Optional: margin around the root
        rootMargin: "0px",
      }
    );

    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className={`py-16 bg-gray-50 transition-opacity duration-700 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible
              ? "opacity-100 transform-none"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h2
            className="text-3xl font-bold text-gray-900 bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(to left, #3D0C11, #D80032)",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Have questions? We're here to help.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow overflow-hidden transition-all duration-700 ${
                isVisible
                  ? "opacity-100 transform-none"
                  : index % 2 === 0
                  ? "opacity-0 -translate-x-20"
                  : "opacity-0 translate-x-20"
              }`}
              style={{
                transitionDelay: `${200 * index}ms`,
              }}
            >
              <button
                className="flex w-full justify-between items-center p-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
