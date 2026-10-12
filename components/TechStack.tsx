"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { portfolio } from "@/config/portfolio";
import { getTechIcon, getIconColor } from "@/lib/tech-icons";

function TechChip({ name }: { name: string }) {
  const icon = getTechIcon(name);
  const color = icon ? getIconColor(icon) : undefined;

  return (
    <span className="mx-0.5 inline-flex items-center gap-1.5 rounded-md border border-[#e4e4e7] bg-[#f5f5f5] px-2 py-0.5 align-middle text-xs font-medium text-black dark:border-[#1e1e1e] dark:bg-[#0f0f0f] dark:text-white">
      {icon && (
        <svg
          viewBox="0 0 24 24"
          className="h-3 w-3 flex-shrink-0"
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

function ExpandedChip({ name }: { name: string }) {
  const icon = getTechIcon(name);
  const color = icon ? getIconColor(icon) : undefined;

  return (
    <span className="inline-flex items-center gap-2.5 rounded-xl border border-[#e4e4e7] bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:border-[#bbb] dark:border-[#2a2a2a] dark:bg-[#111] dark:text-white dark:hover:border-[#444]">
      {icon && (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 flex-shrink-0"
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

function parseTechProse(prose: string) {
  const parts = prose.split(/\{\{(.*?)\}\}/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <TechChip key={i} name={part} />
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export function TechStack() {
  const [showAll, setShowAll] = useState(false);
  const { techStackProse, techStackCategories } = portfolio;

  return (
    <section className="border-t border-[#e4e4e7] py-10 dark:border-[#1e1e1e]">
      <h2 className="mb-5 text-xl font-bold text-black dark:text-white">
        Tools I use? See below
      </h2>

      <p className="text-base leading-9 text-[#555] dark:text-[#888]">
        {parseTechProse(techStackProse)}
      </p>

      {techStackCategories && techStackCategories.length > 0 && (
        <div className="mt-5">
          <div
            className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
              showAll ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div
              className={`overflow-hidden transition-opacity duration-200 ${
                showAll ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="mb-6 space-y-6 pt-1">
                {techStackCategories.map((group) => (
                  <div key={group.category}>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#888] dark:text-[#555]">
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.tools.map((tool) => (
                        <ExpandedChip key={tool} name={tool} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-1.5 rounded-lg border border-[#d4d4d8] px-4 py-2 text-sm text-[#555] transition-colors hover:border-[#888] hover:text-black dark:border-[#27272a] dark:text-[#a1a1aa] dark:hover:border-[#444] dark:hover:text-white"
          >
            {showAll ? "Show Less" : "Show All"}
            <ChevronRight
              className={`h-4 w-4 transition-transform duration-200 ${showAll ? "rotate-90" : ""}`}
            />
          </button>
        </div>
      )}
    </section>
  );
}
