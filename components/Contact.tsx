import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-[#050816]">

      <div className="max-w-5xl mx-auto text-center">

        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold">
          Let's Build Something Amazing
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold">
          Ready to Automate Your Business?
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-400 max-w-3xl mx-auto">
          Whether you're looking to automate repetitive tasks, build AI-powered
          business systems, or modernize your operations, I'd love to discuss
          your project. Let's turn your ideas into reliable, scalable AI
          solutions.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <a
            href="mailto:ogagaokeelijah@gmail.com"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 hover:border-blue-500 transition duration-300"
          >
            <Mail className="mx-auto text-blue-400" size={42} />

            <h3 className="mt-5 text-xl font-semibold">
              Email
            </h3>

            <p className="mt-3 text-slate-400 break-all">
              ogagaokeelijah@gmail.com
            </p>
          </a>

          <a
            href="tel:+2347033621133"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 hover:border-blue-500 transition duration-300"
          >
            <Phone className="mx-auto text-blue-400" size={42} />

            <h3 className="mt-5 text-xl font-semibold">
              Phone
            </h3>

            <p className="mt-3 text-slate-400">
              +234 703 362 1133
            </p>
          </a>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <MapPin className="mx-auto text-blue-400" size={42} />

            <h3 className="mt-5 text-xl font-semibold">
              Location
            </h3>

            <p className="mt-3 text-slate-400">
              Port Harcourt, Nigeria
              <br />
              Available for Remote Projects Worldwide
            </p>
          </div>

        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-5">

          <a
            href="https://www.linkedin.com/in/ogaga-oke-elijah-52b561393"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-700 px-6 py-3 hover:border-blue-500 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/ogagaelijah"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-700 px-6 py-3 hover:border-blue-500 transition"
          >
            GitHub
          </a>

          <a
            href="https://x.com/HyperAICrypto"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-700 px-6 py-3 hover:border-blue-500 transition"
          >
            X (Twitter)
          </a>

        </div>

        <a
          href="mailto:ogagaokeelijah@gmail.com"
          className="inline-flex items-center gap-3 mt-16 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 transition"
        >
          Book a Free Discovery Call
          <ArrowRight size={20} />
        </a>

      </div>

    </section>
  );
}