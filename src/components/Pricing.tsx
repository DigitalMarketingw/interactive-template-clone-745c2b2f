import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    number: "1",
    name: "Starter Plan",
    description: "For early-stage ideas or small projects",
    price: "$2,500+",
    period: "/ Project",
    features: [
      "Discovery session & roadmap",
      "Basic frontend development",
      "2 rounds of revisions",
      "1-week turnaround",
    ],
    popular: false,
  },
  {
    number: "2",
    name: "Growth Plan",
    description: "For growing brands or MVP launches",
    price: "$6,500+",
    period: "/ Project",
    features: [
      "End-to-end design & dev",
      "Responsive frontend & CMS",
      "Light brand styling",
      "SEO-ready & launch support",
      "2-3 weeks delivery",
    ],
    popular: true,
  },
  {
    number: "3",
    name: "Custom Plan",
    description: "For complex products or long-term builds",
    price: "Custom",
    period: "/ Project",
    features: [
      "Full product design + development",
      "Feature-rich platforms or apps",
      "Advanced backend integrations",
      "Dedicated team & PM",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 30% 70%, hsl(0 0% 20%) 0%, transparent 50%)'
      }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-label mb-4 block">Pricing Plan</span>
          <h2 className="heading-section">
            Plans<br />
            <span className="italic">That Scale With You</span>
          </h2>
          <p className="text-body max-w-xl mx-auto mt-6">
            Whether you're launching a startup or growing a product, we've got a plan that fits your stage — no fluff, just what you need.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`pricing-card ${plan.popular ? "pricing-card-popular" : ""}`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm text-foreground">
                  {plan.number}
                </span>
                {plan.popular && (
                  <span className="px-3 py-1 text-xs bg-foreground text-background rounded-full">
                    Popular
                  </span>
                )}
              </div>

              <h3 className="text-lg font-medium text-foreground mb-2">{plan.name}</h3>
              <p className="text-body text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-display font-medium text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm ml-1">{plan.period}</span>
              </div>

              <a href="#contact" className={plan.popular ? "btn-primary w-full justify-center" : "btn-outline w-full justify-center"}>
                Get Started
              </a>

              <div className="mt-8 pt-6 border-t border-border">
                <span className="text-label mb-4 block">Plan Detail</span>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-foreground mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
