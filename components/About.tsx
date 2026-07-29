export default function About() {
  return (
    <section
      id="about"
      className="bg-[#050816] py-24 px-6 lg:px-12 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}

        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            About Me
          </p>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white">
            Building AI Systems That Help Businesses Work Smarter
          </h2>

          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <div>

            <h3 className="text-3xl font-bold text-white mb-6">
              Hi, I'm Ogaga Elijah.
            </h3>

            <p className="text-gray-400 text-lg leading-8 mb-6">
              I design practical AI automation systems that eliminate repetitive
              work, improve business operations, and help organizations become
              more efficient. My focus is not just on using AI, but on solving
              real business problems with intelligent workflows that save time,
              reduce errors, and increase productivity.
            </p>

            <p className="text-gray-400 text-lg leading-8 mb-6">
              I build solutions using modern automation platforms such as n8n,
              Make, Zapier, and AI models including ChatGPT, Claude, Gemini,
              and Perplexity. From customer support assistants and automated
              onboarding systems to business process automation, I create
              solutions that allow teams to focus on higher-value work.
            </p>

            <p className="text-gray-400 text-lg leading-8">
              Every project I build begins with one question:
              <span className="font-semibold text-white">
                {" "}
                "How can AI remove unnecessary manual work while improving the
                customer experience?"
              </span>
              {" "}That philosophy drives every automation system in this portfolio.
            </p>

          </div>

          {/* Right */}

          <div className="rounded-3xl border border-white/10 bg-slate-900 p-10 shadow-xl">

            <h3 className="mb-8 text-2xl font-bold text-white">
              What I Help Businesses Achieve
            </h3>

            <div className="space-y-8">

              <div className="flex gap-4">
                <div className="text-3xl">⚡</div>

                <div>
                  <h4 className="text-lg font-semibold text-white">
                    AI Workflow Automation
                  </h4>

                  <p className="text-gray-400">
                    Replace repetitive manual tasks with intelligent automated workflows.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">🤖</div>

                <div>
                  <h4 className="text-lg font-semibold text-white">
                    AI Assistants
                  </h4>

                  <p className="text-gray-400">
                    Build AI-powered assistants for customer support, operations, and internal teams.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">📊</div>

                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Business Process Optimization
                  </h4>

                  <p className="text-gray-400">
                    Connect tools, eliminate bottlenecks, and streamline everyday operations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">🚀</div>

                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Scalable Solutions
                  </h4>

                  <p className="text-gray-400">
                    Design automation systems that grow with your business.
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