import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CijfHuAN.mjs';
import 'kleur/colors';
import { $ as $$DashboardLayout } from '../../chunks/DashboardLayout_DRKAV-Ay.mjs';
export { renderers } from '../../renderers.mjs';

const $$Campaigns = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Campaigns", "currentPage": "campaigns" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white rounded-lg shadow-sm p-6 mb-6"> <h2 class="text-lg font-semibold mb-4">Active Campaigns</h2> <table class="w-full"> <thead> <tr class="border-b border-gray-200"> <th class="text-left p-4 text-sm font-medium text-gray-500">Name</th> <th class="text-left p-4 text-sm font-medium text-gray-500">Status</th> <th class="text-left p-4 text-sm font-medium text-gray-500">Clicks</th> <th class="text-left p-4 text-sm font-medium text-gray-500">CPC</th> <th class="text-left p-4 text-sm font-medium text-gray-500">Conversions</th> <th class="text-left p-4 text-sm font-medium text-gray-500">Budget</th> <th class="text-left p-4 text-sm font-medium text-gray-500">Actions</th> </tr> </thead> <tbody> <tr class="border-b border-gray-200"> <td class="p-4">Search Ads</td> <td class="p-4"> <span class="flex items-center"> <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span> <span class="text-green-600">Active</span> </span> </td> <td class="p-4">4100</td> <td class="p-4">0.80</td> <td class="p-4">840</td> <td class="p-4">$3,280</td> <td class="p-4"> <button class="text-blue-600 hover:text-blue-800">Edit</button> </td> </tr> <tr class="border-b border-gray-200"> <td class="p-4">Display Ads</td> <td class="p-4"> <span class="flex items-center"> <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span> <span class="text-green-600">Active</span> </span> </td> <td class="p-4">2250</td> <td class="p-4">1.25</td> <td class="p-4">260</td> <td class="p-4">$2,812</td> <td class="p-4"> <button class="text-blue-600 hover:text-blue-800">Edit</button> </td> </tr> <tr class="border-b border-gray-200"> <td class="p-4">Social Media Ads</td> <td class="p-4"> <span class="flex items-center"> <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span> <span class="text-green-600">Active</span> </span> </td> <td class="p-4">1160</td> <td class="p-4">1.15</td> <td class="p-4">130</td> <td class="p-4">$1,334</td> <td class="p-4"> <button class="text-blue-600 hover:text-blue-800">Edit</button> </td> </tr> </tbody> </table> </div> <div class="flex justify-end"> <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
Create New Campaign
</button> </div> ` })}`;
}, "D:/try/astro/src/pages/dashboard/campaigns.astro", void 0);

const $$file = "D:/try/astro/src/pages/dashboard/campaigns.astro";
const $$url = "/dashboard/campaigns";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Campaigns,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
