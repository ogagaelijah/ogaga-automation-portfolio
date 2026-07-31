const reasons = [
  {
    title: "Business-First Thinking",
    icon: "💼",
    description:
      "I focus on solving real business problems, not just building automations. Every workflow is designed to improve efficiency and create measurable value.",
  },
  {
    title: "Modern AI Stack",
    icon: "🤖",
    description:
      "I build with OpenAI, Claude, n8n, Make, Zapier, Airtable, Vapi and modern APIs to create scalable automation systems.",
  },
  {
    title: "End-to-End Delivery",
    icon: "⚙️",
    description:
      "From discovery and process mapping to deployment and support, I manage the complete automation journey.",
  },
  {
    title: "Scalable Solutions",
    icon: "📈",
    description:
      "Every solution is built with future growth in mind so your systems can evolve alongside your business.",
  },
];

export default function WhyChooseMeV2() {
  return (
    <section
      id="why-me"
      className="bg-[#050816] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Why Work With Me
          </p>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Building AI That Delivers Business Value
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            I combine technical expertise with a business mindset to deliver
            AI automation solutions that save time, reduce costs and improve
            customer experiences.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {reasons.map((reason) => (

            <div
              key={reason.title}
              className="rounded-3xl border border-white/10 bg-[#08111f] p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >

              <div className="text-5xl">
                {reason.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {reason.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                {reason.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}