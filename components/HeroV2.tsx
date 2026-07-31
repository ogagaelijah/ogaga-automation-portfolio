"use client";

import Image from "next/image";

export default function HeroV2() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#050816] py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">
            🚀 AI Automation Specialist & Consultant
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
            Helping Businesses
            <span className="block text-blue-500">
              Eliminate Manual Work
            </span>
            <span className="block">
              With Intelligent AI Automation
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-300">
            I design AI-powered automation systems that streamline business
            operations, connect applications, automate repetitive work and
            improve customer experiences.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-xl shadow-blue-600/30 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Book a Free Consultation
            </a>

            <a
              href="#case-studies"
              className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-blue-500 hover:bg-white/5"
            >
              Explore My Work
            </a>

          </div>

          <div className="mt-12 flex flex-wrap gap-3">

            {[
              "AI Agents",
              "Workflow Automation",
              "Voice AI",
              "API Integrations",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex flex-col items-center">

          <div className="overflow-hidden rounded-full border-4 border-blue-500/30 shadow-2xl shadow-blue-600/30">

            <Image
              src="/images/ogaga-elijah.jpg"
              alt="Ogaga Elijah"
              width={420}
              height={420}
              priority
              className="h-[420px] w-[420px] object-cover"
            />

          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-[#08111f] p-6">

            <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
              Trusted Technologies
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-3">

              {[
                "OpenAI",
                "Claude",
                "n8n",
                "Make",
                "Zapier",
                "Vapi",
                "Airtable",
                "REST APIs",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-300"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* METRICS */}

      <div className="mx-auto mt-24 max-w-7xl px-6">

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-[#08111f] p-8 text-center">

            <h3 className="text-5xl font-extrabold text-blue-500">
              5+
            </h3>

            <p className="mt-4 text-lg font-semibold text-white">
              Automation Systems
            </p>

            <p className="mt-2 text-gray-400">
              Intelligent workflow solutions delivered.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-[#08111f] p-8 text-center">

            <h3 className="text-5xl font-extrabold text-blue-500">
              10+
            </h3>

            <p className="mt-4 text-lg font-semibold text-white">
              AI & Automation Tools
            </p>

            <p className="mt-2 text-gray-400">
              Modern platforms used to build AI solutions.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-[#08111f] p-8 text-center">

            <h3 className="text-5xl font-extrabold text-blue-500">
              100+
            </h3>

            <p className="mt-4 text-lg font-semibold text-white">
              Hours of Development
            </p>

            <p className="mt-2 text-gray-400">
              Building AI systems and business automations.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}