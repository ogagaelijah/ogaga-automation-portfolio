import {
  Clock3,
  DollarSign,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const outcomes = [
  {
    icon: Clock3,
    title: "Save Valuable Time",
    description:
      "Automate repetitive tasks and free your team to focus on strategic, high-impact work.",
  },
  {
    icon: DollarSign,
    title: "Reduce Operational Costs",
    description:
      "Eliminate manual processes, reduce costly errors, and improve overall efficiency.",
  },
  {
    icon: TrendingUp,
    title: "Scale With Confidence",
    description:
      "Build automation systems that grow alongside your business without increasing complexity.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Secure",
    description:
      "Workflows designed with reliability, privacy, and human oversight where it matters most.",
  },
];

export default function BusinessOutcomes() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">

      <div className="text-center">

        <p className="font-semibold uppercase tracking-[0.25em] text-blue-400">
          Business Outcomes
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Technology That Delivers Business Value
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          AI is only valuable when it creates measurable results. Every solution
          I build is designed to improve productivity, reduce operational
          friction, and support long-term business growth.
        </p>

      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {outcomes.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <Icon size={42} className="text-blue-400" />

              <h3 className="mt-6 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {item.description}
              </p>
            </div>
          );
        })}

      </div>

    </section>
  );
}