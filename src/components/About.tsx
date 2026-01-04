import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";
import heroChrome from "@/assets/hero-chrome.png";

const stats = [
  { label: "Projects Launched", value: 100, suffix: "+" },
  { label: "Years Of Experience", value: 5, suffix: "+" },
  { label: "Happy Clients", value: 25, suffix: "+" },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <ScrollReveal direction="left" blur>
            <span className="text-label">About Us</span>
            <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-foreground mt-8">
              We help ambitious brands and startups build digital products that{" "}
              <span className="text-muted-foreground">stand out and scale</span>. 
              We believe in working smart, building fast, and designing with purpose.
            </p>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal direction="right" delay={0.2} scale>
            <img
              src={heroChrome}
              alt="About"
              className="w-full rounded-2xl"
            />
          </ScrollReveal>
        </div>

        {/* Stats */}
        <ScrollReveal delay={0.3} className="mt-20 pt-12 border-t border-border">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <ScrollReveal key={stat.label} delay={0.4 + idx * 0.1} direction="up" className="text-center">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} className="stat-number" />
                <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
