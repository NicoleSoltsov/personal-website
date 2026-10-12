"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronsDown, ChevronsUp } from "lucide-react";
import { getTechIcon, getIconColor } from "@/lib/tech-icons";
import { portfolio } from "@/config/portfolio";

function TechBadge({ name }: { name: string }) {
  const icon = getTechIcon(name);
  const color = icon ? getIconColor(icon) : undefined;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e4e4e7] bg-[#f5f5f5] px-2.5 py-1 text-[11px] font-medium text-[#555] dark:border-[#2a2a2a] dark:bg-[#0f0f0f] dark:text-[#a1a1aa]">
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

export function Experience() {
  const { experience } = portfolio;
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const detailRoleKeys = experience.flatMap((company, ci) =>
    company.roles.flatMap((role, ri) =>
      (role.bullets?.length ?? 0) > 0 || (role.tech?.length ?? 0) > 0
        ? [`${ci}-${ri}`]
        : [],
    ),
  );
  const allExpanded =
    detailRoleKeys.length > 0 && detailRoleKeys.every((key) => expanded[key]);
  const ToggleAllIcon = allExpanded ? ChevronsUp : ChevronsDown;

  const toggle = (ci: number, ri: number) => {
    const key = `${ci}-${ri}`;
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleAll = () => {
    if (allExpanded) {
      setExpanded({});
      return;
    }

    const next: Record<string, boolean> = {};
    detailRoleKeys.forEach((key) => {
      next[key] = true;
    });
    setExpanded(next);
  };

  return (
    <section className="border-t border-[#e4e4e7] py-10 dark:border-[#1e1e1e]">
      <div className="mb-8 flex items-center gap-4">
        <h2 className="whitespace-nowrap text-xl font-bold text-black dark:text-white">
          Story So Far
        </h2>
        <div className="h-px flex-1 bg-[#e4e4e7] dark:bg-[#1e1e1e]" />
        <button
          type="button"
          aria-pressed={allExpanded}
          onClick={toggleAll}
          className="flex cursor-pointer items-center gap-1 whitespace-nowrap text-sm text-[#888] transition-colors hover:text-black dark:hover:text-white"
        >
          {allExpanded ? "Collapse All" : "Expand All"}
          <ToggleAllIcon className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>

      <div className="space-y-8">
        {experience.map((company, ci) => (
          <div key={ci}>
            {/* Company header */}
            <div className="mb-3 flex items-center gap-3">
              {company.photo ? (
                <Image
                  src={company.photo}
                  alt={company.company}
                  width={48}
                  height={48}
                  className="h-12 w-12 shrink-0 rounded-xl object-cover"
                />
              ) : (
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#d4d4d8] bg-[#f0f0f0] text-base font-semibold text-[#555] dark:border-[#27272a] dark:bg-[#1a1a1a] dark:text-[#888]">
                  {company.company[0].toUpperCase()}
                </div>
              )}
              <div className="flex items-center gap-2">
                <span className="font-semibold text-black dark:text-white">
                  {company.company}
                </span>
                {company.isCurrent && (
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#666] dark:bg-[#555]" />
                )}
              </div>
            </div>

            {/* Roles */}
            <div className="ml-6">
              {company.roles.map((role, ri) => {
                const isLast = ri === company.roles.length - 1;
                const hasDetails =
                  (role.bullets?.length ?? 0) > 0 ||
                  (role.tech?.length ?? 0) > 0;
                const open = !!expanded[`${ci}-${ri}`];

                return (
                  <div key={ri} className="relative pb-5 last:pb-0">
                    {/* Vertical connector — absolute on role div so it covers pb-5 gap */}
                    {isLast ? (
                      <div className="absolute left-0 top-0 h-5 w-px bg-[#d4d4d8] dark:bg-[#2a2a2a]" />
                    ) : (
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#d4d4d8] dark:bg-[#2a2a2a]" />
                    )}
                    {/* Horizontal branch */}
                    <div className="absolute left-0 top-5 h-px w-6 bg-[#d4d4d8] dark:bg-[#2a2a2a]" />

                    {/* Role content */}
                    <div className="pl-8">
                      <button
                        type="button"
                        className={`w-full rounded-lg px-3 py-2.5 text-left transition-colors duration-150 hover:bg-[#f0f0f0] dark:hover:bg-[#1a1a1a] ${
                          hasDetails ? "cursor-pointer" : "cursor-default"
                        }`}
                        onClick={() => hasDetails && toggle(ci, ri)}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="font-semibold text-black dark:text-white">
                              {role.title}
                            </p>
                            <p className="mt-0.5 text-sm text-[#555] dark:text-[#888]">
                              {role.startDate} – {role.endDate} · {role.location} · {role.type}
                            </p>
                          </div>
                          {hasDetails && (
                            <ChevronDown
                              className={`mt-0.5 h-4 w-4 shrink-0 text-[#888] transition-transform duration-200 ${
                                open ? "rotate-180" : "rotate-0"
                              }`}
                            />
                          )}
                        </div>
                      </button>

                      {hasDetails && (
                        <div
                          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                        >
                          <div
                            className={`overflow-hidden transition-opacity duration-200 ${
                              open ? "opacity-100" : "opacity-0"
                            }`}
                          >
                            <div className="px-3 pb-2 pt-1">
                              {role.bullets && role.bullets.length > 0 && (
                                <ul className="mb-4 space-y-2">
                                  {role.bullets.map((bullet, bi) => (
                                    <li
                                      key={bi}
                                      className="flex gap-2 text-sm text-[#555] dark:text-[#888]"
                                    >
                                      <span className="mt-0.5 shrink-0">•</span>
                                      <span>{bullet}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                              {role.tech && role.tech.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                  {role.tech.map((t) => (
                                    <TechBadge key={t} name={t} />
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
