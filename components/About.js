import Services from "./Services";

export default function About() {
  return (
    <div className="min-h-screen bg-transparent">
      <main className="isolate">
        <div id="about" className="bg-white pb-20 pt-24 sm:pb-28 sm:pt-32">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#fbe7e0] px-4 py-1.5 text-sm font-medium text-[#d87d6b]">
                About Me
              </p>
              <h1 className="font-playfair mt-8 text-5xl font-bold leading-tight tracking-[-0.02em] text-gray-900 sm:text-6xl lg:text-7xl">
                Hi,
                <br />
                I&apos;m Sahil Gupta
              </h1>
              <p className="mx-auto mt-8 max-w-[40rem] text-lg leading-8 text-gray-600">
                I am particularly drawn to opportunities that enable me to apply
                my software engineering expertise to impactful, forward-thinking
                projects. I thrive in collaborative, cross-functional
                environments where I can contribute to building robust,
                scalable, and innovative software solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden bg-white pb-32 pt-24">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-[#fbe7e0] px-4 py-1.5 text-sm font-medium text-[#d87d6b]">
                  My Vision
                </p>
                <h2 className="font-playfair text-4xl font-bold tracking-[-0.02em] text-gray-900 sm:text-5xl">
                  Empowering Through Technology
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  My vision is to combine technical excellence with leadership
                  and collaboration. I aspire to build software that connects
                  people, grow through meaningful networking, and take the
                  spotlight in opportunities that challenge me to innovate,
                  inspire, and lead.
                </p>
              </div>
              <div>
                <div className="relative">
                  <img
                    id="my-photo"
                    src="/sahil_ph.jpg"
                    alt="Sahil Gupta"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Services />

        <div className="relative mx-auto max-w-[1280px] px-6 py-16">
          <div
            className="relative overflow-hidden rounded-[1.875rem] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-12 py-24 shadow-[0_25px_50px_rgba(0,0,0,0.25)]"
            id="contact"
          >
            <div className="relative z-[1]">
              <h2 className="font-playfair mb-6 text-3xl font-bold text-white">
                Let&apos;s Build the Future Together
              </h2>
              <p className="mb-8 text-base leading-7 text-gray-300">
                I&apos;m driven to craft engaging and meaningful web experiences
                that inspire and connect people. Join me as I continue to explore,
                create, and innovate in the tech world.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:sahilgupta70500@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-3.5 text-base font-semibold text-gray-900 no-underline shadow-[0_10px_15px_rgba(0,0,0,0.1)] transition-all duration-200 hover:scale-105 hover:bg-gray-50"
                >
                  Get Started
                  <svg
                    className="ml-1.5 inline h-4 w-4 align-middle"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/sahilgupta123"
                  className="inline-flex items-center justify-center gap-2 text-base font-semibold text-white no-underline transition-colors duration-200 hover:text-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
                <a
                  href="https://github.com/sahilgupta721"
                  className="inline-flex items-center justify-center gap-2 text-base font-semibold text-white no-underline transition-colors duration-200 hover:text-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View my Work <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-20 -top-20 z-0 h-80 w-80 rounded-full bg-[rgba(216,125,107,0.1)] blur-[3rem]"></div>
          <div className="pointer-events-none absolute -bottom-20 -left-20 z-0 h-80 w-80 rounded-full bg-[rgba(38,164,221,0.1)] blur-[3rem]"></div>
        </div>
      </main>
    </div>
  );
}
