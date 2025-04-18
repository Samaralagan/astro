import { e as createComponent, f as createAstro, h as addAttribute, k as renderHead, i as renderComponent, l as renderSlot, j as renderScript, r as renderTemplate } from './astro/server_CijfHuAN.mjs';
import 'kleur/colors';
/* empty css                             */
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { f as favicon } from './favicon_DO8_aA9V.mjs';
/* empty css                         */

const logowhite = new Proxy({"src":"/_astro/logo.Bu7fuAXD.svg","width":222,"height":50,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/try/astro/src/assets/logo.svg";
							}
							
							return target[name];
						}
					});

function Navbar() {
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
      hatIcon: "hat-dollar"
    },
    { name: "Blog", href: "/blog", icon: "document", hatIcon: "hat-document" },
    { name: "Contact", href: "/contact", icon: "mail", hatIcon: "hat-mail" }
  ];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !isSidebar) {
        setIsAnimating(true);
        setIsSidebar(true);
        setTimeout(() => {
          setIsAnimating(false);
        }, 1e3);
      } else if (window.scrollY <= 50 && isSidebar) {
        setIsSidebar(false);
        setIsExpanded(false);
      }
    };
    const path = window.location.pathname;
    setActivePath(path);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSidebar]);
  const isActive = (href) => {
    if (href === "/" && activePath === "/") {
      return true;
    }
    return href !== "/" && activePath.startsWith(href);
  };
  const getIcon = (iconName) => {
    switch (iconName) {
      case "home":
        return /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              }
            )
          }
        );
      case "info":
        return /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              }
            )
          }
        );
      case "dollar":
        return /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              }
            )
          }
        );
      case "document":
        return /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              }
            )
          }
        );
      case "mail":
        return /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              }
            )
          }
        );
      case "thunder":
        return /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M13 10V3L4 14h7v7l9-11h-7z"
              }
            )
          }
        );
      // Hat icon variants for top navbar
      case "hat-home":
        return /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-5 h-5 mr-2",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              }
            )
          }
        );
      case "hat-info":
        return /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-5 h-5 mr-2",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              }
            )
          }
        );
      case "hat-dollar":
        return /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-5 h-5 mr-2",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              }
            )
          }
        );
      case "hat-document":
        return /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-5 h-5 mr-2",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              }
            )
          }
        );
      case "hat-mail":
        return /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-5 h-5 mr-2",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              }
            )
          }
        );
      case "hat-thunder":
        return /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-5 h-5 mr-2",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M13 10V3L4 14h7v7l9-11h-7z"
              }
            )
          }
        );
      default:
        return null;
    }
  };
  if (!isSidebar) {
    return /* @__PURE__ */ jsxs(
      "nav",
      {
        className: "bg-white shadow-sm transition-all duration-300 fixed top-0 left-0 right-0 z-50 w-full",
        ref: navbarRef,
        children: [
          /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between h-14", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("a", { href: "/", className: "text-2xl font-bold text-[#D80032]", children: /* @__PURE__ */ jsx("img", { src: logowhite.src, alt: "logo", className: "h-12" }) }) }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end", children: [
              /* @__PURE__ */ jsx("div", { className: "hidden lg:flex items-center", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-3", children: [
                links.map((link) => /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: link.href,
                    className: `menu-item px-3 py-2 text-sm transition-colors whitespace-nowrap flex items-center rounded-md relative overflow-hidden font-bold ${isActive(link.href) ? "text-[#D80032] font-bold" : "text-gray-700 hover:text-[#D80032] font-bold"}`,
                    children: [
                      getIcon(link.hatIcon),
                      link.name,
                      /* @__PURE__ */ jsx("span", { className: "menu-fill-effect" })
                    ]
                  },
                  link.name
                )),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "/dashboardredirect",
                    className: "menu-item ml-2 px-4 py-2 bg-[#D80032] text-white text-sm rounded-md hover:bg-[#c00029] transition-colors whitespace-nowrap flex items-center relative overflow-hidden font-bold",
                    children: [
                      getIcon("hat-thunder"),
                      "Get Started",
                      /* @__PURE__ */ jsx("span", { className: "menu-fill-effect-cta" })
                    ]
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsx("div", { className: "lg:hidden", children: /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setIsMenuOpen(!isMenuOpen),
                  className: "inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#D80032] focus:outline-none",
                  "aria-expanded": isMenuOpen,
                  children: /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "h-6 w-6",
                      stroke: "currentColor",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: isMenuOpen ? /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M6 18L18 6M6 6l12 12"
                        }
                      ) : /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M4 6h16M4 12h16M4 18h16"
                        }
                      )
                    }
                  )
                }
              ) })
            ] })
          ] }) }),
          isMenuOpen && /* @__PURE__ */ jsx("div", { className: "lg:hidden", children: /* @__PURE__ */ jsxs("div", { className: "pt-2 pb-3 space-y-1 px-2", children: [
            links.map((link) => /* @__PURE__ */ jsxs(
              "a",
              {
                href: link.href,
                className: `block px-3 py-2 text-base font-bold rounded-md flex items-center relative overflow-hidden ${isActive(link.href) ? "text-[#D80032] bg-[#F78CA2]/20" : "text-gray-700 hover:text-[#D80032] hover:bg-maroon3"}`,
                children: [
                  getIcon(link.hatIcon),
                  link.name,
                  /* @__PURE__ */ jsx("span", { className: "mobile-menu-fill-effect" })
                ]
              },
              link.name
            )),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "/dashboard",
                className: "block px-3 py-2 text-base font-bold bg-[#D80032] text-white rounded-md hover:bg-[#c00029] flex items-center relative overflow-hidden",
                children: [
                  getIcon("hat-thunder"),
                  "Get Started",
                  /* @__PURE__ */ jsx("span", { className: "mobile-menu-fill-effect-cta" })
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx("style", { jsx: true, children: `
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
              247,
              140,
              162,
              0.2
            ); /* F78CA2 with transparency */
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
              192,
              0,
              41,
              0.3
            ); /* Darker version of D80032 */
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
            background-color: rgba(247, 140, 162, 0.2);
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
            background-color: rgba(192, 0, 41, 0.3);
            transition: height 0.4s ease-out;
            pointer-events: none;
            z-index: -1;
          }

          a:hover .mobile-menu-fill-effect,
          a:hover .mobile-menu-fill-effect-cta {
            height: 100%;
          }
        ` })
        ]
      }
    );
  }
  const AnimationIndicator = () => {
    if (!isAnimating) return null;
    return /* @__PURE__ */ jsx("div", { className: "fixed z-[60] pointer-events-none", children: /* @__PURE__ */ jsx("div", { className: "bg-[#D80032] w-3 h-3 rounded-full animate-navbar-transition" }) });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(AnimationIndicator, {}),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `fixed left-0 top-1/2 transform -translate-y-1/2 z-50 ${isExpanded ? "hidden" : "block"} transition-all duration-500 ${isAnimating ? "animate-appear-from-top" : ""}`,
        onMouseEnter: () => setIsExpanded(true),
        children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "bg-[#D80032] text-white rounded-r-md shadow-md hover:bg-[#c00029] transition-all duration-300 flex items-center justify-center",
            style: { padding: "0.9rem 0.5rem" },
            "aria-label": "Expand menu",
            children: /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold", children: "»" })
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "nav",
      {
        className: `fixed left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-r-lg z-50 transition-all duration-500 ${isExpanded ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-full"}`,
        onMouseLeave: () => {
          setIsExpanded(false);
          setActiveIcon(null);
        },
        children: /* @__PURE__ */ jsxs("div", { className: "py-3 px-1", children: [
          /* @__PURE__ */ jsx("ul", { className: "space-y-5", children: links.map((link) => /* @__PURE__ */ jsx("li", { className: "relative", children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: link.href,
              className: `flex items-center justify-center p-2 transition-colors rounded-md font-bold ${isActive(link.href) ? "text-[#D80032]" : "text-gray-700 hover:text-[#D80032] hover:bg-[#F78CA2]/20"}`,
              title: link.name,
              onMouseEnter: () => setActiveIcon(link.name),
              onMouseLeave: () => setActiveIcon(null),
              children: [
                /* @__PURE__ */ jsx("span", { className: "inline-flex items-center justify-center", children: getIcon(link.icon) }),
                activeIcon === link.name && /* @__PURE__ */ jsx("div", { className: "absolute left-full ml-2 bg-gray-800 text-white text-sm px-3 py-1 rounded whitespace-nowrap font-bold", children: link.name })
              ]
            }
          ) }, link.name)) }),
          /* @__PURE__ */ jsx("div", { className: "mt-5 pt-2 flex justify-center", children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "/dashboard",
              className: "p-2 text-[#D80032] hover:text-[#D80032] hover:bg-[#F78CA2]/20 rounded-md transition-colors font-bold",
              title: "Get Started",
              onMouseEnter: () => setActiveIcon("getStarted"),
              onMouseLeave: () => setActiveIcon(null),
              children: [
                getIcon("thunder"),
                activeIcon === "getStarted" && /* @__PURE__ */ jsx("div", { className: "absolute left-full ml-2 bg-gray-800 text-white text-sm px-3 py-1 rounded whitespace-nowrap font-bold", children: "Get Started" })
              ]
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("style", { jsx: true, children: `
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
      ` })
  ] });
}

const logodark = new Proxy({"src":"/_astro/logodark.N9mMQcKW.svg","width":222,"height":50,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/try/astro/src/assets/logodark.svg";
							}
							
							return target[name];
						}
					});

function Footer() {
  const [activePath, setActivePath] = useState("/");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const links = [
    { name: "Home", href: "/", icon: "home" },
    { name: "About Us", href: "/about", icon: "info" },
    { name: "Pricing", href: "/pricing", icon: "dollar" },
    { name: "Blog", href: "/blog", icon: "document" },
    { name: "Contact", href: "/contact", icon: "mail" }
  ];
  const validateEmail = (email2) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email2).toLowerCase());
  };
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError("Please enter your email address");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    setShowSuccessPopup(true);
    setEmail("");
    setTimeout(() => {
      setShowSuccessPopup(false);
    }, 5e3);
  };
  useEffect(() => {
    const path = window.location.pathname;
    setActivePath(path);
    const handleLocationChange = () => {
      setActivePath(window.location.pathname);
    };
    window.addEventListener("popstate", handleLocationChange);
    const interceptClicks = () => {
      document.addEventListener("click", (e) => {
        const link = e.target.closest("a");
        if (link && link.href.includes(window.location.origin) && !e.ctrlKey && !e.metaKey) {
          const url = new URL(link.href);
          if (url.pathname !== activePath) {
            setActivePath(url.pathname);
          }
        }
      });
    };
    interceptClicks();
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);
  const isActive = (href) => {
    if (href === "/" && activePath === "/") {
      return true;
    }
    return href !== "/" && activePath.startsWith(href);
  };
  const getIcon = (iconName) => {
    switch (iconName) {
      case "home":
        return /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-5 h-5 mr-2",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              }
            )
          }
        );
      case "info":
        return /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-5 h-5 mr-2",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              }
            )
          }
        );
      case "dollar":
        return /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-5 h-5 mr-2",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              }
            )
          }
        );
      case "document":
        return /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-5 h-5 mr-2",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              }
            )
          }
        );
      case "mail":
        return /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-5 h-5 mr-2",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              }
            )
          }
        );
      case "phone":
        return /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-5 h-5 mr-2",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              }
            )
          }
        );
      default:
        return null;
    }
  };
  return /* @__PURE__ */ jsxs("footer", { className: "bg-[#3D0C11] text-white py-12 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex items-center justify-end pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "w-96 h-96 rounded-full bg-white opacity-5 absolute right-0 mr-16" }),
      /* @__PURE__ */ jsx("div", { className: "w-64 h-64 rounded-full bg-white opacity-10 blur-xl absolute right-0 mr-32" }),
      /* @__PURE__ */ jsx("div", { className: "w-32 h-32 rounded-full bg-white opacity-20 blur-lg absolute right-0 mr-24" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-12", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-6 md:mb-0", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-0", children: "Get update" }) }),
        /* @__PURE__ */ jsx("div", { className: "w-full md:w-1/2 mt-6 md:mt-0", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubscribe, className: "relative", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              placeholder: "Your Email",
              className: `w-full py-3 px-4 bg-transparent border-b ${emailError ? "border-red-500" : "border-gray-600"} text-white focus:outline-none focus:border-[#f04da1]`,
              value: email,
              onChange: (e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError("");
              }
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "absolute right-2 top-3 text-[#f04da1] focus:outline-none hover:text-[#ff6db8] transition duration-150",
              children: /* @__PURE__ */ jsxs(
                "svg",
                {
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    /* @__PURE__ */ jsx(
                      "path",
                      {
                        d: "M12 2L2 7L12 12L22 7L12 2Z",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "path",
                      {
                        d: "M2 17L12 22L22 17",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "path",
                      {
                        d: "M2 12L12 17L22 12",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }
                    )
                  ]
                }
              )
            }
          ),
          emailError && /* @__PURE__ */ jsx("p", { className: "absolute text-red-400 text-xs mt-1", children: emailError })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-t border-opacity-20 border-gray-300", children: [
        /* @__PURE__ */ jsxs("div", { className: "col-span-1", children: [
          /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 mb-6", children: /* @__PURE__ */ jsx("a", { href: "/", className: "text-white", children: /* @__PURE__ */ jsx("img", { src: logodark.src, alt: "Logo" }) }) }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-4", children: "Make the right data-driven decisions that move your business." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-gray-200 font-medium mb-4", children: "Navigation" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: links.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: link.href,
              className: `flex items-center text-sm transition-colors ${isActive(link.href) ? "text-[#f04da1] font-bold" : "text-gray-300 hover:text-white transition duration-150"}`,
              children: [
                getIcon(link.icon),
                link.name
              ]
            }
          ) }, link.name)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-gray-200 font-medium mb-4", children: "Legal" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "/terms",
                className: "text-gray-300 hover:text-white transition duration-150",
                children: "Terms and Conditions"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "/privacy",
                className: "text-gray-300 hover:text-white transition duration-150",
                children: "Privacy Policy"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "/cookies",
                className: "text-gray-300 hover:text-white transition duration-150",
                children: "Cookie Policy"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-gray-200 font-medium mb-4", children: "Let's chat!" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-3", children: [
            /* @__PURE__ */ jsx("div", { className: "mr-2", children: getIcon("mail") }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "mailto:hi@avo.app",
                className: "text-gray-300 hover:text-white transition duration-150",
                children: "hi@avo.app"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-3", children: [
            /* @__PURE__ */ jsx("div", { className: "mr-2", children: getIcon("phone") }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "tel:+1234567890",
                className: "text-gray-300 hover:text-white transition duration-150",
                children: "+1 (234) 567-890"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-opacity-20 border-gray-300 mt-8 pt-6 text-center text-gray-400", children: /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Avo Analytics. All rights reserved."
      ] }) })
    ] }),
    showSuccessPopup && /* @__PURE__ */ jsx("div", { className: "fixed bottom-8 right-8 bg-gradient-to-r from-[#3D0C11] to-[#f04da1] text-white p-4 rounded-lg shadow-lg z-50 max-w-sm animate-fade-in", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 pt-0.5", children: /* @__PURE__ */ jsx(
        "svg",
        {
          className: "h-6 w-6 text-white",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M5 13l4 4L19 7"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "ml-3", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Thanks for subscribing!" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs opacity-90", children: "We'll keep you updated with new trends and insights." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "ml-4 flex-shrink-0 flex", children: /* @__PURE__ */ jsx(
        "button",
        {
          className: "inline-flex text-white focus:outline-none",
          onClick: () => setShowSuccessPopup(false),
          children: /* @__PURE__ */ jsx(
            "svg",
            {
              className: "h-5 w-5",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                  clipRule: "evenodd"
                }
              )
            }
          )
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("style", { jsx: true, children: `
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      ` })
  ] });
}

