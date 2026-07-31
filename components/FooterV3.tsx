import Image from "next/image";

export default function FooterV3() {
  return (
    <footer className="border-t border-white/10 bg-[#050816]">

      {/* Top CTA */}

      <div className="border-b border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-16 text-center lg:flex-row lg:text-left">

          <div>

            <h2 className="text-4xl font-bold text-white">
              Ready to Automate Your Business?
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              Let's build intelligent AI automation systems that save time,
              reduce costs and help your business scale faster.
            </p>

          </div>

          <div className="flex flex-wrap gap-4">

            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30"
            >
              Book a Discovery Call
            </a>

            <a
              href="mailto:ogagaokeelijah@gmail.com"
              className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition duration-300 hover:border-blue-500 hover:bg-white/5"
            >
              Send Email
            </a>

          </div>

        </div>

      </div>

      {/* Main Footer */}

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-4">

              <Image
                src="/images/branding/oe-logo.png"
                alt="Ogaga Elijah"
                width={55}
                height={55}
                className="rounded-xl"
              />

              <div>

                <h3 className="text-xl font-bold text-white">
                  Ogaga Elijah
                </h3>

                <p className="text-sm text-blue-400">
                  AI Automation Specialist
                </p>

              </div>

            </div>

            <p className="mt-8 leading-8 text-gray-400">
              Helping businesses transform operations through intelligent
              automation, AI agents, workflow automation and system
              integrations.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h4 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h4>

            <div className="space-y-4">

              <a href="#about" className="block text-gray-400 hover:text-blue-400">
                About
              </a>

              <a href="#services" className="block text-gray-400 hover:text-blue-400">
                Services
              </a>

              <a href="#case-studies" className="block text-gray-400 hover:text-blue-400">
                Case Studies
              </a>

              <a href="#contact" className="block text-gray-400 hover:text-blue-400">
                Contact
              </a>

            </div>

          </div>

          {/* Services */}

          <div>

            <h4 className="mb-6 text-xl font-semibold text-white">
              Services
            </h4>

            <div className="space-y-4 text-gray-400">

              <p>AI Workflow Automation</p>

              <p>AI Agents</p>

              <p>Voice AI Assistants</p>

              <p>API Integrations</p>

              <p>Business Automation</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h4 className="mb-6 text-xl font-semibold text-white">
              Contact
            </h4>

            <div className="space-y-5">

              <p className="text-gray-400">
                📧 ogagaokeelijah@gmail.com
              </p>

              <p className="text-gray-400">
                📱 +234 703 362 1133
              </p>

              <p className="text-gray-400">
                📍 Port Harcourt, Nigeria
              </p>

              <a
                href="https://wa.me/2347033621133"
                target="_blank"
                className="inline-block rounded-lg bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Chat on WhatsApp
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-center lg:flex-row">

          <p className="text-sm text-gray-500">
            © 2026 Ogaga Elijah. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Built with Next.js • TypeScript • Tailwind CSS • AI Automation
          </p>

          <a
            href="#home"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-blue-500 hover:text-blue-400"
          >
            ↑ Back to Top
          </a>

        </div>

      </div>

    </footer>
  );
}