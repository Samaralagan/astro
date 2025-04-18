import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CijfHuAN.mjs';
import 'kleur/colors';
import { $ as $$DashboardLayout } from '../chunks/DashboardLayout_DRKAV-Ay.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Line } from 'recharts';
export { renderers } from '../renderers.mjs';

const PerformanceChart = () => {
  const [data] = useState([
    { name: "1", clicks: 400 },
    { name: "5", clicks: 600 },
    { name: "10", clicks: 500 },
    { name: "15", clicks: 800 },
    { name: "20", clicks: 700 },
    { name: "25", clicks: 900 },
    { name: "30", clicks: 800 }
  ]);
  return /* @__PURE__ */ jsx("div", { className: "h-64", children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs(LineChart, { data, children: [
    /* @__PURE__ */ jsx(XAxis, { dataKey: "name", tick: false, axisLine: false }),
    /* @__PURE__ */ jsx(YAxis, { hide: true }),
    /* @__PURE__ */ jsx(
      Tooltip,
      {
        contentStyle: {
          backgroundColor: "#fff",
          border: "1px solid #e2e8f0",
          borderRadius: "0.25rem",
          boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
        },
        labelStyle: {
          color: "#4a5568",
          fontWeight: 500
        }
      }
    ),
    /* @__PURE__ */ jsx(
      Line,
      {
        type: "monotone",
        dataKey: "clicks",
        stroke: "#3b82f6",
        strokeWidth: 2,
        dot: false,
        activeDot: { r: 6, fill: "#3b82f6" }
      }
    )
  ] }) }) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Overview", "currentPage": "overview" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"> <div class="bg-white rounded-lg p-6 shadow-sm"> <p class="text-gray-500 text-sm mb-1">Clicks</p> <h3 class="text-3xl font-bold">7,520</h3> </div> <div class="bg-white rounded-lg p-6 shadow-sm"> <p class="text-gray-500 text-sm mb-1">Conversions</p> <h3 class="text-3xl font-bold">1,230</h3> </div> <div class="bg-white rounded-lg p-6 shadow-sm"> <p class="text-gray-500 text-sm mb-1">Cost per Click</p> <h3 class="text-3xl font-bold">$1.05</h3> </div> </div>  <div class="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-6"> <h3 class="text-lg font-semibold mb-2">AI Summary</h3> <p class="text-gray-700">
The Search Ads campaign has seen a 15% increase in clicks. Consider
      allocating more budget to this campaign to maximize performance.
</p> </div>  <div class="mb-6"> <div class="flex justify-between items-center mb-4"> <h2 class="text-xl font-semibold">Campaigns</h2> <a href="/dashboard/campaigns" class="text-blue-600 text-sm font-medium">View all</a> </div> <div class="bg-white rounded-lg shadow-sm overflow-hidden"> <table class="w-full"> <thead> <tr class="border-b border-gray-200"> <th class="text-left p-4 text-sm font-medium text-gray-500">Name</th> <th class="text-left p-4 text-sm font-medium text-gray-500">Status</th> <th class="text-left p-4 text-sm font-medium text-gray-500">Clicks</th> <th class="text-left p-4 text-sm font-medium text-gray-500">CPC</th> <th class="text-left p-4 text-sm font-medium text-gray-500">Conversions</th> </tr> </thead> <tbody> <tr class="border-b border-gray-200"> <td class="p-4">Search Ads</td> <td class="p-4"> <span class="flex items-center"> <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span> <span class="text-green-600">Active</span> </span> </td> <td class="p-4">4100</td> <td class="p-4">0.80</td> <td class="p-4">840</td> </tr> <tr class="border-b border-gray-200"> <td class="p-4">Display Ads</td> <td class="p-4"> <span class="flex items-center"> <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span> <span class="text-green-600">Active</span> </span> </td> <td class="p-4">2250</td> <td class="p-4">1.25</td> <td class="p-4">260</td> </tr> <tr> <td class="p-4">Social Media Ads</td> <td class="p-4"> <span class="flex items-center"> <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span> <span class="text-green-600">Active</span> </span> </td> <td class="p-4">1160</td> <td class="p-4">1.15</td> <td class="p-4">130</td> </tr> </tbody> </table> </div> </div>  <div class="mb-6"> <h2 class="text-xl font-semibold mb-4">AI-Pomanci</h2> <div class="bg-white rounded-lg shadow-sm p-6"> <div class="h-12 bg-gray-100 rounded w-3/4 mb-4"></div> <div class="h-4 bg-gray-100 rounded w-1/2 mb-2"></div> <div class="h-4 bg-gray-100 rounded w-2/3 mb-6"></div> <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
Generate badge
</button> </div> </div>  <div> <h2 class="text-xl font-semibold mb-4">Performance</h2> <div class="bg-white rounded-lg shadow-sm p-6"> <div class="mb-4"> <h3 class="text-lg font-medium mb-2">Clicks</h3> ${renderComponent($$result2, "PerformanceChart", PerformanceChart, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/try/astro/src/components/PerformanceChart.jsx", "client:component-export": "default" })} </div> <div class="flex justify-between items-center text-sm text-gray-500"> <span>Day</span> <span>30</span> </div> </div> </div>  <div class="mt-6"> <h2 class="text-xl font-semibold mb-4">AI-Powered Generate</h2> <div class="bg-white rounded-lg shadow-sm p-6"> <button class="w-full bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-50 transition-colors">
Generate Ad Copy
</button> </div> </div> ` })}`;
}, "D:/try/astro/src/pages/dashboard/index.astro", void 0);

const $$file = "D:/try/astro/src/pages/dashboard/index.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
