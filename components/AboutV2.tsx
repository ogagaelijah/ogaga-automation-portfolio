export default function AboutV2() {
  const highlights = [
    {
      title: "AI Workflow Automation",
      description:
        "Automate repetitive business processes with intelligent workflows that reduce manual effort and improve efficiency.",
      icon: "⚡",
    },
    {
      title: "AI Assistants",
      description:
        "Deploy AI-powered assistants for customer support, operations, HR, education and internal teams.",
      icon: "🤖",
    },
    {
      title: "System Integrations",
      description:
        "Connect your business applications using APIs so data flows automatically between platforms.",
      icon: "🔗",
    },
    {
      title: "Business Growth",
      description:
        "Build automation systems that scale with your business and free your team to focus on high-value work.",
      icon: "📈",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#050816] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            About Me
          </p>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Building AI Systems That Help Businesses Scale Smarter
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-400">
            I help businesses eliminate repetitive work through intelligent AI
            automation, workflow design and system integration. My goal is to
            build practical AI solutions that improve productivity, reduce
            operating costs and create better customer experiences.
          </p>

        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-[#08111f] p-10">

            <h3 className="text-3xl font-bold text-white">
              My Approach
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              Every automation project begins by understanding how a business
              operates today. I identify repetitive tasks, bottlenecks and
              opportunities where AI can deliver measurable improvements.
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              From AI voice assistants and workflow automation to business
              process optimisation and API integrations, I build solutions that
              are reliable, scalable and focused on solving real business
              problems.
            </p>

            <div className="mt-10 rounded-2xl border border-blue-500/20 bg-blue-600/10 p-6">

              <p className="text-lg font-semibold text-blue-300">
                "AI should remove unnecessary work so people can focus on what
                matters most."
              </p>

            </div>

          </div>

          <div className="grid gap-6">

            {highlights.map((item) => (

              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-[#08111f] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500"
              >

                <div className="text-4xl">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}