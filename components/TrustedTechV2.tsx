export default function TrustedTechV2() {
  const technologies = [
    "OpenAI",
    "Claude",
    "Gemini",
    "Perplexity",
    "n8n",
    "Make",
    "Zapier",
    "Vapi",
    "Airtable",
    "Supabase",
    "Google Workspace",
    "REST APIs",
  ];

  return (
    <section
      id="technologies"
      className="border-y border-white/10 bg-[#08111f] py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Trusted AI & Automation Stack
          </p>

          <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl">
            Building Intelligent Systems With Industry-Leading Technologies
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Every automation solution is built with reliable AI models,
            modern workflow platforms and scalable cloud technologies.
          </p>

        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-4">

          {technologies.map((tech) => (
            <div
              key={tech}
              className="rounded-2xl border border-white/10 bg-[#111827] px-6 py-4 font-semibold text-gray-200 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600/10 hover:text-blue-300"
            >
              {tech}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}