// src/components/HowItWorks.jsx
export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description:
        "Create your account in just a few clicks and get started right away.",
    },
    {
      number: "02",
      title: "Configure",
      description:
        "Set up your workspace and customize it to fit your specific needs.",
    },
    {
      number: "03",
      title: "Integrate",
      description:
        "Connect with your existing tools and import your data seamlessly.",
    },
    {
      number: "04",
      title: "Launch",
      description:
        "Go live with your new solution and start seeing results immediately.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Get up and running in just four simple steps.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg mb-4 mx-auto relative z-10">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-medium text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
