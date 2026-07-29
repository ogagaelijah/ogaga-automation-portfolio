export default function Solutions() {
  const solutions = [
    {
      title: "AI Knowledge Agents",
      description:
        "Intelligent AI assistants trained on your business documents, SOPs, websites, and internal knowledge.",
    },
    {
      title: "Workflow Automation",
      description:
        "Automate repetitive tasks, approvals, notifications, and business operations using AI-powered workflows.",
    },
    {
      title: "HR Automation",
      description:
        "Recruitment, onboarding, leave management, employee records, and approval workflows.",
    },
    {
      title: "Education Automation",
      description:
        "Student registration, payments, attendance tracking, and learning management automation.",
    },
    {
      title: "Estate Automation",
      description:
        "Resident registration, visitor management, security workflows, and estate operations.",
    },
    {
      title: "Finance Automation",
      description:
        "Paystack, Flutterwave, invoicing, payment verification, and financial reporting.",
    },
    {
      title: "Restaurant AI",
      description:
        "Voice AI, reservations, ordering systems, menu assistants, and customer support automation.",
    },
    {
      title: "Business Intelligence",
      description:
        "Executive dashboards, KPI tracking, reporting, analytics, and business insights.",
    },
  ];

  return (
    <section id="services" className="bg-[#050816] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            Solutions
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Solutions Designed Around Your Business
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto leading-8">
            Every organization has unique operational challenges. I design
            tailored AI and automation solutions that streamline processes,
            improve efficiency, reduce costs, and help teams achieve more with
            less effort.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-4">
                {solution.title}
              </h3>

              <p className="text-slate-400 leading-7">
                {solution.description}
              </p>

              <button className="mt-6 text-blue-400 hover:text-blue-300 font-semibold">
                Learn More →
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}