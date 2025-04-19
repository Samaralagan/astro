import { useState, useEffect, useRef } from "react";
// Import images - keep as is
import testi1 from "../assets/testi1.svg";
import testi2 from "../assets/testi2.svg";
import testi3 from "../assets/testi3.svg";
import testi4 from "../assets/testi4.svg";
import testi5 from "../assets/testi5.svg";
import testi6 from "../assets/testi6.svg";

export default function Testimonials() {
  // Create testimonials data
  const testimonials = [
    {
      id: 1,
      content:
        "Today Marketing's AI agent has completely transformed our marketing efforts. We've seen a significant increase in leads and sales since implementing their solutions.",
      author: "Sarah",
      position: "Marketing Manager at LSEG",
      rating: 5,
      image: testi1,
    },
    {
      id: 2,
      content:
        "Social media management saved us hours on social media tasks. Their AI spots trends we’d miss and keeps our followers hooked with timely posts.",
      author: "pradeep",
      position: "Founder of Urban Pulse",
      rating: 5,
      image: testi2,
    },
    {
      id: 3,
      content:
        "Our email campaigns feel personal and convert like never before. The AI crafts emails that our customers love, boosting our open rates by 25%.",
      author: "Evangelin",
      position: "E-Commerce Director at Shop Bloom",
      rating: 4,
      image: testi3,
    },
    {
      id: 4,
      content:
        "It tracks market trends and uncovers opportunities we’d never spot on our own.Our Strategy planning is now faster, smarter, and more effective.",
      author: "Lisa",
      position: "Customer Service Lead at TechTide",
      rating: 5,
      image: testi4,
    },
    {
      id: 5,
      content:
        "It streamlines everything from campaign setup to performance tracking. The AI insights are spot-on, and we’ve never been more confident in our marketing decisions.",
      author: "Jason",
      position: "Marketing director , Growth sphere",
      rating: 5,
      image: testi5,
    },
    {
      id: 6,
      content:
        "The real-time insights from Today Marketings AI analytics dashboard are incredible. We’re making smarter decisions and seeing measurable growth across all our campaigns.",
      author: "Stephy",
      position: "CMO , Robinhood",
      rating: 4,
      image: testi6,
    },
  ];

  // State for tracking active testimonial index
  const [activeIndex, setActiveIndex] = useState(0);

  // State for animation visibility
  const [isVisible, setIsVisible] = useState(false);

  // Ref for the section element
  const sectionRef = useRef(null);

  // Function to handle testimonial selection
  const handleTestimonialSelect = (index) => {
    setActiveIndex(index);
  };

  // Current active testimonial based on index
  const activeTestimonial = testimonials[activeIndex];

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <span key={i} className="text-maroon4">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  // Get image source with fallback
  const getImageSrc = (imageImport) => {
    // Try different ways to access the image depending on your framework
    if (typeof imageImport === "string") return imageImport;
    if (imageImport && imageImport.src) return imageImport.src;
    if (imageImport && typeof imageImport === "object")
      return imageImport.default || imageImport;

    // Fallback to placeholder if all else fails
    return "/api/placeholder/100/100";
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

  // The heading and description section that will be positioned differently based on screen size
  const HeadingSection = () => (
    <div className="text-center lg:text-left">
      <h2
        className={`text-3xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
          isVisible ? "opacity-100 transform-none" : "opacity-0 -translate-y-4"
        } bg-clip-text text-transparent`}
        style={{
          backgroundImage: "linear-gradient(to left, #3D0C11, #D80032)",
        }}
      >
        What Our Clients Say
      </h2>
      <p
        className={`text-lg text-gray-600 transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
        }`}
      >
        Don't just take our word for it - hear from some of our satisfied
        customers who have experienced the difference firsthand.
      </p>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className={`py-12 bg-gray-50 transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile and tablet heading - only visible on smaller screens */}
        <div className="lg:hidden mb-8">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <HeadingSection />
          </div>
        </div>

        {/* Main flex container - row on desktop, column on mobile/tablet */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Active Testimonial */}
          <div
            className={`lg:w-2/3 mb-8 lg:mb-0 transition-all duration-1000 ${
              isVisible ? "translate-x-0" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg h-96 flex flex-col">
              {/* Profile image centered at top */}
              <div className="flex justify-center mb-4">
                <img
                  src={getImageSrc(activeTestimonial.image)}
                  alt={activeTestimonial.author}
                  className={`w-24 h-24 object-cover transition-all duration-500 ${
                    isVisible ? "scale-100" : "scale-0"
                  }`}
                />
              </div>

              {/* Rating centered below profile */}
              <div className="flex justify-center text-2xl mb-4">
                {renderStars(activeTestimonial.rating)}
              </div>

              {/* Testimonial content */}
              <blockquote
                className={`text-lg italic text-gray-800 text-center mb-auto transition-all duration-700 delay-300 ${
                  isVisible
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-4"
                }`}
              >
                "{activeTestimonial.content}"
              </blockquote>

              {/* Name and position at bottom */}
              <div
                className={`text-center mt-4 transition-all duration-700 delay-500 ${
                  isVisible
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <h3 className="text-lg font-bold text-maroon2">
                  {activeTestimonial.author}
                </h3>
                <p className="text-maroon3">{activeTestimonial.position}</p>
              </div>
            </div>

            {/* Profile Images for Selection */}
            <div
              className={`mt-8 flex flex-wrap gap-4 justify-center lg:justify-start transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 transform-none"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => handleTestimonialSelect(index)}
                  className={`relative w-16 h-16 rounded-full overflow-hidden transition-all ${
                    activeIndex === index
                      ? "ring-4 ring-maroondark"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={getImageSrc(testimonial.image)}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Heading (only visible on desktop) */}
          <div
            className={`hidden lg:flex lg:w-1/3 lg:pl-12 items-center justify-center transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <HeadingSection />
          </div>
        </div>
      </div>
    </section>
  );
}
