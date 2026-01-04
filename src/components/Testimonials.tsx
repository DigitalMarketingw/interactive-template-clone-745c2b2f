import { motion } from "framer-motion";
import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.png";
import testimonial4 from "@/assets/testimonial-4.png";

const testimonials = [
  {
    quote: "Agenciy felt like an extension of our team. Their design instincts and speed were exactly what we needed to launch on time — and with style.",
    name: "Sarah Coleman",
    title: "CEO at NovaTech",
    image: testimonial1,
  },
  {
    quote: "From the first call to the final handoff, everything was seamless. The UI/UX work was some of the best we've seen.",
    name: "Daniel Reyes",
    title: "Product Manager at Clarity CRM",
    image: testimonial2,
  },
  {
    quote: "We came to Agenciy with a rough idea, and they turned it into a beautiful, functional MVP in weeks. Highly recommended.",
    name: "Rachel Lin",
    title: "Co-Founder at Driftly",
    image: testimonial3,
  },
  {
    quote: "Their process is clear, communication is fast, and the results speak for themselves. We saw a 40% boost in engagement post-launch.",
    name: "Jason Ford",
    title: "Marketing Lead at BrightChain",
    image: testimonial4,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-label mb-4 block">Testimonials</span>
          <h2 className="heading-section">
            Hear from the Clients<br />
            <span className="italic">We've Partnered With</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="testimonial-card"
            >
              <p className="text-lg text-foreground leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-foreground font-medium">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
