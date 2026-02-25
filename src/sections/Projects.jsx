import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "Sneakers E-commerce Website",
    description:
      "A modern responsive e-commerce website that showcases a clean product page design with an interactive image gallery, shopping cart functionality and mobile-first responsive design.",
    image: "/projects/project1.png",
    tags: ["React", "Typescript", "Tailwind CSS"],
    link: "https://sneakers-e-commerce-livid.vercel.app/",
    github: "https://github.com/inno-stack/Sneakers-E-commerce",
  },

  {
    title: "Spot App Project",
    description: "This project is a collaborative web page platform",
    image: "/projects/project2.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://group-6-insta-spot-assignment.vercel.app/",
    github: "https://github.com/A4adella/Group-6-insta-spot-assignment",
  },

  {
    title: "Payment Card App",
    description: "A comprehensive Payment Card platform",
    image: "/projects/project3.png",
    tags: ["React", "Typescript", "Tailwind CSS"],
    link: "https://my-card-five.vercel.app/",
    github: "https://github.com/inno-stack/MY-CARD",
  },

  {
    title: "Modern Sign-Up validation",
    description: "A comprehensive modern Sign-Up design with validation",
    image: "/projects/project4.png",
    tags: ["React", "Typescript", "Tailwind CSS"],
    link: "https://modern-signup-three.vercel.app/index.html",
    github: "https://github.com/inno-stack/modern-signup",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="cointainer mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-face-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              deliver real results.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A collection of my latest projects, from advanced web applications
            to practical solutions addressing real problems.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${idx + 1 + 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 "
                />
                <div className="relative group inset-0 bg-gradient-to-t from via-card/50 to-transparent opacity-60" />
               
                {/* Overlay Link */}
                <div
                  className="
    absolute inset-0 
    flex items-center justify-center gap-4
    opacity-100 md:opacity-0 
    md:group-hover:opacity-100
    transition-opacity duration-300
  "
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
      p-3 rounded-full 
      bg-primary/50 backdrop-blur
      border border-border
      md:glass md:hover:bg-primary md:hover:text-primary-foreground
      transition-all
    "
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
      p-3 rounded-full 
      bg-primary/50 backdrop-blur
      border border-border
      md:glass md:hover:bg-primary md:hover:text-primary-foreground
      transition-all 
    "
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex item-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-sm font-medium border border-border/50 text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/inno-stack?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton className="cursor-pointer">
              <span className="cursor-pointer">View All Projects</span>
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
