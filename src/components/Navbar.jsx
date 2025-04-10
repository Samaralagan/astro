import { useState, useEffect, useRef } from "react";
import logowhite from "../assets/logowhite.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);
  const [activePath, setActivePath] = useState("/");
  const [isAnimating, setIsAnimating] = useState(false);
  const navbarRef = useRef(null);

  const links = [
    { name: "Home", href: "/", icon: "home", hatIcon: "hat-home" },
    { name: "About Us", href: "/about", icon: "info", hatIcon: "hat-info" },
    {
      name: "Pricing",
      href: "/pricing",
      icon: "dollar",
      hatIcon: "hat-dollar",
    },
    { name: "Blog", href: "/blog", icon: "document", hatIcon: "hat-document" },
    { name: "Contact", href: "/contact", icon: "mail", hatIcon: "hat-mail" },
  ];

  // Handle scroll event to transform navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !isSidebar) {
        setIsAnimating(true);
        setIsSidebar(true);

        // Reset animation flag after animation completes
        setTimeout(() => {
          setIsAnimating(false);
        }, 1000);
      } else if (window.scrollY <= 50 && isSidebar) {
        setIsSidebar(false);
        setIsExpanded(false);
      }
    };

    // Set active path based on current location
    const path = window.location.pathname;
    setActivePath(path);

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSidebar]);

  // Check if a link is active - fixed to properly match paths
  const isActive = (href) => {
    if (href === "/" && activePath === "/") {
      return true;
    }
    return href !== "/" && activePath.startsWith(href);
  };

  // Icon components for sidebar
  const getIcon = (iconName) => {
    switch (iconName) {
      case "home":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        );
      case "info":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "dollar":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "document":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        );
      case "mail":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        );
      case "thunder":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        );
      // Hat icon variants for top navbar
      case "hat-home":
        return (
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        );
      case "hat-info":
        return (
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "hat-dollar":
        return (
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "hat-document":
        return (
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        );
      case "hat-mail":
        return (
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        );
      case "hat-thunder":
        return (
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  // Render top navbar when not scrolled
  if (!isSidebar) {
    return (
      <nav
        className="bg-white shadow-sm transition-all duration-300 fixed top-0 left-0 right-0 z-50 w-full"
        ref={navbarRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14">
            {/* Logo area */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-2xl font-bold text-blue-600">
                  <img src={logowhite.src} alt="logo" className="h-12" />
                </a>
              </div>
            </div>

            {/* Navigation elements */}
            <div className="flex items-center justify-end">
              {/* Desktop menu */}
              <div className="hidden md:flex items-center">
                <div className="flex space-x-3">
                  {links.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`menu-item px-3 py-2 text-sm transition-colors whitespace-nowrap flex items-center rounded-md relative overflow-hidden font-bold ${
                        isActive(link.href)
                          ? "text-blue-600 font-bold"
                          : "text-gray-700 hover:text-blue-600 font-bold"
                      }`}
                    >
                      {getIcon(link.hatIcon)}
                      {link.name}
                      <span className="menu-fill-effect"></span>
                    </a>
                  ))}
                  <a
                    href="/contact"
                    className="menu-item ml-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap flex items-center relative overflow-hidden font-bold"
                  >
                    {getIcon("hat-thunder")}
                    Get Started
                    <span className="menu-fill-effect-cta"></span>
                  </a>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
                  aria-expanded={isMenuOpen}
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    {isMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1 px-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 text-base font-bold rounded-md flex items-center relative overflow-hidden ${
                    isActive(link.href)
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {getIcon(link.hatIcon)}
                  {link.name}
                  <span className="mobile-menu-fill-effect"></span>
                </a>
              ))}
              <a
                href="/contact"
                className="block px-3 py-2 text-base font-bold bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center relative overflow-hidden"
              >
                {getIcon("hat-thunder")}
                Get Started
                <span className="mobile-menu-fill-effect-cta"></span>
              </a>
            </div>
          </div>
        )}

        {/* Add CSS for fill hover effect */}
        <style jsx>{`
          .menu-item {
            position: relative;
            overflow: hidden;
          }

          .menu-fill-effect {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 0;
            background-color: rgba(
              219,
              234,
              254,
              0.5
            ); /* blue-100 with transparency */
            transition: height 0.4s ease-out;
            pointer-events: none;
            z-index: -1;
          }

          .menu-fill-effect-cta {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 0;
            background-color: rgba(
              30,
              64,
              175,
              0.3
            ); /* blue-800 with transparency */
            transition: height 0.4s ease-out;
            pointer-events: none;
            z-index: -1;
          }

          .menu-item:hover .menu-fill-effect,
          .menu-item:hover .menu-fill-effect-cta {
            height: 100%;
          }

          .mobile-menu-fill-effect {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 0;
            background-color: rgba(219, 234, 254, 0.5);
            transition: height 0.4s ease-out;
            pointer-events: none;
            z-index: -1;
          }

          .mobile-menu-fill-effect-cta {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 0;
            background-color: rgba(30, 64, 175, 0.3);
            transition: height 0.4s ease-out;
            pointer-events: none;
            z-index: -1;
          }

          a:hover .mobile-menu-fill-effect,
          a:hover .mobile-menu-fill-effect-cta {
            height: 100%;
          }
        `}</style>
      </nav>
    );
  }

  // Animation element that shows transition from top to side
  const AnimationIndicator = () => {
    if (!isAnimating) return null;

    return (
      <div className="fixed z-[60] pointer-events-none">
        <div className="bg-blue-600 w-3 h-3 rounded-full animate-navbar-transition"></div>
      </div>
    );
  };

  // Render sidebar expand button when scrolled
  return (
    <>
      {/* Animation indicator */}
      <AnimationIndicator />

      {/* Fixed expand button that shows all the time */}
      <div
        className={`fixed left-0 top-1/2 transform -translate-y-1/2 z-50 ${
          isExpanded ? "hidden" : "block"
        } transition-all duration-500 ${
          isAnimating ? "animate-appear-from-top" : ""
        }`}
        onMouseEnter={() => setIsExpanded(true)}
      >
        <button
          className="bg-blue-900 text-white rounded-r-md shadow-md hover:bg-blue-800 transition-all duration-300 flex items-center justify-center"
          style={{ padding: "0.9rem 0.5rem" }}
          aria-label="Expand menu"
        >
          {/* Increased icon size */}
          <span className="text-3xl font-bold">»</span>
        </button>
      </div>

      {/* Expanded sidebar that appears on hover - Icons only */}
      <nav
        className={`fixed left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-r-lg z-50 transition-all duration-500 ${
          isExpanded
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible -translate-x-full"
        }`}
        onMouseLeave={() => {
          setIsExpanded(false);
          setActiveIcon(null);
        }}
      >
        <div className="py-3 px-1">
          <ul className="space-y-5">
            {links.map((link) => (
              <li key={link.name} className="relative">
                <a
                  href={link.href}
                  className={`flex items-center justify-center p-2 transition-colors rounded-md font-bold ${
                    isActive(link.href)
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                  title={link.name}
                  onMouseEnter={() => setActiveIcon(link.name)}
                  onMouseLeave={() => setActiveIcon(null)}
                >
                  <span className="inline-flex items-center justify-center">
                    {getIcon(link.icon)}
                  </span>

                  {/* Tooltip that shows name on hover */}
                  {activeIcon === link.name && (
                    <div className="absolute left-full ml-2 bg-gray-800 text-white text-sm px-3 py-1 rounded whitespace-nowrap font-bold">
                      {link.name}
                    </div>
                  )}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 pt-2 flex justify-center">
            <a
              href="/contact"
              className="p-2 text-blue-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-bold"
              title="Get Started"
              onMouseEnter={() => setActiveIcon("getStarted")}
              onMouseLeave={() => setActiveIcon(null)}
            >
              {getIcon("thunder")}

              {/* Tooltip for Get Started */}
              {activeIcon === "getStarted" && (
                <div className="absolute left-full ml-2 bg-gray-800 text-white text-sm px-3 py-1 rounded whitespace-nowrap font-bold">
                  Get Started
                </div>
              )}
            </a>
          </div>
        </div>
      </nav>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes navbarTransition {
          0% {
            top: 14px;
            left: 50%;
            transform: translateX(-50%);
          }
          100% {
            top: 50%;
            left: 0;
            transform: translate(0, -50%);
          }
        }

        @keyframes appearFromTop {
          0% {
            opacity: 0;
            top: 0;
            transform: translateY(-100%) translateX(0) translateY(0);
          }
          20% {
            opacity: 1;
            top: 7px;
            transform: translateY(0) translateX(0) translateY(0);
          }
          100% {
            opacity: 1;
            top: 50%;
            transform: translateY(-50%);
          }
        }

        .animate-navbar-transition {
          animation: navbarTransition 1s ease-in-out forwards;
        }

        .animate-appear-from-top {
          animation: appearFromTop 0.8s ease-in-out forwards;
        }
      `}</style>
    </>
  );
}
