import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CijfHuAN.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_ueaiVteb.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { t as testi1, a as testi2, b as testi3, c as testi4 } from '../chunks/testi4_CN4ny1Q_.mjs';
import { P as PricingSection } from '../chunks/PricingSection_DYmxiu7s.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const heroimage = new Proxy({"src":"/_astro/heroimage.DpBBQDHn.jpg","width":1500,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/try/astro/src/assets/heroimage.jpg";
							}
							
							return target[name];
						}
					});

function Hero() {
  const words = ["Solutions", "Services"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const currentWord = words[currentIndex];
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState(0);
  const [particleEffects, setParticleEffects] = useState([]);
  const nextIndex = (currentIndex + 1) % words.length;
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setIsAnimating(false);
      }, 500);
    }, 3e3);
    return () => clearInterval(intervalId);
  }, [currentIndex, nextIndex]);
  useEffect(() => {
    let animationFrame;
    let startTime;
    let lastParticleTime = 0;
    const animateEffects = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      if (isHovered) {
        const intensity = 0.5 + Math.sin(elapsed / 300) * 0.5;
        setGlowIntensity(intensity);
        if (timestamp - lastParticleTime > 200) {
          lastParticleTime = timestamp;
          const randomX = Math.floor(Math.random() * 100);
          setParticleEffects((prev) => [
            ...prev.filter((p) => p.life > 0).map((p) => ({
              ...p,
              life: p.life - 1,
              y: p.y - 1.5,
              opacity: p.opacity * 0.95
            })),
            {
              id: Date.now(),
              x: randomX,
              y: Math.random() * 20 + 20,
              size: Math.random() * 3 + 1,
              opacity: Math.random() * 0.4 + 0.4,
              life: 30
            }
          ]);
        }
      } else {
        setGlowIntensity((prev) => Math.max(0, prev - 0.05));
        setParticleEffects(
          (prev) => prev.filter((p) => p.life > 0).map((p) => ({
            ...p,
            life: p.life - 2,
            y: p.y - 1.5,
            opacity: p.opacity * 0.9
          }))
        );
        if (glowIntensity <= 0 && particleEffects.length === 0) return;
      }
      animationFrame = requestAnimationFrame(animateEffects);
    };
    animationFrame = requestAnimationFrame(animateEffects);
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered, glowIntensity, particleEffects.length]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const particles = [];
    const particleCount = 80;
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          opacity: Math.random() * 0.5 + 0.3
        });
      }
    };
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const distance = Math.sqrt(
            Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
          );
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      }
      animationRef.current = requestAnimationFrame(drawParticles);
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    initParticles();
    drawParticles();
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "text-white relative overflow-hidden py-16",
      style: {
        background: "linear-gradient(to left, #D80032, #A5001E, #3D0C11)",
        borderRadius: "44rem 18rem 83rem 44rem",
        boxShadow: "inset 0 0 70px rgba(216, 0, 50, 0.6)"
      },
      children: [
        /* @__PURE__ */ jsx(
          "canvas",
          {
            ref: canvasRef,
            className: "absolute inset-0 w-full h-full pointer-events-none"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold leading-tight gradient-text", children: [
              "Transform Your Business with Our",
              " ",
              /* @__PURE__ */ jsx("span", { className: "word-animation-wrapper", children: /* @__PURE__ */ jsx("span", { className: "word-animation-container", children: /* @__PURE__ */ jsx(
                "span",
                {
                  className: `word-animation ${isAnimating ? "word-exit" : "word-active"}`,
                  children: currentWord
                }
              ) }) })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-red-100", children: "Boost productivity, streamline operations, and drive growth with our cutting-edge platform." }),
            /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx("div", { className: "flex justify-start items-center", children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#home",
                className: "flex items-stretch no-underline transition-all duration-300 ease-in-out relative",
                style: {
                  filter: `drop-shadow(0 ${4 + glowIntensity * 3}px ${6 + glowIntensity * 4}px rgba(0, 0, 0, 0.3)) ${isHovered ? `drop-shadow(0 0 ${8 + glowIntensity * 8}px rgba(231, 0, 50, ${0.3 * glowIntensity}))` : ""}`,
                  transform: isHovered ? `translateY(-${3 + glowIntensity}px)` : "none",
                  height: "48px"
                },
                onMouseEnter: () => setIsHovered(true),
                onMouseLeave: () => setIsHovered(false),
                children: [
                  particleEffects.map((particle) => /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "absolute rounded-full",
                      style: {
                        left: `${particle.x}%`,
                        bottom: `${particle.y}px`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        background: "white",
                        opacity: particle.opacity,
                        filter: `blur(${particle.size / 2}px)`,
                        boxShadow: `0 0 ${particle.size * 2}px rgba(255, 150, 150, 0.8)`,
                        zIndex: 30
                      }
                    },
                    particle.id
                  )),
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "relative flex items-center justify-center text-white font-bold text-lg tracking-wider overflow-hidden",
                      style: {
                        height: "48px",
                        padding: "0 30px",
                        background: isHovered ? `linear-gradient(to right, rgb(${216 + glowIntensity * 15}, ${0 + glowIntensity * 20}, ${32 + glowIntensity * 10}), rgb(${165 + glowIntensity * 10}, ${0 + glowIntensity * 10}, ${30 + glowIntensity * 10}))` : "linear-gradient(to bottom, #D80032, #A5001E)",
                        clipPath: "polygon(15% 0, 100% 0, 90% 100%, 0% 100%)",
                        zIndex: 20,
                        transition: "background 0.3s ease",
                        boxShadow: isHovered ? `inset 0 0 ${10 + glowIntensity * 15}px rgba(255, 0, 50, ${0.4 + glowIntensity * 0.6})` : "none"
                      },
                      children: [
                        isHovered && /* @__PURE__ */ jsxs(Fragment, { children: [
                          /* @__PURE__ */ jsx(
                            "div",
                            {
                              className: "absolute",
                              style: {
                                width: "3px",
                                height: "200%",
                                background: `linear-gradient(to bottom, transparent, rgba(255, 255, 255, ${0.7 * glowIntensity}), transparent)`,
                                transform: `translateX(${ -30 + glowIntensity * 150}%) rotate(-30deg)`,
                                opacity: glowIntensity,
                                left: "30%",
                                top: -20
                              }
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            "div",
                            {
                              className: "absolute",
                              style: {
                                width: "2px",
                                height: "200%",
                                background: `linear-gradient(to bottom, transparent, rgba(255, 255, 255, ${0.5 * glowIntensity}), transparent)`,
                                transform: `translateX(${ -80 + glowIntensity * 200}%) rotate(-30deg)`,
                                opacity: glowIntensity,
                                left: "60%",
                                top: -20
                              }
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            "div",
                            {
                              className: "absolute",
                              style: {
                                width: "1px",
                                height: "200%",
                                background: `linear-gradient(to bottom, transparent, rgba(255, 255, 255, ${0.6 * glowIntensity}), transparent)`,
                                transform: `translateX(${ -60 + glowIntensity * 180}%) rotate(-30deg)`,
                                opacity: glowIntensity,
                                left: "40%",
                                top: -20
                              }
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "absolute",
                            style: {
                              top: "50%",
                              left: "50%",
                              width: "120%",
                              height: "120%",
                              background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
                              transform: "translate(-50%, -50%) scale(0)",
                              opacity: 0,
                              transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
                              ...isHovered && {
                                transform: "translate(-50%, -50%) scale(1)",
                                opacity: glowIntensity * 0.8
                              }
                            }
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "absolute top-0 left-0 right-0 h-1/2",
                            style: {
                              background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)",
                              opacity: isHovered ? 0.4 + glowIntensity * 0.3 : 0.2,
                              transition: "opacity 0.3s ease"
                            }
                          }
                        ),
                        isHovered && /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "absolute inset-0",
                            style: {
                              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 25%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 75%, transparent 100%)",
                              backgroundSize: "200% 100%",
                              animation: "animateBorder 2s linear infinite",
                              opacity: glowIntensity * 0.5
                            }
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "span",
                          {
                            style: {
                              position: "relative",
                              zIndex: 25,
                              textShadow: isHovered ? `0 0 ${3 + glowIntensity * 5}px rgba(255, 255, 255, ${0.4 * glowIntensity}), 0 1px 1px rgba(0, 0, 0, 0.4)` : "0 1px 1px rgba(0, 0, 0, 0.4)",
                              transform: isHovered ? `scale(${1.03 + glowIntensity * 0.02})` : "scale(1)",
                              transition: "transform 0.3s ease, text-shadow 0.3s ease"
                            },
                            children: "Get Start"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "flex h-full relative",
                      style: { marginLeft: "-1px", zIndex: 10 },
                      children: [
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "h-full relative overflow-hidden",
                            style: {
                              width: "12px",
                              background: isHovered ? `rgb(${165 + glowIntensity * 20}, ${0 + glowIntensity * 5}, ${30 + glowIntensity * 5})` : "#A5001E",
                              transform: "skewX(-20deg)",
                              zIndex: 11,
                              transition: "background 0.3s ease",
                              boxShadow: isHovered ? `inset 0 0 ${5 + glowIntensity * 10}px rgba(255, 0, 50, ${0.3 * glowIntensity})` : "none"
                            },
                            children: isHovered && /* @__PURE__ */ jsx(
                              "div",
                              {
                                className: "absolute",
                                style: {
                                  top: 0,
                                  left: 0,
                                  width: "200%",
                                  height: "100%",
                                  background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent, rgba(255,255,255,0.2))",
                                  transform: `translateY(${ -100 + glowIntensity * 200}%)`,
                                  opacity: glowIntensity * 0.8
                                }
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "h-full relative overflow-hidden",
                            style: {
                              width: "12px",
                              background: isHovered ? `rgb(${61 + glowIntensity * 15}, ${12 + glowIntensity * 3}, ${17 + glowIntensity * 3})` : "#3D0C11",
                              transform: "skewX(-20deg)",
                              marginLeft: "3px",
                              zIndex: 10,
                              transition: "background 0.3s ease"
                            },
                            children: isHovered && /* @__PURE__ */ jsx(
                              "div",
                              {
                                className: "absolute",
                                style: {
                                  top: 0,
                                  left: 0,
                                  width: "200%",
                                  height: "100%",
                                  background: "linear-gradient(to bottom, rgba(255,255,255,0.1), transparent, rgba(255,255,255,0.1))",
                                  transform: `translateY(${50 - glowIntensity * 200}%)`,
                                  opacity: glowIntensity * 0.6
                                }
                              }
                            )
                          }
                        )
                      ]
                    }
                  )
                ]
              }
            ) }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-white/10 p-5 rounded-lg shadow-xl backdrop-blur-sm",
              style: {
                transform: "rotate(45deg)",
                width: "439px",
                padding: "20px"
              },
              children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: "rounded flex items-center justify-center overflow-hidden",
                  style: {
                    width: "400px",
                    height: "400px",
                    padding: "20px",
                    background: "rgba(61, 12, 17, 0.3)"
                  },
                  children: /* @__PURE__ */ jsx("div", { className: "w-full h-full", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: heroimage.src,
                      alt: "Hero",
                      className: "w-full h-full object-cover"
                    }
                  ) })
                }
              )
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsx("style", { jsx: true, children: `
        .gradient-text {
          background: linear-gradient(135deg, #ff6b8b, #ffccd5, #ff8fab);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
        }

        .word-animation-wrapper {
          display: inline-flex;
          align-items: baseline;
          vertical-align: baseline;
          height: auto;
          position: relative;
        }

        .word-animation-container {
          display: inline-block;
          overflow: hidden;
          min-width: 250px;
          height: 1.2em;
          position: relative;
          vertical-align: baseline;
        }

        .word-animation {
          display: inline-block;
          width: 100%;
          position: absolute;
          left: 0;
          transition: all 0.5s ease-in-out;
          background: linear-gradient(135deg, #ff8fab, #ff5c8a);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-weight: bold;
          text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
          white-space: nowrap;
          padding-right: 4px;
        }

        .word-active {
          transform: translateY(0);
          opacity: 1;
        }

        .word-exit {
          transform: translateY(-120%);
          opacity: 0;
        }

        @keyframes animateBorder {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: 0 0;
          }
        }
      ` })
      ]
    }
  );
}

