// src/components/Testimonials.jsx
export default function Testimonials() {
  const testimonials = [
    {
      content:
        "This platform has transformed how we operate. The efficiency gains have been tremendous.",
      author: "Jane Smith",
      position: "CEO, TechCorp",
    },
    {
      content:
        "The analytics capabilities alone made this worth every penny. We've gained insights we never had before.",
      author: "Michael Johnson",
      position: "CMO, Marketing Pros",
    },
    {
      content:
        "Customer support is exceptional. Any questions we had were answered promptly and thoroughly.",
      author: "Sarah Williams",
      position: "Operations Director, GlobalServe",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied
            customers.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author[0]}
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
