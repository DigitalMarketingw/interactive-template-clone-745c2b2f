import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";

const images = [project1, project2, project3, project1, project2, project3];

const Footer = () => {
  return (
    <footer className="border-t border-border">
      {/* Image Gallery Marquee */}
      <div className="py-12 overflow-hidden">
        <div className="flex animate-marquee">
          {[...images, ...images].map((img, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-80 h-60 mx-2 rounded-lg overflow-hidden"
            >
              <img
                src={img}
                alt={`Gallery ${idx}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer Content */}
      <div className="section-padding pt-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Logo */}
            <a href="#" className="font-display text-3xl italic text-foreground">
              agenciy
            </a>

            {/* Navigation */}
            <nav className="flex flex-wrap gap-6">
              {["Services", "About", "Projects", "Blog", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex gap-4">
              {["FB", "IG", "DR", "BE"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Agenciy. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
