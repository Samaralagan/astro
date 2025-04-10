import { useState } from "react";

// src/components/Partners.jsx
export default function Partners() {
  const [isAnimating, setIsAnimating] = useState(true);

  // Partner data with placeholder links
  const partners = [
    { name: "Partner 1", link: "https://partner1.com" },
    { name: "Partner 2", link: "https://partner2.com" },
    { name: "Partner 3", link: "https://partner3.com" },
    { name: "Partner 4", link: "https://partner4.com" },
    { name: "Partner 5", link: "https://partner5.com" },
    { name: "Partner 6", link: "https://partner6.com" },
    { name: "Partner 7", link: "https://partner7.com" },
    { name: "Partner 8", link: "https://partner8.com" },
  ];

  // Fixed radius for all partners - consistent wheel spoke length
  const orbitRadius = 140;

  return (
    <section className="py-16 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left half - Text content */}
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-12 md:mb-0">
            <h3 className="text-lg font-semibold text-orange-500 mb-2">
              PARTNERSHIP
            </h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Become a Chili Piper Partner
            </h2>
            <p className="text-xl text-gray-600">
              Help your customers double their inbound conversion rates and grow
              your business with new revenue streams.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition duration-300"
              >
                LET'S CHAT
              </a>
            </div>
          </div>

          {/* Right half - Wheel of partners */}
          <div className="w-full md:w-1/2 relative h-96">
            {/* Center logo - the "screw" or hub of the wheel */}
            <div className="absolute z-10 bg-white rounded-xl shadow-lg p-4 w-28 h-28 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              {/* Replace with your actual logo path */}
              <img
                src="/path-to-your-logo.png"
                alt="Chili Piper"
                className="w-20 h-20 object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23FF5C35'/%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%23ffffff'%3ELogo%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>

            {/* Optional: Wheel rim visualization */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-200"
              style={{
                width: `${orbitRadius * 2}px`,
                height: `${orbitRadius * 2}px`,
              }}
            ></div>

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
                    <div className="h-14 w-14 md:h-16 md:w-16 rounded-lg bg-blue-100 shadow-md flex items-center justify-center p-1 hover:scale-110 transition-transform duration-300">
                      {/* Replace with your actual partner logo path */}
                      <img
                        src={`/path-to-partner-logos/${index + 1}.png`}
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

      {/* CSS for the wheel animation */}
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

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
