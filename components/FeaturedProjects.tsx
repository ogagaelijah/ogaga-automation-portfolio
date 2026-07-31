const projects = [
  {
    title: "Hyperlog Fitness Centre",
    category: "Membership Automation",
    challenge:
      "Managing registrations and membership renewals manually.",
    solution:
      "Built an automated registration workflow with Airtable, reminders and payment tracking.",
    tech: ["n8n", "Airtable", "Forms"],
    result: "Reduced manual registration work and automated membership tracking.",
    icon: "🏋️",
  },

  {
    title: "Restaurant AI Assistant",
    category: "Voice AI",
    challenge:
      "Restaurant staff missed calls during busy hours.",
    solution:
      "Created an AI receptionist capable of answering calls, taking reservations and handling customer enquiries.",
    tech: ["OpenAI", "Vapi", "n8n"],
    result: "24/7 customer support with faster response time.",
    icon: "🍽️",
  },

  {
    title: "Student Registration Platform",
    category: "Education",
    challenge:
      "Manual registration and payment confirmation.",
    solution:
      "Connected Paystack, Google Workspace and automated email delivery.",
    tech: ["Paystack", "n8n", "Google Workspace"],
    result: "Fully automated onboarding experience.",
    icon: "🎓",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      className="bg-[#050816] py-32"
      id="featured-projects"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-blue-400 font-semibold">
            Featured Projects
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Real AI Solutions.
            <span className="block text-blue-500">
              Real Business Results.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Every project below solves a genuine business problem using
            intelligent automation and AI.
          </p>

        </div>

        <div className="mt-20 space-y-10">

          {projects.map((project) => (

            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-[#08111f] p-10 transition duration-300 hover:border-blue-500"
            >

              <div className="grid gap-10 lg:grid-cols-2">

                <div>

                  <div className="text-6xl">
                    {project.icon}
                  </div>

                  <p className="mt-5 uppercase tracking-[0.25em] text-blue-400 text-sm">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                  <div className="mt-8">

                    <h4 className="font-semibold text-white">
                      Challenge
                    </h4>

                    <p className="mt-2 text-gray-400 leading-8">
                      {project.challenge}
                    </p>

                  </div>

                  <div className="mt-8">

                    <h4 className="font-semibold text-white">
                      Solution
                    </h4>

                    <p className="mt-2 text-gray-400 leading-8">
                      {project.solution}
                    </p>

                  </div>

                </div>

                <div>

                  <div className="rounded-2xl border border-dashed border-blue-500/30 bg-[#111827] p-12 text-center">

                    <p className="text-gray-500">
                      Workflow Screenshot
                    </p>

                    <p className="mt-4 text-sm text-gray-600">
                      (We'll replace this with your actual workflow image.)
                    </p>

                  </div>

                  <div className="mt-8">

                    <h4 className="font-semibold text-white">
                      Technology Used
                    </h4>

                    <div className="mt-4 flex flex-wrap gap-3">

                      {project.tech.map((tool) => (

                        <span
                          key={tool}
                          className="rounded-full bg-blue-600/10 px-4 py-2 text-blue-300"
                        >
                          {tool}
                        </span>

                      ))}

                    </div>

                  </div>

                  <div className="mt-8 rounded-xl bg-blue-600/10 p-6">

                    <h4 className="font-semibold text-blue-300">
                      Business Impact
                    </h4>

                    <p className="mt-3 leading-8 text-gray-300">
                      {project.result}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}