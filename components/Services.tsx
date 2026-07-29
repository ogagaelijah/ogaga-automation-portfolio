import {
  BrainCircuit,
  Workflow,
  Users,
  GraduationCap,
  Building2,
  CreditCard,
  UtensilsCrossed,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: BrainCircuit,
    title: "AI Knowledge Agents",
    description:
      "Intelligent AI assistants trained on your business documents, SOPs, websites and internal knowledge.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks, approvals, notifications and business operations using AI-powered workflows.",
  },
  {
    icon: Users,
    title: "HR Automation",
    description:
      "Recruitment, onboarding, leave management, employee records and approval workflows.",
  },
  {
    icon: GraduationCap,
    title: "Education Automation",
    description:
      "Student registration, payments, attendance tracking and learning management automation.",
  },
  {
    icon: Building2,
    title: "Estate Automation",
    description:
      "Resident registration, visitor management, security workflows and estate operations.",
  },
  {
    icon: CreditCard,
    title: "Finance Automation",
    description:
      "Paystack, Flutterwave, invoicing, payment verification and reporting.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant AI",
    description:
      "Voice AI, reservations, menu assistants, ordering and customer support.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Executive dashboards, KPI tracking, reporting and business analytics.",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <div className="text-center">
        <p className="font-semibold uppercase tracking-[0.25em] text-blue-400">
          Solutions
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Solutions Designed Around Your Business
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Every organization has unique operational challenges. I design tailored AI
and automation solutions that streamline processes, improve efficiency,
reduce costs, and help teams achieve more with less effort.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
            >
              <Icon size={42} className="text-blue-400" />

              <h3 className="mt-6 text-xl font-bold">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {service.description}
              </p>

              <button className="mt-8 font-semibold text-blue-400 hover:text-blue-300">
                Learn More →
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}