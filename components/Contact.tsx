import {
  CalendarDays,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">

      <div className="rounded-3xl border border-white/10 bg-slate-900 p-12">

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left Side */}

          <div>

            <p className="font-semibold uppercase tracking-[0.25em] text-blue-400">
              Book a Discovery Call
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Let's Build Smarter Business Systems Together
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-400">
              Whether you're looking to automate repetitive processes, deploy AI
              agents, improve customer experience, or transform your business
              operations, I'd love to learn more about your goals.
            </p>

            <div className="mt-12 space-y-8">

              <div className="flex items-center gap-4">

                <Mail className="text-blue-400" size={26} />

                <div>
                  <p className="font-semibold">
                    Email
                  </p>

                  <a
  href="mailto:ogagaokeelijah@gmail.com"
  className="text-gray-400 hover:text-blue-400 transition"
>
  ogagaokeelijah@gmail.com
</a>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <Phone className="text-blue-400" size={26} />

                <div>

                  <p className="font-semibold">
                    Phone
                  </p>

                 <a
  href="tel:+2347033621133"
  className="text-gray-400 hover:text-blue-400 transition"
>
  +234 703 362 1133
</a>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <MapPin className="text-blue-400" size={26} />

                <div>

                  <p className="font-semibold">
                    Location
                  </p>

                 <p className="text-gray-400">
  Port Harcourt, Nigeria • Available for Remote Projects Worldwide
</p>

                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="rounded-2xl bg-[#111827] p-10">

            <CalendarDays
              size={48}
              className="text-blue-400"
            />

            <h3 className="mt-8 text-3xl font-bold">
              Schedule a Free Discovery Call
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              In a 30-minute strategy session we'll discuss your current
              business processes, identify automation opportunities, and explore
              practical AI solutions tailored to your organization.
            </p>

            <ul className="mt-8 space-y-4 text-gray-300">

              <li>✓ Business Process Review</li>

              <li>✓ AI Opportunity Assessment</li>

              <li>✓ Automation Strategy</li>

              <li>✓ Technology Recommendations</li>

              <li>✓ Implementation Roadmap</li>

            </ul>

            <button className="mt-10 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-lg font-semibold transition hover:bg-blue-700">

              Book My Free Call

              <ArrowRight size={20} />

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}