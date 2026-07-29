export default function About() {
  return (
    <section
      id="about"
      className="bg-[#050816] py-36 px-6 lg:px-12 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}

        <div className="mb-24 text-center">

          <h2 className="text-4xl font-bold uppercase tracking-[0.35em] text-blue-400 md:text-5xl">
            About Me
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-2xl font-semibold leading-relaxed text-white md:text-3xl">
            Building AI Systems That Help Businesses Work Smarter
          </p>

          <div className="mx-auto mt-10 h-1 w-28 rounded-full bg-blue-500"></div>

        </div>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <div>

            <h3 className="mb-8 text-3xl font-bold text-white">
              Hi, I am Ogaga Elijah.
            </h3>

            <p className="mb-8 text-lg leading-9 text-gray-400">
              I design practical AI automation systems that eliminate repetitive
              work, improve business operations, and help organizations become
              more efficient. My focus is not just on using AI, but on solving
              real business problems with intelligent workflows that save time,
              reduce errors, and increase productivity.
            </p>

            <p className="mb-8 text-lg leading-9 text-gray-400">
              I build solutions using modern automation platforms such as n8n,
              Make, Zapier, and AI models including ChatGPT, Claude, Gemini,
              and Perplexity. From customer support assistants and automated
              onboarding systems to business process automation, I create
              solutions that allow teams to focus on higher-value work.
            </p>

            <p className="text-lg leading-9 text-gray-400">
              Every project I build begins with one question:

              <span className="font-semibold text-white">
                {" "}
                "How can AI remove unnecessary manual work while improving the
                customer experience?"
              </span>

              {" "}
              That philosophy drives every automation system in this portfolio.
            </p>

          </div>

          {/* Right */}

          <div className="rounded-3xl border border-white/10 bg-slate-900 p-12 shadow-2xl transition duration-300 hover:border-blue-500">

            <h3 className="mb-10 text-3xl font-bold text-white">
              What I Help Businesses Achieve
            </h3>

            <div className="space-y-10">

              <div className="flex gap-5">

                <div className="text-4xl">
                  ⚡
                </div>

                <div>

                  <h4 className="text-xl font-semibold text-white">
                    AI Workflow Automation
                  </h4>

                  <p className="mt-2 leading-8 text-gray-400">
                    Replace repetitive manual tasks with intelligent automated
                    workflows that save time and reduce operational costs.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="text-4xl">
                  🤖
                </div>

                <div>

                  <h4 className="text-xl font-semibold text-white">
                    AI Assistants
                  </h4>

                  <p className="mt-2 leading-8 text-gray-400">
                    Build AI-powered assistants for customer support,
                    operations, and internal business teams.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="text-4xl">
                  📊
                </div>

                <div>

                  <h4 className="text-xl font-semibold text-white">
                    Business Process Optimization
                  </h4>

                  <p className="mt-2 leading-8 text-gray-400">
                    Connect systems, eliminate bottlenecks, and streamline
                    everyday business operations.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="text-4xl">
                  🚀
                </div>

                <div>

                  <h4 className="text-xl font-semibold text-white">
                    Scalable Solutions
                  </h4>

                  <p className="mt-2 leading-8 text-gray-400">
                    Design intelligent automation systems that grow alongside
                    your business.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}