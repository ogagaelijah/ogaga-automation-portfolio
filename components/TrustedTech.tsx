export default function TrustedTech() {
  const technologyGroups = [
    {
      title: "AI Models",
      items: ["OpenAI", "Claude", "Gemini"],
    },
    {
      title: "Automation Platforms",
      items: ["n8n", "Make", "Zapier"],
    },
    {
      title: "Databases",
      items: ["Supabase", "Airtable"],
    },
    {
      title: "Development",
      items: ["Next.js", "TypeScript", "GitHub", "Vercel"],
    },
    {
      title: "Integrations",
      items: ["REST APIs", "Webhooks", "Vapi", "Google Workspace"],
    },
  ];

  return (
    <section
      id="technologies"
      className="border-y border-white/10 bg-slate-950/40 py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}

        <div className="mb-20 text-center">

          <h2 className="text-4xl font-bold uppercase tracking-[0.35em] text-blue-400 md:text-5xl">
            Trusted AI & Automation Technologies
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-2xl font-semibold leading-relaxed text-white md:text-3xl">
            The Modern Technology Stack Behind Every Intelligent Solution I Build
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Every automation system is built with carefully selected AI models,
            automation platforms, cloud technologies, and integrations to ensure
            reliability, scalability, and long-term business value.
          </p>

          <div className="mx-auto mt-10 h-1 w-28 rounded-full bg-blue-500"></div>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {technologyGroups.map((group) => (

            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
            >

              <h3 className="mb-6 text-2xl font-bold text-white">
                {group.title}
              </h3>

              <ul className="space-y-4">

                {group.items.map((item) => (

                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="text-blue-400 text-xl">•</span>

                    <span className="font-medium">
                      {item}
                    </span>
                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}