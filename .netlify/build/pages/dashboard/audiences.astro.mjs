import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CijfHuAN.mjs';
import 'kleur/colors';
import { $ as $$DashboardLayout } from '../../chunks/DashboardLayout_DRKAV-Ay.mjs';
export { renderers } from '../../renderers.mjs';

const $$Audiences = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Audiences", "currentPage": "audiences" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white rounded-lg shadow-sm p-6 mb-6"> <h2 class="text-lg font-semibold mb-4">Audience Segments</h2> <table class="w-full"> <thead> <tr class="border-b border-gray-200"> <th class="text-left p-4 text-sm font-medium text-gray-500">Name</th> <th class="text-left p-4 text-sm font-medium text-gray-500">Size</th> <th class="text-left p-4 text-sm font-medium text-gray-500">Avg. CTR</th> <th class="text-left p-4 text-sm font-medium text-gray-500">Avg. Conversion Rate</th> <th class="text-left p-4 text-sm font-medium text-gray-500">Actions</th> </tr> </thead> <tbody> <tr class="border-b border-gray-200"> <td class="p-4">New Visitors</td> <td class="p-4">12,450</td> <td class="p-4">2.5%</td> <td class="p-4">0.8%</td> <td class="p-4"> <button class="text-blue-600 hover:text-blue-800">Edit</button> </td> </tr> <tr class="border-b border-gray-200"> <td class="p-4">Returning Visitors</td> <td class="p-4">8,230</td> <td class="p-4">3.8%</td> <td class="p-4">1.2%</td> <td class="p-4"> <button class="text-blue-600 hover:text-blue-800">Edit</button> </td> </tr> <tr class="border-b border-gray-200"> <td class="p-4">Cart Abandoners</td> <td class="p-4">3,640</td> <td class="p-4">4.2%</td> <td class="p-4">2.1%</td> <td class="p-4"> <button class="text-blue-600 hover:text-blue-800">Edit</button> </td> </tr> </tbody> </table> </div> <div class="flex justify-end"> <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
Create New Audience
</button> </div> ` })}`;
}, "D:/try/astro/src/pages/dashboard/audiences.astro", void 0);

const $$file = "D:/try/astro/src/pages/dashboard/audiences.astro";
const $$url = "/dashboard/audiences";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Audiences,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