const ChatwootWidget = () => {
  useEffect(() => {
    if (window.chatwootSDK) return;
    const script = document.createElement("script");
    script.src = "https://app.chatwoot.com/packs/js/sdk.js";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      window.chatwootSDK.run({
        websiteToken: "UyEq79M4EwUZWYKEQfFANAn6",
        // Replace this
        baseUrl: "https://app.chatwoot.com"
      });
    };
    document.body.appendChild(script);
  }, []);
  return null;
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Default Title" } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} | Your Company</title><link rel="icon" type="image/svg+xml"${addAttribute(favicon.src, "href")}><!-- Font Awesome for social icons --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">${renderHead()}</head> <body class="min-h-screen flex flex-col bg-white" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/try/astro/src/components/Navbar.jsx", "client:component-export": "default", "data-astro-cid-sckkx6r4": true })} <main class="flex-grow" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/try/astro/src/components/Footer.jsx", "client:component-export": "default", "data-astro-cid-sckkx6r4": true })} <!-- Social Media Floating Button --> <div class="social-float-container" data-astro-cid-sckkx6r4> <button id="socialToggle" class="social-toggle-btn" aria-label="Toggle social media links" data-astro-cid-sckkx6r4> <i class="fas fa-share-alt" data-astro-cid-sckkx6r4></i> </button> <div id="socialIcons" class="social-icons" data-astro-cid-sckkx6r4> <a href="https://facebook.com" target="_blank" class="social-icon facebook" data-angle="0" aria-label="Facebook" data-astro-cid-sckkx6r4> <i class="fab fa-facebook-f" data-astro-cid-sckkx6r4></i> </a> <a href="https://instagram.com" target="_blank" class="social-icon instagram" data-angle="22.5" aria-label="Instagram" data-astro-cid-sckkx6r4> <i class="fab fa-instagram" data-astro-cid-sckkx6r4></i> </a> <a href="https://youtube.com" target="_blank" class="social-icon youtube" data-angle="45" aria-label="YouTube" data-astro-cid-sckkx6r4> <i class="fab fa-youtube" data-astro-cid-sckkx6r4></i> </a> <a href="https://twitter.com" target="_blank" class="social-icon twitter" data-angle="67.5" aria-label="Twitter/X" data-astro-cid-sckkx6r4> <i class="fab fa-x-twitter" data-astro-cid-sckkx6r4></i> </a> <a href="https://linkedin.com" target="_blank" class="social-icon linkedin" data-angle="90" aria-label="LinkedIn" data-astro-cid-sckkx6r4> <i class="fab fa-linkedin-in" data-astro-cid-sckkx6r4></i> </a> </div> </div> <!-- Scroll to Top Button --> <button id="scrollToTop" class="scroll-to-top-btn hidden" aria-label="Scroll to top" data-astro-cid-sckkx6r4> <i class="fas fa-arrow-up" data-astro-cid-sckkx6r4></i> </button>  ${renderScript($$result, "D:/try/astro/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result, "ChatwootWidget", ChatwootWidget, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/try/astro/src/components/ChatwootWidget", "client:component-export": "default", "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "D:/try/astro/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
