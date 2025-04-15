import { useState, useEffect, useRef } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "How do I get started?",
      answer:
        "Getting started is easy! Simply sign up for an account, complete your profile, and follow the onboarding process. Our intuitive setup wizard will guide you through the initial configuration steps.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes, we offer a 14-day free trial on all our plans. No credit card is required to start your trial. You can upgrade to a paid plan at any time during or after your trial.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to the service until the end of your current billing period.",
    },
    {
      question: "Do you offer support?",
      answer:
        "Absolutely! We provide 24/7 support via email and live chat. Our dedicated support team is always ready to help you with any questions or issues you might have.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Security is our top priority. We use industry-standard encryption and security protocols to protect your data. All information is stored on secure servers with regular backups.",
    },
    {
      question: "Can I integrate with other tools?",
      answer:
        "Yes, our platform integrates with many popular tools and services. We have built-in integrations for CRM, marketing, analytics, and project management tools to streamline your workflow.",
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
