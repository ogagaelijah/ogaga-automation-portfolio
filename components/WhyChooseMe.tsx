import {
  BadgeCheck,
  BriefcaseBusiness,
  BrainCircuit,
  Handshake,
} from "lucide-react";

const reasons = [
  {
    icon: BrainCircuit,
    title: "Business-First AI Strategy",
    description:
      "Every automation project begins with understanding your business goals. I identify opportunities where AI delivers measurable value instead of simply automating existing processes.",
  },
  {
    icon: BriefcaseBusiness,
    title: "End-to-End Implementation",
    description:
      "From discovery and process mapping to deployment and optimization, I build complete AI automation systems that integrate seamlessly into your business.",
  },
  {
    icon: BadgeCheck,
    title: "Reliable & Scalable Solutions",
    description:
      "My solutions are designed with security, reliability, documentation, and future growth in mind—so they continue delivering value as your business expands.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "I don't disappear after deployment. I provide continuous support, improvements, and optimization to ensure your automation evolves with your business.",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">

      <div className="text-center">

        <p className="font-semibold uppercase tracking-[0.25em] text-blue-400">
          Why Choose Me
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Your Strategic AI Automation Partner
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Choosing the right automation partner is just as important as choosing
          the right technology. I build intelligent systems that are practical,
          scalable, and focused on delivering measurable business results.
        </p>

      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">

        {reasons.map((reason) => {
          const Icon = reason.icon;

          return (
            <div
              key={reason.title}
              className="rounded-2xl border border-white/10 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
            >
              <Icon size={42} className="text-blue-400" />

              <h3 className="mt-6 text-2xl font-bold">
                {reason.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                {reason.description}
              </p>
            </div>
          );
        })}

      </div>

    </section>
  );
}