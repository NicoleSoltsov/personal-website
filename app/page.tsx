import { PageHeader } from "@/components/PageHeader";
import { Bio } from "@/components/Bio";
import { TechStack } from "@/components/TechStack";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 sm:px-10">
        <PageHeader />
        <Bio />
        <Projects />
        <Experience />
        <TechStack />
        <Footer />
      </div>
    </div>
  );
}
