export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#08111f]">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 px-6 py-24 lg:flex-row">

        {/* LEFT SIDE */}
        <div className="max-w-2xl">

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            AI Automation Specialist
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-6xl">
            I Build Intelligent AI Systems That Save Businesses
            <span className="text-blue-500"> Time, Money & Effort.</span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-300">
            I help businesses automate repetitive tasks using AI Agents,
            workflow automation, chatbots, APIs, CRMs and custom business
            systems built with modern automation tools.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Book a Free Call
            </a>

            <a
              href="#case-studies"
              className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-blue-500 hover:bg-white/5"
            >
              View Projects
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="grid gap-6">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">

            <p className="text-sm text-gray-400">
              AI Agent
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              Online
            </h3>

            <div className="mt-4 h-2 rounded-full bg-gray-700">
              <div className="h-2 w-full rounded-full bg-green-500"></div>
            </div>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">

            <p className="text-sm text-gray-400">
              Automations Built
            </p>

            <h3 className="mt-2 text-4xl font-bold text-blue-400">
              25+
            </h3>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">

            <p className="text-sm text-gray-400">
              Technologies
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              n8n • OpenAI • APIs • Vapi • Make • Zapier
            </h3>

          </div>

        </div>

      </div>
    </section>
  );
}