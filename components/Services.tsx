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
      "Custom AI assistants trained on your business documents, SOPs, website, and internal knowledge to provide instant, accurate responses.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Eliminate repetitive manual tasks by automating approvals, notifications, data entry, and business processes across your organization.",
  },
  {
    icon: Users,
    title: "HR Automation",
    description:
      "Automate recruitment, onboarding, employee records, leave requests, approvals, and other HR operations.",
  },
  {
    icon: GraduationCap,
    title: "Education Automation",
    description:
      "Modernize school operations with automated admissions, student registration, attendance, payments, and learning workflows.",
  },
  {
    icon: Building2,
    title: "Estate Automation",
    description:
      "Digitize estate management with resident registration, visitor management, security workflows, maintenance requests, and payment tracking.",
  },
  {
    icon: CreditCard,
    title: "Finance Automation",
    description:
      "Integrate Paystack, Flutterwave, invoicing, payment verification, financial reporting, and automated reconciliation.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant AI",
    description:
      "Deploy AI-powered ordering, reservations, customer support, menu assistants, and restaurant workflow automation.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Build executive dashboards, KPI reporting, analytics, and real-time insights to support better business decisions.",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <div className="text-center">

        <p className="font-semibold uppercase tracking-[0.25em] text-blue-400">
          Services
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          AI Services That Transform Businesses
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          I help businesses eliminate repetitive work, improve productivity,
          reduce operational costs, and scale efficiently through practical AI
          solutions and intelligent workflow automation.
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