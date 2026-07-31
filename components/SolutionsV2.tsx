import {
  GraduationCap,
  Building2,
  UtensilsCrossed,
  Landmark,
  HeartPulse,
  ShoppingCart,
  Factory,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Student registration, online admissions, attendance tracking, fee management, LMS integration and automated communication.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description:
      "AI ordering assistants, reservations, menu chatbots, delivery workflows, customer support and kitchen automation.",
  },
  {
    icon: Building2,
    title: "Estate Management",
    description:
      "Resident registration, visitor management, security workflows, maintenance requests and payment automation.",
  },
  {
    icon: Landmark,
    title: "Finance",
    description:
      "Payment verification, invoicing, Paystack & Flutterwave integration, reconciliation and financial reporting.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Appointment scheduling, patient onboarding, records management, reminders and AI-powered support assistants.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description:
      "Order processing, inventory updates, customer support, CRM automation and marketing workflows.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Production tracking, quality reporting, inventory automation and operational dashboards.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Services",
    description:
      "Lead management, client onboarding, document automation, CRM integration and reporting dashboards.",
  },
];

export default function SolutionsV2() {
  return (
    <section
      id="solutions"
      className="bg-[#08111f] py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Industries
          </p>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            AI Solutions Tailored For
            <span className="block text-blue-500">
              Every Industry
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Every industry has unique operational challenges. I design
            intelligent AI systems and workflow automation that eliminate
            repetitive tasks, improve productivity and help organisations
            operate more efficiently.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {industries.map((industry) => {
            const Icon = industry.icon;

            return (

              <div
                key={industry.title}
                className="group rounded-3xl border border-white/10 bg-[#111827] p-8 transition duration-300 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10 transition duration-300 group-hover:bg-blue-600">

                  <Icon
                    size={32}
                    className="text-blue-400 transition duration-300 group-hover:text-white"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {industry.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {industry.description}
                </p>

                <div className="mt-8 flex items-center text-blue-400 font-semibold">

                  Learn More

                  <ArrowRight
                    size={18}
                    className="ml-2 transition duration-300 group-hover:translate-x-2"
                  />

                </div>

              </div>

            );
          })}

        </div>

        {/* Bottom CTA */}

        <div className="mt-24 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 via-blue-500/5 to-transparent p-12 text-center">

          <h3 className="text-3xl font-bold text-white">
            Don't See Your Industry?
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            AI automation isn't limited to specific industries. If your business
            has repetitive tasks, manual processes or disconnected systems, I
            can design a custom automation solution tailored to your operations.
          </p>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30"
          >
            Discuss Your Project

            <ArrowRight size={18} className="ml-3" />

          </a>

        </div>

      </div>
    </section>
  );
}