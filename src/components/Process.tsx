import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Create visual identities that align with your voice and make lasting impressions.",
  },
  {
    number: "02",
    title: "Design",
    description: "Shape powerful experiences with purpose-driven creativity and thoughtful execution.",
  },
  {
    number: "03",
    title: "Develop",
    description: "Build scalable solutions that bring your vision to life with precision and performance.",
  },
  {
    number: "04",
    title: "Launch & Grow",
    description: "Introduce your brand with impact through strategic rollouts that captivate and convert.",
  },
];

const Process = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-label mb-4 block">Our Process</span>
          <h2 className="heading-section">
            The Journey to a<br />
            <span className="italic">Successful Product</span>
          </h2>
          <p className="text-body max-w-xl mx-auto mt-6">
            We keep things lean and collaborative — so ideas go from concept to launch without the chaos.
          </p>
        </ScrollReveal>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <ScrollReveal
              key={step.number}
              delay={0.1 + idx * 0.1}
              direction="up"
              scale
            >
              <div className="card-dark text-center h-full">
                <span className="text-muted-foreground text-sm mb-4 block">/{step.number}</span>
                <h3 className="text-lg font-medium text-foreground mb-3">{step.title}</h3>
                <p className="text-body text-sm">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
