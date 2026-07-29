import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08111f]">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Ogaga Elijah
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              I help businesses automate repetitive work using AI,
              n8n, APIs, chatbots, CRMs and workflow automation so
              they save time, reduce costs and scale faster.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-4 text-gray-300">

              <a
                href="mailto:ogagaokeelijah@gmail.com"
                className="flex items-center gap-3 hover:text-blue-400 transition"
              >
                <Mail size={18} />
                ogagaokeelijah@gmail.com
              </a>

              <a
                href="tel:+2347033621133"
                className="flex items-center gap-3 hover:text-blue-400 transition"
              >
                <Phone size={18} />
                +234 703 362 1133
              </a>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                Port Harcourt, Nigeria
              </div>

              <p className="text-sm text-gray-500">
                Available for remote projects worldwide.
              </p>

            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Connect
            </h3>

            <div className="space-y-4">

              <a
                href="https://github.com/ogagaelijah"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 transition hover:text-blue-400"
              >
                GitHub →
              </a>

              <a
                href="https://www.linkedin.com/in/ogaga-oke-elijah-52b561393"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 transition hover:text-blue-400"
              >
                LinkedIn →
              </a>

              <a
                href="https://x.com/HyperAICrypto"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 transition hover:text-blue-400"
              >
                X (Twitter) →
              </a>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ogaga Elijah. All rights reserved.
        </div>

      </div>
    </footer>
  );
}