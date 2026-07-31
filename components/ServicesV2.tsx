const services = [
  {
    title: "AI Workflow Automation",
    icon: "⚡",
    description:
      "Automate repetitive business processes using intelligent workflows built with n8n, Make and Zapier.",
  },
  {
    title: "AI Agents",
    icon: "🤖",
    description:
      "Deploy AI agents that answer questions, execute tasks and interact with your business systems.",
  },
  {
    title: "API Integrations",
    icon: "🔗",
    description:
      "Connect CRMs, payment gateways, Google Workspace and third-party platforms through APIs.",
  },
  {
    title: "AI Voice Assistants",
    icon: "🎙️",
    description:
      "Build AI receptionists that answer calls, qualify leads and support customers 24/7.",
  },
  {
    title: "Business Automation",
    icon: "📊",
    description:
      "Reduce manual work by automating approvals, notifications, reporting and daily operations.",
  },
  {
    title: "AI Consulting",
    icon: "🚀",
    description:
      "Identify automation opportunities and design AI strategies that improve efficiency and scalability.",
  },
];

export default function ServicesV2() {
  return (
    <section
      id="services"
      className="bg-[#08111f] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Services
          </p>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            AI Solutions Built Around Your Business
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            I help organisations automate operations, connect systems and deploy
            intelligent AI solutions that improve productivity and customer
            experience.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (

            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-[#111827] p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >

              <div className="text-5xl">
                {service.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {service.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}