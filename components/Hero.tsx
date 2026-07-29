export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#08111f]"
    >
      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 py-32 lg:flex-row lg:justify-between">

        {/* LEFT SIDE */}

        <div className="max-w-2xl">

          <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">
            🚀 AI Automation Specialist & Consultant
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">

            I Build Intelligent

            <span className="block text-blue-500">
              AI Automation Systems
            </span>

            <span className="block">
              That Help Businesses Scale Smarter.
            </span>

          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-300">

            I help businesses eliminate repetitive work, automate
            operations, integrate business applications, and deploy
            intelligent AI systems that improve productivity,
            reduce operating costs, and create exceptional customer
            experiences.

          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
            >
              Book a Discovery Call
            </a>

            <a
              href="#case-studies"
              className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition duration-300 hover:border-blue-500 hover:bg-white/5"
            >
              Explore My Work
            </a>

          </div>

          <div className="mt-14">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
              Trusted Technologies
            </p>

            <p className="mt-5 leading-9 text-gray-300">

              OpenAI • Claude • n8n • Make • Zapier • Airtable •
              Supabase • Vapi • Google Workspace • REST APIs

            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="grid w-full max-w-md gap-6">

          {/* CARD 1 */}

          <div className="rounded-3xl border border-green-500/20 bg-slate-900 p-8 shadow-xl">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
              Availability
            </p>

            <h3 className="mt-4 text-2xl font-bold text-green-400">
              🟢 Available for Projects
            </h3>

            <p className="mt-4 leading-8 text-gray-400">

              Currently accepting AI automation consulting,
              workflow implementation,
              AI integrations,
              and intelligent business system projects.

            </p>

          </div>
                    {/* CARD 2 */}

          <div className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-xl">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
              Specialization
            </p>

            <h3 className="mt-4 text-2xl font-bold text-white">
              AI Automation Solutions
            </h3>

            <ul className="mt-6 space-y-4 text-gray-300">

              <li className="font-semibold text-white">
                • AI Agents
              </li>

              <li className="font-semibold text-white">
                • Workflow Automation
              </li>

              <li className="font-semibold text-white">
                • API Integrations
              </li>

              <li className="font-semibold text-white">
                • Business Process Optimization
              </li>

              <li className="font-semibold text-white">
                • AI Voice Assistants
              </li>

            </ul>

          </div>

          {/* CARD 3 */}

          <div className="rounded-3xl border border-blue-500/20 bg-slate-900 p-8 shadow-xl">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
              What You Gain
            </p>

            <h3 className="mt-4 text-2xl font-bold text-blue-400">
              Business Results
            </h3>

            <ul className="mt-6 space-y-4 text-gray-300">

              <li>✓ Less manual work</li>

              <li>✓ Faster business operations</li>

              <li>✓ Reduced operating costs</li>

              <li>✓ Better customer experience</li>

              <li>✓ Scalable AI systems</li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}