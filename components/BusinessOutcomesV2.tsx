const outcomes = [
  {
    title: "Reduce Manual Work",
    icon: "⚡",
    description:
      "Automate repetitive processes so your team can focus on high-value activities instead of routine tasks.",
  },
  {
    title: "Increase Productivity",
    icon: "📈",
    description:
      "Connect your business systems and eliminate bottlenecks to improve operational efficiency.",
  },
  {
    title: "Lower Operating Costs",
    icon: "💰",
    description:
      "Reduce human error, repetitive labour and unnecessary software switching through intelligent automation.",
  },
  {
    title: "Deliver Better Customer Experiences",
    icon: "😊",
    description:
      "Respond faster with AI assistants, automated notifications and streamlined customer journeys.",
  },
  {
    title: "Scale Your Business",
    icon: "🚀",
    description:
      "Build automation systems that grow with your organisation without increasing operational complexity.",
  },
  {
    title: "Data-Driven Decisions",
    icon: "📊",
    description:
      "Centralise business data and generate insights that support faster, smarter decision-making.",
  },
];

export default function BusinessOutcomesV2() {
  return (
    <section
      className="bg-[#050816] py-28"
      id="business-outcomes"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Business Outcomes
          </p>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            The Results Your Business Can Expect
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Every automation project is designed to create measurable business
            impact—not just implement technology.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {outcomes.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-[#08111f] p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
            >

              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}