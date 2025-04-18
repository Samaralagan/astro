import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DoeHtAU9.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/blog.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/dashboard/audiences.astro.mjs');
const _page5 = () => import('./pages/dashboard/campaigns.astro.mjs');
const _page6 = () => import('./pages/dashboard/chatbot.astro.mjs');
const _page7 = () => import('./pages/dashboard/settings.astro.mjs');
const _page8 = () => import('./pages/dashboard.astro.mjs');
const _page9 = () => import('./pages/dashboardredirect.astro.mjs');
const _page10 = () => import('./pages/pricing.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/blog.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/dashboard/audiences.astro", _page4],
    ["src/pages/dashboard/campaigns.astro", _page5],
    ["src/pages/dashboard/chatbot.astro", _page6],
    ["src/pages/dashboard/settings.astro", _page7],
    ["src/pages/dashboard/index.astro", _page8],
    ["src/pages/dashboardredirect.astro", _page9],
    ["src/pages/pricing.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8bc860bf-6341-47f4-861f-6d56b0be8158"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
