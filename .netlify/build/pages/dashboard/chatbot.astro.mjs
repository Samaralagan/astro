import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CijfHuAN.mjs';
import 'kleur/colors';
import { $ as $$DashboardLayout } from '../../chunks/DashboardLayout_DRKAV-Ay.mjs';
export { renderers } from '../../renderers.mjs';

const $$Chatbot = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Chatbot", "currentPage": "chatbot" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white rounded-lg shadow-sm p-6 mb-6"> <h2 class="text-lg font-semibold mb-4">Chatbot Configuration</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <h3 class="text-md font-medium mb-2">Chat Settings</h3> <div class="space-y-4"> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Chatbot Name</label> <input type="text" value="Marketing Assistant" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Welcome Message</label> <textarea class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows="3">Hi there! I'm your marketing assistant. How can I help you today?</textarea> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Chat Appearance</label> <select class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"> <option>Light Theme</option> <option>Dark Theme</option> <option>Brand Colors</option> </select> </div> </div> </div> <div> <h3 class="text-md font-medium mb-2">AI Settings</h3> <div class="space-y-4"> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Knowledge Base</label> <select class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"> <option>Marketing Knowledge</option> <option>Product Information</option> <option>Custom Knowledge</option> </select> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Response Tone</label> <select class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"> <option>Professional</option> <option>Friendly</option> <option>Casual</option> </select> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">AI Response Length</label> <div class="flex items-center"> <input type="range" min="1" max="5" value="3" class="w-full"> </div> <div class="flex justify-between text-xs text-gray-500 mt-1"> <span>Brief</span> <span>Detailed</span> </div> </div> </div> </div> </div> </div> <div class="flex justify-end"> <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
Save Changes
</button> </div> ` })}`;
}, "D:/try/astro/src/pages/dashboard/chatbot.astro", void 0);

const $$file = "D:/try/astro/src/pages/dashboard/chatbot.astro";
const $$url = "/dashboard/chatbot";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Chatbot,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
