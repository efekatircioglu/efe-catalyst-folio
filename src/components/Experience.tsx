import { Award, BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";

import { experienceData } from "@/lib/experienceData";

const categoryStyles = {
  Engineering: "bg-blue-accent/20 text-blue-accent border-blue-accent/30",
  Certification: "bg-blue-accent/15 text-blue-accent border-blue-accent/30",
} as const;

const Experience = () => {
  const orderedExperience = [...experienceData].sort(
    (first, second) => second.sortOrder - first.sortOrder,
  );

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience across software engineering, client delivery, and full-stack
              web development training.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {orderedExperience.map((experience) => (
              <article
                key={experience.id}
                className="bg-card rounded-lg border border-border shadow-medium p-6 transition-all duration-300 hover:shadow-large hover:-translate-y-1"
              >
                <div className="flex flex-col gap-5 h-full">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-card-foreground">
                        {experience.title}
                      </h3>
                      <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                        <BriefcaseBusiness className="w-4 h-4" />
                        <span className="text-sm">{experience.organization}</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:items-end">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4" />
                        <span>{experience.dateRange}</span>
                      </div>
                    </div>
                  </div>

                  {experience.category === "Certification" && (
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
                      <Award className="w-3.5 h-3.5" />
                      <span
                        className={`rounded-full border px-2 py-1 ${categoryStyles[experience.category]}`}
                      >
                        {experience.category}
                      </span>
                    </div>
                  )}

                  <ul className="space-y-3 text-muted-foreground leading-7 list-disc pl-5">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
