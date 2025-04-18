import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

const testing = new Proxy({"src":"/_astro/testing.ChB28WkG.gif","width":48,"height":48,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/try/astro/src/assets/testing.gif";
							}
							
							return target[name];
						}
					});

function PricingSection() {
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [isCompareHovered, setIsCompareHovered] = useState(false);
  const [typingText, setTypingText] = useState("");
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
  const generateDustParticles = (count) => {
    const particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 6 + 2,
        duration: Math.random() * 2 + 1,
        delay: Math.random() * 0.5
      });
    }
    return particles;
  };
  const basicParticles = generateDustParticles(25);
  const standardParticles = generateDustParticles(25);
  const premiumParticles = generateDustParticles(25);
  return /* @__PURE__ */ jsxs("section", { className: "py-16 bg-gray-100", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:w-1/3 lg:pr-12 mb-10 lg:mb-0 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "sticky lg:top-8 text-center", children: [
        /* @__PURE__ */ jsx(
          "h2",
          {
            className: "text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent",
            style: {
              backgroundImage: "linear-gradient(to right, #3D0C11, #D80032)"
            },
            children: "Choose Your Perfect Plan"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "We offer flexible pricing options to meet your needs. Whether you're just starting out or looking for advanced features, we have a plan that's right for you." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 hidden lg:block", children: /* @__PURE__ */ jsxs(
          "button",
          {
            className: "text-white px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center justify-center",
            style: { backgroundColor: "#3D0C11" },
            onMouseEnter: () => setIsCompareHovered(true),
            onMouseLeave: () => setIsCompareHovered(false),
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: testing.src,
                  alt: "Compare",
                  className: "w-9 h-9 mr-2",
                  style: { filter: "brightness(0) invert(1)" }
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "relative min-w-[180px] inline-block text-left", children: isCompareHovered ? /* @__PURE__ */ jsx("h1", { className: "typing-effect m-0 text-base font-medium", children: typingText }) : "Compare All Features" })
            ]
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "lg:w-2/3", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-auto transform transition-transform duration-300 hover:scale-105 relative", children: [
            /* @__PURE__ */ jsxs("div", { className: "h-48 overflow-hidden relative", children: [
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "absolute inset-0 w-140 h-140 -top-20 -left-20",
                  style: { transform: "rotate(45deg)" },
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "bg-maroondark h-56 w-full" }),
                    /* @__PURE__ */ jsx("div", { className: "h-8 w-full bg-maroon2 mt-1" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col justify-center items-center", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-maroon2", children: "Basic" }),
                /* @__PURE__ */ jsxs("div", { className: "text-white mt-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold", children: "$2.99" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm ml-1", children: "per month" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "px-6 py-6", children: [
              /* @__PURE__ */ jsxs("ul", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "h-5 w-5 text-green-500 flex-shrink-0",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "ml-3 text-gray-700", children: "Sample Text Here" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "h-5 w-5 text-maroon2 flex-shrink-0",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "ml-3 text-gray-700", children: "Other Text Title" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "h-5 w-5 text-maroon2 flex-shrink-0",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "ml-3 text-gray-700", children: "Text Space Goes Here" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "h-5 w-5 text-maroon2 flex-shrink-0",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "ml-3 text-gray-700", children: "Description Space" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "h-5 w-5 text-maroon2 flex-shrink-0",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "ml-3 text-gray-700", children: "Sample Text Here" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-8 relative", children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    className: "w-full py-3 text-white font-medium rounded focus:outline-none uppercase bg-maroon2 hover:bg-maroon2-600 transition duration-300 relative overflow-hidden",
                    onMouseEnter: () => setHoveredPlan("basic"),
                    onMouseLeave: () => setHoveredPlan(null),
                    children: [
                      "SELECT",
                      hoveredPlan === "basic" && /* @__PURE__ */ jsx("span", { className: "absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl animate-bounce", children: "😊" })
                    ]
                  }
                ),
                hoveredPlan === "basic" && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none", children: basicParticles.map((particle) => /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute rounded-full bg-red-300",
                    style: {
                      left: `${particle.left}%`,
                      top: `${particle.top}%`,
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                      opacity: 0,
                      animation: `float ${particle.duration}s ease-out ${particle.delay}s forwards`
                    }
                  },
                  particle.id
                )) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-auto transform transition-transform duration-300 hover:scale-105 relative z-10 md:mt-0", children: [
            /* @__PURE__ */ jsxs("div", { className: "h-48 overflow-hidden relative", children: [
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "absolute inset-0 w-140 h-140 -top-20 -left-20",
                  style: { transform: "rotate(45deg)" },
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "bg-maroondark h-56 w-full" }),
                    /* @__PURE__ */ jsx("div", { className: "h-8 w-full bg-maroon3 mt-1" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col justify-center items-center", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-maroon3", children: "Standard" }),
                /* @__PURE__ */ jsxs("div", { className: "text-white mt-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold", children: "$5.99" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm ml-1", children: "per month" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "px-6 py-6", children: [
              /* @__PURE__ */ jsxs("ul", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "h-5 w-5 text-green-500 flex-shrink-0",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "ml-3 text-gray-700", children: "Sample Text Here" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "h-5 w-5 text-green-500 flex-shrink-0",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "ml-3 text-gray-700", children: "Other Text Title" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "h-5 w-5 text-green-500 flex-shrink-0",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "ml-3 text-gray-700", children: "Text Space Goes Here" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "h-5 w-5 text-maroon2 flex-shrink-0",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "ml-3 text-gray-700", children: "Description Space" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "h-5 w-5 text-maroon2 flex-shrink-0",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "ml-3 text-gray-700", children: "Sample Text Here" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-8 relative", children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    className: "w-full py-3 text-white font-medium rounded focus:outline-none uppercase bg-maroon3 hover:bg-maroon3 transition duration-300 relative overflow-hidden",
                    onMouseEnter: () => setHoveredPlan("standard"),
                    onMouseLeave: () => setHoveredPlan(null),
                    children: [
                      "SELECT",
                      hoveredPlan === "standard" && /* @__PURE__ */ jsx("span", { className: "absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl animate-bounce", children: "😄" })
                    ]
                  }
                ),
                hoveredPlan === "standard" && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none", children: standardParticles.map((particle) => /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute rounded-full bg-red-300",
                    style: {
                      left: `${particle.left}%`,
                      top: `${particle.top}%`,
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                      opacity: 0,
                      animation: `float ${particle.duration}s ease-out ${particle.delay}s forwards`
                    }
                  },
                  particle.id
                )) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-auto transform transition-transform duration-300 hover:scale-105 relative lg:col-start-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "h-48 overflow-hidden relative", children: [
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "absolute inset-0 w-140 h-140 -top-20 -left-20",
                  style: { transform: "rotate(45deg)" },
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "bg-maroondark h-56 w-full" }),
                    /* @__PURE__ */ jsx("div", { className: "h-8 w-full bg-maroon4 mt-1" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col justify-center items-center", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-maroon4", children: "Premium" }),
                /* @__PURE__ */ jsxs("div", { className: "text-white mt-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold", children: "$9.99" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm ml-1", children: "per month" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "px-6 py-6", children: [
              /* @__PURE__ */ jsxs("ul", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "h-5 w-5 text-green-500 flex-shrink-0",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "ml-3 text-gray-700", children: "Sample Text Here" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "h-5 w-5 text-green-500 flex-shrink-0",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "ml-3 text-gray-700", children: "Other Text Title" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "h-5 w-5 text-green-500 flex-shrink-0",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "ml-3 text-gray-700", children: "Text Space Goes Here" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "h-5 w-5 text-green-500 flex-shrink-0",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "ml-3 text-gray-700", children: "Description Space" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "h-5 w-5 text-green-500 flex-shrink-0",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "ml-3 text-gray-700", children: "Sample Text Here" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-8 relative", children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    className: "w-full py-3 text-white font-medium rounded focus:outline-none uppercase bg-maroon4 hover:bg-red-600 transition duration-300 relative overflow-hidden",
                    onMouseEnter: () => setHoveredPlan("premium"),
                    onMouseLeave: () => setHoveredPlan(null),
                    children: [
                      "SELECT",
                      hoveredPlan === "premium" && /* @__PURE__ */ jsx("span", { className: "absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl animate-bounce", children: "😁" })
                    ]
                  }
                ),
                hoveredPlan === "premium" && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none", children: premiumParticles.map((particle) => /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute rounded-full bg-maroon4",
                    style: {
                      left: `${particle.left}%`,
                      top: `${particle.top}%`,
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                      opacity: 0,
                      animation: `float ${particle.duration}s ease-out ${particle.delay}s forwards`
                    }
                  },
                  particle.id
                )) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 text-center lg:hidden", children: /* @__PURE__ */ jsxs(
          "button",
          {
            className: "bg-maroondark hover:bg-maroondark text-white px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center justify-center mx-auto",
            onMouseEnter: () => setIsCompareHovered(true),
            onMouseLeave: () => setIsCompareHovered(false),
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: testing.src,
                  alt: "Compare",
                  className: "w-5 h-5 mr-2",
                  style: { filter: "brightness(0) invert(1)" }
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "relative min-w-[180px] inline-block text-left", children: isCompareHovered ? /* @__PURE__ */ jsx("h1", { className: "typing-effect m-0 text-base font-medium", children: typingText }) : "Compare All Features" })
            ]
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("style", { jsx: true, children: `
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
      ` })
  ] });
}

export { PricingSection as P };