function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        // Trigger when 20% of the section is visible
        rootMargin: "-50px"
        // Small margin to make trigger slightly before fully visible
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
      title: "Premium Design",
      description: "Elevate your brand with professional design that stands out from the competition.",
      icon: /* @__PURE__ */ jsx(
        "svg",
        {
          className: "w-8 h-8 md:w-10 md:h-10",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            }
          )
        }
      ),
      iconBg: "bg-orange-500"
    },
    {
      title: "Amazing Photography",
      description: "Capture stunning visuals that tell your story and engage your audience.",
      icon: /* @__PURE__ */ jsxs(
        "svg",
        {
          className: "w-8 h-8 md:w-10 md:h-10",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              }
            )
          ]
        }
      ),
      iconBg: "bg-blue-600"
    },
    {
      title: "Unique Strategy",
      description: "Develop custom strategies tailored to meet your specific business objectives.",
      icon: /* @__PURE__ */ jsx(
        "svg",
        {
          className: "w-8 h-8 md:w-10 md:h-10",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            }
          )
        }
      ),
      iconBg: "bg-purple-600"
    },
    {
      title: "Creative Ideas",
      description: "Unleash innovative concepts that drive engagement and inspire your audience.",
      icon: /* @__PURE__ */ jsx(
        "svg",
        {
          className: "w-8 h-8 md:w-10 md:h-10",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            }
          )
        }
      ),
      iconBg: "bg-amber-500"
    }
  ];
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: sectionRef,
      className: `py-12 md:py-16 bg-gray-50 text-gray-900 transition-all duration-500 overflow-hidden ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `
            w-full md:w-2/5 md:order-last order-first text-center 
            flex flex-col justify-center items-center mb-12 md:mb-0 md:pl-8
            transition-all duration-1000 delay-300
            ${isVisible ? "opacity-100" : "opacity-0 translate-x-10"}
          `,
              children: /* @__PURE__ */ jsxs("div", { className: "max-w-sm mx-auto", children: [
                /* @__PURE__ */ jsx(
                  "h2",
                  {
                    className: "text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent",
                    style: {
                      backgroundImage: "linear-gradient(to left, #3D0C11, #D80032)"
                    },
                    children: "Our Services"
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "mt-4 md:mt-6 text-gray-600 text-sm md:text-base", children: "Dignissim suspendisse in est ante in nibh mauris. Varius quam quisque id diam vel quam elementum pulvinar etiam. Nunc pulvinar sapien et ligula ullamcorper malesuada proin." })
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `
            w-full md:w-3/5 md:order-first order-last 
            transition-all duration-1000 delay-500
            ${isVisible ? "opacity-100" : "opacity-0 -translate-x-10"}
          `,
              children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6", children: features.map((feature, index) => /* @__PURE__ */ jsx(
                "div",
                {
                  className: `perspective ${index % 2 === 0 ? "mt-0 md:mt-8" : "mt-0"} transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`,
                  style: {
                    transitionDelay: `${isVisible ? 700 + index * 200 : 0}ms`
                  },
                  children: /* @__PURE__ */ jsx("div", { className: "flip-card h-56 md:h-64 w-full", children: /* @__PURE__ */ jsxs("div", { className: "flip-card-inner relative w-full h-full transition-transform duration-500", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flip-card-front absolute w-full h-full bg-white rounded-lg overflow-hidden flex flex-col items-center p-4 md:p-6 shadow-lg text-center", children: [
                      /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: `${feature.iconBg} inline-flex items-center justify-center p-3 md:p-4 rounded-full text-white mx-auto`,
                          children: [
                            feature.icon,
                            /* @__PURE__ */ jsx(
                              "div",
                              {
                                className: `absolute inset-0 rounded-full ${isVisible ? "icon-pulse" : ""}`,
                                style: {
                                  animationDelay: `${1e3 + index * 200}ms`
                                }
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg md:text-xl font-bold text-gray-900 absolute bottom-4 md:bottom-6 left-0 right-0", children: feature.title })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flip-card-back absolute w-full h-full bg-maroon5 rounded-lg p-4 md:p-6 flex flex-col justify-center items-center shadow-lg", children: [
                      /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-bold text-white mb-2 md:mb-4", children: feature.title }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-gray-600 text-center", children: feature.description })
                    ] })
                  ] }) })
                },
                index
              )) })
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx("style", { jsx: true, children: `
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
      ` })
      ]
    }
  );
}

const parjoin = new Proxy({"src":"/_astro/parjoin.iuOP0817.jpg","width":2000,"height":2000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/try/astro/src/assets/parjoin.jpg";
							}
							
							return target[name];
						}
					});

function HowItWorks() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
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
  const steps = [
    {
      number: "1",
      title: "Gather everyone into your virtual conference using your existing meeting tool (eg. Zoom or Skype)."
    },
    {
      number: "2",
      title: "Pick a Brightful meeting game to host. No signup or download required."
    },
    {
      number: "3",
      title: "Share the invitation to your team and you're good to go. Enjoy the game!"
    }
  ];
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "how-it-works",
      className: "py-16 bg-white overflow-hidden",
      ref: sectionRef,
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsx(
          "h2",
          {
            className: `text-3xl md:text-4xl font-bold mb-12 transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} bg-clip-text text-transparent`,
            style: {
              backgroundImage: "linear-gradient(to left, #D80032, #3D0C11)",
              // Flip side here
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            },
            children: "HOW WORKS"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col xl:flex-row items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-full xl:w-2/5 mb-8 xl:mb-0", children: /* @__PURE__ */ jsx("div", { className: "space-y-8", children: steps.map((step, index) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: `flex items-start transform transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-[-50px] opacity-0"}`,
              style: {
                transitionDelay: `${index * 200}ms`
              },
              children: [
                /* @__PURE__ */ jsx("div", { className: "bg-maroon2 text-white w-8 h-8 flex items-center justify-center font-bold rounded-sm mr-4 flex-shrink-0", children: step.number }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-800", children: step.title })
              ]
            },
            index
          )) }) }),
          /* @__PURE__ */ jsxs("div", { className: "w-full xl:w-3/5", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center xl:hidden", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `text-center mb-4 transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`,
                  style: { transitionDelay: "100ms" },
                  children: /* @__PURE__ */ jsx("div", { className: "bg-white shadow-md rounded-md p-4 w-48 h-48 flex items-center justify-center mx-auto hover:shadow-lg transition-shadow duration-300", children: /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: parjoin.src,
                        alt: "Video conference screen",
                        className: "mx-auto",
                        style: { width: "100px" }
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: "mt-4 font-medium", children: "Your video conferencing tool" })
                  ] }) })
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `mb-4 transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100 rotate-0" : "translate-y-10 opacity-0 rotate-90"}`,
                  style: { transitionDelay: "200ms" },
                  children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md", children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-maroon2", children: "+" }) })
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `text-center mb-4 transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`,
                  style: { transitionDelay: "300ms" },
                  children: /* @__PURE__ */ jsx("div", { className: "bg-white shadow-md rounded-md p-4 w-48 h-48 flex items-center justify-center mx-auto hover:shadow-lg transition-shadow duration-300", children: /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: parjoin.src,
                        alt: "Phone with game interface",
                        className: "mx-auto",
                        style: { width: "100px" }
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: "mt-4 font-medium", children: "Brightful Meeting Games" })
                  ] }) })
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `mb-4 transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100 rotate-0" : "translate-y-10 opacity-0 rotate-90"}`,
                  style: { transitionDelay: "400ms" },
                  children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md", children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-maroon2", children: "=" }) })
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `text-center transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`,
                  style: { transitionDelay: "500ms" },
                  children: /* @__PURE__ */ jsx("div", { className: "bg-maroon3 shadow-md rounded-md p-4 w-48 h-48 flex items-center justify-center mx-auto hover:shadow-lg transition-shadow duration-300", children: /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: parjoin.src,
                        alt: "People collaborating",
                        className: "mx-auto",
                        style: { width: "100px" }
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: "mt-4 font-medium", children: "Everyone's having a great time!" })
                  ] }) })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "hidden xl:flex xl:flex-row items-center justify-center", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `text-center transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`,
                  style: { transitionDelay: "100ms" },
                  children: /* @__PURE__ */ jsx("div", { className: "bg-white shadow-md rounded-md p-4 w-48 h-48 flex items-center justify-center mx-auto hover:shadow-lg transition-shadow duration-300", children: /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: parjoin.src,
                        alt: "Video conference screen",
                        className: "mx-auto",
                        style: { width: "100px" }
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: "mt-4 font-medium", children: "Your video conferencing tool" })
                  ] }) })
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `mx-4 transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100 rotate-0" : "translate-y-10 opacity-0 rotate-90"}`,
                  style: { transitionDelay: "200ms" },
                  children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md", children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-maroon2", children: "+" }) })
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `text-center transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`,
                  style: { transitionDelay: "300ms" },
                  children: /* @__PURE__ */ jsx("div", { className: "bg-white shadow-md rounded-md p-4 w-48 h-48 flex items-center justify-center mx-auto hover:shadow-lg transition-shadow duration-300", children: /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: parjoin.src,
                        alt: "Phone with game interface",
                        className: "mx-auto",
                        style: { width: "100px" }
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: "mt-4 font-medium", children: "Brightful Meeting Games" })
                  ] }) })
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `mx-4 transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100 rotate-0" : "translate-y-10 opacity-0 rotate-90"}`,
                  style: { transitionDelay: "400ms" },
                  children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md", children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-maroon2", children: "=" }) })
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `text-center transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-95"}`,
                  style: { transitionDelay: "500ms" },
                  children: /* @__PURE__ */ jsx("div", { className: "bg-maroon3 shadow-md rounded-md p-4 w-48 h-48 flex items-center justify-center mx-auto hover:shadow-lg transition-shadow duration-300", children: /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: parjoin.src,
                        alt: "People collaborating",
                        className: "mx-auto",
                        style: { width: "100px" }
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: "mt-4 font-medium", children: "Everyone's having a great time!" })
                  ] }) })
                }
              )
            ] })
          ] })
        ] })
      ] })
    }
  );
}

