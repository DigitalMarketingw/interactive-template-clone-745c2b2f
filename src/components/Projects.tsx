import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";

const projects = [
  {
    title: "The News",
    description: "Landing page design for news platform",
    image: project1,
    tags: ["Web & App Design", "Responsive Frontends"],
    awards: [
      { logo: "AW", title: "Honor Mentions", date: "June 2024" },
      { logo: "UI", title: "UI/UX Featured", date: "August 2024" },
    ],
  },
  {
    title: "Virtual Reality Encounter",
    description: "Futuristic scene with a sleek VR headset",
    image: project2,
    tags: ["Brand Identity", "Web Development"],
    awards: [
      { logo: "AW", title: "Honor Mentions", date: "May 2024" },
      { logo: "UI", title: "UI/UX Featured", date: "July 2024" },
    ],
  },
  {
    title: "Theo Agency Re-branding",
    description: "New brand identity for UK Theo Agency",
    image: project3,
    tags: ["Brand Identity", "SEO"],
    awards: [
      { logo: "AW", title: "Honor Mentions", date: "March 2024" },
      { logo: "UI", title: "UI/UX Featured", date: "August 2024" },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card-image"
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-between">
                  <div className="space-y-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Awards */}
                    <div className="flex flex-wrap gap-6">
                      {project.awards.map((award) => (
                        <div key={award.title} className="flex items-center gap-3">
                          <span className="w-10 h-6 bg-secondary rounded flex items-center justify-center text-xs font-bold text-foreground">
                            {award.logo}
                          </span>
                          <div>
                            <p className="text-xs text-foreground">{award.title}</p>
                            <p className="text-xs text-muted-foreground">{award.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <p className="text-muted-foreground text-sm mb-2">{project.description}</p>
                    <h3 className="text-2xl font-display font-medium text-foreground">{project.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#" className="btn-outline">
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
