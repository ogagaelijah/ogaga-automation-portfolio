const caseStudies = [
  {
    title: "Hyperlog Fitness Centre",
    category: "Membership Automation",
    result: "Automated member registration, plan tracking and expiry reminders.",
    tech: "n8n • Airtable • Forms • Email",
    icon: "🏋️",
  },
  {
    title: "Restaurant AI Assistant",
    category: "Voice AI",
    result: "Built an AI assistant to answer calls, handle reservations and capture customer orders.",
    tech: "Vapi • OpenAI • n8n • Airtable",
    icon: "🍽️",
  },
  {
    title: "Student Registration System",
    category: "Education Automation",
    result: "Automated student registration, payment confirmation and course delivery.",
    tech: "Paystack • n8n • Gmail • Google Sheets",
    icon: "🎓",
  },
  {
    title: "Estate Management Workflow",
    category: "Property Automation",
    result: "Resident registration, visitor tracking and security payment workflow.",
    tech: "Forms • n8n • Airtable",
    icon: "🏡",
  },
  {
    title: "AI Voice Receptionist",
    category: "Customer Support",
    result: "24/7 AI receptionist capable of answering enquiries and routing customers.",
    tech: "OpenAI • Vapi • APIs",
    icon: "📞",
  },
  {
    title: "Business Process Automation",
    category: "Operations",
    result: "Connected multiple business applications to eliminate repetitive manual work.",
    tech: "n8n • Make • Zapier • APIs",
    icon: "⚙️",
  },
];

export default function CaseStudiesV2() {
  return (
    <section
      id="case-studies"
      className="bg-[#08111f] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Case Studies
          </p>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            AI Solutions Built for Real Business Problems
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Here are some of the AI automation systems I have designed to help
            businesses streamline operations, improve customer experiences and
            reduce manual work.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {caseStudies.map((project) => (

            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-[#111827] p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
            >

              <div className="text-5xl">
                {project.icon}
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                {project.category}
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                {project.result}
              </p>

              <div className="mt-6 rounded-xl bg-[#050816] p-4">

                <p className="text-sm font-semibold text-gray-300">
                  Technology Used
                </p>

                <p className="mt-2 text-blue-300">
                  {project.tech}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}