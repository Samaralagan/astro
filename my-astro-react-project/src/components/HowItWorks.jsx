// src/components/HowItWorks.jsx
import parjoin from "../assets/parjoin.jpg";
export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title:
        "Gather everyone into your virtual conference using your existing meeting tool (eg. Zoom or Skype).",
    },
    {
      number: "2",
      title:
        "Pick a Brightful meeting game to host. No signup or download required.",
    },
    {
      number: "3",
      title:
        "Share the invitation to your team and you're good to go. Enjoy the game!",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          HOW IT WORKS
        </h2>

        <div className="flex flex-col xl:flex-row items-center">
          {/* Left side - Steps */}
          <div className="w-full xl:w-2/5 mb-8 xl:mb-0">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-gray-800 text-white w-8 h-8 flex items-center justify-center font-bold rounded-sm mr-4 flex-shrink-0">
                    {step.number}
                  </div>
                  <p className="text-gray-800">{step.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual representation */}
          <div className="w-full xl:w-3/5">
            {/* For mobile and tablet (including iPad Pro) - vertical layout */}
            <div className="flex flex-col items-center justify-center xl:hidden">
              {/* First item - Video conferencing */}
              <div className="text-center mb-4">
                <div className="bg-white shadow-md rounded-md p-4 w-48 h-48 flex items-center justify-center mx-auto">
                  <div>
                    <img
                      src={parjoin.src}
                      alt="Video conference screen"
                      className="mx-auto"
                      style={{ width: "100px" }}
                    />
                    <p className="mt-4 font-medium">
                      Your video conferencing tool
                    </p>
                  </div>
                </div>
              </div>

              {/* Plus sign */}
              <div className="mb-4">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                  <span className="text-2xl font-bold text-black">+</span>
                </div>
              </div>

              {/* Second item - Brightful */}
              <div className="text-center mb-4">
                <div className="bg-white shadow-md rounded-md p-4 w-48 h-48 flex items-center justify-center mx-auto">
                  <div>
                    <img
                      src={parjoin.src}
                      alt="Phone with game interface"
                      className="mx-auto"
                      style={{ width: "100px" }}
                    />
                    <p className="mt-4 font-medium">Brightful Meeting Games</p>
                  </div>
                </div>
              </div>

              {/* Equals sign */}
              <div className="mb-4">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                  <span className="text-2xl font-bold text-black">=</span>
                </div>
              </div>

              {/* Third item - Result */}
              <div className="text-center">
                <div className="bg-blue-100 shadow-md rounded-md p-4 w-48 h-48 flex items-center justify-center mx-auto">
                  <div>
                    <img
                      src={parjoin.src}
                      alt="People collaborating"
                      className="mx-auto"
                      style={{ width: "100px" }}
                    />
                    <p className="mt-4 font-medium">
                      Everyone's having a great time!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* For desktop (1280px and above) - horizontal layout */}
            <div className="hidden xl:flex xl:flex-row items-center justify-center">
              {/* First item - Video conferencing */}
              <div className="text-center">
                <div className="bg-white shadow-md rounded-md p-4 w-48 h-48 flex items-center justify-center mx-auto">
                  <div>
                    <img
                      src={parjoin.src}
                      alt="Video conference screen"
                      className="mx-auto"
                      style={{ width: "100px" }}
                    />
                    <p className="mt-4 font-medium">
                      Your video conferencing tool
                    </p>
                  </div>
                </div>
              </div>

              {/* Plus sign */}
              <div className="mx-4">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                  <span className="text-2xl font-bold text-black">+</span>
                </div>
              </div>

              {/* Second item - Brightful */}
              <div className="text-center">
                <div className="bg-white shadow-md rounded-md p-4 w-48 h-48 flex items-center justify-center mx-auto">
                  <div>
                    <img
                      src={parjoin.src}
                      alt="Phone with game interface"
                      className="mx-auto"
                      style={{ width: "100px" }}
                    />
                    <p className="mt-4 font-medium">Brightful Meeting Games</p>
                  </div>
                </div>
              </div>

              {/* Equals sign */}
              <div className="mx-4">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                  <span className="text-2xl font-bold text-black">=</span>
                </div>
              </div>

              {/* Third item - Result */}
              <div className="text-center">
                <div className="bg-blue-100 shadow-md rounded-md p-4 w-48 h-48 flex items-center justify-center mx-auto">
                  <div>
                    <img
                      src={parjoin.src}
                      alt="People collaborating"
                      className="mx-auto"
                      style={{ width: "100px" }}
                    />
                    <p className="mt-4 font-medium">
                      Everyone's having a great time!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
