import { useState } from "react";
import par1 from "../assets/par1.png";
import par2 from "../assets/par2.png";
import par3 from "../assets/par3.png";
import par4 from "../assets/par4.png";
import par5 from "../assets/par5.png";
import par6 from "../assets/par6.png";
import parjoin from "../assets/parjoin.jpg";

// src/components/Partners.jsx
export default function Partners() {
  const [isAnimating, setIsAnimating] = useState(true);

  // Partner data with image imports
  const partners = [
    { img: par1.src, link: "https://partner1.com", name: "Partner 1" },
    { img: par2.src, link: "https://partner2.com", name: "Partner 2" },
    { img: par3.src, link: "https://partner3.com", name: "Partner 3" },
    { img: par4.src, link: "https://partner4.com", name: "Partner 4" },
    { img: par5.src, link: "https://partner5.com", name: "Partner 5" },
    { img: par6.src, link: "https://partner6.com", name: "Partner 6" },
  ];

  // Increased orbit radius to create more space between logos
  const orbitRadius = 180;

  return (
    <section className="py-16 overflow-hidden relative ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left half - Text content */}
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-12 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-gray-600">
              Help your customers double their inbound conversion rates and grow
              your business with new revenue streams.
            </p>
          </div>

          {/* Right half - Wheel of partners */}
          <div className="w-full md:w-1/2 relative h-96">
            {/* Center logo - the "screw" or hub of the wheel */}
            <div className="absolute z-10 bg-white rounded-xl shadow-lg p-4 w-32 h-32 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
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

            {/* Wheel of partners */}
            <div
              className={`partner-wheel ${isAnimating ? "animate" : "paused"}`}
              onMouseEnter={() => setIsAnimating(false)}
              onMouseLeave={() => setIsAnimating(true)}
            >
              {partners.map((partner, index) => {
                // Calculate position on the wheel
                const angle = (index / partners.length) * 360;
                const radians = (angle * Math.PI) / 180;
                const x = Math.cos(radians) * orbitRadius;
                const y = Math.sin(radians) * orbitRadius;

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
                    }}
                  >
                    <div className="h-20 w-20 md:h-24 md:w-24 rounded-lg bg-blue-100 shadow-md flex items-center justify-center p-2 hover:scale-110 transition-transform duration-300 partner-logo">
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

      {/* CSS for the wheel animation and counter-rotation for logos */}
      <style jsx>{`
        .partner-wheel {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .partner-wheel.animate {
          animation: spin 30s linear infinite;
        }

        .partner-wheel.paused {
          animation-play-state: paused;
        }

        /* Make each logo counter-rotate to stay upright */
        .partner-wheel.animate .partner-logo {
          animation: counter-spin 30s linear infinite;
        }

        .partner-wheel.paused .partner-logo {
          animation-play-state: paused;
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
