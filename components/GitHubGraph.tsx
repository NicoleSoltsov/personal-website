
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ActivityCalendar = dynamic(
  () => import("react-activity-calendar").then(
    (mod) => mod.ActivityCalendar
  ),
  { ssr: false }
);

type Contribution = {
  date: string;
  count: number;
  level: number;
};

const calendarTheme = {
  light: ["#ebebeb", "#c8c8c8", "#a0a0a0", "#787878", "#505050"],
  dark: ["#111111", "#1f1f1f", "#383838", "#5a5a5a", "#888888"],
};

export function GitHubGraph() {
  const [data, setData] = useState<Contribution[]>([]);
  const [total, setTotal] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      setDark(document.documentElement.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let active = true;

    fetch("/api/github")
      .then(async (res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((result) => {
        if (!active) return;
        setData(result.contributions);
        setTotal(result.total);
      })
      .catch(() => {
        if (active) setError(true);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return <p className="text-sm text-gray-500">
      Loading GitHub contributions...
    </p>;
  }

  if (error || data.length === 0) {
    return <p className="text-sm text-gray-500">
      Unable to load GitHub contributions.
    </p>;
  }

  return (
    <div className="overflow-x-auto">
      <ActivityCalendar
        data={data}
        theme={calendarTheme}
        colorScheme={dark ? "dark" : "light"}
        blockSize={12}
        blockMargin={3}
        fontSize={11}
        showTotalCount={false}
        style={{
          color: dark ? "#888888" : "#555555",
          fontFamily: "inherit",
        }}
      />
      <p className="mt-2 text-xs text-gray-500">
        {total} contributions in the last year
      </p>
    </div>
  );
}
