import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/config/portfolio";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: `${portfolio.name} — Portfolio`,
  description: portfolio.bio[0]
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\[\[(.*?)\]\]/g, "$1"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="en"
  className={figtree.variable}
  suppressHydrationWarning
>
      <head>
        {/* Runs before first paint — removes dark class if user previously chose light */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.remove('dark')}}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-black antialiased dark:bg-[#111010] dark:text-white">
        {children}
      </body>
    </html>
  );
}
