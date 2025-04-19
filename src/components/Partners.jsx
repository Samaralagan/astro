import { useState, useEffect, useRef } from "react";
import par1 from "../assets/par1.png";
import par2 from "../assets/par2.png";
import par3 from "../assets/par3.png";
import par4 from "../assets/par4.png";
import par5 from "../assets/par5.png";
import par6 from "../assets/par6.png";
import parjoin from "../assets/parjoin.jpg";

// src/components/Partners.jsx
export default function Partners() {
  // Removed isAnimating state since we don't need it anymore
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Partner data with image imports
  const partners = [
    { img: par1.src, link: "https://zapier.com/", name: "Zapier" },
    {
      img: par2.src,
      link: "https://www.activecampaign.com/",
      name: "Active campaign",
    },
    { img: par3.src, link: "https://www.chatwoot.com/", name: "chat woot" },
    { img: par4.src, link: "https://www.semrush.com/", name: "semrush" },
    { img: par5.src, link: "https://www.canva.com/", name: "canva" },
    {
      img: par6.src,
      link: "https://openai.com/index/chatgpt/",
      name: "Chatgpt",
    },
  ];

  // Increased orbit radius to create more space between logos
  const orbitRadius = 180;

  // Set up intersection observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When section becomes visible, trigger animations
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset animations when section is out of view
          setIsVisible(false);
        }
      },
      {
        // Adjust threshold to control when animation triggers (0.2 = 20% visible)
        threshold: 0.2,
        // Add rootMargin to trigger slightly before the section comes into view
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Clean up observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 overflow-hidden relative bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left half - Text content with staggered fade-in animations */}
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-12 md:mb-0">
            <h2
              className={`text-4xl font-bold  mb-6 transition-all duration-1500 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              } bg-clip-text text-transparent`}
              style={{
                backgroundImage: "linear-gradient(to left, #3D0C11, #D80032)",
              }}
            >
              Our Partners
            </h2>
            <p
              className={`text-xl text-gray-600 transition-all duration-1500 delay-500 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Help your customers double their inbound conversion rates and grow
              your business with new revenue streams.
            </p>
          </div>

          {/* Right half - Wheel of partners with fade-in effect */}
          <div className="w-full md:w-1/2 relative h-96">
            {/* Center logo - the "screw" or hub of the wheel */}
            <div
              className={`absolute z-10 bg-white rounded-xl shadow-lg p-4 w-32 h-32 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-opacity duration-2000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Use a logo or placeholder */}
              <img
                src={parjoin.src}
                alt="Partners"
                className="w-24 h-24 object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23FF5C35'/%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%23ffffff'%3ELogo%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>

            {/* Wheel of partners with fade-in animation from 0.1 to 1 */}
            <div
              className={`partner-wheel ${isVisible ? "wheel-fade-in" : ""}`}
              // Removed onMouseEnter and onMouseLeave event handlers
            >
              {partners.map((partner, index) => {
                // Calculate position on the wheel
                const angle = (index / partners.length) * 360;
                const radians = (angle * Math.PI) / 180;
                const x = Math.cos(radians) * orbitRadius;
                const y = Math.sin(radians) * orbitRadius;

                // Calculate delay for staggered appearance
                const staggerDelay = 200 * index;

                return (
                  <a
                    key={index}
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="partner-item absolute"
                    style={{
                      top: `calc(50% + ${y}px)`,
                      left: `calc(50% + ${x}px)`,
                      transform: "translate(-50%, -50%)",
                      transitionDelay: `${800 + staggerDelay}ms`,
                    }}
                  >
                    <div
                      className={`h-20 w-20 md:h-24 md:w-24 rounded-lg bg-maroon5 shadow-md flex items-center justify-center p-2 hover:scale-110 transition-all duration-700 partner-logo ${
                        isVisible ? "partner-fade-in" : "opacity-0"
                      }`}
                      // Removed animationPlayState style
                    >
                      {/* Use the imported partner image */}
                      <img
                        src={partner.img}
                        alt={partner.name}
                        className="object-contain w-full h-full"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect width='80' height='80' fill='%23f0f4f8'/%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='10' fill='%23334e68'%3E" +
                            partner.name +
                            "%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CSS for the animations */}
      <style jsx>{`
        .partner-wheel {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          opacity: 0.1;
          transition: opacity 4s ease-in-out;
          animation: spin 30s linear infinite;
        }

        .wheel-fade-in {
          opacity: 1;
        }

        .partner-logo {
          opacity: 0;
          transform: scale(0.8);
          animation: counter-spin 30s linear infinite;
        }

        .partner-fade-in {
          opacity: 1;
          transform: scale(1);
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes counter-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
      `}</style>
    </section>
  );
}
