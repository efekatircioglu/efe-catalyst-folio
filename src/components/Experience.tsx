import { experienceData } from "@/lib/experienceData";

const Experience = () => {
  const orderedExperience = [...experienceData].sort(
    (first, second) => second.sortOrder - first.sortOrder,
  );

  return (
    <section id="experience" className="py-20 md:py-28 section-rule">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3 font-medium">
              Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Experience
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Banking technology at ICBC Standard Bank — CI/CD automation, legacy migrations,
              documentation pipelines, and AI-assisted engineering workflows.
            </p>
          </div>

          <div className="space-y-0">
            {orderedExperience.map((experience, index) => (
              <article
                key={experience.id}
                className="grid gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] py-10 border-t border-border/80 first:border-t-0 animate-in fade-in slide-in-from-bottom-2 duration-500"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <header>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {experience.organization}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {experience.location}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {experience.dateRange}
                  </p>
                </header>

                <ul className="space-y-4 text-muted-foreground leading-7">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="relative pl-5">
                      <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-primary/80" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
