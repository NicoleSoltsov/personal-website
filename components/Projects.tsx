import { ArrowUpRight } from "lucide-react";
import { getTechIcon, getIconColor } from "@/lib/tech-icons";
import { portfolio } from "@/config/portfolio";

function TechBadge({ name }: { name: string }) {
  const icon = getTechIcon(name);
  const color = icon ? getIconColor(icon) : undefined;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e4e4e7] bg-[#f5f5f5] px-2.5 py-1 text-[11px] font-medium text-[#555] dark:border-[#1e1e1e] dark:bg-[#0f0f0f] dark:text-[#a1a1aa]">
      {icon && (
        <svg
          viewBox="0 0 24 24"
          className="h-2.5 w-2.5 flex-shrink-0"
          style={{ fill: color }}
          aria-hidden="true"
        >
          <path d={icon.path} />
        </svg>
      )}
      {name}
    </span>
  );
}

export function Projects() {
  const { projects } = portfolio;

  return (
    <section id="projects" className="border-t border-[#e4e4e7] py-10 dark:border-[#1e1e1e]">
      <div>
        {projects.map((project, i) => (
          <div key={i}>
            <div className="py-8">
              <h2 className="mb-2 text-xl font-semibold tracking-tight text-black dark:text-white">
                {project.title}
              </h2>
              <p className="mb-5 text-sm leading-relaxed text-[#555] dark:text-[#888]">
                &ldquo;{project.tagline}&rdquo;
              </p>
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <TechBadge key={tag} name={tag} />
                ))}
              </div>
              {(project.liveUrl || project.githubUrl) && (
                <div className="flex items-center gap-2.5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-black px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                    >
                      Live
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[#d4d4d8] px-3.5 py-1.5 text-xs font-medium text-[#555] transition-colors hover:border-[#888] hover:text-black dark:border-[#27272a] dark:text-[#a1a1aa] dark:hover:border-[#444] dark:hover:text-white"
                    >
                      GitHub
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              )}
            </div>
            {i < projects.length - 1 && (
              <div className="border-t border-[#e4e4e7] dark:border-[#1e1e1e]" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
