import { motion } from "framer-motion";

const awards = [
  {
    platform: "Awwwards",
    title: "SOTY 2025 - 1st Winner",
    project: "A.I Car Landing page",
  },
  {
    platform: "Css Awards",
    title: "Top 5 Best of eCommerce Websites 2024",
    project: "Theo Agency, Re-branding",
  },
  {
    platform: "Behance",
    title: "Winner - US Behance Portfolio Review 2024",
    project: "Virtual Reality, Encounter",
  },
  {
    platform: "Awwwards",
    title: "Honor SOTD November, 2024",
    project: "The News",
  },
];

const Awards = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <span className="text-label mb-12 block">Our Awards</span>

        <div className="space-y-0">
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-4 py-6 border-b border-border group hover:bg-secondary/30 px-4 -mx-4 transition-colors cursor-pointer"
            >
              <span className="text-foreground font-medium">{award.platform}</span>
              <span className="text-muted-foreground">{award.title}</span>
              <span className="text-muted-foreground text-sm">{award.project}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
