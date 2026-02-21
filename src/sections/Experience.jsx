const experiences = [
  {
    period: "2024 - Present",
    role: "Frontend Engineer",
    company: "Self-Employed",
    description:
      "Leading Frontend architechure for a suite of web applications",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    current: true,
  },

  {
    period: "2020 - 2022 ",
    role: "Frontend Engineer",
    company: "Digital Solutions",
    description:
      "Built and maintained multiple Javascript applications for enterprise client",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    current: false,
  },

  {
    period: "2019 - 2020",
    role: "Junior Developer",
    company: "StartUp Labs",
    description: "Contributed to the development of Church Management System",
    technologies: ["React", "TypeScript", "CSS"],
    current: false,
  },

  {
    period: "2018 - 2019",
    role: "Freelancer Developer",
    company: "Self-Employed",
    description:
      "Delivered custom web solutions for small businesses and individuals",
    technologies: ["JavaScript", "WordPress", "MySQL"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y1/2"></div>

      <div className="cointainer mx-auto px-6 relative z-10">
        {/* Section Header*/}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-face-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that
            <span className="font-serif italic font-normal text-white">
              {" "}
              stands out.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            An overview of my career development, tracing my rise from early
            curiosity to leading frontend engineering and product delivery at
            scale.
          </p>
        </div>
        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experince Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0"></div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${idx
                    % 2 === 0 ? "md:pr-16 md:text-right"
                    : "md:col-start-2 md:pl-16"
                  }`}
                
                >
                  <div
                    className={"glass bg-muted-foreground/8 p-6 rounded-2xl border border-primary/30 hover:border-primary/70 transition-all duration-500"}  
                  >
                    <div >
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                      <div
                        className={`flex flex-wrap gap-2 mt-4 ${
                          idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                      
                      >
                        {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                         className="px-3 py-1 bg-surface text-sm rounded-full text-muted-foreground"
                        >
                          {tech}</>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
