import { portfolio } from "@/config/portfolio";

export function Footer() {
  const { name } = portfolio;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e4e4e7] py-8 dark:border-[#1e1e1e]">
      <div className="flex items-center justify-between">
        <p className="text-xs text-[#aaa] dark:text-[#555]">
          &copy; {year} {name}
        </p>
        <div className="flex items-center gap-4">
          <a href="/rss.xml" className="text-xs text-[#aaa] transition-colors hover:text-[#555] dark:text-[#555] dark:hover:text-[#888]">
            RSS
          </a>
          <a href="/sitemap.xml" className="text-xs text-[#aaa] transition-colors hover:text-[#555] dark:text-[#555] dark:hover:text-[#888]">
            Sitemap
          </a>
        </div>
      </div>
      <p className="mt-4 text-xs text-[#aaa] dark:text-[#555]">
        Designed by{" "}
        <a
          href="https://bseatucla.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-[#555] dark:hover:text-[#888]"
        >
          Bruin Software Engineers
        </a>
		.&nbsp;Inspired by Mohit Singh
      </p>
    </footer>
  );
}
