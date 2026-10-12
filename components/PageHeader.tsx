import { ThemeToggle } from "@/components/ThemeToggle";
import { portfolio } from "@/config/portfolio";

export function PageHeader() {
  const { name } = portfolio;

  return (
    <header className="flex items-start justify-between pt-10 pb-4">
      <h1 className="text-3xl font-bold text-black underline underline-offset-4 decoration-[#aaa] dark:text-white dark:decoration-[#444]">
        Hi, I&apos;m {name}
      </h1>
      <div className="mt-0.5">
        <ThemeToggle />
      </div>
    </header>
  );
}
