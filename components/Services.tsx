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
      "Custom AI assistants trained on your business documents, SOPs, websites, and internal knowledge to deliver fast, accurate, and context-aware responses.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Replace repetitive manual work with intelligent workflows that automate approvals, notifications, reporting, data synchronization, and business operations.",
  },
  {
    icon: Users,
    title: "HR Automation",
    description:
      "Automate recruitment, employee onboarding, leave management, approvals, staff records, and internal HR processes.",
  },
  {
    icon: GraduationCap,
    title: "Education Automation",
    description:
      "Digitize admissions, student registration, attendance tracking, payments, examinations, and learning management workflows.",
  },
  {
    icon: Building2,
    title: "Estate Automation",
    description:
      "Streamline resident registration, visitor management, maintenance requests, security workflows, and estate payment systems.",
  },
  {
    icon: CreditCard,
    title: "Finance Automation",
    description:
      "Integrate Paystack, Flutterwave, invoicing, payment verification, reconciliation, and financial reporting into one automated workflow.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant AI",
    description:
      "Deploy AI-powered ordering, reservations, customer support, menu assistants, and voice-enabled restaurant automation.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Create executive dashboards, KPI reporting, analytics, and real-time business insights for better decision-making.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-6 py-36 scroll-mt-24"
    >
      <div className="mb-24 text-center">

        <h2 className="text-4xl font-bold uppercase tracking-[0.35em] text-blue-400 md:text-5xl">
          Services
        </h2>

        <p className="mx-auto mt-8 max-w-4xl text-2xl font-semibold leading-relaxed text-white md:text-3xl">
          AI Services That Transform Businesses
        </p>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          I help organizations eliminate repetitive work, improve productivity,
          reduce operational costs, and scale confidently through practical AI
          systems and intelligent workflow automation.
        </p>

        <div className="mx-auto mt-10 h-1 w-28 rounded-full bg-blue-500"></div>

      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="group rounded-2xl border border-white/10 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 transition-all duration-300 group-hover:bg-blue-500/20">
                <Icon
                  size={34}
                  className="text-blue-400"
                />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                {service.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                {service.description}
              </p>

              <button className="mt-8 font-semibold text-blue-400 transition-all duration-300 group-hover:translate-x-2 group-hover:text-blue-300">
                Learn More →
              </button>
            </div>
          );
        })}

      </div>
    </section>
  );
}