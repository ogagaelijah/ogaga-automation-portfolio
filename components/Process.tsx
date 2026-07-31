const steps = [
  {
    title: "Discovery",
    description:
      "Understand your business, processes and automation opportunities.",
  },
  {
    title: "Process Mapping",
    description:
      "Map existing workflows and identify bottlenecks.",
  },
  {
    title: "Solution Design",
    description:
      "Design intelligent AI workflows and system integrations.",
  },
  {
    title: "Development",
    description:
      "Build, connect APIs and automate business operations.",
  },
  {
    title: "Testing",
    description:
      "Test every workflow to ensure reliability and accuracy.",
  },
  {
    title: "Deployment & Support",
    description:
      "Launch the automation and provide ongoing improvements.",
  },
];

export default function Process() {
  return (
    <section className="bg-[#08111f] py-28">
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-blue-400 font-semibold">
            My Process
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white">
            From Idea to Intelligent Automation
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Every project follows a proven framework that keeps development
            organised, transparent and focused on measurable business results.
          </p>

        </div>

        <div className="mt-20 space-y-8">

          {steps.map((step, index) => (

            <div
              key={step.title}
              className="flex gap-6 rounded-3xl border border-white/10 bg-[#111827] p-8"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                {index + 1}
              </div>

              <div>

                <h3 className="text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 leading-8 text-gray-400">
                  {step.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}