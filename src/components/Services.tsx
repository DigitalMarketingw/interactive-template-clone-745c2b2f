import ScrollReveal from "./ScrollReveal";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description: "Create visual identities that align with your voice and make lasting impressions.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description: "Focus on user-first interfaces that are both beautiful, intuitive, and purposeful.",
  },
  {
    number: "03",
    title: "Web Development",
    description: "Develop high-performance websites and apps built to grow with you.",
  },
  {
    number: "04",
    title: "Digital Marketing",
    description: "Craft data-driven campaigns that attract, engage, and convert — across channels.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <ScrollReveal direction="left">
            <span className="text-label mb-4 block">Our Services</span>
            <h2 className="heading-section">
              What<br />
              <span className="italic">We Do</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <p className="text-body max-w-md">
              We craft digital experiences from idea to launch — blending strategy, design, and engineering to build products that perform.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <ScrollReveal
              key={service.number}
              delay={idx * 0.1}
              direction="up"
              className="card-service"
            >
              <div className="relative z-10 space-y-6">
                <span className="text-muted-foreground text-sm">/{service.number}</span>
                <h3 className="text-xl font-medium text-foreground">{service.title}</h3>
                <p className="text-body text-sm">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
