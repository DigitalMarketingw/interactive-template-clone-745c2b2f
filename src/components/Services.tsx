import ScrollReveal from "./ScrollReveal";
import { Boxes, Image, Globe, BarChart3 } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description: "Create visual identities that align with your voice and make lasting impressions.",
    icon: Boxes,
  },
  {
    number: "02",
    title: "UI/UX Design",
    description: "Focus on user-first interfaces that are both beautiful, intuitive, and purposeful.",
    icon: Image,
  },
  {
    number: "03",
    title: "Web Development",
    description: "Develop high-performance websites and apps built to grow with you.",
    icon: Globe,
  },
  {
    number: "04",
    title: "Digital Marketing",
    description: "Craft data-driven campaigns that attract, engage, and convert — across channels.",
    icon: BarChart3,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <ScrollReveal direction="left">
            <h2 className="heading-section">
              <span className="italic">What</span> We Do
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <p className="text-body max-w-md text-right">
              We craft digital experiences from idea to launch — blending strategy, design, and engineering to build products that performs.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid - 4 columns with dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-border/30 rounded-3xl overflow-hidden">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isFirst = idx === 0;
            const isLast = idx === services.length - 1;
            
            return (
              <ScrollReveal
                key={service.number}
                delay={idx * 0.1}
                direction="up"
                className={`
                  group relative p-8 min-h-[400px] flex flex-col
                  ${!isLast ? 'lg:border-r border-border/30' : ''}
                  ${idx < 2 ? 'md:border-b lg:border-b-0 border-border/30' : ''}
                  ${idx === 2 ? 'md:border-b lg:border-b-0 border-border/30' : ''}
                  overflow-hidden
                `}
              >
                {/* Dotted background on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle, hsl(var(--muted-foreground) / 0.3) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                    maskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)',
                  }}
                />

                {/* Icon */}
                <div className="relative z-10 flex-1 flex items-center justify-center mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-muted/50 to-muted/20 backdrop-blur-sm flex items-center justify-center border border-border/20">
                      <Icon className="w-10 h-10 text-muted-foreground" strokeWidth={1.5} />
                    </div>
                    {/* Decorative floating element */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-muted/60 to-muted/30 backdrop-blur-sm border border-border/20 flex items-center justify-center">
                      <div className="w-3 h-3 bg-gradient-to-br from-foreground/20 to-foreground/5 rounded-sm rotate-45" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <span className="text-muted-foreground text-sm font-light">/{service.number}</span>
                  <h3 className="text-xl font-medium text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
