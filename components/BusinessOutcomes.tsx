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
      "Replace repetitive manual work with intelligent automation so your team can focus on high-value activities that grow the business.",
  },
  {
    icon: DollarSign,
    title: "Reduce Operating Costs",
    description:
      "Lower administrative expenses, eliminate duplicated effort, and improve operational efficiency with AI-powered workflows.",
  },
  {
    icon: TrendingUp,
    title: "Scale Without Increasing Headcount",
    description:
      "Build systems that continue working as your business grows, allowing you to serve more customers without proportional increases in staff.",
  },
  {
    icon: ShieldCheck,
    title: "Improve Accuracy & Compliance",
    description:
      "Reduce human error with standardized workflows, automated validations, and consistent business processes.",
  },
];

export default function BusinessOutcomes() {
  return (
    <section className="py-28 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold">
            Business Outcomes
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            AI That Delivers Real Business Results
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-400">
            Technology is only valuable when it produces measurable outcomes.
            Every automation I build is designed to improve efficiency,
            reduce costs, and help businesses grow with confidence.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-16">

          {outcomes.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-8 hover:border-blue-500 transition duration-300 hover:-translate-y-2"
              >

                <Icon size={44} className="text-blue-400" />

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-400 leading-7">
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