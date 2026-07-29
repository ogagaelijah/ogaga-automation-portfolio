import {
  GraduationCap,
  Building2,
  UtensilsCrossed,
  Landmark,
  HeartPulse,
  ShoppingCart,
  Factory,
  BriefcaseBusiness,
} from "lucide-react";

const industries = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Student registration, online admissions, attendance tracking, fee management, LMS integration, and automated communication.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description:
      "AI ordering assistants, reservations, menu chatbots, delivery workflows, customer support, and kitchen automation.",
  },
  {
    icon: Building2,
    title: "Estate Management",
    description:
      "Resident registration, visitor management, security workflows, maintenance requests, and payment automation.",
  },
  {
    icon: Landmark,
    title: "Finance",
    description:
      "Payment verification, invoicing, Paystack & Flutterwave integration, reconciliation, and financial reporting.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Appointment scheduling, patient onboarding, records management, reminders, and AI-powered support assistants.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description:
      "Order processing, inventory updates, customer support, CRM automation, and marketing workflows.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Production tracking, quality reporting, inventory automation, and operational dashboards.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Services",
    description:
      "Lead management, client onboarding, document automation, CRM integration, and reporting dashboards.",
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="bg-[#050816] py-36 px-6 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}

        <div className="mb-24 text-center">

          <h2 className="text-4xl font-bold uppercase tracking-[0.35em] text-blue-400 md:text-5xl">
            Industries
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-2xl font-semibold leading-relaxed text-white md:text-3xl">
            AI Solutions Tailored for Every Industry
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Every industry has unique operational challenges. I design
            intelligent AI systems and workflow automations that eliminate
            repetitive tasks, improve productivity, and help organizations
            operate more efficiently.
          </p>

          <div className="mx-auto mt-10 h-1 w-28 rounded-full bg-blue-500"></div>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="group rounded-2xl border border-white/10 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 transition-all duration-300 group-hover:bg-blue-500/20">

                  <Icon
                    size={34}
                    className="text-blue-400"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {industry.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {industry.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}