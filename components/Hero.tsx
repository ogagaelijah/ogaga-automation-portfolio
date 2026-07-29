export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#08111f]"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 px-6 py-28 lg:flex-row">

        {/* LEFT CONTENT */}

        <div className="max-w-2xl">

          <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">
            🚀 AI Automation Specialist & Consultant
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-6xl">

            I Build AI Automation Systems That Help Businesses

            <span className="block text-blue-500">
              Scale Smarter.
            </span>

          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-300">

            I help businesses eliminate repetitive work, streamline operations,
            and improve productivity by building intelligent AI Agents,
            workflow automation systems, integrations, and business solutions
            powered by modern AI technologies.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30"
            >
              Book a Discovery Call
            </a>

            <a
              href="#case-studies"
              className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-blue-500 hover:bg-white/5"
            >
              Explore My Work
            </a>

          </div>

          <div className="mt-10">

            <p className="text-sm uppercase tracking-widest text-gray-500">
              Trusted Technologies
            </p>

            <p className="mt-3 text-gray-300 leading-8">
              OpenAI • n8n • Supabase • Vapi • Airtable • Make • Zapier •
              Google Workspace • REST APIs
            </p>

          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div className="grid gap-6">

          {/* Card 1 */}

          <div className="rounded-2xl border border-green-500/20 bg-slate-900 p-7 shadow-lg">

            <p className="text-sm uppercase tracking-wider text-gray-400">
              Availability
            </p>

            <h3 className="mt-3 text-2xl font-bold text-green-400">
              🟢 Available for Projects
            </h3>

            <p className="mt-3 text-gray-400">
              Currently accepting AI automation consulting and implementation
              projects.
            </p>

          </div>

          {/* Card 2 */}

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-7 shadow-lg">

            <p className="text-sm uppercase tracking-wider text-gray-400">
              Specialization
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              AI Automation
            </h3>

            <p className="mt-3 leading-8 text-gray-400">
              AI Agents<br />
              Workflow Automation<br />
              Business Integrations<br />
              Process Optimization
            </p>

          </div>

          {/* Card 3 */}

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-7 shadow-lg">

            <p className="text-sm uppercase tracking-wider text-gray-400">
              Core Technology Stack
            </p>

            <h3 className="mt-3 text-xl font-bold text-blue-400">
              n8n • OpenAI
            </h3>

            <p className="mt-3 leading-8 text-gray-400">
              Supabase • Vapi • Make • Zapier • Airtable • APIs
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}