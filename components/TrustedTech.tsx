export default function TrustedTech() {
  const tech = [
    "OpenAI",
    "Claude",
    "n8n",
    "Make",
    "Zapier",
    "Airtable",
    "Supabase",
    "Next.js",
    "Vercel",
    "GitHub",
  ];

  return (
    <section className="border-y border-white/10 bg-slate-950/40 py-10">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
          Trusted AI & Automation Technologies
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          {tech.map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/10 bg-slate-900 px-6 py-3 text-sm font-semibold text-gray-300 transition duration-300 hover:border-blue-500 hover:text-white"
            >
              {item}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}