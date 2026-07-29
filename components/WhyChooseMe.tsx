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
      "I don't automate for the sake of automation. Every solution begins with understanding your business objectives and identifying where AI can create measurable business value.",
  },
  {
    icon: BriefcaseBusiness,
    title: "From Strategy to Execution",
    description:
      "From initial discovery and process mapping to deployment and continuous optimization, I deliver complete AI automation solutions that your team can confidently adopt and scale.",
  },
  {
    icon: BadgeCheck,
    title: "Reliable & Scalable Systems",
    description:
      "Every workflow is built with reliability, security, documentation, and future growth in mind—not just quick fixes.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "Successful automation doesn't end after deployment. I provide ongoing support, optimization, and continuous improvements as your business evolves.",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <div className="text-center">
        <p className="font-semibold uppercase tracking-[0.25em] text-blue-400">
          Why Businesses Trust Me
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          More Than Automation—A Strategic Technology Partner
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          My goal isn't simply to automate tasks. I partner with businesses to
          understand their operations, identify opportunities for improvement,
          and deliver AI solutions that create measurable long-term value.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {reasons.map((reason) => {
          const Icon = reason.icon;

          return (
            <div
              key={reason.title}
              className="rounded-2xl border border-white/10 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
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