import {
  GraduationCap,
  UtensilsCrossed,
  Building2,
  Dumbbell,
} from "lucide-react";

const caseStudies = [
  {
    icon: GraduationCap,
    title: "Hyperlog Academy",
    problem:
      "Manual student registration, payment verification, and course delivery slowed down enrollment.",
    solution:
      "Designed an AI-powered registration workflow integrating online forms, payment verification, automated emails, and student onboarding.",
    result:
      "Reduced manual administrative work while creating a faster, more professional enrollment experience.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant AI Assistant",
    problem:
      "Restaurants lose orders and customer inquiries because staff cannot answer every call during busy hours.",
    solution:
      "Built an AI voice assistant capable of answering calls, taking reservations, responding to menu questions, and capturing customer information automatically.",
    result:
      "Improved customer response time while allowing restaurant staff to focus on food preparation and service.",
  },
  {
    icon: Building2,
    title: "Estate Management Automation",
    problem:
      "Resident registration, visitor management, and security processes relied heavily on paperwork and manual approvals.",
    solution:
      "Developed an automation workflow for resident onboarding, visitor registration, payment tracking, and security notifications.",
    result:
      "Improved operational efficiency while reducing paperwork and administrative delays.",
  },
  {
    icon: Dumbbell,
    title: "Hyperlog Fitness Centre",
    problem:
      "Membership registration and renewal tracking were handled manually, leading to missed renewals and administrative overhead.",
    solution:
      "Designed an automated membership system with online registration, expiry tracking, renewal reminders, and centralized member records.",
    result:
      "Created a streamlined membership management process with automated reminders and improved record keeping.",
  },
];

export default function CaseStudies() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">

      <div className="text-center">

        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold">
          Case Studies
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold">
          Real AI Automation Projects
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-400">
          Every automation project begins with understanding a business problem.
          Here are examples of AI systems and workflow automations designed to
          improve operations across different industries.
        </p>

      </div>

      <div className="grid gap-8 mt-16 md:grid-cols-2">

        {caseStudies.map((project) => {

          const Icon = project.icon;

          return (

            <div
              key={project.title}
              className="rounded-2xl border border-white/10 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
            >

              <Icon size={42} className="text-blue-400" />

              <h3 className="mt-6 text-2xl font-bold">
                {project.title}
              </h3>

              <div className="mt-6 space-y-5">

                <div>
                  <h4 className="font-semibold text-red-400">
                    Problem
                  </h4>

                  <p className="mt-2 text-gray-400 leading-7">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-400">
                    Solution
                  </h4>

                  <p className="mt-2 text-gray-400 leading-7">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-green-400">
                    Result
                  </h4>

                  <p className="mt-2 text-gray-400 leading-7">
                    {project.result}
                  </p>
                </div>

              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
}