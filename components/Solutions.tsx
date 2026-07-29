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
    <section className="bg-[#050816] py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold">
            Industries
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            AI Solutions Tailored For Every Industry
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8 text-lg">
            Every industry operates differently. I design AI-powered automation
            systems that solve operational challenges, eliminate repetitive
            tasks, and improve productivity across multiple sectors.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {industries.map((industry) => {

            const Icon = industry.icon;

            return (

              <div
                key={industry.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >

                <Icon size={42} className="text-blue-400" />

                <h3 className="mt-6 text-xl font-bold">
                  {industry.title}
                </h3>

                <p className="mt-4 text-slate-400 leading-7">
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