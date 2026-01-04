import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroChrome from "@/assets/hero-chrome.png";

const services = ["Brand Identity", "UI/UX Design", "Development", "Marketing"];

const clientLogos = [
  "Venice.",
  "Cairo",
  "Italic",
  "Metro",
  "Shift",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(0 0% 15%) 0%, transparent 50%)'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative flex-1 flex items-center pt-24 pb-12 px-6 md:px-12 lg:px-20">
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="heading-display">
                Create,
              </h1>
              <h1 className="heading-display-italic">
                Impactful
              </h1>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-border" />
                <span className="text-label">We do</span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {services.map((service, idx) => (
                  <span key={service} className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    {service}{idx < services.length - 1 && <span className="mx-2 text-border">/</span>}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Client Logos */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-8"
            >
              {clientLogos.map((logo) => (
                <span key={logo} className="text-muted-foreground text-sm font-medium">
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <img
              src={heroChrome}
              alt="3D Chrome Abstract"
              className="w-full max-w-lg lg:max-w-xl object-contain"
            />
          </motion.div>
        </div>

        {/* Right Side Content */}
        <div className="hidden lg:block absolute top-1/4 right-20 max-w-xs">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-2">
              <span className="text-muted-foreground">©</span>
              <p className="text-body text-sm">
                We Build Brands, websites and digital experience with{" "}
                <span className="text-foreground">intention</span>, clarity and care
              </p>
            </div>
            <div className="h-px bg-border" />
            <div className="flex items-center justify-between">
              <a href="#contact" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
                Contact Us
              </a>
              <div className="flex gap-3">
                {["FB", "IG", "DR", "BE"].map((icon) => (
                  <span key={icon} className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-xs text-muted-foreground hover:text-foreground hover:border-foreground transition-all cursor-pointer">
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a 
          href="#services"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </motion.div>

      {/* Featured Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="hidden lg:block absolute bottom-24 right-20"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="text-label">Featured</span>
            <span className="text-muted-foreground text-sm">(02)</span>
          </div>
          <div className="w-48 h-32 rounded-lg overflow-hidden border border-border">
            <img
              src={heroChrome}
              alt="Featured Project"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