const testi5 = new Proxy({"src":"/_astro/testi5.D6XpYMAb.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/try/astro/src/assets/testi5.png";
							}
							
							return target[name];
						}
					});

const testi6 = new Proxy({"src":"/_astro/testi5.D6XpYMAb.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/try/astro/src/assets/testi6.png";
							}
							
							return target[name];
						}
					});

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content: "This platform has transformed how we operate. The efficiency gains have been tremendous.",
      author: "Jane Smith",
      position: "CEO, TechCorp",
      rating: 5,
      image: testi1
    },
    {
      id: 2,
      content: "The analytics capabilities alone made this worth every penny. We've gained insights we never had before.",
      author: "Michael Johnson",
      position: "CMO, Marketing Pros",
      rating: 5,
      image: testi2
    },
    {
      id: 3,
      content: "Customer support is exceptional. Any questions we had were answered promptly and thoroughly.",
      author: "Sarah Williams",
      position: "Operations Director, GlobalServe",
      rating: 4,
      image: testi3
    },
    {
      id: 4,
      content: "Implementation was smooth and the onboarding process was incredibly straightforward.",
      author: "David Chen",
      position: "CTO, Innovate Inc",
      rating: 5,
      image: testi4
    },
    {
      id: 5,
      content: "We've seen a 40% increase in productivity since adopting this solution. The ROI is undeniable.",
      author: "Lisa Rodriguez",
      position: "Project Manager, BuildRight",
      rating: 5,
      image: testi5
    },
    {
      id: 6,
      content: "The customization options are extensive. We were able to tailor the platform to our specific needs.",
      author: "Robert Taylor",
      position: "IT Director, Enterprise Solutions",
      rating: 4,
      image: testi6
    }
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const handleTestimonialSelect = (index) => {
    setActiveIndex(index);
  };
  const activeTestimonial = testimonials[activeIndex];
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          /* @__PURE__ */ jsx("span", { className: "text-maroon4", children: "★" }, i)
        );
      } else {
        stars.push(
          /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "★" }, i)
        );
      }
    }
    return stars;
  };
  const getImageSrc = (imageImport) => {
    if (typeof imageImport === "string") return imageImport;
    if (imageImport && imageImport.src) return imageImport.src;
    if (imageImport && typeof imageImport === "object")
      return imageImport.default || imageImport;
    return "/api/placeholder/100/100";
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        // Adjust threshold as needed (0.1 means when 10% of the element is visible)
        threshold: 0.1,
        // Optional: margin around the root
        rootMargin: "0px"
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
  const HeadingSection = () => /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left", children: [
    /* @__PURE__ */ jsx(
      "h2",
      {
        className: `text-3xl font-bold text-gray-900 mb-4 transition-all duration-700 ${isVisible ? "opacity-100 transform-none" : "opacity-0 -translate-y-4"} bg-clip-text text-transparent`,
        style: {
          backgroundImage: "linear-gradient(to left, #3D0C11, #D80032)"
        },
        children: "What Our Clients Say"
      }
    ),
    /* @__PURE__ */ jsx(
      "p",
      {
        className: `text-lg text-gray-600 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`,
        children: "Don't just take our word for it - hear from some of our satisfied customers who have experienced the difference firsthand."
      }
    )
  ] });
  return /* @__PURE__ */ jsx(
    "section",
    {
      ref: sectionRef,
      className: `py-12 bg-gray-50 transition-opacity duration-1000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:hidden mb-8", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: `transition-all duration-1000 delay-200 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`,
            children: /* @__PURE__ */ jsx(HeadingSection, {})
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row", children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: `lg:w-2/3 mb-8 lg:mb-0 transition-all duration-1000 ${isVisible ? "translate-x-0" : "-translate-x-10 opacity-0"}`,
              children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-lg shadow-lg h-96 flex flex-col", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: getImageSrc(activeTestimonial.image),
                      alt: activeTestimonial.author,
                      className: `w-24 h-24 rounded-full object-cover transition-all duration-500 ${isVisible ? "scale-100" : "scale-0"}`
                    }
                  ) }),
                  /* @__PURE__ */ jsx("div", { className: "flex justify-center text-2xl mb-4", children: renderStars(activeTestimonial.rating) }),
                  /* @__PURE__ */ jsxs(
                    "blockquote",
                    {
                      className: `text-lg italic text-gray-800 text-center mb-auto transition-all duration-700 delay-300 ${isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`,
                      children: [
                        '"',
                        activeTestimonial.content,
                        '"'
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: `text-center mt-4 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`,
                      children: [
                        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-maroon2", children: activeTestimonial.author }),
                        /* @__PURE__ */ jsx("p", { className: "text-maroon3", children: activeTestimonial.position })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `mt-8 flex flex-wrap gap-4 justify-center lg:justify-start transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-6"}`,
                    children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsx(
                      "button",
                      {
                        onClick: () => handleTestimonialSelect(index),
                        className: `relative w-16 h-16 rounded-full overflow-hidden transition-all ${activeIndex === index ? "ring-4 ring-blue-500" : "opacity-70 hover:opacity-100"}`,
                        children: /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: getImageSrc(testimonial.image),
                            alt: testimonial.author,
                            className: "w-full h-full object-cover"
                          }
                        )
                      },
                      testimonial.id
                    ))
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `hidden lg:flex lg:w-1/3 lg:pl-12 items-center justify-center transition-all duration-1000 delay-200 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`,
              children: /* @__PURE__ */ jsx(HeadingSection, {})
            }
          )
        ] })
      ] })
    }
  );
}

