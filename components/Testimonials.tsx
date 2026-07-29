import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Operations Manager",
    review:
      "Ogaga transformed one of our repetitive business processes into a fully automated workflow. Our team now saves several hours every week and can focus on more strategic work.",
  },
  {
    name: "Michael Brown",
    company: "Business Owner",
    review:
      "The AI solution was designed around our business instead of forcing us to change our processes. Professional, reliable, and highly recommended.",
  },
  {
    name: "Grace Williams",
    company: "HR Director",
    review:
      "The HR automation system significantly improved our onboarding process and eliminated repetitive administrative work. Everything became faster and more organized.",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <div className="text-center">
        <p className="font-semibold uppercase tracking-[0.25em] text-blue-400">
          Testimonials
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          What Clients Say
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Building long-term partnerships means delivering solutions that create
          real business value. Here's what clients have to say.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="rounded-3xl border border-white/10 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
          >
            <div className="flex gap-1 text-yellow-400">
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
            </div>

            <p className="mt-6 leading-8 text-gray-300">
              "{testimonial.review}"
            </p>

            <div className="mt-8">
              <h3 className="font-semibold text-xl">
                {testimonial.name}
              </h3>

              <p className="text-gray-400">
                {testimonial.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}