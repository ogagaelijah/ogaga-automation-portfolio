export default function CaseStudies() {
  const projects = [
    {
      title: "AI Knowledge Agent",
      industry: "Business Operations",
      problem:
        "Employees wasted hours searching through documents, SOPs, and PDFs for internal information.",
      solution:
        "Built an AI-powered knowledge assistant capable of answering questions instantly using company documents.",
      results: [
        "Instant document search",
        "Reduced repetitive questions",
        "Improved employee productivity",
      ],
      technologies: "OpenAI • n8n • Supabase",
    },

    {
      title: "HR Automation System",
      industry: "Human Resources",
      problem:
        "Recruitment, onboarding, and employee records were managed manually.",
      solution:
        "Designed an automated HR workflow for recruitment, onboarding, approvals, and employee lifecycle management.",
      results: [
        "Faster onboarding",
        "Automated approvals",
        "Centralized employee records",
      ],
      technologies: "n8n • Airtable • Gmail",
    },

    {
      title: "Estate Management Automation",
      industry: "Real Estate",
      problem:
        "Resident registration and visitor management relied on manual processes.",
      solution:
        "Developed a digital workflow for resident registration, visitor approvals, payment tracking, and estate operations.",
      results: [
        "Improved security",
        "Digital resident records",
        "Faster visitor approvals",
      ],
      technologies: "n8n • Airtable • Paystack",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <div className="text-center">
        <p className="font-semibold uppercase tracking-[0.25em] text-blue-400">
          Case Studies
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Real AI Solutions for Real Businesses
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
          Here are some examples of how I design intelligent automation systems
          that solve operational challenges and improve business performance.
        </p>
      </div>

      <div className="mt-16 space-y-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-3xl border border-white/10 bg-slate-900 p-10"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-blue-400 font-semibold">
                  {project.industry}
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  {project.title}
                </h3>

                <div className="mt-8 space-y-6">
                  <div>
                    <h4 className="font-semibold text-white">
                      Challenge
                    </h4>

                    <p className="mt-2 text-gray-400">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      Solution
                    </h4>

                    <p className="mt-2 text-gray-400">
                      {project.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      Business Impact
                    </h4>

                    <ul className="mt-2 space-y-2 text-gray-400">
                      {project.results.map((item) => (
                        <li key={item}>✓ {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-800 p-6 lg:w-72">
                <p className="text-sm uppercase tracking-widest text-blue-400">
                  Technologies
                </p>

                <p className="mt-4 text-lg font-semibold">
                  {project.technologies}
                </p>

                <button className="mt-10 w-full rounded-xl bg-blue-600 py-3 font-semibold transition hover:bg-blue-700">
                  View Workflow
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}