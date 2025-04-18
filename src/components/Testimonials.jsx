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
        "This platform has transformed how we operate. The efficiency gains have been tremendous.",
      author: "Jane Smith",
      position: "CEO, TechCorp",
      rating: 5,
      image: testi1,
    },
    {
      id: 2,
      content:
        "The analytics capabilities alone made this worth every penny. We've gained insights we never had before.",
      author: "Michael Johnson",
      position: "CMO, Marketing Pros",
      rating: 5,
      image: testi2,
    },
    {
      id: 3,
      content:
        "Customer support is exceptional. Any questions we had were answered promptly and thoroughly.",
      author: "Sarah Williams",
      position: "Operations Director, GlobalServe",
      rating: 4,
      image: testi3,
    },
    {
      id: 4,
      content:
        "Implementation was smooth and the onboarding process was incredibly straightforward.",
      author: "David Chen",
      position: "CTO, Innovate Inc",
      rating: 5,
      image: testi4,
    },
    {
      id: 5,
      content:
        "We've seen a 40% increase in productivity since adopting this solution. The ROI is undeniable.",
      author: "Lisa Rodriguez",
      position: "Project Manager, BuildRight",
      rating: 5,
      image: testi5,
    },
    {
      id: 6,
      content:
        "The customization options are extensive. We were able to tailor the platform to our specific needs.",
      author: "Robert Taylor",
      position: "IT Director, Enterprise Solutions",
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
                      ? "ring-4 ring-blue-500"
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
