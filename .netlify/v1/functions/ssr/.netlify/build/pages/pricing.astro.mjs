import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CijfHuAN.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_ueaiVteb.mjs';
import { P as PricingSection } from '../chunks/PricingSection_DYmxiu7s.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

const PricingTable = () => {
  const [isMobile, setIsMobile] = useState(false);
  const features = [
    "AI Code Generation",
    "AI Testing & Bug Fixing",
    "AI Deployment & Scaling",
    "AI Collaboration & Workflow",
    "Basic Git Integration",
    "Advanced Git Integration",
    "AI Code Review",
    "Security Enhancements",
    "Real-Time Collaboration",
    "Custom AI Enhancements",
    "Enterprise-Grade Security",
    "Access to New Features",
    "Dedicated 24/7 Support"
  ];
  const plans = [
    {
      name: "Solo",
      values: [
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "❌",
        "❌",
        "❌",
        "❌",
        "❌",
        "❌",
        "❌",
        "❌"
      ]
    },
    {
      name: "Professional Plan",
      values: [
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "❌",
        "❌",
        "❌",
        "❌"
      ]
    },
    {
      name: "Enterprise Plan",
      values: [
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️"
      ]
    }
  ];
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);
  const DesktopView = () => /* @__PURE__ */ jsx("div", { className: "mt-28", children: /* @__PURE__ */ jsxs("div", { className: "pricing-table desktop-view bg-white text-gray-800 mx-auto max-w-6xl px-4 shadow-lg", children: [
    /* @__PURE__ */ jsxs("div", { className: "pricing-header bg-gray-100 text-gray-900 font-bold flex rounded-t-xl overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "pricing-header-cell flex-1 p-4 text-center text-lg", children: "Features" }),
      plans.map((plan, index) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "pricing-header-cell flex-1 p-4 text-center text-lg",
          children: plan.name
        },
        index
      ))
    ] }),
    /* @__PURE__ */ jsx("div", { className: "rounded-b-xl overflow-hidden", children: features.map((feature, featureIndex) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "pricing-row flex border-b border-gray-200 hover:bg-pink-50 transition-all duration-300 ease-in-out hover:border-l-4 hover:border-l-red-600 group",
        children: [
          /* @__PURE__ */ jsx("div", { className: "pricing-feature flex-1 p-4 font-medium group-hover:text-red-700 transition-colors", children: feature }),
          plans.map((plan, planIndex) => /* @__PURE__ */ jsx(
            "div",
            {
              className: "pricing-value flex-1 p-4 text-center group-hover:text-red-500 transition-colors duration-300 ease-in-out",
              children: plan.values[featureIndex]
            },
            planIndex
          ))
        ]
      },
      featureIndex
    )) })
  ] }) });
  const MobileView = () => {
    const [expandedFeature, setExpandedFeature] = useState(0);
    return /* @__PURE__ */ jsx("div", { className: "mobile-view bg-white text-gray-800 px-4 mt-28", children: features.map((feature, featureIndex) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "mobile-feature-row mb-4 bg-white rounded-lg overflow-hidden shadow-md",
        children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "mobile-feature-header bg-gray-100 p-4 font-bold text-base flex justify-between items-center cursor-pointer",
              onClick: () => setExpandedFeature(
                featureIndex === expandedFeature ? -1 : featureIndex
              ),
              children: [
                /* @__PURE__ */ jsx("span", { className: "flex-grow text-gray-900", children: feature }),
                /* @__PURE__ */ jsx("span", { className: "ml-2 transform transition-transform duration-300 ease-in-out text-red-600", children: expandedFeature === featureIndex ? "▲" : "▼" })
              ]
            }
          ),
          expandedFeature === featureIndex && /* @__PURE__ */ jsx("div", { className: "mobile-feature-table w-full", children: plans.map((plan, planIndex) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "mobile-feature-plan flex border-b border-gray-200 last:border-b-0 hover:bg-pink-50",
              children: [
                /* @__PURE__ */ jsx("div", { className: "mobile-plan-name w-2/5 p-3 font-medium bg-gray-50 flex items-center text-gray-800", children: plan.name }),
                /* @__PURE__ */ jsx("div", { className: "mobile-plan-value w-3/5 p-3 flex items-center text-sm break-words", children: plan.values[featureIndex] })
              ]
            },
            planIndex
          )) })
        ]
      },
      featureIndex
    )) });
  };
  return /* @__PURE__ */ jsx("div", { className: "bg-white", children: isMobile ? /* @__PURE__ */ jsx(MobileView, {}) : /* @__PURE__ */ jsx(DesktopView, {}) });
};

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pricing" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PricingSection", PricingSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/try/astro/src/components/PricingSection.jsx", "client:component-export": "default" })} ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> ${renderComponent($$result2, "PricingTable", PricingTable, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/try/astro/src/components/PricingTable", "client:component-export": "default" })} </div> ` })}`;
}, "D:/try/astro/src/pages/pricing.astro", void 0);

const $$file = "D:/try/astro/src/pages/pricing.astro";
const $$url = "/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