const par1 = new Proxy({"src":"/_astro/par1.DMyDlHhs.png","width":500,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/try/astro/src/assets/par1.png";
							}
							
							return target[name];
						}
					});

const par2 = new Proxy({"src":"/_astro/par2.BTI38s4D.png","width":500,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/try/astro/src/assets/par2.png";
							}
							
							return target[name];
						}
					});

const par3 = new Proxy({"src":"/_astro/par3.DvB_ug2a.png","width":500,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/try/astro/src/assets/par3.png";
							}
							
							return target[name];
						}
					});

const par4 = new Proxy({"src":"/_astro/par4.CRa_wPyn.png","width":500,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/try/astro/src/assets/par4.png";
							}
							
							return target[name];
						}
					});

const par5 = new Proxy({"src":"/_astro/par5.mYN4QaDl.png","width":500,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/try/astro/src/assets/par5.png";
							}
							
							return target[name];
						}
					});

const par6 = new Proxy({"src":"/_astro/par6.BRPslJZE.png","width":500,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/try/astro/src/assets/par6.png";
							}
							
							return target[name];
						}
					});

function Partners() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const partners = [
    { img: par1.src, link: "https://partner1.com", name: "Partner 1" },
    { img: par2.src, link: "https://partner2.com", name: "Partner 2" },
    { img: par3.src, link: "https://partner3.com", name: "Partner 3" },
    { img: par4.src, link: "https://partner4.com", name: "Partner 4" },
    { img: par5.src, link: "https://partner5.com", name: "Partner 5" },
    { img: par6.src, link: "https://partner6.com", name: "Partner 6" }
  ];
  const orbitRadius = 180;
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        // Adjust threshold to control when animation triggers (0.2 = 20% visible)
        threshold: 0.2,
        // Add rootMargin to trigger slightly before the section comes into view
        rootMargin: "0px 0px -100px 0px"
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
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: sectionRef,
      className: "py-16 overflow-hidden relative bg-white",
      children: [
        /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 pr-0 md:pr-8 mb-12 md:mb-0", children: [
            /* @__PURE__ */ jsx(
              "h2",
              {
                className: `text-4xl font-bold  mb-6 transition-all duration-1500 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} bg-clip-text text-transparent`,
                style: {
                  backgroundImage: "linear-gradient(to left, #3D0C11, #D80032)"
                },
                children: "Our Partners"
              }
            ),
            /* @__PURE__ */ jsx(
              "p",
              {
                className: `text-xl text-gray-600 transition-all duration-1500 delay-500 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
                children: "Help your customers double their inbound conversion rates and grow your business with new revenue streams."
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 relative h-96", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `absolute z-10 bg-white rounded-xl shadow-lg p-4 w-32 h-32 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-opacity duration-2000 ${isVisible ? "opacity-100" : "opacity-0"}`,
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: parjoin.src,
                    alt: "Partners",
                    className: "w-24 h-24 object-contain",
                    onError: (e) => {
                      e.target.onerror = null;
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23FF5C35'/%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%23ffffff'%3ELogo%3C/text%3E%3C/svg%3E";
                    }
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `partner-wheel ${isVisible ? "wheel-fade-in" : ""}`,
                children: partners.map((partner, index) => {
                  const angle = index / partners.length * 360;
                  const radians = angle * Math.PI / 180;
                  const x = Math.cos(radians) * orbitRadius;
                  const y = Math.sin(radians) * orbitRadius;
                  const staggerDelay = 200 * index;
                  return /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: partner.link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "partner-item absolute",
                      style: {
                        top: `calc(50% + ${y}px)`,
                        left: `calc(50% + ${x}px)`,
                        transform: "translate(-50%, -50%)",
                        transitionDelay: `${800 + staggerDelay}ms`
                      },
                      children: /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: `h-20 w-20 md:h-24 md:w-24 rounded-lg bg-maroon5 shadow-md flex items-center justify-center p-2 hover:scale-110 transition-all duration-700 partner-logo ${isVisible ? "partner-fade-in" : "opacity-0"}`,
                          children: /* @__PURE__ */ jsx(
                            "img",
                            {
                              src: partner.img,
                              alt: partner.name,
                              className: "object-contain w-full h-full",
                              onError: (e) => {
                                e.target.onerror = null;
                                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect width='80' height='80' fill='%23f0f4f8'/%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='10' fill='%23334e68'%3E" + partner.name + "%3C/text%3E%3C/svg%3E";
                              }
                            }
                          )
                        }
                      )
                    },
                    index
                  );
                })
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("style", { jsx: true, children: `
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
      ` })
      ]
    }
  );
}

function FAQ() {
  const faqs = [
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply sign up for an account, complete your profile, and follow the onboarding process. Our intuitive setup wizard will guide you through the initial configuration steps."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial on all our plans. No credit card is required to start your trial. You can upgrade to a paid plan at any time during or after your trial."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to the service until the end of your current billing period."
    },
    {
      question: "Do you offer support?",
      answer: "Absolutely! We provide 24/7 support via email and live chat. Our dedicated support team is always ready to help you with any questions or issues you might have."
    },
    {
      question: "Is my data secure?",
      answer: "Security is our top priority. We use industry-standard encryption and security protocols to protect your data. All information is stored on secure servers with regular backups."
    },
    {
      question: "Can I integrate with other tools?",
      answer: "Yes, our platform integrates with many popular tools and services. We have built-in integrations for CRM, marketing, analytics, and project management tools to streamline your workflow."
    }
  ];
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        // Adjust threshold as needed (0.1 means when 10% of the element is visible)
        threshold: 0.1,
        // Optional: margin around the root
        rootMargin: "0px"
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
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "faq",
      ref: sectionRef,
      className: `py-16 bg-gray-50 transition-opacity duration-700 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `text-center transition-all duration-700 ${isVisible ? "opacity-100 transform-none" : "opacity-0 -translate-y-10"}`,
            children: [
              /* @__PURE__ */ jsx(
                "h2",
                {
                  className: "text-3xl font-bold text-gray-900 bg-clip-text text-transparent",
                  style: {
                    backgroundImage: "linear-gradient(to left, #3D0C11, #D80032)"
                  },
                  children: "Frequently Asked Questions"
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "mt-4 text-xl text-gray-600", children: "Have questions? We're here to help." })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "mt-12 space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `bg-white rounded-lg shadow overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 transform-none" : index % 2 === 0 ? "opacity-0 -translate-x-20" : "opacity-0 translate-x-20"}`,
            style: {
              transitionDelay: `${200 * index}ms`
            },
            children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  className: "flex w-full justify-between items-center p-4 text-left focus:outline-none",
                  onClick: () => toggleFAQ(index),
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "text-lg font-medium text-gray-900", children: faq.question }),
                    /* @__PURE__ */ jsx(
                      "svg",
                      {
                        className: `w-5 h-5 text-gray-500 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`,
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M19 9l-7 7-7-7"
                          }
                        )
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
                  children: /* @__PURE__ */ jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: faq.answer }) })
                }
              )
            ]
          },
          index
        )) })
      ] })
    }
  );
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="overflow-x-hidden w-full" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/try/astro/src/components/Hero.jsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Features", Features, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/try/astro/src/components/Features.jsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "HowItWorks", HowItWorks, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/try/astro/src/components/HowItWorks.jsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Partners", Partners, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/try/astro/src/components/Partners.jsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Testimonials", Testimonials, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/try/astro/src/components/Testimonials.jsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "PricingSection", PricingSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/try/astro/src/components/PricingSection.jsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "FAQ", FAQ, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/try/astro/src/components/FAQ.jsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </div> ` })} `;
}, "D:/try/astro/src/pages/index.astro", void 0);

const $$file = "D:/try/astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
