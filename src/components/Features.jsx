import { useState, useEffect, useRef } from "react";
import ser1 from "../assets/ser1.svg";
import ser2 from "../assets/ser2.svg";
import ser3 from "../assets/ser3.svg";
import ser4 from "../assets/ser4.svg";
export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility state based on intersection
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: "-50px", // Small margin to make trigger slightly before fully visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      title: "Social Media Management",
      description:
        "EAutomate posts, track trends, and engage your audience in real-time with AI precision.",
      icon: <img src={ser1.src} alt="" />,
      iconBg: "bg-ser1",
    },
    {
      title: "Personalized Email Marketing",
      description:
        "Deliver customized emails that drive higher open rates and conversions with AI-driven insights.",
      icon: <img src={ser2.src} alt="" />,
      iconBg: "bg-ser2",
    },
    {
      title: "Chatbot Automation",
      description:
        "Provide 24/7 customer support with AI chatbots that efficiently resolve queries and boost satisfaction.",
      icon: <img src={ser3.src} alt="" />,
      iconBg: "bg-ser3",
    },
    {
      title: "Competitor Analysis",
      description:
        "Strength AI to monitor competitors, identify market trends, and uncover strategic opportunities.",
      icon: <img src={ser4.src} alt="" />,
      iconBg: "bg-ser4",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`py-12 md:py-16 bg-gray-50 text-gray-900 transition-all duration-500 overflow-hidden ${
        isVisible ? "opacity-100" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Heading and description - shows first on mobile, last on desktop */}
          <div
            className={`
            w-full md:w-2/5 md:order-last order-first text-center 
            flex flex-col justify-center items-center mb-12 md:mb-0 md:pl-8
            transition-all duration-1000 delay-300
            ${isVisible ? "opacity-100" : "opacity-0 translate-x-10"}
          `}
          >
            <div className="max-w-sm mx-auto">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(to left, #3D0C11, #D80032)",
                }}
              >
                Our Services
              </h2>
              <p className="mt-4 md:mt-6 text-gray-600 text-sm md:text-base">
                Dignissim suspendisse in est ante in nibh mauris. Varius quam
                quisque id diam vel quam elementum pulvinar etiam. Nunc pulvinar
                sapien et ligula ullamcorper malesuada proin.
              </p>
            </div>
          </div>

          {/* Feature cards section - shows second on mobile, first on desktop */}
          <div
            className={`
            w-full md:w-3/5 md:order-first order-last 
            transition-all duration-1000 delay-500
            ${isVisible ? "opacity-100" : "opacity-0 -translate-x-10"}
          `}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`perspective ${
                    index % 2 === 0 ? "mt-0 md:mt-8" : "mt-0"
                  } transition-all duration-700 transform ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }`}
                  style={{
                    transitionDelay: `${isVisible ? 700 + index * 200 : 0}ms`,
                  }}
                >
                  <div className="flip-card h-56 md:h-64 w-full">
                    <div className="flip-card-inner relative w-full h-full transition-transform duration-500">
                      {/* Front of card */}
                      <div className="flip-card-front absolute w-full h-full bg-white rounded-lg overflow-hidden flex flex-col items-center p-4 md:p-6 shadow-lg text-center">
                        <div
                          className={`${feature.iconBg} inline-flex items-center justify-center p-3 md:p-4 rounded-full text-white mx-auto`}
                        >
                          {feature.icon}
                          <div
                            className={`absolute inset-0 rounded-full ${
                              isVisible ? "icon-pulse" : ""
                            }`}
                            style={{
                              animationDelay: `${1000 + index * 200}ms`,
                            }}
                          ></div>
                        </div>
                        <h3 className="mt-4 text-lg md:text-xl font-bold text-gray-900 absolute bottom-4 md:bottom-6 left-0 right-0">
                          {feature.title}
                        </h3>
                      </div>

                      {/* Back of card */}
                      <div className="flip-card-back absolute w-full h-full bg-maroon5 rounded-lg p-4 md:p-6 flex flex-col justify-center items-center shadow-lg">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 text-center">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-inner {
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card-front,
        .flip-card-back {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(255, 255, 255, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
          }
        }

        .icon-pulse {
          animation: pulse 1.5s;
          animation-iteration-count: 1;
        }
      `}</style>
    </section>
  );
}
