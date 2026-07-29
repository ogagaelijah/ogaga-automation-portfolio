import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050816] py-40 px-6 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto text-center">

        <div className="mb-20">

          <p className="text-4xl md:text-5xl font-bold uppercase tracking-[0.25em] text-blue-400">
            Let's Build Something Amazing
          </p>

          <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-white">
            Ready to Automate Your Business?
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-400">
            Whether you're looking to automate repetitive tasks, build
            AI-powered business systems, or modernize your operations,
            I'd love to discuss your project. Let's turn your ideas into
            reliable, scalable AI solutions.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <a
            href="mailto:ogagaokeelijah@gmail.com"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
          >
            <Mail
              className="mx-auto text-blue-400"
              size={42}
            />

            <h3 className="mt-5 text-xl font-bold text-white">
              Email
            </h3>

            <p className="mt-3 text-slate-400 break-all">
              ogagaokeelijah@gmail.com
            </p>

          </a>

          <a
            href="tel:+2347033621133"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
          >
            <Phone
              className="mx-auto text-blue-400"
              size={42}
            />

            <h3 className="mt-5 text-xl font-bold text-white">
              Phone
            </h3>

            <p className="mt-3 text-slate-400">
              +234 703 362 1133
            </p>

          </a>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">

            <MapPin
              className="mx-auto text-blue-400"
              size={42}
            />

            <h3 className="mt-5 text-xl font-bold text-white">
              Location
            </h3>

            <p className="mt-3 text-slate-400">
              Port Harcourt, Nigeria
              <br />
              Available for Remote Projects Worldwide
            </p>

          </div>

        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-5">

          <a
            href="https://www.linkedin.com/in/ogaga-oke-elijah-52b561393"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-700 px-6 py-3 font-semibold transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/ogagaelijah"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-700 px-6 py-3 font-semibold transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://x.com/HyperAICrypto"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-700 px-6 py-3 font-semibold transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
          >
            X (Twitter)
          </a>

        </div>

        <a
          href="mailto:ogagaokeelijah@gmail.com"
          className="mt-16 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-700"
        >
          Book a Free Discovery Call

          <ArrowRight size={20} />

        </a>

      </div>
    </section>
  );
}