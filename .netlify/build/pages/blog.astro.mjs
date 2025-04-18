import { e as createComponent, i as renderComponent, j as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from '../chunks/astro/server_CijfHuAN.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_ueaiVteb.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const blogPosts = [
    {
      title: "The Future of Remote Work",
      excerpt: "How <a href='/technology' class='text-[#D80032] hover:underline'>technology</a> is reshaping the workplace and what you can do to stay ahead of the curve.",
      date: "March 15, 2025",
      author: "Michael Brown",
      category: "Industry Trends",
      image: "/placeholder3",
      content: "This is the full content of the blog post about <a href='/remote-work' class='text-[#D80032] hover:underline'>remote work</a>. It would be much longer in a real implementation. Learn about the latest <a href='/technology' class='text-[#D80032] hover:underline'>technology</a> trends."
    },
    {
      title: "Customer Success Story: How XYZ Company Increased Revenue by 200%",
      excerpt: "Learn how one of our <a href='/clients' class='text-[#D80032] hover:underline'>clients</a> transformed their business using our platform.",
      date: "March 10, 2025",
      author: "Sarah Johnson",
      category: "Case Studies",
      image: "/placeholder4",
      content: "This is the full content of the blog post. It would be much longer in a real implementation. Read more about our <a href='/clients' class='text-[#D80032] hover:underline'>clients</a> and their success stories with our <a href='/platform' class='text-[#D80032] hover:underline'>platform</a>."
    },
    {
      title: "New Features: Q1 2025 Update",
      excerpt: "Explore the latest <a href='/features' class='text-[#D80032] hover:underline'>additions</a> to our platform and how they can benefit your workflow.",
      date: "March 1, 2025",
      author: "David Wilson",
      category: "Product Updates",
      image: "/placeholder5",
      content: "This is the full content of the blog post. It would be much longer in a real implementation. Check out our newest <a href='/features' class='text-[#D80032] hover:underline'>features</a> and <a href='/updates' class='text-[#D80032] hover:underline'>updates</a> to improve your workflow."
    },
    {
      title: "Advanced Platform Configuration Techniques",
      excerpt: "Take your usage to the next level with these <a href='/expert-tips' class='text-[#D80032] hover:underline'>expert configuration tips</a> and tricks.",
      date: "February 15, 2025",
      author: "Robert Lee",
      category: "Tutorials",
      image: "/placeholder7",
      content: "This is the full content of the blog post. It would be much longer in a real implementation. Dive deeper into <a href='/expert-tips' class='text-[#D80032] hover:underline'>expert tips</a> and <a href='/configuration' class='text-[#D80032] hover:underline'>configuration</a> options."
    },
    {
      title: "How to Integrate with Popular Third-Party Tools",
      excerpt: "A comprehensive guide to connecting our platform with the <a href='/integrations' class='text-[#D80032] hover:underline'>tools</a> your team already uses.",
      date: "February 10, 2025",
      author: "Lisa Wong",
      category: "Product Updates",
      image: "/placeholder8",
      content: "This is the full content of the blog post. It would be much longer in a real implementation. Learn more about our <a href='/integrations' class='text-[#D80032] hover:underline'>integrations</a> with popular <a href='/third-party-tools' class='text-[#D80032] hover:underline'>third-party tools</a>."
    }
  ];
  const topics = [
    "Tutorials",
    "Industry Trends",
    "Case Studies",
    "Product Updates"
  ];
  const postCounts = topics.reduce((acc, topic) => {
    acc[topic] = blogPosts.filter((post) => post.category === topic).length;
    return acc;
  }, {});
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog", "data-astro-cid-ijnerlr2": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-white text-gray-800 min-h-screen pt-16" data-astro-cid-ijnerlr2> <!-- Added pt-16 for margin top --> <!-- Main content area --> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-astro-cid-ijnerlr2> <!-- Main content with sidebar layout --> <div class="flex flex-col lg:flex-row gap-8" data-astro-cid-ijnerlr2> <!-- Main blog posts grid area - 70% width --> <div class="lg:w-3/4" data-astro-cid-ijnerlr2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" id="blog-grid" data-astro-cid-ijnerlr2> ${blogPosts.map((post, index) => renderTemplate`<article${addAttribute(`bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:translate-y-[-4px] border border-gray-200 ${index >= 4 ? "hidden" : ""}`, "class")}${addAttribute(post.category, "data-category")}${addAttribute(index, "data-index")}${addAttribute(post.title, "data-title")}${addAttribute(post.author, "data-author")}${addAttribute(post.date, "data-date")}${addAttribute(post.content, "data-content")}${addAttribute(post.excerpt, "data-excerpt")} data-astro-cid-ijnerlr2> <div class="aspect-w-16 aspect-h-9" data-astro-cid-ijnerlr2> <div class="w-full h-48 bg-gray-200 flex items-center justify-center overflow-hidden" data-astro-cid-ijnerlr2> <img${addAttribute(`/api/placeholder/400/250`, "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover" data-astro-cid-ijnerlr2> </div> </div> <div class="p-6" data-astro-cid-ijnerlr2> <div class="flex items-center text-sm text-gray-500 mb-2" data-astro-cid-ijnerlr2> <span data-astro-cid-ijnerlr2>${post.date}</span> <span class="mx-2" data-astro-cid-ijnerlr2>•</span> <span class="category-tag" data-astro-cid-ijnerlr2>${post.category}</span> </div> <!-- Using div with innerHTML to properly render HTML content with links --> <div class="block mt-2 cursor-pointer blog-link" data-astro-cid-ijnerlr2> <h3 class="text-xl font-semibold text-gray-800 hover:text-[#D80032] transition blog-title" data-astro-cid-ijnerlr2> ${post.title} </h3> <p class="mt-3 text-gray-600 blog-excerpt" data-astro-cid-ijnerlr2>${unescapeHTML(post.excerpt)}</p> </div> <div class="mt-4 flex items-center" data-astro-cid-ijnerlr2> <div class="flex-shrink-0" data-astro-cid-ijnerlr2> <div class="h-8 w-8 rounded-full bg-[#F78CA2] flex items-center justify-center text-white" data-astro-cid-ijnerlr2> <span class="text-xs" data-astro-cid-ijnerlr2>${post.author[0]}</span> </div> </div> <div class="ml-3" data-astro-cid-ijnerlr2> <p class="text-sm font-medium text-[#3D0C11]" data-astro-cid-ijnerlr2> ${post.author} </p> </div> </div> </div> </article>`)} </div> <!-- Load More Button --> <div class="mt-12 flex justify-center" data-astro-cid-ijnerlr2> <button class="px-8 py-3 bg-[#D80032] hover:bg-[#3D0C11] text-white font-medium rounded-md transition" id="load-more" data-astro-cid-ijnerlr2>
Load More
</button> </div> </div> <!-- Right sidebar for filters - 30% width --> <div class="lg:w-1/4" data-astro-cid-ijnerlr2> <div class="bg-gray-50 rounded-xl p-6 sticky top-24 border border-gray-200" data-astro-cid-ijnerlr2> <!-- Adjusted top value --> <h2 class="text-xl font-bold mb-6 border-b border-gray-200 pb-3 text-[#3D0C11]" data-astro-cid-ijnerlr2>
Topics
</h2> <div class="flex flex-col gap-3" data-astro-cid-ijnerlr2> <button class="bg-gray-200 text-[#3D0C11] px-4 py-2 rounded-md hover:bg-gray-300 transition flex justify-between items-center active topic-filter" data-category="all" id="filter-all" data-astro-cid-ijnerlr2> <span data-astro-cid-ijnerlr2>All Topics</span> <span class="text-xs bg-gray-100 px-2 py-1 rounded-full" data-astro-cid-ijnerlr2> ${blogPosts.length} </span> </button> ${topics.map((topic) => {
    let bgColor = "";
    if (topic === "Tutorials")
      bgColor = "bg-[#F78CA2] text-white";
    if (topic === "Industry Trends")
      bgColor = "bg-[#D80032] text-white";
    if (topic === "Case Studies")
      bgColor = "bg-[#3D0C11] text-white";
    if (topic === "Product Updates")
      bgColor = "bg-[#F78CA2] bg-opacity-50 text-[#3D0C11]";
    return renderTemplate`<button${addAttribute(`${bgColor} px-4 py-2 rounded-md hover:opacity-90 transition flex justify-between items-center topic-filter`, "class")}${addAttribute(topic, "data-category")} data-astro-cid-ijnerlr2> <span data-astro-cid-ijnerlr2>${topic}</span> <span class="text-xs bg-white bg-opacity-50 px-2 py-1 rounded-full text-[#3D0C11]" data-astro-cid-ijnerlr2> ${postCounts[topic] || 0} </span> </button>`;
  })} </div> </div> </div> </div> </div> </div>  <div id="blog-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden" data-astro-cid-ijnerlr2> <div class="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" data-astro-cid-ijnerlr2> <div class="p-6" data-astro-cid-ijnerlr2> <div class="flex justify-between items-center mb-4" data-astro-cid-ijnerlr2> <h2 id="modal-title" class="text-2xl font-bold text-[#3D0C11]" data-astro-cid-ijnerlr2></h2> <button id="close-modal" class="text-gray-500 hover:text-gray-700" data-astro-cid-ijnerlr2> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ijnerlr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-ijnerlr2></path> </svg> </button> </div> <div class="flex items-center text-sm text-gray-500 mb-6" data-astro-cid-ijnerlr2> <span id="modal-date" data-astro-cid-ijnerlr2></span> <span class="mx-2" data-astro-cid-ijnerlr2>•</span> <span id="modal-category" class="category-tag" data-astro-cid-ijnerlr2></span> <span class="mx-2" data-astro-cid-ijnerlr2>•</span> <span id="modal-author" data-astro-cid-ijnerlr2></span> </div> <div class="prose max-w-none" data-astro-cid-ijnerlr2> <div id="modal-content" class="text-gray-700" data-astro-cid-ijnerlr2></div> </div> </div> </div> </div> ` })} ${renderScript($$result, "D:/try/astro/src/pages/blog.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/try/astro/src/pages/blog.astro", void 0);

const $$file = "D:/try/astro/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
