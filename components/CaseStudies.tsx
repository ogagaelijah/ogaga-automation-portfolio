import {
  GraduationCap,
  UtensilsCrossed,
  Building2,
  Dumbbell,
  Users,
  Newspaper,
  CloudSun,
} from "lucide-react";

const caseStudies = [
  {
    icon: GraduationCap,
    title: "Hyperlog Academy",
    industry: "Education Technology",

    challenge:
      "Student registration, payment verification, and course onboarding were handled manually, creating delays and unnecessary administrative work.",

    solution:
      "Designed an AI-powered student registration system integrating online forms, Paystack payment verification, automated emails, and structured onboarding workflows.",

    impact:
      "Reduced manual administration while providing students with a faster, more professional enrollment experience.",

    tech:
      "n8n • Paystack • Google Forms • Gmail • Airtable",

    status:
      "Student Registration System Delivered",
  },

  {
    icon: UtensilsCrossed,
    title: "Restaurant AI Assistant",
    industry: "Restaurant Technology",

    challenge:
      "Restaurants frequently miss customer calls, reservations, and food orders during busy periods because staff cannot answer every enquiry immediately.",

    solution:
      "Built an AI voice assistant capable of answering calls, taking reservations, responding to menu enquiries, capturing customer information, and routing requests automatically.",

    impact:
      "Improved customer response time while allowing restaurant staff to focus on food preparation and customer service.",

    tech:
      "Vapi • OpenAI • n8n • Supabase • Airtable",

    status:
      "AI Voice Assistant Delivered",
  },

  {
    icon: Users,
    title: "AI HR Recruitment Assistant",
    industry: "Human Resources",

    challenge:
      "Recruitment teams spend valuable time reviewing CVs, communicating with applicants, scheduling interviews, and managing candidate records manually.",

    solution:
      "Designed an AI recruitment assistant that automates applicant screening, interview scheduling, candidate communication, and recruitment workflow management.",

    impact:
      "Reduced hiring administration while improving recruitment speed and delivering a better candidate experience.",

    tech:
      "OpenAI • n8n • Airtable • Gmail • Google Calendar",

    status:
      "Recruitment Workflow Delivered",
  },

  {
    icon: Building2,
    title: "Estate Management Automation",
    industry: "Estate Management",

    challenge:
      "Resident registration, visitor approvals, payment tracking, and estate operations relied heavily on paperwork and manual processing.",

    solution:
      "Developed an automation workflow for resident onboarding, visitor management, payment tracking, security notifications, and operational reporting.",

    impact:
      "Reduced paperwork, improved security coordination, and streamlined estate management operations.",

    tech:
      "n8n • Supabase • Airtable • Google Workspace",

    status:
      "Estate Automation Workflow Delivered",
  },

  {
    icon: Dumbbell,
    title: "Hyperlog Fitness Centre",
    industry: "Fitness Technology",

    challenge:
      "Membership registration, renewals, and expiry tracking were manually managed, resulting in missed renewals and increased administrative work.",

    solution:
      "Designed a complete membership automation system with online registration, expiry tracking, automated renewal reminders, and centralized member management.",

    impact:
      "Created a reliable membership management process with automated reminders and improved operational efficiency.",

    tech:
      "n8n • Airtable • Email Automation",

    status:
      "Membership Automation Delivered",
  },

  {
    icon: CloudSun,
    title: "AI Weather Intelligence Agent",
    industry: "Weather Intelligence",

    challenge:
      "Businesses, logistics teams, event planners, and individuals often rely on manually checking weather forecasts, making it easy to miss changing conditions that affect daily operations.",

    solution:
      "Built a scheduled AI weather automation that retrieves weather forecasts through an API, processes the information, and automatically delivers daily weather updates and intelligent reminders.",

    impact:
      "Enabled proactive planning by delivering timely weather intelligence that helps businesses reduce weather-related disruptions while helping individuals plan their daily activities.",

    tech:
      "n8n • OpenAI • Weather API • HTTP Request • Schedule Trigger",

    status:
      "Weather Intelligence Automation Delivered",
  },

  {
    icon: Newspaper,
    title: "AI Football News Agent",
    industry: "Sports Intelligence",

    challenge:
      "Football fans often visit multiple websites every day to stay updated with breaking news, transfers, fixtures, and match information.",

    solution:
      "Built an AI-powered news agent that automatically gathers football news from trusted sources, summarizes key updates, and delivers scheduled daily reports.",

    impact:
      "Created a personalized AI assistant that keeps users informed while eliminating the need to search multiple news platforms.",

    tech:
      "OpenAI • n8n • HTTP APIs • RSS Feeds",

    status:
      "AI News Agent Delivered",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="mx-auto max-w-7xl px-6 py-36 scroll-mt-24"
    >
      <div className="mb-24 text-center">

        <h2 className="text-4xl font-bold uppercase tracking-[0.35em] text-blue-400 md:text-5xl">
          Featured AI Solutions
        </h2>

        <p className="mx-auto mt-8 max-w-4xl text-2xl font-semibold leading-relaxed text-white md:text-3xl">
          Real AI Automation Projects That Solve Business Problems
        </p>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          Every solution begins with understanding a business challenge. These
          projects demonstrate how I combine AI, automation platforms, APIs,
          and intelligent workflows to improve operations and create measurable
          business value.
        </p>

        <div className="mx-auto mt-10 h-1 w-28 rounded-full bg-blue-500"></div>

      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {caseStudies.map((project) => {
          const Icon = project.icon;

          return (
            <div
              key={project.title}
              className="group rounded-2xl border border-white/10 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 transition-all duration-300 group-hover:bg-blue-500/20">

                <Icon
                  size={34}
                  className="text-blue-400"
                />

              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                {project.title}
              </h3>

              <div className="mt-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                {project.industry}
              </div>

              <div className="mt-8 space-y-6">

                <div>
                  <h4 className="font-semibold text-red-400">
                    Business Challenge
                  </h4>

                  <p className="mt-2 leading-7 text-gray-400">
                    {project.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-400">
                    Solution
                  </h4>

                  <p className="mt-2 leading-7 text-gray-400">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-green-400">
                    Business Impact
                  </h4>

                  <p className="mt-2 leading-7 text-gray-400">
                    {project.impact}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-400">
                    Technology Stack
                  </h4>

                  <p className="mt-2 leading-7 text-gray-400">
                    {project.tech}
                  </p>
                </div>

                <div className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-4">

                  <p className="font-semibold text-green-400">
                    ✓ {project.status}
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