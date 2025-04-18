import { e as createComponent, r as renderTemplate } from '../chunks/astro/server_CijfHuAN.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Dashboardredirect = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<meta http-equiv="refresh" content="0;url=/dashboard/">`;
}, "D:/try/astro/src/pages/dashboardredirect.astro", void 0);

const $$file = "D:/try/astro/src/pages/dashboardredirect.astro";
const $$url = "/dashboardredirect";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Dashboardredirect,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
