import React, { useState, useEffect } from "react";
import testing from "../assets/testing.gif";

export default function PricingSection() {
  // State to track which plan is being hovered
  const [hoveredPlan, setHoveredPlan] = useState(null);
  // State for typing effect on compare button
  const [isCompareHovered, setIsCompareHovered] = useState(false);
  const [typingText, setTypingText] = useState("");

  // Handle typing effect when Compare button is hovered
  useEffect(() => {
    if (isCompareHovered) {
      const text = "???....";
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setTypingText(text.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 200);

      return () => {
        clearInterval(typingInterval);
      };
    } else {
      setTypingText("");
    }
  }, [isCompareHovered]);

  // Function to generate random dust particles
  const generateDustParticles = (count) => {
    const particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 6 + 2,
        duration: Math.random() * 2 + 1,
        delay: Math.random() * 0.5,
      });
    }
    return particles;
  };

  // Pre-generate particles for each plan
  const basicParticles = generateDustParticles(25);
  const standardParticles = generateDustParticles(25);
  const premiumParticles = generateDustParticles(25);

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container for desktop layout - side by side */}
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Header and description - Now centered */}
          <div className="lg:w-1/3 lg:pr-12 mb-10 lg:mb-0 flex items-center justify-center">
            <div className="sticky lg:top-8 text-center">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #3D0C11, #D80032)",
                }}
              >
                Choose Your Perfect Plan
              </h2>

              <p className="text-lg text-gray-600">
                We offer flexible pricing options to meet your needs. Whether
                you're just starting out or looking for advanced features, we
                have a plan that's right for you.
              </p>
              <div className="mt-6 hidden lg:block">
                <button
                  className="text-white px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center justify-center"
                  style={{ backgroundColor: "#3D0C11" }}
                  onMouseEnter={() => setIsCompareHovered(true)}
                  onMouseLeave={() => setIsCompareHovered(false)}
                >
                  <img
                    src={testing.src}
                    alt="Compare"
                    className="w-9 h-9 mr-2"
                    style={{ filter: "brightness(0) invert(1)" }} // Makes icon white
                  />
                  <span className="relative min-w-[180px] inline-block text-left">
                    {isCompareHovered ? (
                      <h1 className="typing-effect m-0 text-base font-medium">
                        {typingText}
                      </h1>
                    ) : (
                      "Compare All Features"
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Pricing cards */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
              {/* Basic Plan */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-auto transform transition-transform duration-300 hover:scale-105 relative">
                {/* Header - Custom shape with rotation but text remains flat */}
                <div className="h-48 overflow-hidden relative">
                  <div
                    className="absolute inset-0 w-140 h-140 -top-20 -left-20"
                    style={{ transform: "rotate(45deg)" }}
                  >
                    <div className="bg-maroondark h-56 w-full"></div>
                    <div className="h-8 w-full bg-maroon2 mt-1"></div>
                  </div>
                  {/* Flat text overlay */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <h3 className="text-2xl font-bold text-maroon2">Basic</h3>
                    <div className="text-white mt-2">
                      <span className="text-3xl font-bold">$2.99</span>
                      <span className="text-sm ml-1">per month</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 py-6">
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 text-gray-700">
                        Sample Text Here
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-maroon2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 text-gray-700">
                        Other Text Title
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-maroon2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 text-gray-700">
                        Text Space Goes Here
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-maroon2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 text-gray-700">
                        Description Space
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-maroon2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 text-gray-700">
                        Sample Text Here
                      </span>
                    </li>
                  </ul>

                  <div className="mt-8 relative">
                    <button
                      className="w-full py-3 text-white font-medium rounded focus:outline-none uppercase bg-maroon2 hover:bg-maroon2-600 transition duration-300 relative overflow-hidden"
                      onMouseEnter={() => setHoveredPlan("basic")}
                      onMouseLeave={() => setHoveredPlan(null)}
                    >
                      SELECT
                      {hoveredPlan === "basic" && (
                        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl animate-bounce">
                          😊
                        </span>
                      )}
                    </button>

                    {/* Celebration dust particles */}
                    {hoveredPlan === "basic" && (
                      <div className="absolute inset-0 pointer-events-none">
                        {basicParticles.map((particle) => (
                          <div
                            key={particle.id}
                            className="absolute rounded-full bg-red-300"
                            style={{
                              left: `${particle.left}%`,
                              top: `${particle.top}%`,
                              width: `${particle.size}px`,
                              height: `${particle.size}px`,
                              opacity: 0,
                              animation: `float ${particle.duration}s ease-out ${particle.delay}s forwards`,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Standard Plan */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-auto transform transition-transform duration-300 hover:scale-105 relative z-10 md:mt-0">
                {/* Header - Custom shape with rotation but text remains flat */}
                <div className="h-48 overflow-hidden relative">
                  <div
                    className="absolute inset-0 w-140 h-140 -top-20 -left-20"
                    style={{ transform: "rotate(45deg)" }}
                  >
                    <div className="bg-maroondark h-56 w-full"></div>
                    <div className="h-8 w-full bg-maroon3 mt-1"></div>
                  </div>
                  {/* Flat text overlay */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <h3 className="text-2xl font-bold text-maroon3">
                      Standard
                    </h3>
                    <div className="text-white mt-2">
                      <span className="text-3xl font-bold">$5.99</span>
                      <span className="text-sm ml-1">per month</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 py-6">
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 text-gray-700">
                        Sample Text Here
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 text-gray-700">
                        Other Text Title
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 text-gray-700">
                        Text Space Goes Here
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-maroon2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 text-gray-700">
                        Description Space
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-maroon2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 text-gray-700">
                        Sample Text Here
                      </span>
                    </li>
                  </ul>

                  <div className="mt-8 relative">
                    <button
                      className="w-full py-3 text-white font-medium rounded focus:outline-none uppercase bg-maroon3 hover:bg-maroon3 transition duration-300 relative overflow-hidden"
                      onMouseEnter={() => setHoveredPlan("standard")}
                      onMouseLeave={() => setHoveredPlan(null)}
                    >
                      SELECT
                      {hoveredPlan === "standard" && (
                        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl animate-bounce">
                          😄
                        </span>
                      )}
                    </button>

                    {/* Celebration dust particles */}
                    {hoveredPlan === "standard" && (
                      <div className="absolute inset-0 pointer-events-none">
                        {standardParticles.map((particle) => (
                          <div
                            key={particle.id}
                            className="absolute rounded-full bg-red-300"
                            style={{
                              left: `${particle.left}%`,
                              top: `${particle.top}%`,
                              width: `${particle.size}px`,
                              height: `${particle.size}px`,
                              opacity: 0,
                              animation: `float ${particle.duration}s ease-out ${particle.delay}s forwards`,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Premium Plan */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-auto transform transition-transform duration-300 hover:scale-105 relative lg:col-start-3">
                {/* Header - Custom shape with rotation but text remains flat */}
                <div className="h-48 overflow-hidden relative">
                  <div
                    className="absolute inset-0 w-140 h-140 -top-20 -left-20"
                    style={{ transform: "rotate(45deg)" }}
                  >
                    <div className="bg-maroondark h-56 w-full"></div>
                    <div className="h-8 w-full bg-maroon4 mt-1"></div>
                  </div>
                  {/* Flat text overlay */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <h3 className="text-2xl font-bold text-maroon4">Premium</h3>
                    <div className="text-white mt-2">
                      <span className="text-3xl font-bold">$9.99</span>
                      <span className="text-sm ml-1">per month</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 py-6">
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 text-gray-700">
                        Sample Text Here
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 text-gray-700">
                        Other Text Title
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 text-gray-700">
                        Text Space Goes Here
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 text-gray-700">
                        Description Space
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 text-gray-700">
                        Sample Text Here
                      </span>
                    </li>
                  </ul>

                  <div className="mt-8 relative">
                    <button
                      className="w-full py-3 text-white font-medium rounded focus:outline-none uppercase bg-maroon4 hover:bg-red-600 transition duration-300 relative overflow-hidden"
                      onMouseEnter={() => setHoveredPlan("premium")}
                      onMouseLeave={() => setHoveredPlan(null)}
                    >
                      SELECT
                      {hoveredPlan === "premium" && (
                        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl animate-bounce">
                          😁
                        </span>
                      )}
                    </button>

                    {/* Celebration dust particles */}
                    {hoveredPlan === "premium" && (
                      <div className="absolute inset-0 pointer-events-none">
                        {premiumParticles.map((particle) => (
                          <div
                            key={particle.id}
                            className="absolute rounded-full bg-maroon4"
                            style={{
                              left: `${particle.left}%`,
                              top: `${particle.top}%`,
                              width: `${particle.size}px`,
                              height: `${particle.size}px`,
                              opacity: 0,
                              animation: `float ${particle.duration}s ease-out ${particle.delay}s forwards`,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile CTA - only visible on smaller screens */}
            <div className="mt-8 text-center lg:hidden">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center justify-center mx-auto"
                onMouseEnter={() => setIsCompareHovered(true)}
                onMouseLeave={() => setIsCompareHovered(false)}
              >
                <img
                  src="/assets/testing.gif"
                  alt="Compare"
                  className="w-5 h-5 mr-2"
                  style={{ filter: "brightness(0) invert(1)" }} // Makes icon white
                />
                <span className="relative min-w-[180px] inline-block text-left">
                  {isCompareHovered ? (
                    <h1 className="typing-effect m-0 text-base font-medium">
                      {typingText}
                    </h1>
                  ) : (
                    "Compare All Features"
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation for dust particles and typing effect */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          25% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .typing-effect {
          border-right: 2px solid white;
          animation: blinkCursor 0.8s infinite;
          padding-right: 2px;
          display: inline-block;
          min-width: 10px;
          font-weight: bold;
        }

        @keyframes blinkCursor {
          0%,
          100% {
            border-color: transparent;
          }
          50% {
            border-color: white;
          }
        }
      `}</style>
    </section>
  );
}
