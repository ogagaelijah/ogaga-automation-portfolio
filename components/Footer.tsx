import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08111f]">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-3">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 font-bold text-xl text-white">
                OG
              </div>

              <div>

                <h2 className="text-2xl font-bold text-white">
                  Ogaga Elijah
                </h2>

                <p className="text-blue-300">
                  AI Automation Specialist & Consultant
                </p>

              </div>

            </div>

            <p className="mt-8 leading-8 text-gray-400">
              Helping businesses eliminate repetitive work through AI Agents,
              Workflow Automation, APIs, Voice AI, Business Integrations and
              intelligent automation systems that save time, reduce costs,
              and scale operations.
            </p>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-white">
              Contact
            </h3>

            <div className="space-y-5">

              <a
                href="mailto:ogagaokeelijah@gmail.com"
                className="flex items-center gap-4 text-gray-300 transition hover:text-blue-400"
              >
                <Mail size={20} />
                ogagaokeelijah@gmail.com
              </a>

              <a
                href="tel:+2347033621133"
                className="flex items-center gap-4 text-gray-300 transition hover:text-blue-400"
              >
                <Phone size={20} />
                +234 703 362 1133
              </a>

              <div className="flex items-center gap-4 text-gray-300">
                <MapPin size={20} />
                Port Harcourt, Nigeria
              </div>

              <p className="text-gray-500">
                Available for Remote Projects Worldwide
              </p>

            </div>

          </div>

          {/* Connect */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-white">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/ogagaelijah"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-slate-900 p-4 transition hover:border-blue-500 hover:bg-slate-800"
              >
                <Github size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/ogaga-oke-elijah-52b561393"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-slate-900 p-4 transition hover:border-blue-500 hover:bg-slate-800"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="https://x.com/HyperAICrypto"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-slate-900 p-4 transition hover:border-blue-500 hover:bg-slate-800"
              >
                <Twitter size={22} />
              </a>

            </div>

            <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

              <h4 className="font-semibold text-white">
                Ready to automate your business?
              </h4>

              <p className="mt-3 leading-7 text-gray-400">
                Let's discuss how AI can streamline your operations and
                improve productivity.
              </p>

              <a
                href="mailto:ogagaokeelijah@gmail.com"
                className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Start a Project
              </a>

            </div>

          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Ogaga Elijah. All rights reserved.
          </p>

          <p>
            Designed & Built with Next.js • Tailwind CSS • AI Automation
          </p>

        </div>

      </div>

    </footer>
  );
}