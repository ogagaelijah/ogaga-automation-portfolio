import { Quote } from "lucide-react";

const testimonials = [
  {
    title: "Built for Real Business Problems",
    text: "Every automation showcased in this portfolio was designed to solve practical operational challenges such as manual registrations, payment verification, customer support, workflow automation, and business process optimization.",
  },
  {
    title: "Focused on Business Impact",
    text: "Each solution prioritizes measurable outcomes including improved productivity, reduced manual work, better customer experience, and scalable operations instead of technology for its own sake.",
  },
  {
    title: "Continuously Improving",
    text: "This portfolio represents an evolving collection of AI automation systems. Every new project strengthens my experience in designing reliable, scalable, and business-focused automation solutions.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#050816] py-40 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="text-4xl md:text-5xl font-bold uppercase tracking-[0.25em] text-blue-400">
            Portfolio Highlights
          </p>

          <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-white">
            Building AI Solutions That Create Value
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-400">
            My focus is on solving business problems through intelligent
            automation. As I complete more client projects, this section will
            grow with real success stories and verified client feedback.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
            >

              <Quote size={40} className="text-blue-400" />

              <h3 className="mt-6 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-6 text-slate-400 leading-8">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}