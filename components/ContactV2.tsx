export default function ContactV2() {
  return (
    <section
      id="contact"
      className="bg-[#08111f] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Contact
          </p>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Let's Build Your Next AI Automation Project
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Whether you're looking to automate business operations, deploy AI
            assistants or integrate multiple systems, I'd love to discuss your
            project.
          </p>

        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* LEFT */}

          <div className="rounded-3xl border border-white/10 bg-[#111827] p-10">

            <h3 className="text-3xl font-bold text-white">
              Get In Touch
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              I help businesses transform manual processes into intelligent,
              automated systems.
            </p>

            <div className="mt-10 space-y-8">

              <div>

                <p className="text-sm uppercase tracking-[0.25em] text-blue-400">
                  Email
                </p>

                <a
                  href="mailto:ogagaokeelijah@gmail.com"
                  className="mt-2 block text-lg text-white hover:text-blue-400"
                >
                  ogagaokeelijah@gmail.com
                </a>

              </div>

              <div>

                <p className="text-sm uppercase tracking-[0.25em] text-blue-400">
                  Phone
                </p>

                <a
                  href="tel:+2347033621133"
                  className="mt-2 block text-lg text-white hover:text-blue-400"
                >
                  +234 703 362 1133
                </a>

              </div>

              <div>

                <p className="text-sm uppercase tracking-[0.25em] text-blue-400">
                  Location
                </p>

                <p className="mt-2 text-lg text-white">
                  Port Harcourt, Nigeria | Available For Remote Jobs Worldwide
                </p>

              </div>

            </div>

            <div className="mt-12 flex flex-wrap gap-4">

              <a
                href="https://wa.me/2347033621133"
                target="_blank"
                className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                WhatsApp
              </a>

              <a
                href="mailto:ogagaokeelijah@gmail.com"
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Send Email
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="rounded-3xl border border-white/10 bg-[#111827] p-10">

            <h3 className="text-3xl font-bold text-white">
              Send a Message
            </h3>

            <form className="mt-8 space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-[#08111f] px-5 py-4 text-white outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-[#08111f] px-5 py-4 text-white outline-none focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Company"
                className="w-full rounded-xl border border-white/10 bg-[#08111f] px-5 py-4 text-white outline-none focus:border-blue-500"
              />

              <textarea
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full rounded-xl border border-white/10 bg-[#08111f] px-5 py-4 text-white outline-none focus:border-blue-500"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
              >
                Send Message
              </button>

            </form>

            <p className="mt-6 text-sm text-gray-500">
              reCAPTCHA and backend integration will be added before deployment.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}