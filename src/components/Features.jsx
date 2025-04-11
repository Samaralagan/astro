// src/components/Features.jsx
import { useState } from "react";

export default function Features() {
  const features = [
    {
      title: "Premium Design",
      description:
        "Elevate your brand with professional design that stands out from the competition.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          ></path>
        </svg>
      ),
      iconBg: "bg-orange-500",
    },
    {
      title: "Amazing Photography",
      description:
        "Capture stunning visuals that tell your story and engage your audience.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
      ),
      iconBg: "bg-blue-600",
    },
    {
      title: "Unique Strategy",
      description:
        "Develop custom strategies tailored to meet your specific business objectives.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      ),
      iconBg: "bg-purple-600",
    },
    {
      title: "Creative Ideas",
      description:
        "Unleash innovative concepts that drive engagement and inspire your audience.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          ></path>
        </svg>
      ),
      iconBg: "bg-amber-500",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center h-full">
          {/* Heading and description - shows first on mobile, last on desktop */}
          <div className="w-full md:w-3/10 md:order-last order-first text-center flex flex-col justify-center items-center mb-12 md:mb-0 md:pl-8">
            <div className="max-w-sm mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
              <p className="mt-6 text-gray-600">
                Dignissim suspendisse in est ante in nibh mauris. Varius quam
                quisque id diam vel quam elementum pulvinar etiam. Nunc pulvinar
                sapien et ligula ullamcorper malesuada proin.
              </p>
            </div>
          </div>

          {/* Feature cards section - shows second on mobile, first on desktop */}
          <div className="w-full md:w-7/10 md:order-first order-last">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`perspective-1000 ${
                    index % 2 === 0 ? "mt-0 md:mt-8" : "mt-0"
                  }`}
                >
                  <div className="flip-card h-64 w-full">
                    <div className="flip-card-inner relative w-full h-full transition-transform duration-500 transform-style-preserve-3d">
                      {/* Front of card */}
                      <div className="flip-card-front absolute w-full h-full bg-white rounded-lg overflow-hidden flex items-center p-6 shadow-lg text-center">
                        <div
                          className={`${feature.iconBg} inline-flex items-center justify-center p-4 rounded-full text-white mx-auto`}
                        >
                          {feature.icon}
                        </div>
                        <h3 className="mt-4 text-xl font-bold text-gray-900 absolute bottom-6 left-0 right-0">
                          {feature.title}
                        </h3>
                      </div>

                      {/* Back of card */}
                      <div className="flip-card-back absolute w-full h-full bg-white rounded-lg p-6 flex flex-col justify-center items-center shadow-lg backface-hidden">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-center">
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
        .perspective-1000 {
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

        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        /* Custom width classes since Tailwind doesn't have 3/10 and 7/10 by default */
        @media (min-width: 768px) {
          .md\\:w-3\\/10 {
            width: 40%;
          }
          .md\\:w-7\\/10 {
            width: 60%;
          }
        }
      `}</style>
    </section>
  );
}
