
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "GITHUB_TOKEN is missing" },
      { status: 500 }
    );
  }

  const query = `
    query {
      user(login: "NicoleSoltsov") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      cache: "no-store",
    });

    const result = await response.json();

    if (!response.ok || result.errors) {
      console.error("GitHub API error:", result.errors ?? response.status);
      return NextResponse.json(
        { error: "GitHub API request failed" },
        { status: 502 }
      );
    }

    const calendar =
      result.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar) {
      return NextResponse.json(
        { error: "Contribution data unavailable" },
        { status: 502 }
      );
    }

    const levels = [
      "NONE",
      "FIRST_QUARTILE",
      "SECOND_QUARTILE",
      "THIRD_QUARTILE",
      "FOURTH_QUARTILE",
    ];

    const contributions = calendar.weeks.flatMap(
      (week: {
        contributionDays: {
          date: string;
          contributionCount: number;
          contributionLevel: string;
        }[];
      }) =>
        week.contributionDays.map((day) => ({
          date: day.date,
          count: day.contributionCount,
          level: Math.max(0, levels.indexOf(day.contributionLevel)),
        }))
    );

    return NextResponse.json({
      total: calendar.totalContributions,
      contributions,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to contact GitHub" },
      { status: 502 }
    );
  }
}
