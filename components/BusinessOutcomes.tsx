import {
  Clock3,
  DollarSign,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const outcomes = [
  {
    icon: Clock3,
    title: "Save Hundreds of Hours",
    description:
      "Replace repetitive manual work with intelligent automation, allowing your team to focus on strategic initiatives that drive business growth.",
  },
  {
    icon: DollarSign,
    title: "Reduce Operating Costs",
    description:
      "Lower administrative expenses, eliminate duplicated effort, and optimize operational efficiency through AI-powered workflows.",
  },
  {
    icon: TrendingUp,
    title: "Scale Without Increasing Headcount",
    description:
      "Build automation systems that continue working as your business grows, enabling you to serve more customers without proportional staffing increases.",
  },
  {
    icon: ShieldCheck,
    title: "Improve Accuracy & Compliance",
    description:
      "Reduce human error through standardized workflows, automated validation, and consistent business processes across your organization.",
  },
];

export default function BusinessOutcomes() {
  return (
    <section
      id="business-outcomes"
      className="bg-slate-950 py-36 px-6 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}

        <div className="mb-24 text-center">

          <h2 className="text-4xl font-bold uppercase tracking-[0.35em] text-blue-400 md:text-5xl">
            Business Outcomes
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-2xl font-semibold leading-relaxed text-white md:text-3xl">
            AI That Delivers Measurable Business Results
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Technology only creates value when it delivers measurable business
            outcomes. Every automation I build is designed to improve
            efficiency, reduce costs, minimize errors, and help businesses
            scale with confidence.
          </p>

          <div className="mx-auto mt-10 h-1 w-28 rounded-full bg-blue-500"></div>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {outcomes.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 transition-all duration-300 group-hover:bg-blue-500/20">

                  <Icon
                    size={34}
                    className="text-blue-400"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}