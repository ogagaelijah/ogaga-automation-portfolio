export default function Technologies() {
  const technologies = [
    "OpenAI",
    "Claude",
    "n8n",
    "Make",
    "Zapier",
    "Airtable",
    "Supabase",
    "Google Workspace",
    "Next.js",
    "TypeScript",
    "GitHub",
    "Vercel",
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-32">

      <div className="text-center">

        <p className="font-semibold uppercase tracking-[0.25em] text-blue-400">
          Tech Ecosystem
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Powered by Industry-Leading AI & Automation Platforms
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          I carefully select the right combination of AI models, automation platforms,
cloud infrastructure, and development technologies to build solutions that
are reliable, scalable, secure, and designed for long-term growth.
        </p>

      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-5">

        {technologies.map((tech) => (

          <div
            key={tech}
            className="rounded-full border border-white/10 bg-slate-900 px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-slate-800 hover:shadow-lg"
          >
            {tech}
          </div>

        ))}

      </div>

    </section>
  );
}