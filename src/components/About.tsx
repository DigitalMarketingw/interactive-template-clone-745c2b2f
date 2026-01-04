import { motion } from "framer-motion";
import heroChrome from "@/assets/hero-chrome.png";

const stats = [
  { label: "Projects Launched", value: "100+" },
  { label: "Years Of Experience", value: "5+" },
  { label: "Happy Clients", value: "25+" },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-label">About Us</span>
            <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-foreground">
              We help ambitious brands and startups build digital products that{" "}
              <span className="text-muted-foreground">stand out and scale</span>. 
              We believe in working smart, building fast, and designing with purpose.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={heroChrome}
              alt="About"
              className="w-full rounded-2xl"
            />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="stat-number text-foreground">{stat.value}</span>
              <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
